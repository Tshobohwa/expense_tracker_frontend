import React from "react";
import IncomeHeader from "../components/IncomeHeader";
import IncomesContainer from "../components/IncomesContainer";
import PageWrapper from "../components/PageWrapper";
import NavBar from "../components/NavBar";

const Incomes = () => {
  return (
    <PageWrapper>
      <IncomeHeader />
      <IncomesContainer />
      <NavBar />
    </PageWrapper>
  );
};

export default Incomes;
