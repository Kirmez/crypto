import styles from "./styles.module.css";
import Card from "../../components/Card/Card";
import FilterBLock from "../../components/FilterBlock/FilterBlock";
import CoinsList from "../../components/CoinsList/CoinsList";

const Main = ({ balance, setBalance, coins }) => {
  return (
    <main className={styles.main}>
      <Card balance={balance} setBalance={setBalance} />
      <FilterBLock />
      {coins.length > 0 ? <CoinsList coins={coins} /> : <div>Loading...</div>}
    </main>
  );
};

export default Main;
