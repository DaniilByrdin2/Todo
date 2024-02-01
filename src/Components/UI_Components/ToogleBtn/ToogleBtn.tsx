import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


type FnObjProps = () => void

type btnStateType = {
  "btnOne": boolean,
  "btnTwo": boolean,
  "btnThree": boolean
}

type FnObjType = {
  "FnAll": FnObjProps,
  "FnActive": FnObjProps,
  "FnDone": FnObjProps
}

interface ColorToggleButtonProps {
  "FnObj": FnObjType,
  "btnState": btnStateType
}


export function ColorToggleButton( { FnObj, btnState }: ColorToggleButtonProps ) {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="web" className= { btnState.btnOne ? 'btn-info btn' : 'btn-outline-secondary btn' } disabled={ btnState.btnOne } onClick={ FnObj.FnAll }>All</ToggleButton>
      <ToggleButton value="android" className={ btnState.btnTwo ? 'btn-info btn' : 'btn-outline-secondary btn' } disabled={ btnState.btnTwo } onClick={ FnObj.FnActive }>Active</ToggleButton>
      <ToggleButton value="ios" className={ btnState.btnThree ? 'btn-info btn' : 'btn-outline-secondary btn' } disabled={ btnState.btnThree } onClick={ FnObj.FnDone }>Done</ToggleButton>
    </ToggleButtonGroup>
  );
}