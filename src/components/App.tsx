import ContestList from "./ContestList";
import Header from "./Header";

const App = ({ initialData }) => {
  console.log(initialData);
  return (
    <div className="container">
      <Header message="Naming Contests" />

      <ContestList contests={initialData.contests} />
    </div>
  );
};

export default App;
