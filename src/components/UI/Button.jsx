import React from "react";
import { Button as MyButton } from "@mui/material";
import { styled } from "@mui/system";

const Button = ({
  variant = "primary",
  size = "medium", 
  children,
  onClick,
  type = "submit",
  disabled,
  startIcon,
  ...rest
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size} 
      onClick={onClick}
      startIcon={startIcon}
      disabled={disabled}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled(MyButton)(({ variant, size }) => {
  const sizes = {
    small: "5px 10px",
    medium: "10px 20px",
    large: "15px 40px",
  };
  return {
    backgroundColor:
      variant === "primary"
        ? "#637e7e"
        : variant === "secondary"
        ? "#37d3d3"
        : variant === "outlined"
        ? "#ffffff"
        : "#ffffff",
    color: variant === "tertiary" || variant === "outlined" ? "#000" : "#fff",
    border:
      variant === "outlined" || variant === "tertiary"
        ? "1px solid #000"
        : "none",
    padding: sizes[size] || sizes.medium, 
    borderRadius: variant === "outlined" ? "5px" : "4px",
    "&:hover": {
      backgroundColor:
        variant === "primary"
          ? "#4f6565"
          : variant === "secondary"
          ? "#2bbcbc"
          : variant === "outlined"
          ? "#f0f0f0"
          : "#f0f0f0",
    },
  };
});
