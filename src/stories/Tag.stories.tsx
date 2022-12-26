import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Tag } from "../components";

export default {
  title: "Tag",
  component: Tag
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args}>Tag</Tag>;

export const Orange = Template.bind({});
Orange.args = {
  appearance: "orange"
};

export const Purple = Template.bind({});
Purple.args = {
  appearance: "purple"
};

export const Blue = Template.bind({});
Blue.args = {
  appearance: "blue"
};
