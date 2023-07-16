import ReactDOMServer from "react-dom/server";

import { fetchContest, fetchContestList } from "../api-client";
import App from "../components/App";
// root.render(<App initialData={{ contests: [] }} />);

const serverRender = async (req) => {
  // req.params.contestId
  const { contestId } = req.params;
  const initialData = contestId
    ? {
        currentContest: await fetchContest(contestId),
      }
    : { contests: await fetchContestList() };

  const initialMarkup = ReactDOMServer.renderToString(
    <App initialData={initialData} />,
  );
  return { initialMarkup, initialData };
};

export default serverRender;
