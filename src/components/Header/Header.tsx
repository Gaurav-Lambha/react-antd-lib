import React from "react";
import { Layout, Space } from "antd";
const { Header } = Layout;
import HeaderAppStore from "./HeaderAppStore/HeaderAppStore"
import HeaderMenu from "./HeaderMenu/HeaderMenu"
import HeaderSearch from "./HeaderSearch/HeaderSearch"
import HeaderAvatar from "./HeaderAvatar/HeaderAvatar"
//const logo = require('../assets/svg/serviceo-logo-White.svg') as string;

//@ts-ignore
// import logo from '../assets/svg/serviceo-logo-White.svg';
import "antd/dist/antd.css";
import "./Header.scss";

export interface IUser {
  name?: string;
  given_name?: string;
  family_name?: string;
  middle_name?: string;
  nickname?: string;
  preferred_username?: string;
  profile?: string;
  picture?: string;
  website?: string;
  email?: string;
  email_verified?: boolean;
  gender?: string;
  birthdate?: string;
  zoneinfo?: string;
  locale?: string;
  phone_number?: string;
  phone_number_verified?: boolean;
  address?: string;
  updated_at?: string;
  sub?: string;
  logo?: string;
  onClick?: () => void;
}
const ServiceoHeader: React.FC<IUser> = (props) => {
  return <Header className="header app-header">
    <img className="app-logo" width={200} height={50} src='../assets/svg/serviceo-logo-White.svg' />
    <Space className="right">
      <HeaderSearch />
      <HeaderMenu />
      <HeaderAvatar {...props} onClick= { () => props.onClick}/>
      <HeaderAppStore />
    </Space>
  </Header>

};

export default ServiceoHeader