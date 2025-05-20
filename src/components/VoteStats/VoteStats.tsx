import styles from "./VoteStats.module.css";

interface Stats {
    good: number;
    neutral: number;
    bad: number;
}


export default function VoteStats({good,neutral,bad}: Stats) {
  return (
    <div className={styles.container}>
      <p className={styles.stat}>
        Good: <strong>{good}</strong>
      </p>
      <p className={styles.stat}>
        Neutral: <strong>{neutral}</strong>
      </p>
      <p className={styles.stat}>
        Bad: <strong>{bad}</strong>
      </p>
      <p className={styles.stat}>
        Total: <strong>{good+neutral+bad}</strong>
      </p>
      <p className={styles.stat}>
        Positive: <strong>{Math.round(100*good/(good+neutral+bad))}%</strong>
      </p>
    </div>
  );
}
