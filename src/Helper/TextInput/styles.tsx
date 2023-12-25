import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import {colors} from '@constants/colors';

const useStyle = makeStyles((theme: Theme) => ({
  required: {
    color: theme.palette.error.main,
    display: 'inline',
    marginLeft: 3
},
textColor: {
  color: 'red !important',
},
formControlStyle: {
    '& .MuiFormControl-marginNormal': {
        marginTop: 0,
        marginBottom: 0,
    },
    '& .MuiFormControl-root': {
        display: 'flex',
        justifyContent: 'center'
    },
    minHeight: 50,
},
formControlHorizontal: {
    '& .MuiFormControl-marginNormal': {
        marginTop: 0,
        marginBottom: 0,
    },
},
rootInput: {
    '& .MuiInputBase-input': {
        color: 'red !important',
    },
    '& .MuiFormHelperText-contained': {
        marginLeft: 0,
        fontStyle: 'italic',
    },
},
textErrorForm: {
    fontStyle: 'italic',
    color: colors.red1,
    fontSize: 11,
    marginTop: 0,
},
blockInput: {
    backgroundColor: colors.white,
    borderRadius: 6,
    border: `1px solid ${colors.grey3}`,
    minHeight: 40,
    padding: '2px 0px 0px 8px',
    '& .MuiInputBase-input': {
        lineHeight: '25px',
    },
    '&:hover':{
        border: `1px solid ${colors.blue2}`,
    },
},
blockInputDisable: {
    backgroundColor: colors?.grey5,
    color: colors.black,
    borderRadius: 4,
    border: `1px solid ${colors.grey3}`,
    minHeight: 40,
    padding: '2px 0px 0px 8px',
    '& .MuiInputBase-input': {
        lineHeight: '25px',
    },
    '&:hover':{
        border: `1px solid ${colors.grey3}`,
    },
},
blockInputError: {
    backgroundColor: colors.white,
    borderRadius: 6,
    border: `1px solid ${colors.red1}`,
    minHeight: 40,
    padding: '2px 0px 0px 8px',
    '&:hover':{
        border: `1px solid ${colors.red1}`,
    },

},
titleVertical: {
    display: 'inline',
    marginBottom: 6,
    fontWeight: 500,
},
horizontal: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
},
inputHoziontal: {
    width: '60%',
    marginLeft: 20,
},
}));
export default useStyle;