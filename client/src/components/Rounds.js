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
                Runda 1. B??rjar som f??rra ??ret med en runda Bonusgolf - Varje
                spelare f??r 2 st h??l som han eller hon v??ljer ut som sitt
                bonush??l, en per 9a. Valet sker p?? tee p?? det h??let spelaren
                k??nner sig het p??, valet m??ste ske innan spelaren sl??r ut. Detta
                h??l blir d?? v??rt dubbel po??ng. Det kommer ??ven lottas ut 2 extra
                h??l som blir dubbelt f??r alla spelare. ??? Annars vanlig
                po??ngbogey d??r inga puttar ??r klara - allt m??ste h??las ut.
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
                    Denna t??vling kallas Gula bollen. Varje spelare f??r en gul
                    boll att spela med av spelledaren. Denna boll ger dubbla
                    po??ng per h??l som den anv??nds p??. Man f??r lov att v??lja att
                    inte spela den. F??rsvinner denna gula boll s?? tappar man
                    m??jligheten att f?? dubbla po??ng p?? resten av rundan. G??r
                    inte att byta ut mot annan gul boll. Detta ??r ett ypperligt
                    tillf??lle att samla massa po??ng om man spelar konservativt.
                    Annars vanlig po??ngbogey d??r inga puttar ??r klara - allt
                    m??ste h??las ut.
                  </Typography>
                  {
                    ' ??? Annars vanlig po??ngbogey d??r inga puttar ??r klara - allt m??ste h??las ut.'
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
                    Runda 3. Runda 3 kommer vi alla spela p?? det tee som ligger
                    l??ngst fram. Det s?? kallade ???Dam-tee???. Twisten med detta ??r
                    att vinnaren p?? h??let innan f??r blockera en klubba per
                    person p?? n??sta h??l. Putter f??r inte blockeras. Vinner samma
                    person h??let d??refter kvarst??r den blockerade klubban som
                    blockerad och vinnaren f??r blockera en ytterligare klubba.
                    Annars resetas klubborna och den nya vinnaren f??r blockera
                    en ny valfri klubba.
                  </Typography>
                  {
                    ' ??? Annars vanlig po??ngbogey d??r inga puttar ??r klara - allt m??ste h??las ut.'
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
                    Runda 4. Det var en popul??r id?? f??rra ??ret som vi alla
                    uppskattade, i ??r kanske Andreas f??r revansch i det. Jag
                    talar s??klart om 5 klubbst??vlingen. Varje spelare f??r v??lja
                    4 valfria klubbor fr??n sin bag + puttern att ta med sig p??
                    banan.
                  </Typography>
                  {
                    ' ??? Annars vanlig po??ngbogey d??r inga puttar ??r klara - allt m??ste h??las ut.'
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
                    T??vlingen avslutas med en nervig vanlig po??ngbogey d??r hela
                    t??vlingen avg??rs. Eventuell twist kommer komma in i
                    t??vlingen h??r.
                  </Typography>
                  {
                    ' ??? Annars vanlig po??ngbogey d??r inga puttar ??r klara - allt m??ste h??las ut.'
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
