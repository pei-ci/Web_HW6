
import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(0),
    width: 180
  },
  textField2: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(1),
    width: 50
  }
}));

const DatePickers=()=>{
  const classes = useStyles();
  const [textOutput,setTextOutput]=useState("");
  const outputHandler=(new_date)=>{
    var year=new_date.substr(0,4);
    var month=new_date.substr(5,2);
    var date=new_date.substr(8,2);
    var ROC_year=parseInt(year)-1911;
    var ROC_date="中華民國"+ROC_year+"年"+month+"月"+date+"日";
    setTextOutput(ROC_date);
  }
  const inputHandler=(e)=>{
      outputHandler(e.target.value);
  }
  
  return(
    <div>
        <form className={classes.container} noValidate>
          <TextField type='text' value={textOutput}  label="阿公店開店日" className={classes.textField}></TextField>
          <TextField type='date'  onChange={inputHandler} className={classes.textField2}></TextField>
        </form>
    </div>
    
  );
};
export default DatePickers;