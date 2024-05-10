import * as React from 'react';
import "./about.css"
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

export default function About() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="About">
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
            <h3>Health and Life insurance</h3>
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
          {[<li><Link to="/about" style={{color: "white"}}>About</Link></li>, <li><Link to="/Design"  style={{color: "white"}}>Agents</Link></li>, <a href="https://docs.google.com/forms/d/e/1FAIpQLSe-_qIWpiGZaRFglLLJUySI6YMvaoRYpmznEf4J8k4fgxDxFw/viewform?usp=sf_link" style={{color: "white"}}>FeedBack</a>,<li><Link to="/login"  style={{color: "white"}}>log out</Link></li>   ].map((text, index) => (
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
       
        </Typography><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
     {/* <h2 style={{ color: "rgb(60, 60, 60)", marginTop: 550, fontSize: 20}}> Please check whether the details given by you about the insured persons in the proposal form (a
copy of which was provided at the time of issuance of cover for the first time) are incorporated
correctly in the Add-on policy schedule. If you find any discrepancy, please inform us within 15 days
from the date of receipt of the Add-on policy, failing which the details relating to the person/s
covered would be taken as correct.<br/>
So also the coverage details may also be gone through and in the absence of any communication
from you within 15 days from the date of receipt of the Add-on policy, it would be construed that
the policy issued is correct and the claims if any arise under the policy will be dealt with based on
proposal /policy details.<br/>

Types of health insureance policies:<br />

Definitions
1.1 Accidental / Accident is a sudden, unforeseen and involuntary event caused by external,
visible and violent means.<br/>
1.2 Add-on Policy means these Policy terms and conditions and Annexures thereto, the Proposal
Form, Policy Schedule and any endorsements which form part of the Policy and shall be read
together.<br/>
1.3 Add-on Policy Period means the period commencing from the Add-on Policy Period Start
Date and ending on the Add-on Policy Period, of the Policy as specifically appearing in the
Add-on Policy Schedule.<br/>
1.4 Add-on Policy Period End Date means the date on which the Add-on Policy expires, as
specifically appearing in the Add-on Policy Schedule.<br/>
1.5 Add-on Policy Period Start Date means the date on which the Add-on Policy commences, as
specifically appearing in the Add-on Policy Schedule.<br/>
1.6 Add-on Policy Schedule is a schedule attached to and forming part of this Add-on Policy and
which can be endorsed depending on the requirement of the Add-on Policy.<br/>
1.7 Add-on policy year means a period of one year commencing on the Add-on Policy Period
Start Date or any anniversary thereof.<br/>
1.8 Age means the completed age of the Insured Person as on his last birthday.<br/>
1.9 Annexure means the document attached and marked as Annexure to this Add-on Policy. For
the Purpose of this Add-on Policy ,any reference to Annexure will be same as per the Base
Policy Annexure.<br />
     </h2>*/}
     <center>
        <img src='https://www.applyaloans.com/wp-content/uploads/2018/10/Health-and-Life-Insurance.bmp' align="center" style={{width:"900px",height:"800px"}}/>
        <br></br></center>
        
            <button style={{backgroundColor:"lightblue", borderRadius:"3px",height:"30px"}}>Know more about Insurance</button>
            <p style={{color:"black"}}>
               <h4>Term  Insurance</h4>
               1. Term  insurance provides coverage for a fixed period of time at a fixed premium rate.<br></br>
               2. In case of untimely death of the life insured during the policy term , the nominee of the life insured gets the Total Payout/Benefit. The benefit can be paid out as a lump sum payout or a combination of Lump sum & Monthly payout or only as a Monthly payout.<br></br>
                3. Therefore Term insurance plans are said to be pure protection plans which ensure financial stability of the dependants in case of untimely death of the life insured.
                <h4>Benefits of Term Insurance</h4>
                <p>
                    1. Death Benefit: In the unfortunate event of death of life insured during policy term, the nominee shall receive the Total Payout as a Lump sum amount or a combination of Lump sum & Monthly amount.<br></br>
                    2. Lump sum amount to take care of immediate financial liabilities.<br></br>
                    3. Monthly income to sustain the family lifestyle.<br></br>
                    4. Tax Benefit: The premiums paid for Term Life Insurance are Tax free under section 80(C) upto an amount of Rs 1,50,000.<br></br>
                    5. Accidental Death Benefit rider offers an additional sum assured over the base plan offering in case death occurs due to an accident.<br></br>

                </p>
            </p>
        </Main>
    </Box>
    </div>
  );
}