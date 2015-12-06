System.register([], function(exports_1) {
    var Hello;
    return {
        setters:[],
        execute: function() {
            Hello = (function () {
                function Hello() {
                    this._firstName = "John";
                    this._lastName = "Doe";
                }
                Object.defineProperty(Hello.prototype, "firstName", {
                    get: function () {
                        return this._firstName;
                    },
                    set: function (value) {
                        this._firstName = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Hello.prototype, "lastName", {
                    get: function () {
                        return this._lastName;
                    },
                    set: function (value) {
                        this._lastName = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Hello.prototype.sayHello = function () {
                    alert("Hello " + this.firstName + " " + this.lastName + ". Nice to meet you.");
                };
                return Hello;
            })();
            exports_1("Hello", Hello);
        }
    }
});
//# sourceMappingURL=hello.js.map