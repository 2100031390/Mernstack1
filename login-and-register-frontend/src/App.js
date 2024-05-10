
import './App.css'
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import About from "./components/about/about"
import Contact from "./components/contact/contact"
import Register from "./components/register/register"
import Start from "./components/start/start"
import Design from "./components/design/design"
import Worktender from "./components/construction/worktender"
import Realestate from "./components/construction/realestate"
import Services from "./components/construction/services"
import Environment from "./components/construction/environment"
import View from"./components/view/view"
import my from"./components/my/my"
import su from"./components/su/su"
import Agri from "./components/agriculture/agri"
import Food from "./components/agriculture/food"
import Forest from "./components/agriculture/forest"
import Mining from "./components/material/mining"
import Cloth from "./components/material/cloth"
import Save from "./components/save/save"
import Plans from "./components/plans/plans"
import Plan from "./components/plan/plan"
import Life from "./components/lifeinsurance/life"
import Lifeplan from "./components/lifeplan/lifeplan"
import Lifepre from "./components/lifepre/lifepre"
import Choice from "./components/choice/choice"
import Eligibility from "./components/eligibility/eligibility"
import Yes from "./components/eligibility/yes"
import Rules from "./components/eligibility/rules"
import Pay from "./components/payment/payment"
import Succ from "./components/save/paysucc"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';

function App() {

  <div className="App">
     
        <h3>Append a React component in another on button click</h3>
        </div>

  const [ user, setLoginUser] = useState({})
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route exact path="/" component={Homepage} />
          <Route path="/about" component={About} />
          <Route path="/lifeplan" component={Lifeplan}/>
          <Route path="/contact" component={Contact} />
          <Route path="/start" component={Start} />
          <Route path="/design" component={Design} />
          <Route path="/worktender" component={Worktender} />
          <Route path="/realestate" component={Realestate} />
          <Route path="/services" component={Services} />
          <Route path="/environment" component={Environment} />
          <Route path="/view" component={View} />
          <Route path="/my" component={my} />
          <Route path="/su" component={su} />
          <Route path="/agri" component={Agri} />
          <Route path="/food" component={Food} />
          <Route path="/forest" component={Forest} />
          <Route path="/mining" component={Mining} />
          <Route path="/cloth" component={Cloth} />
          <Route path="/save" component={Save} />
          <Route path="/plans" component={Plans} />
          <Route path="/plan" component={Plan} />
          <Route path="/lifeinsurance" component={Life}/>
          <Route path="/lifepre" component={Lifepre}/>
          <Route path="/choice" component={Choice}/>
          <Route path="/eligibility" component={Eligibility}/>
          <Route path="/yes" component={Yes}/>
          <Route path="/elirules" component={Rules}/>
          <Route path="/pay" component={Pay}/>
          <Route path="/succ" component={Succ}/>
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
