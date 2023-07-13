import React from "react";
import {
  HomeOutlined,
  RiseOutlined,
  GlobalOutlined,
  ClockCircleOutlined,
  HeartOutlined,
  UserOutlined,
  ProfileOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import HomePage from "../../pages/User/HomePage";
const { Header, Content, Footer, Sider } = Layout;

const labels = [
  "Trang chủ",
  "Thịnh hành",
  "Khám phá",
  "Nghe gần đây",
  "Bài hát yêu thích",
  "Ca sĩ yêu thích",
  "Danh sách phát",
  "Thêm playlist",
];

const items = [
  HomeOutlined,
  RiseOutlined,
  GlobalOutlined,
  ClockCircleOutlined,
  HeartOutlined,
  UserOutlined,
  ProfileOutlined,
  PlusCircleOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: labels[index],
  style: { marginTop: index % 3 === 0 ? "30px" : "0" },
}));

const UserTemplate = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          backgroundColor: "black",
        }}
      >
        <div className="demo-logo-vertical" />
        <div style={{ height: 100 }}>
          <img
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            src="./images/logo_zingmp3.jpeg"
            alt="logo zingmp3"
          />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{ backgroundColor: "black" }}
        />
      </Sider>
      <Layout
        className="site-layout"
        style={{
          marginLeft: 200,
        }}
      >
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "initial",
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
            <HomePage />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default UserTemplate;
