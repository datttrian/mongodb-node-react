import { useEffect, useState } from "react";

import { fetchContestList } from "../api-client";

import ContestPreview from "./ContestPreview";
import Header from "./Header";

const ContestList = ({ initialContests, onContestClick }) => {
  const [contests, setContests] = useState(initialContests);

  useEffect(() => {
    // fetchContestList().then((contests) => {
    //   setContests(contests);
    // });
  }, []);

  return (
    <>
      <Header message="Naming Contests" />
      <div className="contest-list">
        {contests.map((contest) => {
          return (
            <ContestPreview
              key={contest.id}
              contest={contest}
              onClick={onContestClick}
            />
          );
        })}
      </div>
    </>
  );
};

export default ContestList;
