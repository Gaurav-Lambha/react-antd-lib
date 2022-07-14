import React, { useState } from "react";
import { Avatar, Space, Dropdown, Menu } from "antd";
// import { useAuth0 } from '@auth0/auth0-react';
import {
  UserOutlined,
  SettingOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import "./HeaderAvatar.scss";

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
  onClick?: () => void;
}

const HeaderAvatar: React.FC<IUser> = (props) => {
  // const { user, logout } = useAuth0();
  const [ userProps, setUserProps] = useState(props);

  const { name, picture, email } = userProps || {name: 'Test User', picture: 'https://joeschmoe.io/api/v1/random', email: 'test@ironsystems.com'};

  const menu = (
    <Menu
      className="avtMenuwidth"
      items={[
        {
          key: "1",
          icon: <Avatar src={picture} size={40} />,
          label: (
            <a rel="noopener noreferrer">
               {name} <br />
              <small>{email}</small> 
            </a>
          ),
        },
        {
          key: "2",
          icon: <UserOutlined />,
          label: <a>My Profile</a>,
        },
        {
          key: "3",
          icon: <SettingOutlined />,
          disabled: true,
          label: <a>Setting</a>,
        },
        {
          key: "4",
          danger: true,
          icon: <PoweroffOutlined />,
          label: <a onClick= { () => props.onClick}>Logout</a>,
        },
      ]}
    />
  );

  return (
    <Space wrap>
      <Dropdown overlay={menu} placement="bottomRight" trigger={["click"]}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <Avatar
              src={picture}
              size={35}
              style={{ border: "2px solid #ffff", margin: "2rem 0rem" }}
            />
          </Space>
        </a>
      </Dropdown>
    </Space>
  );
};

export default HeaderAvatar;
