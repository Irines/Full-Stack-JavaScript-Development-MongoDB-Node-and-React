import Header from "./header";
import * as React from "react";
import ContestList from "./contest-list";

const App = ({contestsData}) => {

  return (
    <div className="container">
        <Header message="Naming Contests" />
        <ContestList initialContests={contestsData}/>
    </div>
  );
};

export default App;
