import React from "react";
import PageWrapper from "../components/PageWrapper";
import UserContainer from "../components/UserContainer";
import BalanceContainer from "../components/BalanceContainer";
import ExpenseChartContainer from "../components/ExpenseChartContainer";
import TransactionsContainer from "../components/TransactionsContainer";
import NavBar from "../components/NavBar";
import AddIncomeFrom from "../components/AddIncomeFrom";

const Home = () => {
  return (
    <PageWrapper>
      <div className=" p-2 bg-green-200 flex flex-col gap-3">
        <AddIncomeFrom />
        <UserContainer />
        <BalanceContainer />
        <ExpenseChartContainer />
        <TransactionsContainer />
        <NavBar />
      </div>
    </PageWrapper>
  );
};

export default Home;
