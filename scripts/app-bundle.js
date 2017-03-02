define('app',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            config.options.pushState = true;
            config.title = 'Melasi leyfaw';
            config.map([
                { route: 'koyla', moduleId: 'koyla/koyla', name: 'koylaPage', nav: true, title: 'Koyla' },
                { route: 'latay', moduleId: 'latay/latay', name: 'latayPage', nav: true, title: 'Latay' }
            ]);
            this.router = router;
        };
        return App;
    }());
    exports.App = App;
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Promise.config({
        warnings: {
            wForgottenReturn: false
        }
    });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

define('koyla/koyla',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Koyla = (function () {
        function Koyla() {
            this.message = 'Se ya Koyla!';
        }
        return Koyla;
    }());
    exports.Koyla = Koyla;
});

define('latay/latay',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Latay = (function () {
        function Latay() {
            this.message = 'Se ya Latay!';
        }
        return Latay;
    }());
    exports.Latay = Latay;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('navig-bar/navig-bar',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NavigBar = (function () {
        function NavigBar() {
            this.router = null;
        }
        return NavigBar;
    }());
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], NavigBar.prototype, "router", void 0);
    exports.NavigBar = NavigBar;
});

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"bootstrap/css/bootstrap.css\"></require><require from=\"./styles.css\"></require><require from=\"navig-bar/navig-bar\"></require><navig-bar router.bind=\"router\"></navig-bar><div class=\"container\"><div class=\"row\"><router-view class=\"col-md-8\"></router-view></div></div></template>"; });
define('text!koyla/koyla.html', ['module'], function(module) { module.exports = "<template><h1>${message}</h1></template>"; });
define('text!latay/latay.html', ['module'], function(module) { module.exports = "<template><h1>${message}</h1></template>"; });
define('text!navig-bar/navig-bar.html', ['module'], function(module) { module.exports = "<template><nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\"><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"><span class=\"sr-only\">Toggle Navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span></button> <a class=\"navbar-brand\" href=\"#\"><i class=\"fa fa-home\"></i> <span>${router.title}</span></a></div><div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\"><ul class=\"nav navbar-nav\"><li repeat.for=\"row of router.navigation\" class=\"${row.isActive ? 'active' : ''}\"><a data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1.in\" href.bind=\"row.href\">${row.title}</a></li></ul><ul class=\"nav navbar-nav navbar-right\"><li class=\"loader\" if.bind=\"router.isNavigating\"><i class=\"fa fa-spinner fa-spin fa-2x\"></i></li></ul></div></nav></template>"; });
define('text!styles.css', ['module'], function(module) { module.exports = "h1 {\n    margin-top: 50%;\n    text-align: center;\n}"; });
//# sourceMappingURL=app-bundle.js.map