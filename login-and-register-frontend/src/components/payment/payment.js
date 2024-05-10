import React ,{useState,useContext} from 'react'
//import axios from 'axios';
import { Card, Typography } from "@mui/material";
//import { store } from './App';
import { Link, Redirect } from 'react-router-dom';
//import "./Log.css"

const PaymentGateway=()=>
{
       return(
          <div className='payback'>
              <center>
              <Card sx={{ maxWidth:475,height:300 ,width:300}}>
             <div className='Crd'>
                <h2 style={{color:"balck"}}>Payment Details</h2>
            <form autoComplete="off">
                {/*<Typography class="tyu">Total Amount to pay: Rs 465</Typography>*/}
                <hr></hr>
                <br/>
                <input type ="number" name="email" placeholder='CardNumber'autoComplete="new-password" required/><br/><br/>
                <input type ="number" name="password" placeholder='Card Holder' autoComplete="new-password" required/><br/><br/>
                <input type ="number" name="password" placeholder='Phone number' autoComplete="new-password" required/><br/><br/>
                <input type ="text" name="password" placeholder='Month/Year' autoComplete="new-password" required style={{marginRight:"5px"}}/><br/><br/>
                <input type ="number" name="password" placeholder='CVV' autoComplete="new-password" required/><br/><br/>
                
                <button><Link to="/succ">Pay Now</Link></button>
            </form> 
            
            </div>
            </Card>
              </center>
          </div>
       )
}
export default PaymentGateway