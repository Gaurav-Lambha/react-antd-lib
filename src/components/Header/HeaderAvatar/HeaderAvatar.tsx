import React, { useState } from "react";
import { Avatar, Space, Dropdown, Menu } from "antd";
import {
  UserOutlined,
  SettingOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import "./HeaderAvatar.scss";
import { HeaderProps } from "./../header-interface";

const HeaderAvatar: React.FC<HeaderProps> = ({ user, onLogout}: HeaderProps) => {
  const [ userProps, setUserProps] = useState(user);

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
          label: <a onClick= {onLogout}>Logout</a>,
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
