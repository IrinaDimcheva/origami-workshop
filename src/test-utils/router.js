import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router";
import UserContext from "../Context";

const TestingEnvironment = ({ value, children }) => {
  return (
    <BrowserRouter>
      <Route>
        <UserContext.Provider value={value}>
          {children}
        </UserContext.Provider>
      </Route>
    </BrowserRouter>
  );
};

export default TestingEnvironment;