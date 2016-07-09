import {inject, Aurelia} from 'aurelia-framework'
import {HttpClient} from 'aurelia-http-client'

@inject(Aurelia, HttpClient)
export class Login {
    message = 'Welcome to Aurelia!'

    constructor(Aurelia, HttpClient) { 
        this.app = Aurelia 
        this.http = HttpClient 
    } 

    login() { 
        // Test login here. 
    }

}
