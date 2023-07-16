import { useEffect, useState } from "react";
import { fetchContest } from "../api-client";
import Header from "./Header";

const Contest = ({ id }) => {
  const [contest, setContest] = useState<{
    contestName: string;
    description: string;
  }>({ contestName: "Naming Contests", description: "" });

  useEffect(() => {
    fetchContest(id).then((contest) => {
      setContest(contest);
    });
  }, [id]);

  return (
    <>
      <Header message={contest.contestName} />
      <div className="contest">
        <div className="title">Contest Description</div>
        <div className="description">{contest.description}</div>
      </div>
    </>
  );
};

export default Contest;
