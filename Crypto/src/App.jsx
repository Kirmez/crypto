import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import { getCoins } from "./api/api";

function App() {
  const [balance, setBalance] = useState(50000);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCoins();
      setCoins(data.coins);
    };

    fetchData();
  }, []);

  console.log(coins);


  return (
    <>
      <Header />
      <Main coins={coins}  balance={balance} setBalance={setBalance} />
    </>
  );
}

export default App;