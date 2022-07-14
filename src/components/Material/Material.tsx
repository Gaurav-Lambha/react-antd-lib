import React, { PropsWithChildren } from "react";
import "./Material.scss";
import Button from '@material-ui/core/Button';
export interface IButton {
  type: "primary" | "secondary";
}

const Material = ({ children, type }: PropsWithChildren<IButton>) => {
  return (  
    <Button variant="contained"> {children}</Button>
  );
};

export default Material;
