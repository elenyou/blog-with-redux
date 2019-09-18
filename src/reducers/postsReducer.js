//Reducer rules:
//- can not return value of undefined
//- produces 'state' or data to be used inside of app using
//  only previous state and the action
//- must not return reach 'out of itself' to decide what value to return
//- must not mutate its input 'state' argument

//Reducers maitains an array of all fetched posts
export default (state = [], action) => {
  // if (action.type === 'FETCH_POSTS') {
  //     return action.payload;
  // }
  // return state;

  //or
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return state;
  }
};
