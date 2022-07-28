import React from "react";
import { Layout, Space } from "antd";
const { Header } = Layout;
import HeaderAppStore from "./HeaderAppStore/HeaderAppStore"
import HeaderMenu from "./HeaderMenu/HeaderMenu"
import HeaderSearch from "./HeaderSearch/HeaderSearch"
import HeaderAvatar from "./HeaderAvatar/HeaderAvatar"
import HeaderLogo from "./HeaderLogo/Header-logo";
import { HeaderProps } from "./header-interface";
import "antd/dist/antd.css";
import "./Header.scss";

const ServiceoHeader: React.FC<HeaderProps> = ({ user, onLogout }: HeaderProps) => {
  return <Header className="header app-header">
    <Space className="logo-left">
      <HeaderLogo />
    </Space>
    <Space className="menu-right">
      <HeaderSearch />
      <HeaderMenu />
      <HeaderAvatar user={user} onLogout={onLogout} />
      <HeaderAppStore />
    </Space>
  </Header>
};

export default ServiceoHeader