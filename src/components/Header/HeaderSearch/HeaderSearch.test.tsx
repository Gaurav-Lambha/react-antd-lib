import React from "react";

import { render } from "@testing-library/react";

import HeaderSearch from "./HeaderSearch";

describe("HeaderSearch", () => {
  test("render the HeaderSearch component", () => {
    render(<HeaderSearch />);
  });
});
