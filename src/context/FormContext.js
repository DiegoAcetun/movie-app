import React, { createContext, useState } from "react";

const Context = createContext();

const FormProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  // const [type, setType] = useState();
  // const [page, setPage] = useState(1);
  // const [bienvenida, setBienvenida] = useState(true);
  // const [response, setResponse] = useState();
  // const [movies, setMovies] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("change");
    setSearchValue(e.target.search.value);
  };

  const data = { searchValue, handleSubmit };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};
export { FormProvider };
export default Context;
