import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { Box, createTheme } from '@mui/system';
import { Backdrop } from '@mui/material';

import { Card, Fade, Grid, Modal } from '@mui/material';
const Rounds = () => {
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
    bgcolor: theme.palette.primary.light,
    boxShadow: 3,
    p: 4,
  };

  return (
    <Grid
      sx={{
        display: 'grid',
        gap: 1,
        gridTemplateColumns: 'repeat(2,1fr)',
        position: 'center',
      }}
    >
      {/* // <List
    //   sx={{
    //     width: '100%',
    //     maxWidth: 10000,
    //     bgcolor: 'background.paper',
    //     alignItems: 'center',
    //     color: theme.palette.primary.light,
    //   }}
    // > */}
      <Card
        onClick={handleOpen}
        sx={{
          boxShadow: 3,
          m: 1,
          display: 'inline-flex',
          width: '45%',
          bgcolor: theme.palette.primary.main,
          color: theme.palette.primary.light,
          borderRadius: '3%',
        }}
      >
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={(_, reason) => {
            if (reason && reason === 'backdropClick') {
              handleClose();
            }
          }}
          BackdropComponent={Backdrop}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                BonusGolfen
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                Runda 1. Börjar som förra året med en runda Bonusgolf - Varje
                spelare får 2 st hål som han eller hon väljer ut som sitt
                bonushål, en per 9a. Valet sker på tee på det hålet spelaren
                känner sig het på, valet måste ske innan spelaren slår ut. Detta
                hål blir då värt dubbel poäng. Det kommer även lottas ut 2 extra
                hål som blir dubbelt för alla spelare. — Annars vanlig
                poängbogey där inga puttar är klara - allt måste hålas ut.
              </Typography>
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
                BonusGolfen
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

      {/* <Card
          sx={{
            boxShadow: 3,
            m: 1,
            bgcolor: theme.palette.primary.main,
            display: 'inline-flex',
            width: '45%',
          }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="GulaBollen"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{
                      display: 'inline',
                      color: theme.palette.primary.light,
                    }}
                    component="span"
                    variant="body2"
                    mt={2}
                  >
                    Denna tävling kallas Gula bollen. Varje spelare får en gul
                    boll att spela med av spelledaren. Denna boll ger dubbla
                    poäng per hål som den används på. Man får lov att välja att
                    inte spela den. Försvinner denna gula boll så tappar man
                    möjligheten att få dubbla poäng på resten av rundan. Går
                    inte att byta ut mot annan gul boll. Detta är ett ypperligt
                    tillfälle att samla massa poäng om man spelar konservativt.
                    Annars vanlig poängbogey där inga puttar är klara - allt
                    måste hålas ut.
                  </Typography>
                  {
                    ' — Annars vanlig poängbogey där inga puttar är klara - allt måste hålas ut.'
                  }
                </React.Fragment>
              }
            />
          </ListItem>
        </Card>
        <Card
          sx={{
            boxShadow: 3,
            m: 1,
            bgcolor: theme.palette.primary.main,
            display: 'inline-flex',
            width: '45%',
          }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="DamTee"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Runda 3. Runda 3 kommer vi alla spela på det tee som ligger
                    längst fram. Det så kallade “Dam-tee”. Twisten med detta är
                    att vinnaren på hålet innan får blockera en klubba per
                    person på nästa hål. Putter får inte blockeras. Vinner samma
                    person hålet därefter kvarstår den blockerade klubban som
                    blockerad och vinnaren får blockera en ytterligare klubba.
                    Annars resetas klubborna och den nya vinnaren får blockera
                    en ny valfri klubba.
                  </Typography>
                  {
                    ' — Annars vanlig poängbogey där inga puttar är klara - allt måste hålas ut.'
                  }
                </React.Fragment>
              }
            />
          </ListItem>
        </Card>
        <Card
          sx={{
            boxShadow: 3,
            m: 1,
            bgcolor: theme.palette.primary.main,
            display: 'inline-flex',
            width: '45%',
          }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="5Klubbor"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                    mt={2}
                  >
                    Runda 4. Det var en populär idé förra året som vi alla
                    uppskattade, i år kanske Andreas får revansch i det. Jag
                    talar såklart om 5 klubbstävlingen. Varje spelare får välja
                    4 valfria klubbor från sin bag + puttern att ta med sig på
                    banan.
                  </Typography>
                  {
                    ' — Annars vanlig poängbogey där inga puttar är klara - allt måste hålas ut.'
                  }
                </React.Fragment>
              }
            />
          </ListItem>
        </Card>
        <Card
          sx={{
            boxShadow: 3,
            m: 1,
            bgcolor: theme.palette.primary.main,
            display: 'inline-flex',
            width: '45%',
          }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="5" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="FINAL"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Tävlingen avslutas med en nervig vanlig poängbogey där hela
                    tävlingen avgörs. Eventuell twist kommer komma in i
                    tävlingen här.
                  </Typography>
                  {
                    ' — Annars vanlig poängbogey där inga puttar är klara - allt måste hålas ut.'
                  }
                </React.Fragment>
              }
            />
          </ListItem>
        </Card>  
     </List> */}
    </Grid>
  );
};

export default Rounds;
