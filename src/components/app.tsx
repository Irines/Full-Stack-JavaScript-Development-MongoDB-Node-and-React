import { useState, useMemo, useEffect } from "react";
import ContestList from "./contest-list";
import { PageContext } from "../context/page-context";
import Contest from "./contest";

const App = ({contestsData}) => {
  let [page, setPage] = useState({name: "contestList"});
  let [contestId, setContestId] = useState<string | undefined>("");
  const value = useMemo(
    () => ({ page, setPage }), 
    [page.name]
  );

  useEffect(() => {
    window.onpopstate = (event) => {
      console.log(event)
      const newPage = event.state?.contestId ? "contest" : "contestList";
      setPage(newPage);
      setContestId(event.state?.contestId);
    }
  }, [])

  const pageContent = () => {
    console.log("page changed ", page)
    switch (page.name) {
      case "contestList":
        return <ContestList initialContests={contestsData}/>
        break;
      case "contest":
        return <Contest id={page.id}/>
        break;
      default:
        return <ContestList initialContests={contestsData}/>
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
