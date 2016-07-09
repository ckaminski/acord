import {inject, Aurelia} from 'aurelia-framework'
import {HttpClient} from 'aurelia-http-client'

@inject(Aurelia, HttpClient)
export class Main {
    message = 'Welcome to to the main page!!'

    constructor(Aurelia, HttpClient) { 
        this.app = Aurelia 
        this.http = HttpClient 
    } 


}
