import { Handler, Context,Callback } from 'aws-lambda'
import {User} from '../models/User';
import {BaseService} from "../BaseService"
'use strict';
const getUserByEmail : Handler = (email:string, context: Context, callback: Callback) => {
    let request = 'Email = :pub_id';
    let exp :any = { ':pub_id': 'gsneha14@yahoo.com'};
    BaseService.query<any,User>("Users", request,exp,"userByEmail",
    (response:any) =>{
        callback(null,response)
    });
   }

   const getUserById : Handler = (id:string, context: Context, callback: Callback) => {
    let request =  {"Id":id};
    BaseService.read<any,User>("Users", request,
    (response:any) =>{
        callback(null,response)
    });
   }

   const validate : Handler = (loginRequest, context: Context, callback: Callback) => {
    let request = {"Email":loginRequest.email,"password":loginRequest.password};
    BaseService.read<any,User>("Users", request,
    (response:any) =>{
        callback(null,response)
    });
   }

   export{getUserByEmail,getUserById,validate}