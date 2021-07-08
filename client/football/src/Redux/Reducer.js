const initialState = {
   all:[],
   genres:[],
   maped:[]
}
const rootReducer = (state = initialState, action) => {
    if (action.type === "GET_GAMES") {
        return {
          ...state,
         all:action.payload
        };
      }
      if (action.type === "GET_GENRES") {
        return {
          ...state,
         genres:action.payload
        };
      }
      if (action.type === "SEARCH") {
        
        return {
          ...state,
         all:action.payload
        };

      }
      if (action.type === "RESET") {
        return {
          ...state,
         all:[]
        };
      }
      else return state;
}
export default rootReducer;