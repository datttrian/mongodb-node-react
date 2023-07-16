import ContestList from "./ContestList";
import Header from "./Header";

const App = ({ initialData }) => {
  return (
    <div className="container">
      <Header message="Naming Contests" />

      <ContestList initialContests={initialData.contests} />
    </div>
  );
};

export default App;
