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
import { useSelector } from "react-redux";
import AddExpenseForm from "./components/AddExpenseForm";
import AddIncomeFrom from "./components/AddIncomeFrom";

function App() {
  const { addingExpense, addingIncome } = useSelector(
    (store) => store.appState
  );
  return (
    <>
      {(addingExpense && <AddExpenseForm />) ||
        (addingIncome && <AddIncomeFrom />)}
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<SplashScreen />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/incomes" element={<Incomes />} />
          <Route path="/incomes/:id" element={<IncomeDetails />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="expenses/:id" element={<ExpenseDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
