import type { Meta, StoryObj } from "@storybook/react";
import Button from ".";

const meta = {
  title: "Components/Button/index",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    colorSchema: {
      control: "radio",
      options: ["blue", "yellow", "red"],
    },
    children: {
      control: "radio",
      options: ["Click Here", "Red Button", "Green Button"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    colorSchema: "blue",
    children: "Blue Button",
  },
};

export const Secondary: Story = {
  args: {
    colorSchema: "red",
    children: "Red Button",
  },
};
