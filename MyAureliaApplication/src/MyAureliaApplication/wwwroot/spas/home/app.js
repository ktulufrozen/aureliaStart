/// <reference path="../../../typings/tsd.d.ts" />
System.register([], function(exports_1) {
    var App;
    return {
        setters:[],
        execute: function() {
            App = (function () {
                function App() {
                }
                App.prototype.activate = function () {
                };
                App.prototype.configureRouter = function (config, router) {
                    config.title = 'MyAureliaApp';
                    config.map([
                        { route: ['', 'hello'], name: 'hello', moduleId: './features/hello/hello', nav: true, title: 'Hello' }
                    ]);
                };
                return App;
            })();
            exports_1("App", App);
        }
    }
});
//# sourceMappingURL=app.js.map