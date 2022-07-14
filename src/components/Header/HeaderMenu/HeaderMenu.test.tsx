import React from "react";

import { render } from "@testing-library/react";

import HeaderMenu from "./HeaderMenu";

describe("HeaderMenu", () => {
  test("render the HeaderMenu component", () => {
    render(<HeaderMenu />);
  });
});
