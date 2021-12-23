import Input from "../UI/Input/Input";
import React, { useState } from "react";

const Search = () => {
  const [name, setName] = useState("");
  console.log(name);
  return (
    <div>
      <Input
        value={name}
        name="name"
        onChange={(e) => setName(e.target.value)}
        placeHolder="Name"
      />
    </div>
  );
};

export default Search;
