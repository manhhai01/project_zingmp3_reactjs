import React from "react";
import { Layout, theme } from "antd";
import { Outlet } from "react-router-dom";
import SiderLayout from "../../layouts/User/SiderLayout/SiderLayout";
import HeaderLayout from "../../layouts/User/HeaderLayout/HeaderLayout";

const { Content, Footer } = Layout;

const UserTemplate = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout hasSider>
      <SiderLayout />
      <Layout className="site-layout">
        <HeaderLayout />
        <Content
          style={{
            overflow: "initial",
            marginLeft: 192,
            marginTop: 80,
          }}
        >
          <div
            style={{
              padding: 24,
              textAlign: "center",
              background: colorBgContainer,
              minHeight: "100vh",
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 99,
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default UserTemplate;
