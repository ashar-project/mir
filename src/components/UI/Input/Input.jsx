import { TextField, styled } from '@mui/material';

const CustomInput = (props) => {
  const {
    variant,
    value,
    disabled,
    error,
    placeholder,
    onChange,
    ...rest
  } = props;

  return (
    <StyledFilledTextField
      variant={variant}
      value={value}
      onChange={onChange}
      disabled={disabled}
      error={error}
      placeholder={placeholder}
      {...rest}
    />
  );
};

const StyledFilledTextField = styled(TextField)`
  .MuiFilledInput-root {
    background-color: #f0f0f0;
    border: none;
    border-radius: 0;
    padding: 0;
    box-shadow: none;
    &:before,
    &:after {
      display: none;
    }

    &:hover {
      background-color: #e0e0e0;
    }

    &.Mui-focused {
      background-color: #e0e0e0;
      color: #3a10e5;
    }

    input {
      border: none;
      outline: none;
      color: #23212a;
      padding: 0.8125rem;
    }

    &.Mui-disabled {
      background-color: #f7f7f7;

      input {
        color: #a0a0a0;
      }
    }
  }

  .MuiInputLabel-root {
    color: #b0b0b0;

    &.Mui-error {
      color: #f44336;
    }

    &.Mui-disabled {
      color: #a0a0a0;
    }
  }

  .Mui-error {
    .MuiFilledInput-root {
      background-color: #ffe6e6;
    }

    input {
      color: #23212a;
    }
  }
`;

export default CustomInput;
