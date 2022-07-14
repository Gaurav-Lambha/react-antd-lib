import React from "react";

import { render } from "@testing-library/react";

import Material from "./Material";

describe("Material", () => {
  test("render the Material component", () => {
    render(<Material type="primary" />);
  });
});