const initState = {
  loading: false,
  list: [],
  recommendations: [],
  err: null
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_DATA_SUCCESS":
      return {
        list: action.data[0].mylist,
        recommendations: action.data[0].recommendations
      };
    case "REMOVE_ITEM_FROM_LIST":
      return {
        list: [
          ...state.list.slice(0, action.id),
          ...state.list.slice(action.id + 1)
        ],
        recommendations: [...state.recommendations, state.list[action.id]]
      };
    case "ADD_ITEM_TO_LIST":
      return {
        list: [...state.list, state.recommendations[action.id]],
        recommendations: [
          ...state.recommendations.slice(0, action.id),
          ...state.recommendations.slice(action.id + 1)
        ]
      };
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
