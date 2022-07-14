import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Material from "./Material";

export default {
  title: "Remake-Lib/Material",
  component: Material,
} as ComponentMeta<typeof Material>;

const Template: ComponentStory<typeof Material> = (args) => <Material {...args} />;

export const Default = Template.bind({});

Default.args = {
  type: "primary",
  children: "I'm a button 😎"
};
