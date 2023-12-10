import React from "react";
import PageWrapper from "../components/PageWrapper";
import UserContainer from "../components/UserContainer";
import BalanceContainer from "../components/BalanceContainer";

const Home = () => {
  return (
    <PageWrapper>
      <div className=" p-2 bg-green-200">
        <UserContainer />
        <BalanceContainer />
      </div>
    </PageWrapper>
  );
};

export default Home;
