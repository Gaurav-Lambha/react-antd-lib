import React, { PropsWithChildren } from "react";
import "./Button.scss";

export interface IButton {
  /**
   * Is this the principal call to action on the page?
   */
  type: "primary" | "secondary";
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Optional click handler
  */
  onBtnClick?: () => void;
}

const Button = ({ children, type, size, onBtnClick}: PropsWithChildren<IButton>) => {

  return (
    <button className={[`serviceo-btn-${type}`, `serviceo-btn-${size}`].join(' ')} onClick={onBtnClick}>
      {children}
    </button>
  );
};

export default Button;
