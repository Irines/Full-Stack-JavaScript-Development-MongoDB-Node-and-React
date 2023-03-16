import ContestList from "./contest-list";
import Header from "./header";

const App = ({contestsData}) => {
  return (
    <div className="container">
      <Header message="Naming Contests" />
      <ContestList contests={contestsData.contests}/>
    </div>
  );
};

export default App;
