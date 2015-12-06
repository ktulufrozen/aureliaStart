/// <reference path="../../../typings/tsd.d.ts" />

import {RouterConfiguration, Router} from "aurelia-router";

export class App {
    constructor() {
    }
    
    activate() {
    }

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'MyAureliaApp';
        config.map([
            { route: ['', 'hello'], name: 'hello', moduleId: './features/hello/hello', nav: true, title: 'Hello' }
        ]);
    }

}