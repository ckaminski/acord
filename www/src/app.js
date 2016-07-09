import {inject, Aurelia} from 'aurelia-framework'; 
import {Router} from "aurelia-router";

@inject(Aurelia, Router)
export class App {
    constructor(Aurelia, Router) { 
        this.app = Aurelia
        this.router = Router
        this.message = "Welcome to Cordova example"

        this.configRouter()
    }

    configRouter() { 
        this.router.configure(config => { 
            config.title = "App1" 

            config.map([
                {route: ["", "login"] , moduleId: "login", nav: true, title: "Login"},
                {route: "main", moduleId: "main", nav: true, title: "App1"}
               ]);
            });
    }
}
