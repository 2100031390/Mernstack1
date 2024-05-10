import * as React from 'react';
import "./plan.css"
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from "react-router-dom";
import Image from "../start/ij.jpg"
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end"
}));

export default function Start() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="Start">
       <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{ backgroundColor: "black"}}
        open={open}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <h3>health insurance</h3>
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "black",
            color: "white"
          }
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}
           style={{ color: "white"}}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[<Link to="/" style={{color: "white"}}>Home</Link>, <li><Link to="/contact" style={{color: "white"}}>Contact</Link></li>, <li><Link to="/start" style={{color: "white"}}>health insurance policy</Link></li>,<li><Link to="/lifeinsurance" style={{color: "white"}}>life insurance policy</Link></li>].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon  style={{ color: "rgb(160, 255, 8)"}}>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {[<Link to="/about" style={{color: "white"}}>About</Link>, <li><Link to="/design" style={{color: "white"}}>Agents</Link></li>, <a href="https://docs.google.com/forms/d/e/1FAIpQLSe-_qIWpiGZaRFglLLJUySI6YMvaoRYpmznEf4J8k4fgxDxFw/viewform?usp=sf_link" style={{color: "white"}}>FeedBack</a>,<li><Link to="/login"  style={{color: "white"}}>log out</Link></li>].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon  style={{ color: "rgb(160, 255, 8)"}}>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
      <DrawerHeader />
      <Typography paragraph>
      
        </Typography>
      
       <div>
        <h3 style={{color:"black", marginLeft: "120px" }}>Why buy Care Health Insurance?</h3>
        <h5  style={{color:"black", marginLeft: "120px" , marginTop: "30px"}}>✅19000+ Cashless</h5>
        <h6 style={{color:"black", marginLeft: "120px"}}>Healthcare Providers</h6>

        <h5  style={{color:"black", marginLeft: "120px" , marginTop: "30px"}}>✅Coverage against</h5>
        <h6 style={{color:"black", marginLeft: "120px"}}> COVID-19</h6>

        <h5  style={{color:"black", marginLeft: "120px" , marginTop: "30px"}}>✅95.2% Claim</h5>
        <h6 style={{color:"black", marginLeft: "120px"}}>Settlement Ratio*</h6>

        <h5  style={{color:"black", marginLeft: "120px" , marginTop: "30px"}}>✅Tax Benefits</h5>
        <h6 style={{color:"black", marginLeft: "120px"}}>Under Section 80D</h6>

        <h5  style={{color:"black", marginLeft: "120px" , marginTop: "30px"}}>✅30 Lacs+</h5>
        <h6 style={{color:"black", marginLeft: "120px"}}>Claims Settled^</h6>
       </div>

       <div className='imagepart'>

       <img style={{marginTop: "-700px"}} src={Image} />

       </div>

       <div className='mainu'>
        <h3 style={{color:"black", marginLeft: "900px", marginTop: "-350px"}}>Save <spam  style={{color:"red"}}>20%**</spam> on Health Insurance Premium</h3>

        <h2 style={{color:"black", marginLeft: "900px", marginTop: "30px"}}>Buy Health Insurance Policy Online</h2>

        <h6 style={{color:"grey", marginLeft: "900px", marginTop: "30px"}}>Enter Your Mobile Number</h6>

        <input style={{color:"black", marginLeft: "900px", marginTop: "5px", height: "55px", width: "250px", borderRadius: "10px"}} type="number" placeholder="+91"/>

       </div>

       <div>
       <button style={{height: "55px", width: "250px", backgroundColor:"Orange",  marginLeft: "900px", marginTop: "30px", borderRadius: "10px"}}><Link to="/plans" style={{color: "black", textDecoration:"none"}}>See Premium Plans 🡪</Link></button>
       </div>
       
        </Main>
    </Box>
    </div>
  );
}