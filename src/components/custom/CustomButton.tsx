import { Button, type ButtonProps } from "../ui/button";
import { cva } from "class-variance-authority";
import { cn } from "~/lib/utils";

interface CustomButtonProps extends ButtonProps {
  icon?: JSX.Element;
}

export const CustomButton = (props: CustomButtonProps) => {
  const { className, ...rest } = props;

  return (
    <Button
      className={cn(
        "bg-green-700 text-white hover:bg-green-900 active:bg-green-950",
        className,
      )}
      variant={"green"}
      size={"icon"}
      {...rest}
    >
      {props.children}
    </Button>
  );
};
