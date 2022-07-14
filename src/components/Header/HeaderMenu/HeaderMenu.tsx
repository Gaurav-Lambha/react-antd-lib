import React, { useCallback } from "react";
import type { MenuProps } from "antd";
import { Space, Menu, Tooltip } from "antd";
import {
  NotificationOutlined,
  BellOutlined,
  ShakeOutlined,
} from "@ant-design/icons";

import "antd/dist/antd.css";
// import { useNavigate } from "react-router-dom";

const HeaderMenu: React.FC = () => {
 // const navigate = useNavigate();
  const tooltipColor = "#1890ff";
  const onMenuClick = useCallback((event: any) => {
    const { key } = event;
   // navigate(`${key}`, { replace: true });
  }, []);

  const menuStyle: React.CSSProperties = {
    background: "#1e88e5",
  };

  const menuIconStyle: React.CSSProperties = {
    fontSize: "26px",
    color: "#fff",
    margin: "2rem 0rem",
    cursor: "pointer",
  };

  const items1: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Tooltip
          placement="bottom"
          title={<span>Notification</span>}
          color={tooltipColor}
        >
          <a>
            <BellOutlined style={menuIconStyle} />
          </a>
        </Tooltip>
      ),
    },
    {
      key: "2",
      label: (
        <Tooltip
          placement="bottom"
          title={<span>Release Note</span>}
          color={tooltipColor}
        >
          <a>
            <NotificationOutlined style={menuIconStyle} />
          </a>
        </Tooltip>
      ),
    },
    {
      key: "3",
      label: (
        <Tooltip
          placement="bottom"
          title={<span>Raise Ticket</span>}
          color={tooltipColor}
        >
          <a>
            <ShakeOutlined style={menuIconStyle} />
          </a>
        </Tooltip>
      ),
    },
  ];

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      onClick={onMenuClick}
      items={items1}
      style={menuStyle}
    />
  );
};

export default HeaderMenu;
