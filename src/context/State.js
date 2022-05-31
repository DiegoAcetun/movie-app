import { useReducer } from "react";
import Context from "./Context";
import Reducer from "./Reducer";
const State = (props) => {
  const initialState = {
    user: "user44",
    number: "number00",
  };
  const [state, dispatch] = useReducer(Reducer, initialState);

  const updateUser =  (user) => {
    // console.log("getUsers");
    dispatch({ type: "updateUser", payload: user });
  };
  
  const updataNumber =  (number) => {
    dispatch({ type: "updateNumber", payload: number });
    // console.log("getProfile");
  };

  return (
    <Context.Provider
      value={{
        user: state.user,
        number: state.number,
        updateUser,
        updataNumber,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;
