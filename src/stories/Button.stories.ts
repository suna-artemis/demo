import type { Meta, StoryObj } from "@storybook/react";

import SunaButton from "../components/SunaButton";

const meta = {
  title: "SunaButton",
  component: SunaButton,
  tags: ["autodocs"],
  parameters: {},
} satisfies Meta<typeof SunaButton>;

export default meta;

type Story = StoryObj<typeof meta>;
export const PrimaryButton: Story = {
  args: {
    color: "primary",
    label: "primary btn",
  },
};

export const SecondaryButton: Story = {
  args: {
    color: "secondary",
    label: "secondary btn",
  },
};
