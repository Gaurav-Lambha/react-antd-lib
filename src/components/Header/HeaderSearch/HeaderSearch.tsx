import { AutoComplete, Input } from "antd";
import React, { useState } from "react";
import "./HeaderSearch.scss";
import "antd/dist/antd.css";

const { Option } = AutoComplete;

const HeaderSearch: React.FC = () => {
  const [result, setResult] = useState<string[]>([]);

  const handleSearch = (value: string) => {
    let res: string[] = [];
    if (!value || value.indexOf("@") >= 0) {
      res = [];
    } else {
      res = ["gmail.com", "163.com", "qq.com"].map(
        (domain) => `${value}@${domain}`
      );
    }
    setResult(res);
  };

  return (
    <div>
      <AutoComplete
        style={{ width: 250}}
        onSearch={handleSearch}
        placeholder="Search"
      >
        {result.map((email: string) => (
          <Option key={email} value={email}>
            {email}
          </Option>
        ))}
      </AutoComplete>
    </div>
  );
};

export default HeaderSearch;
