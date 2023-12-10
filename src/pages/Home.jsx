import React from "react";
import PageWrapper from "../components/PageWrapper";
import UserContainer from "../components/UserContainer";
import BalanceContainer from "../components/BalanceContainer";
import ExpenseChartContainer from "../components/ExpenseChartContainer";
import TransactionsContainer from "../components/TransactionsContainer";

const Home = () => {
  return (
    <PageWrapper>
      <div className=" p-2 bg-green-200 flex flex-col gap-3">
        <UserContainer />
        <BalanceContainer />
        <ExpenseChartContainer />
        <TransactionsContainer />
      </div>
    </PageWrapper>
  );
};

export default Home;
