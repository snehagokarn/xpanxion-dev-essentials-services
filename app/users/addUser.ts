import { Handler, Context,Callback } from 'aws-lambda'
import {User} from '../models/User';
import {BaseService} from "../BaseService"
'use strict';
const addUser : Handler = (event:User, context: Context, callback: Callback) => {
    BaseService.create("Users",event,(response:any)=>{
     
      callback(null,response)

    });
              
   }

   const addScores : Handler = (event, context: Context, callback: Callback) => {
    var eventBody = JSON.parse(event.body);
    BaseService.create("UserScores",eventBody,(response:any)=>{
  
      callback(null,response)
    });
              
   }
   export{addUser,addScores}