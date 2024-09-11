import { DM_Serif_Display } from "next/font/google";

const font = DM_Serif_Display({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

type DisplayTextProps = {
  children?: React.ReactNode;
  className?: string;
};

export function DisplayText(props: DisplayTextProps) {
  return (
    <div className={`${font.className} ${props.className}`}>
      {props.children}
    </div>
  );
}
