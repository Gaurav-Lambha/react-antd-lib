import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import HeaderAppStore from "./HeaderAppStore";

export default {
  title: "Remake-Lib/Header/HeaderAppStore",
  component: HeaderAppStore,
} as ComponentMeta<typeof HeaderAppStore>;

const Template: ComponentStory<typeof HeaderAppStore> = (args) => (
  <HeaderAppStore {...args} />
);

export const Default = Template.bind({});

Default.args = {};
