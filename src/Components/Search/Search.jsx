import Input from "../UI/Input/Input";
import React, { useState } from "react";
import styles from "./Search.module.css";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  const [term, setTerm] = useState("");
  console.log(term);
  return (
    <div className={styles.SearchContainer}>
      <div className={styles.SearchIcon}>
        <AiOutlineSearch />
      </div>
      <Input
        value={term}
        name="Search"
        onChange={(e) => setTerm(e.target.value)}
        placeHolder="Search"
      />
    </div>
  );
};

export default Search;
