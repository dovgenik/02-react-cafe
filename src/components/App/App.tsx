import { useState } from "react";
import css from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo.tsx";
import VoteOptions from "../VoteOptions/VoteOptions.tsx";
import VoteStats from "../VoteStats/VoteStats.tsx";
import type { Votes, VoteType } from "../../types/votes.ts";

export default function App() {
  const [votes, setVote] = useState<Votes>({ good: 0, neutral: 0, bad: 0 });
  const [keyReset, onoffVotes] = useState<boolean>(false);

  const handleVote = (key: keyof Votes) => {
    setVote({
      ...votes,
      [key]: votes[key] + 1,
    });
  };
  //

  const resetVotes = () => {
    onoffVotes(!keyReset);
  };

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={true} />
      <VoteStats good={votes.good} neutral={votes.neutral} bad={votes.bad}/>
    </div>
  );
}
