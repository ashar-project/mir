import {
  MenuItem,
  Select as MySelect,
  styled,
  Typography,
} from '@mui/material';
import { forwardRef } from 'react';

export const Select = forwardRef(
  (
    {
      disabled,
      options,
      value,
      onChange,
      label,
      fullWidth,
      style,
      placeholder,
      ...rest
    },
    ref
  ) => (
    <StyledDiv>
      <Typography sx={{ color: disabled ? 'lightgray' : '#939292' }}>
        {label}
      </Typography>

      <StyledMySelect
        value={value}
        fullWidth={fullWidth}
        onChange={onChange}
        disabled={disabled}
        inputRef={ref}
        defaultValue={placeholder}
        style={style}
        {...rest}
      >
        {options.map(item => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </StyledMySelect>
    </StyledDiv>
  )
);

const StyledDiv = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
}));

const StyledMySelect = styled(MySelect)(({ theme }) => ({
  width: '100%',
  height: '38px',
  borderRadius: '6px',
  borderColor: theme.palette.secondary.lightGrey,
  backgroundColor: theme.palette.secondary.daisy,
  transition: 'all 0.3s',

  '&:hover': {
    borderColor: theme.palette.secondary.darkGrey,
  },

  '&.Mui-focused': {
    borderColor: theme.palette.primary.darkGreen,
    boxShadow: `0 0 0 1px ${theme.palette.primary.darkGreen}`,
  },

  '&.Mui-disabled': {
    backgroundColor: theme.palette.action.disabledBackground,
    color: theme.palette.text.disabled,

    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.action.disabled,
    },
  },
}));
