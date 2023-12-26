import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { colors } from "@constants/colors";

export default makeStyles((theme: Theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 20px',
    minHeight: 70,
    alignItems: 'center',
  },
}));
