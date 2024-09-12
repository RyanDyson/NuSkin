import { Button, type ButtonProps } from "../ui/button";
import { cva } from "class-variance-authority";

interface CustomButtonProps extends ButtonProps {}

export const CustomButton = (props: CustomButtonProps) => {
  return (
    <Button
      className="bg-green-700 text-white hover:bg-green-900"
      variant={"green"}
      size={"icon"}
      {...props}
    >
      {props.children}
    </Button>
  );
};
