import * as React from 'react';
import TextField from '@mui/material/TextField';

interface MultilineTextFieldsProps {
  "onChangeText": ( e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => void,
  "value": string
}

export function MultilineTextFields( { onChangeText, value }:MultilineTextFieldsProps ) {
  return (
    <TextField
      id="outlined-textarea"
      label="Multiline Placeholder"
      placeholder="Placeholder"
      multiline
      value={value}
      onChange={ (e) => { onChangeText(e) }}
    />
  );
}