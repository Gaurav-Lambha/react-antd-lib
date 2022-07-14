import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import HeaderMenu from "./HeaderMenu";

export default {
  title: "Remake-Lib/Header/HeaderMenu",
  component: HeaderMenu,
} as ComponentMeta<typeof HeaderMenu>;

const Template: ComponentStory<typeof HeaderMenu> = (args) => (
  <HeaderMenu {...args} />
);

export const Default = Template.bind({});

Default.args = {};
