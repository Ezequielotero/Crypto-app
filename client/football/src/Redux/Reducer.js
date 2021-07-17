const initialState = {
   all:[],
   genres:[],
   maped:[],
   detail:[],
   platforms:[],
   pages:[]
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
          maped:[],
         all:action.payload
        };

      }
      if (action.type === "RESET") {
        return {
          ...state,
         
         detail:[]
        };
      }
      if (action.type === "RESET_ALL") {
        return {
          ...state,
        all:[]
        };
      }
      if (action.type === "FILTERED") {
        return {
          ...state,
         maped:action.payload
        };
      }
      if (action.type === "DETAIL") {
        return {
          ...state,
         detail:action.payload
        };
      }
      if (action.type === "PLATFORMS") {
        return {
          ...state,
         platforms:action.payload
        };
      }
      
      else return state;
}
export default rootReducer;