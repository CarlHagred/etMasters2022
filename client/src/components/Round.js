import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { Box, createTheme } from '@mui/system';
import { Backdrop, Button } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import { Card, Fade, Grid, Modal } from '@mui/material';

const Round = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = createTheme({
    palette: {
      primary: {
        light: '#F7f7f7',
        main: '#3A504B',
        dark: '#1E2528',
      },
    },
  });
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: theme.palette.primary.dark,
    color: theme.palette.primary.light,
    boxShadow: 3,
    p: 4,
  };
  return (
    <React.Fragment>
      <Card
        onClick={handleOpen}
        sx={{
          boxShadow: 3,
          m: 5,
          //mr: 25,
          // ml: 10,
          display: 'inline-flex',
          width: '44%',

          bgcolor: theme.palette.primary.main,
          borderRadius: '3%',
        }}
      >
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onBackdropClick={handleClose}
          onClose={handleClose}
          BackdropComponent={Backdrop}
          sx={{ color: theme.palette.primary.main }}
          //onBackdropClick
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                {props.title}
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                {props.descript}
              </Typography>
              <Button onClick={handleClose}>X</Button>
              {/* Buttonen funkar inte, det funkar bara att stänga med Escape just nu */}
            </Box>
          </Fade>
        </Modal>
        <ListItem alignItems="flex-start" sx={{ width: '100%' }}>
          <ListItemAvatar>
            <Avatar alt="1" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography sx={{ weight: 'bold', fontSize: 30 }}>
                {props.title}
              </Typography>
            }
            secondary={
              <React.Fragment>
                <Typography
                  sx={{
                    display: 'inline',
                    color: theme.palette.primary.light,
                  }}
                  component="span"
                  variant="body2"
                ></Typography>
              </React.Fragment>
            }
          />
        </ListItem>
      </Card>
    </React.Fragment>
  );
};
export default Round;
