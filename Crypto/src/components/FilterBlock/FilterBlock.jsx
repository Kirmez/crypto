import React, { useEffect, useState } from "react";
import "./styles.css";

const FilterBLock = ({ coins, setCoins }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    const filteredCoins = coins.filter((coin) => {
      return coin.name.toLowerCase().includes(value.toLowerCase());
    });

    setCoins(filteredCoins);
  }, [value]);

  return (
    <div className="filter-block">
      <input
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
        className="input"
        type="text"
        placeholder="bitcoin"
      />
    </div>
  );
};

export default React.memo(FilterBLock);
