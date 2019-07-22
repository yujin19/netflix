import axios from "axios";

const url = "https://5d11c0f984e9060014576512.mockapi.io/NetflixData";
export function getDataStart() {
  return {
    type: "FETCH_DATA_START"
  };
}
export function getDataSuccess(res) {
  return {
    type: "FETCH_DATA_SUCCESS",
    data: res.data
  };
}

export function getDataFail() {
  return {
    type: "FETCH_DATA_FAIL"
  };
}

export function removeItemFromList(id) {
  return {
    type: "REMOVE_ITEM_FROM_LIST",
    id: id
  };
}

export function addItemToList(id) {
  return {
    type: "ADD_ITEM_TO_LIST",
    id: id
  };
}

export function getData() {
  return (dispatch, store) => {
    dispatch(getDataStart());
    axios
      .get(url)
      .then(res => {
        dispatch(getDataSuccess(res));
      })
      .catch(err => {
        dispatch(getDataFail(err));
      });
  };
}
