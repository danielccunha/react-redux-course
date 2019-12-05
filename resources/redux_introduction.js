console.clear();

// People dropping off a form (Action Creators)
const createPolicy = (name, amount) => {
  return {
    // Action (a form in our analogy)
    type: "CREATE_POLICY",
    payload: { name, amount }
  };
};

const deletePolicy = name => {
  return {
    type: "DELETE_POLICY",
    payload: { name }
  };
};

const createClaim = (name, amountOfMoney) => {
  return {
    type: "CREATE_CLAIM",
    payload: { name, amountOfMoney }
  };
};

// Reducers (Departments!)
const claimHistory = (oldListOfClaims = [], action) => {
  if (action.type === "CREATE_CLAIM") {
    // We care about this action (Form!)
    return [...oldListOfClaims, action.payload];
  }

  // We don't care about this action (Form!)
  return oldListOfClaims;
};

const accounting = (bagOfMoney = 100.0, action) => {
  if (action.type === "CREATE_CLAIM") {
    // We care about this action (Form!)
    return bagOfMoney - action.payload.amountOfMoney;
  } else if (action.type === "CREATE_POLICY") {
    return bagOfMoney + action.payload.amountOfMoney;
  }

  // We don't care about this action (Form!)
  return bagOfMoney;
};

const policies = (listOfPolicies = [], action) => {
  if (action.type === "CREATE_POLICY") {
    // We care about this action (Form!)
    return [...listOfPolicies, action.payload];
  } else if (action.type === "DELETE_POLICY") {
    return listOfPolicies.filter(x => x.name !== action.payload.name);
  }

  // We don't care about this action (Form!)
  return listOfPolicies;
};

const { createStore, combineReducers } = Redux;

const ourDepartments = combineReducers({
  claimHistory,
  accounting,
  policies
});

const store = createStore(ourDepartments);

const action = createPolicy("Alex", 20);

store.dispatch(action);
