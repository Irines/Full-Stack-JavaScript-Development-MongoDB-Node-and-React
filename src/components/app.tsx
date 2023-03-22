import { useState, useMemo, useEffect } from "react";
import ContestList from "./contest-list";
import { PageContext } from "../context/page-context";
import Contest from "./contest";

const App = ({ initialData }) => {
  let [page, setPage] = useState(initialData.currentContest ? { name: "contest", id: initialData.currentContest?.id } : { name: "contestList" });
  let [contest, setContest] = useState<object | undefined>(initialData.currentContest);
  const value = useMemo(
    () => ({ page, setPage }),
    [page.name]
  );

  // popstate event works only if you add one or more history entry/entries 
  // and later the user clicks the back button in the browser.
  useEffect(() => {
    setContest({
      id: page?.id
    })
    window.onpopstate = (event) => {
      const newPage = event.state?.contestId ? "contest" : "contestList";
      setPage(newPage);
      // setContest({id: event.state?.contestId});
    }
  }, [])

  useEffect(() => {
    setContest({
      id: page?.id
    })
  }, [page])

  const pageContent = () => {
    console.log("page changed ", page);
    switch (page.name) {
      case "contestList":
        return <ContestList initialContests={initialData} />
        break;
      case "contest":
        return <Contest initialContest={contest} />
        break;
      default:
        return <ContestList initialContests={initialData} />
        break;
    }
  }

  return (
    <PageContext.Provider value={value}>
      <div className="container">
        {pageContent()}
      </div>
    </PageContext.Provider>
  );
};

export default App;
