import * as React from 'react';
import "./design.css"
import Card from '@mui/material/Card';
import img1 from "./agent.png";
import lali2 from "./agent.png";
import lali3 from "./agent.png";
import lali4 from "./agent.png";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import WhatsappRoundedIcon from '@mui/icons-material/WhatsappRounded';
import { pink } from '@mui/material/colors';
import { blue } from '@mui/material/colors';
import { green } from '@mui/material/colors';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
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
    marginLeft: '-${drawerWidth}px',
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

export default function Design() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
 

  return (
    <div className="Design">

     
  
       <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{ backgroundColor: "rgb(27, 2, 73)"}}
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
          {[<Link to="/"  style={{color: "white"}}>Home</Link>, <li><Link to="/contact"  style={{color: "white"}}>Contact</Link></li>, <li><Link to="/start"  style={{color: "white"}}>health insurance policy</Link></li>,<li><Link to="/lifeinsurance" style={{color: "white"}}>life insurance policy</Link></li>].map((text, index) => (
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
          {[<li><Link to="/about"  style={{color: "white"}}>About</Link></li>, <li><Link to="/design"  style={{color: "white"}}>Agents</Link></li>,<a href="https://docs.google.com/forms/d/e/1FAIpQLSe-_qIWpiGZaRFglLLJUySI6YMvaoRYpmznEf4J8k4fgxDxFw/viewform?usp=sf_link" style={{color: "white"}}>"FeedBack"</a>,<li><Link to="/login"  style={{color: "white"}}>log out</Link></li>].map((text, index) => (
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
        <div class ="abc">
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={img1}
        
        />
        <CardContent> 
          <Typography gutterBottom variant="h5" component="div">
           <h4> G.Rupesh </h4>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <a href='\choice'>skills: experienced person about plans</a>
          </Typography>
          <a><InstagramIcon sx={{ color: pink[500]}} /></a>
          <FacebookRoundedIcon sx={{ color: blue[500] }}/>
          <WhatsappRoundedIcon sx={{ color: green[500] }}/>
          {/*<a href='/plans'>click</a>*/}
        </CardContent>
      </CardActionArea>
      
    </Card>
    </div>

   {/* card two */}
   
    <div className="ins">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={lali2}
          
        
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           <h4> Y.V.S Nagasai</h4>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <a href='\choice'>skills: Gives clear explanation of plans</a>
          </Typography>
          <InstagramIcon sx={{ color: pink[500] }}/>
          <FacebookRoundedIcon sx={{ color: blue[500] }}/>
          <WhatsappRoundedIcon sx={{ color: green[500] }}/><br></br>
         
        </CardContent>
      </CardActionArea>


     
      
    </Card>
    </div>


              {/* card three */}
              <div className="def">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={lali3}
          
        
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           <h4> G.prathyodhan </h4>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <a href='\choice'>skills:About health insurance policies</a>
          </Typography>
          <InstagramIcon sx={{ color: pink[500] }}/>
          <FacebookRoundedIcon sx={{ color: blue[500] }}/>
          <WhatsappRoundedIcon sx={{ color: green[500] }}/><br></br>
          
        </CardContent>
      </CardActionArea>


     
      
    </Card>
    </div>




    {/* card four */}

   <br></br>
    
    <div className="ccc">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={lali4}
          
        
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           <h4>y.charan</h4>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <a href='/choice'>skills: About life insurance</a>
          </Typography>
          <InstagramIcon sx={{ color: pink[500] }}/>
          <FacebookRoundedIcon sx={{ color: blue[500] }}/>
          <WhatsappRoundedIcon sx={{ color: green[500] }}/>
        </CardContent>
      </CardActionArea>


     
      
    </Card>
    </div>
    <div className="def">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={lali3}
          
        
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           <h4> A.T.R.Nandini </h4>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <a href='\choice'>skills:About health insurance policies</a>
          </Typography>
          <InstagramIcon sx={{ color: pink[500] }}/>
          <FacebookRoundedIcon sx={{ color: blue[500] }}/>
          <WhatsappRoundedIcon sx={{ color: green[500] }}/><br></br>
          
        </CardContent>
      </CardActionArea>


     
      
    </Card>
    </div>
    
    
    
    
        </Typography>
        </Main>
    </Box>
    </div>
  );
}