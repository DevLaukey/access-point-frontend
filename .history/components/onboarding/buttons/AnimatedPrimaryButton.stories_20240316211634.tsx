import { Meta, StoryFn } from "@storybook/react";
import AnimatedPrimaryButton, {
  AnimatedPrimaryButtonProps,
} from "./AnimatedPrimaryButton";

export default {
  component: AnimatedPrimaryButton,
  title: "Components/AnimatedPrimaryButton",
} as Meta;

const Template: StoryFn<AnimatedPrimaryButtonProps> = (args) => (
  <AnimatedPrimaryButton {...args}>Your Button Text</AnimatedPrimaryButton>
);

export const Enabled = Template.bind({});
Enabled.args = {
  className: "h-8",
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
