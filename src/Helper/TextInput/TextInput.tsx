import {
  Box, FormControl, Typography,TextField,
  FormHelperText
} from '@mui/material';
import * as React from 'react';
import clsx from 'clsx';
import { useController } from 'react-hook-form';
import * as _ from 'lodash';
import useStyles from './styles';

function TextInput(props: any) {
  const classes = useStyles();
  console.log(classes,'classes')
  const {
  } = props;
  return (
      <>
            <TextField className={classes.rootInput}/>
      </>
  );
}

export default React.memo(TextInput);