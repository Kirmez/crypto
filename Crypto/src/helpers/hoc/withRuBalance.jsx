import { Component } from "react";

export const WithRuBalance = (Component) => {
  return (props) => {
    const { balance } = props;
    const ruBalance = balance * 95;
    return <Component {...props} ruBalance={ruBalance} />;
  };
};
