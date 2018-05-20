import { Handler, Context,Callback } from 'aws-lambda'
import {User} from './models/User';
import {BaseService} from "../app/BaseService"
'use strict';
export module app.Services {
    export class UserService extends BaseService  {

        addUser : Handler = (event:User.User, context: Context, callback: Callback) => {
            this.create("User",event);
            const response = {
              statusCode: 200,
              body: JSON.stringify({
                input: event,
              }),
            };
           
            callback(null,response)
   }

   constructor() {
       super();
   }
 }
}