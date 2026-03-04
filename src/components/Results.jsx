import React from "react";
import calculateInvestmentResults from "../util/investment";

const Results = ({ userInput }) => {
  return (resultsData = calculateInvestmentResults(userInput));
};

export default Results;
