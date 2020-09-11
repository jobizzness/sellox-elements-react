// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import SelloxCommerce from "./SelloxCommerce";
import { SelloxCommerceProps } from "./SelloxCommerce.types";

describe("Test Component", () => {
  let props: SelloxCommerceProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<SelloxCommerce {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("SelloxCommerce");

    expect(component).toHaveTextContent("harvey was here");
  });
});
