import { v4 as uuid } from "uuid";
export const bookReducer = (state, action) => {
  console.log("reduce");
  switch (action.type) {
    case "ADD_BOOK":
      return [
        ...state,
        {
          name: action.book.name,
          author: action.book.author,
          id: uuid(),
        },
      ];
    case "REMOVE_BOOK":
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};
