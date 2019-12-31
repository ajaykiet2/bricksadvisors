import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputMask from 'react-input-mask';
 
const MaskInput = (props) => (
  <InputMask mask={props.mask} value={props.value} onChange={props.onChange}>
    {() => <TextField {...props} type="tel" />} 
  </InputMask>
);

export default MaskInput;