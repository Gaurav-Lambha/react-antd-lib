import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import HeaderAvatar from "./HeaderAvatar";

export default {
  title: "Remake-Lib/Header/HeaderAvatar",
  component: HeaderAvatar,
} as ComponentMeta<typeof HeaderAvatar>;

const Template: ComponentStory<typeof HeaderAvatar> = (args) => (
  <HeaderAvatar {...args} />
);

export const Default = Template.bind({});

Default.args = {};
