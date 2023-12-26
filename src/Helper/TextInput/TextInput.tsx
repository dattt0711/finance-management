import {
  Box,
  FormControl,
  Typography,
  TextField,
  FormHelperText,
  InputBase,
} from "@mui/material";
import * as React from "react";
import clsx from "clsx";
import { useController } from "react-hook-form";
import * as _ from "lodash";
import useStyles from "./styles";

function TextInput(props: any) {
  const classes = useStyles();
  const { placeholder, error, type, ...otherProps } = props;
  const onBlur = (e: any) => {
    // if (onHandleBlur) { onHandleBlur(e); }
    // if (trimSpaceWhenBlur && e?.target?.name && e?.target?.value) {
    //   // const newValue = removeSpace(e?.target?.value);
    //   const newValue = e?.target?.value.trim();
    //   if (newValue !== e?.target?.value) {
    //     e.target.value = newValue;
    //   }
    // }
  };
  const onChangeInput = (e: any) => {
    // if (onHandleBlur) { onHandleBlur(e); }
    // if (trimSpaceWhenBlur && e?.target?.name && e?.target?.value) {
    //   // const newValue = removeSpace(e?.target?.value);
    //   const newValue = e?.target?.value.trim();
    //   if (newValue !== e?.target?.value) {
    //     e.target.value = newValue;
    //   }
    // }
  };
  return (
    <FormControl>
      <Box>
        <InputBase
          name={name}
          className={
            clsx()
            // classes.blockInput,
            // classes?.formContainer,
            // {
            //   [classes.blockOutline]:
            //     variant && compareString(variant, "outlined"),
            //   [classes.blockInputMultiline]: multiline,
            // },
            // inputClasses
          }
          // startAdornment={renderStartIcon}
          // endAdornment={renderEndIcon}
          fullWidth
          onBlur={onBlur}
          onChange={onChangeInput}
          error={!!error}
          placeholder={placeholder}
          // inputProps={{ maxLength, minHeight: "50px", ...inputProps }}
          // style={mergeStyles([
          //   !multiline && { height },
          //   multiline && { minHeight: height, padding: "12px 16px" },
          //   textStyles,
          // ])}
          // rows={rows}
          // maxRows={maxRows}
          // minRows={minRows}
          // multiline={multiline}
          {...otherProps}
          type={"text"}
        />
        {error && <FormHelperText> {error}</FormHelperText>}
      </Box>
    </FormControl>
  );
}

export default React.memo(TextInput);
