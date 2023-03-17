import Header from "./header";
import { useState, useMemo } from "react";
import ContestList from "./contest-list";
import { PageContext } from "../context/page-context";

// page: contestList, contest

const App = ({contestsData}) => {
  let [page, setPage] = useState("contestList")
  const value = useMemo(
    () => ({ page, setPage }), 
    [page]
  );

  const pageContent = () => {
    switch (page) {
      case "contestList":
        return <ContestList initialContests={contestsData}/>
        break;
      case "contest":
        return <h2>Contest Page</h2>
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
