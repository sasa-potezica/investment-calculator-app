import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";
import { renderToReadableStream } from "react-dom/server";

const Results = ({ userInput }) => {
  const resultsData = calculateInvestmentResults(userInput);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((yearData) => {
          const totalInterestValue =
            yearData.valueEndOfYear - yearData.annualInvestment * yearData.year;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{}</td>
              <td>{}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Results;
