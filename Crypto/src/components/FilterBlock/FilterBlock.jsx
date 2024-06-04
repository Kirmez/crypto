import { useRef, useState } from "react";
import "./styles.css";

const FilterBLock = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);
  console.log(inputRef);

  return (
    <div className="filter-block">
      <input
        ref={inputRef}
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

export default FilterBLock;
