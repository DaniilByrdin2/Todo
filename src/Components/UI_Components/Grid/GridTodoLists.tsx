import * as React from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


interface RowAndColumnSpacingProps {
  "renderFn": () => any[] 
}

export function RowAndColumnSpacing( {renderFn}: RowAndColumnSpacingProps ) {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={14}>
          <ul>{renderFn()}</ul> 
        </Grid>
      </Grid>
    </Box>
  );
}