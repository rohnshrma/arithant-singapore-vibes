import * as React from "react";
import ButtonBase from "@mui/material/Button";

const VARIANT_MAP = {
  default: "contained",
  secondary: "contained",
  destructive: "contained",
  outline: "outlined",
  ghost: "text",
  link: "text",
  hero: "contained",
};

const SIZE_MAP = {
  sm: "small",
  default: "medium",
  lg: "large",
  icon: "medium",
};

const Button = React.forwardRef(({ variant = "default", size = "default", className, ...props }, ref) => {
  const muiVariant = VARIANT_MAP[variant] || "contained";
  const muiSize = SIZE_MAP[size] || "medium";
  return <ButtonBase ref={ref} variant={muiVariant} size={muiSize} className={className} {...props} />;
});
Button.displayName = "Button";

export { Button };
