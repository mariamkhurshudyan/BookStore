import Input from "../UI/Input/Input";
import React, { useState } from "react";

const Search = () => {
  const [term, setTerm] = useState("");
  console.log(term);
  return (
    <div>
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
