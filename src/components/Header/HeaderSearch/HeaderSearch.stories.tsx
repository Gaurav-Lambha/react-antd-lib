import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import HeaderSearch from "./HeaderSearch";

export default {
  title: "Remake-Lib/Header/HeaderSearch",
  component: HeaderSearch,
} as ComponentMeta<typeof HeaderSearch>;

const Template: ComponentStory<typeof HeaderSearch> = (args) => (
  <HeaderSearch {...args} />
);

export const Default = Template.bind({});

Default.args = {};
