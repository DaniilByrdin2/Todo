import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';

interface MultilineTextFieldsProps {
  "onChangeText": ( e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => void,
  "value": string
  "type": string
}


export function MultilineTextFields( { onChangeText, value, type }:MultilineTextFieldsProps ) {



  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "245px" },
      }}
    >
      { type === "footer" ? (
        <TextField
          fullWidth
          color="warning"
          label="Add Task"
          id="outlined-controlled"
          placeholder="Enter Task"
          multiline
          value={value}
          onChange={(e) => {
            onChangeText(e);
          }}
        />
      ) : type === "header" ? (
        <TextField
          id="outlined-controlled"
          label="Search Task"
          placeholder="Enter Task"
          multiline
          value={value}
          onChange={(e) => {
            onChangeText(e);
          }}
        />
      ) : type === "footerError" ? 
      <TextField
          fullWidth
          error
          label="Field cannot be empty"
          id="outlined-controlled"
          placeholder="Enter Task"
          multiline
          value={value}
          onChange={(e) => {
            onChangeText(e);
          }}
        />
      : null }
    </Box>
  );
}