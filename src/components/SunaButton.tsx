import Button from "@mui/material/Button";

type ButtonColor =
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "info"
  | "warning";

interface Props {
  label: string;
  color: ButtonColor;
}

const SunaButton = ({ label, color }: Props) => {
  return <Button color={color}>{label}</Button>;
};

export default SunaButton;
