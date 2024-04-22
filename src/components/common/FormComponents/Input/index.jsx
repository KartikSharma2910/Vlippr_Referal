import {
  FormControl,
  FormHelperText,
  InputBase,
  InputLabel,
} from "@mui/material";
import { Controller } from "react-hook-form";
import { getError } from "utils/common";

const Input = ({
  name,
  control,
  label,
  type = "text",
  fullWidth = true,
  errors,
  rules,
  customStyles,
  maxLength,
  isRequired,
  inputProps,
  variant = "standard",
  startIcon,
  className,
  ...rest
}) => {
  const error = getError(name, errors);

  return (
    <Controller
      render={({ field }) => (
        <FormControl
          sx={{
            ...customStyles,
            "& .MuiInputBase-input": {
              paddingLeft: "10px",
            },
          }}
          fullWidth={fullWidth}
          variant={variant}
          className={className}
        >
          <InputLabel shrink required={isRequired} htmlFor={`input-${name}`}>
            {label}
          </InputLabel>
          <InputBase
            id={`input-${name}`}
            className="gradient-input"
            type={type}
            startAdornment={startIcon}
            value={field.value}
            onChange={field.onChange}
            inputRef={field.ref}
            onBlur={field.onBlur}
            inputProps={{
              maxLength: maxLength,
              ...inputProps,
            }}
            autoComplete="new-password"
            error={!!error}
            {...rest}
          />
          {error && <FormHelperText>{String(error.message)}</FormHelperText>}
        </FormControl>
      )}
      name={name}
      control={control}
      rules={rules}
      {...rest}
    />
  );
};
export default Input;
