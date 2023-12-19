import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SplashScreen from "./pages/SplashScreen";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Incomes from "./pages/Incomes";
import IncomeDetails from "./pages/IncomeDetails";
import Expenses from "./pages/Expenses";
import ExpenseDetails from "./pages/ExpenseDetails";
import { useDispatch, useSelector } from "react-redux";
import AddExpenseForm from "./components/AddExpenseForm";
import AddIncomeFrom from "./components/AddIncomeFrom";
import store from "./redux/store";
import PrivateRoutes from "./pages/PrivateRoutes";
import AuthenticationRoutes from "./pages/AuthenticationRoutes";
import { useEffect } from "react";
import { fetchTransactions } from "./redux/slices/transactionsSlice";
import { fetchCategories } from "./redux/slices/categoriesSlice";

function App() {
  const dispatch = useDispatch();
  const { authenticated, token } = useSelector((store) => store.user);
  const { addingExpense, addingIncome } = useSelector(
    (store) => store.appState
  );
  useEffect(() => {
    if (!token) return;
    dispatch(fetchTransactions(token));
    dispatch(fetchCategories(token));
  }, [token]);
  return (
    <>
      {(addingExpense && <AddExpenseForm />) ||
        (addingIncome && <AddIncomeFrom />)}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={!authenticated ? <SplashScreen /> : <Home />}
          />
          <Route element={<AuthenticationRoutes />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
          <Route element={<PrivateRoutes />}>
            <Route path="/incomes" elemenst={<Incomes />} />
            <Route path="/incomes/:id" element={<IncomeDetails />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="expenses/:id" element={<ExpenseDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
