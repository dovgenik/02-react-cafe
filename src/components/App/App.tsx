import { useState } from "react";
import css from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo.tsx";
import VoteOptions from "../VoteOptions/VoteOptions.tsx";
import VoteStats from "../VoteStats/VoteStats.tsx";
import Notification from "../Notification/Notification.tsx"
import type { Votes, VoteType } from "../../types/votes.ts";

export default function App() {
  const [votes, setVote] = useState<Votes>({ good: 0, neutral: 0, bad: 0 });
  //const [keyReset, setKeyVotes] = useState<boolean>(false);
  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;

  const handleVote = (key: keyof Votes) => {
    setVote({
      ...votes,
      [key]: votes[key] + 1,
    });
  };
  //

  const resetVotes = () => {
    //setKeyVotes(false);
    setVote({ good: 0, neutral: 0, bad: 0 });
  };

  return (    
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={(totalVotes > 0) } />
      
      { totalVotes> 0  ? (<VoteStats good={votes.good} neutral={votes.neutral} bad={votes.bad} totalVotes={totalVotes} positiveRate= {positiveRate} />) :  (<Notification/>) }
    </div>
  );
}
