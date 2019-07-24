import { produce } from "immer";
const initialState = {
  loading: false,
  list: [],
  recommendations: [],
  err: null
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_SUCCESS":
      return {
        list: action.data[0].mylist,
        recommendations: action.data[0].recommendations
      };
    case "REMOVE_ITEM_FROM_LIST":
      return produce(state, draft => {
        draft.recommendations.push(draft.list[action.id]);
        draft.list.splice(action.id, 1);
      });
    case "ADD_ITEM_TO_LIST":
      return produce(state, draft => {
        draft.list.push(draft.recommendations[action.id]);
        draft.recommendations.splice(action.id, 1);
      });
    case "FETCH_DATA_START":
      return {
        loading: true
      };
    case "FETCH_DATA_FAIL":
      return {
        loading: false,
        err: "cannot get data"
      };
    default:
      return state;
  }
};

export default reducer;

//export default useImmerReducer(reducer, []);
