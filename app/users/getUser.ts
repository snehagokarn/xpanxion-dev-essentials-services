import { Handler, Context,Callback } from 'aws-lambda'
import {User} from '../models/User';
import {BaseService} from "../BaseService"
'use strict';
const getUserByEmail : Handler = (email:string, context: Context, callback: Callback) => {
    let request = {"Email":email};
    BaseService.read<any,User>("Users", request,
    (response:any) =>{
        callback(null,response)
    });
   }

   const getUserById : Handler = (id:string, context: Context, callback: Callback) => {
    let request = {"Id":id};
    BaseService.read<any,User>("Users", request,
    (response:any) =>{
        callback(null,response)
    });
   }

   export{getUserByEmail,getUserById}