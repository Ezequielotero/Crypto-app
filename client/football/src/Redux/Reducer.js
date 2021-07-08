const initialState = {
   all:[]
}
const rootReducer = (state = initialState, action) => {
    if (action.type === "GET_GAMES") {
        return {
          ...state,
         all:action.payload
        };
      }
      else return state;
}
export default rootReducer;