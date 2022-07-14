import React from "react";

import { render } from "@testing-library/react";

import HeaderAppStore from "./HeaderAppStore";

describe("HeaderAppStore", () => {
  test("render the HeaderAppStore component", () => {
    render(<HeaderAppStore />);
  });
});
