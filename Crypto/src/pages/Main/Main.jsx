import styles from "./styles.module.css";
import { useMemo } from "react";
import Card from "../../components/Card/Card";
import FilterBLock from "../../components/FilterBlock/FilterBlock";
import CoinsList from "../../components/CoinsList/CoinsList";

const Main = ({ balance, setBalance, coins, filteredCoins, setCoins }) => {
  const filterExpensiveCoins = () => {
    console.log("func work");
    return filteredCoins.filter((coin) => coin.price > 100);
  };

  // const expensiveCoins = filterExpensiveCoins();

  const expensiveCoins = useMemo(() => filterExpensiveCoins(), [filteredCoins]);
  

  return (
    <main className={styles.main}>
      <Card balance={balance} setBalance={setBalance} />
      <FilterBLock setCoins={setCoins} coins={coins} />
      {coins.length > 0 ? (
        <CoinsList coins={expensiveCoins} />
      ) : (
        <div>Loading...</div>
      )}
    </main>
  );
};

export default Main;
