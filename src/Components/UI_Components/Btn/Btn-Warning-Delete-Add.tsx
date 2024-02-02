import * as React from 'react';
import Button from '@mui/material/Button';


interface ColorButtonsAddProps {
  "addText": () => void
}

interface ColorButtonsWarningProps {
  "id": number,
  "toogleTodoItem": (p: number) => void
}

interface ColorButtonsDeleteProps { 
  "deletePost": (p: number) => void 
  "id": number
} 



export function ColorButtonsWarning( {id, toogleTodoItem}:ColorButtonsWarningProps ) {
  return (
      <Button onClick={() => toogleTodoItem(id)} variant="contained" color="success">Warning</Button>
  );
}

export function ColorButtonsDelete( { id, deletePost }: ColorButtonsDeleteProps ) {
  return (
      <Button onClick={ () => deletePost(id) } variant="outlined" color="error">Delete</Button>
  );
}

export function ColorButtonsAdd( { addText }: ColorButtonsAddProps ) {
  return (
      <Button size="large"
        onClick={(e) => {
          addText();
          e.preventDefault();
        }}
        variant="contained"
        color="success"
      >Add</Button>
  );
}