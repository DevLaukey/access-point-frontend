import { Meta, StoryFn } from "@storybook/react";
import SecondaryButton, { SecondaryButtonProps } from "./SecondaryButton";

export default {
  component: SecondaryButton,
  title: "Components/SecondaryButton",
} as Meta;

const Template: StoryFn<SecondaryButtonProps> = (args) => {
  return <SecondaryButton {...args}>Your Button Text</SecondaryButton>;
};

export const Enabled = Template.bind({});
