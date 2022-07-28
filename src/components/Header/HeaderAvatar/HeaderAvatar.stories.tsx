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

Default.args = {
  user: {
    "nickname": "Gaurav Lambha",
    "name": "Gaurav Lambha",
    "picture": "https://s.gravatar.com/avatar/9a93efa79aa9f5d35e14bc55a3e16dc4?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fte.png",
    "updated_at": "2022-07-25T06:10:01.167Z",
    "email": "gauravku@gmail.com",
    "email_verified": false,
    "sub": "auth0|6299faffdb041f006841f5fe"
  }
};
