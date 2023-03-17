import Header from "./header";
import { useState, useMemo } from "react";
import ContestList from "./contest-list";
import { PageContext } from "../context/page-context";
import Contest from "./contest";

// page: contestList, contest

const App = ({contestsData}) => {
  let [page, setPage] = useState({name: "contestList"})
  const value = useMemo(
    () => ({ page, setPage }), 
    [page.name]
  );

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
          <Header message="Naming Contests" />
          {pageContent()}
      </div>
    </PageContext.Provider>
  );
};

export default App;
