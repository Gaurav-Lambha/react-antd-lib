import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Header from "./Header";

export default {
  title: "Remake-Lib/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => (
  <Header {...args} />
);

export const Default = Template.bind({});

Default.args = {};
