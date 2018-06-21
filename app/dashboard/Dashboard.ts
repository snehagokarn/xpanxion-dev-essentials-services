import { Handler, Context,Callback } from 'aws-lambda'
import {User} from '../models/User';
import {BaseService} from "../BaseService"
'use strict';
   const getDashBoard : Handler = (event, context: Context, callback: Callback) => {
    BaseService.scan<any,User>("UserScores",
    (response:any) =>{
        callback(null,response)
    });
   }

   export{getDashBoard}