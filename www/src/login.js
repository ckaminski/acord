import {Parent, inject, Aurelia} from 'aurelia-framework'
import {Router} from 'aurelia-router'
import {HttpClient} from 'aurelia-http-client'

@inject(Aurelia, HttpClient, Parent.of(Router))
export class Login {
    message = 'Welcome to Aurelia!'

    constructor(Aurelia, HttpClient, Router) { 
        this.app = Aurelia 
        this.http = HttpClient 
        this.router = Router
    } 

    login() { 
        //this.router.navigateToRoute('main')  
        this.router.navigate('#/main')
    }

}
