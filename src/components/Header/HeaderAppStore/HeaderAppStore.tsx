import React from "react";
import { Dropdown, Space } from "antd";

import {
  AppstoreOutlined,
  BorderOuterOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  DollarOutlined,
  PicLeftOutlined,
  ApartmentOutlined,
  UsergroupAddOutlined
} from "@ant-design/icons";

import { Card } from "antd";

const HeaderAppStore: React.FC = () => {

   const gridStyle: React.CSSProperties = {
    width: "33.3%",
    textAlign: "center",
    cursor:"pointer"
  };

  const cardStyle: React.CSSProperties = {
    marginTop: "16px",
    width: 320,
    boxShadow: '0 1px 2px -2px rgb(0 0 0 / 16%), 0 3px 6px 0 rgb(0 0 0 / 12%), 0 5px 12px 4px rgb(0 0 0 / 9%)'    
  };

  const cardIconStyle: React.CSSProperties = {
    fontSize: "26px",
    cursor: "pointer", 
  };

  const storeIconStyle: React.CSSProperties = {
    fontSize: "26px",
    color: "#fff",
    margin: "2rem 1rem",
    cursor: "pointer",
  }; 

  const card = (
    <Card style={cardStyle}>
      <Card.Grid style={gridStyle}><MailOutlined style={cardIconStyle}/> <br/> MSG</Card.Grid>      
      <Card.Grid style={gridStyle}><ContainerOutlined style={cardIconStyle}/> <br/>  SMC</Card.Grid>
      <Card.Grid style={gridStyle}><DesktopOutlined style={cardIconStyle}/><br/> RMC</Card.Grid>
      <Card.Grid style={gridStyle}><PicLeftOutlined style={cardIconStyle}/><br/> JMC</Card.Grid>  
      <Card.Grid style={gridStyle}><MenuFoldOutlined style={cardIconStyle}/><br/> HDC</Card.Grid>
      <Card.Grid style={gridStyle}><UsergroupAddOutlined style={cardIconStyle}/><br/> LMS</Card.Grid>
      <Card.Grid style={gridStyle}><BorderOuterOutlined style={cardIconStyle}/><br/> JOB BOARD</Card.Grid>
      <Card.Grid style={gridStyle}><ApartmentOutlined  style={cardIconStyle}/><br/> ORG CHART</Card.Grid>     
      <Card.Grid style={gridStyle}><DollarOutlined  style={cardIconStyle}/><br/> Billing </Card.Grid>    
    </Card>
  );

  return (
    <Space wrap>
      <Dropdown overlay={card} placement="bottomRight" trigger={["click"]}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <AppstoreOutlined style={storeIconStyle}/>
          </Space>
        </a>
      </Dropdown>
    </Space>
  );
};

export default HeaderAppStore;
