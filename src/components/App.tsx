import { useState } from "react";

import ContestList from "./ContestList";
import Header from "./Header";

// page: contestList, contest

const App = ({ initialData }) => {
  const [page, setPage] = useState("contestList");

  const navigateToContest = () => {
    setPage("contest");
  };

  const pageContent = () => {
    switch (page) {
      case "contestList":
        return (
          <ContestList
            initialContests={initialData.contests}
            onContestClick={navigateToContest}
          />
        );
      case "contest":
        return "...";
    }
  };

  return (
    <div className="container">
      <Header message="Naming Contests" />

      {pageContent()}
    </div>
  );
};

export default App;
