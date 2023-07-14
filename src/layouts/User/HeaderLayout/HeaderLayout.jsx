import React from "react";
import { Layout } from "antd";

const { Header } = Layout;

const HeaderLayout = () => {
  return (
    <Header
      style={{
        padding: 0,
        background: "linear-gradient(to right, #212121, #535353)",
        minHeight: 80,
        position: "fixed",
        top: 0,
        left: 200,
        right: 0,
        zIndex: 99,
      }}
    ></Header>
  );
};

export default HeaderLayout;
