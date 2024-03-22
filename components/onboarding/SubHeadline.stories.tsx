import { Meta, StoryFn } from "@storybook/react";
import Subheadline, { SubheadlineProps } from "./SubHeadline";

export default {
  component: Subheadline,
  title: "Components/Subheadline",
} as Meta;

const Template: StoryFn<SubheadlineProps> = (args) => {
  return <Subheadline {...args}>We will contact you shortly.</Subheadline>;
};

export const Default = Template.bind({});
