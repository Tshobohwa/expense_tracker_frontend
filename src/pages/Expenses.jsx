import React from "react";
import PageWrapper from "../components/PageWrapper";
import ExpenseHeader from "../components/ExpenseHeader";
import ExpensesContainer from "../components/ExpensesContainer";
import NavBar from "../components/NavBar";

const Expenses = () => {
  return (
    <PageWrapper>
      <ExpenseHeader />
      <ExpensesContainer />
      <NavBar />
    </PageWrapper>
  );
};

export default Expenses;
