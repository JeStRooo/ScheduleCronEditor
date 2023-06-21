import React, {InputHTMLAttributes} from 'react';

import classes from "./Input.module.scss";

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = (inputProps) =>
  <input className={classes.myInput} {...inputProps} />

export default Input;