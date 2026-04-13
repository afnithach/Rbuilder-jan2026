import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'#8b978a'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* icon */}
            <img width={'40px'} src="https://icons.veryicon.com/png/o/miscellaneous/general-icon-library/resume-7.png" alt="icon" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
<Link to={'/'} className='text-light text-decoration-none'>Rbuilder</Link>
          </Typography >
<Tooltip title={intro}><Button color="inherit"></Button></Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
      )
}

export default Header