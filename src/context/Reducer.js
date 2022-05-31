export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case "updateUser":
      return {
        ...state,
        user: payload,
      };
    case "updateNumber":
      return {
        ...state,
        number: payload,
      };
    default:
      return state;
  }
};