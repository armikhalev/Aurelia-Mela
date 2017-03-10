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

define('main',["require", "exports", "./environment", "bootstrap"], function (require, exports, environment_1) {
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

define('messages',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var WordUpdated = (function () {
        function WordUpdated(word) {
            this.word = word;
        }
        return WordUpdated;
    }());
    exports.WordUpdated = WordUpdated;
});

define('koyla/koyla',["require", "exports", "aurelia-fetch-client"], function (require, exports, aurelia_fetch_client_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Koyla = (function () {
        function Koyla() {
            this.translation = 'translation';
            this.lang = 'english';
            this.langToTranslate = 'mela';
            this.http = new aurelia_fetch_client_1.HttpClient();
            this.http.configure(function (config) {
                config
                    .useStandardConfiguration()
                    .withBaseUrl('http://0.0.0.0:8000/koyla/');
            });
        }
        ;
        Koyla.prototype.submitWord = function () {
            var _this = this;
            this.http.fetch(this.lang + "/" + this.word)
                .then(function (response) { return response.json(); })
                .then(function (data) {
                if (_this.langToTranslate === 'english') {
                    _this.translation = data[0].word;
                }
                else {
                    _this.translation = data[0].la;
                }
            });
        };
        ;
        Koyla.prototype.changeLanguage = function () {
            this.lang = this.lang === "english" ? "mela" : "english";
            this.langToTranslate = this.langToTranslate === "mela" ? "english" : "mela";
        };
        return Koyla;
    }());
    exports.Koyla = Koyla;
});

define('latay/latay',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Latay = (function () {
        function Latay() {
            this.cards = [
                {
                    front: "A",
                    back: "Makes any word an infinitive verb",
                    flip: false
                },
                {
                    front: "E",
                    back: "Mark of a direct object, accusative case",
                    flip: false
                },
                {
                    front: "I",
                    back: "And",
                    flip: false
                },
                {
                    front: "O",
                    back: "Honorification, high style, politeness.'Omaw - please'.",
                    flip: false
                },
                {
                    front: "U",
                    back: "Some",
                    flip: false
                }
            ];
        }
        Latay.prototype.flipCard = function (_card) {
            _card.flip = !_card.flip;
        };
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

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/attributes/on-enter',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var OnEnter = (function () {
        function OnEnter(element) {
            var _this = this;
            this.element = element;
            this.onEnter = function (ev) {
                if (ev.keyCode !== 13)
                    return;
                _this.action();
            };
        }
        OnEnter.prototype.attached = function () {
            this.element.addEventListener("keyup", this.onEnter);
        };
        OnEnter.prototype.valueChanged = function (func) {
            this.action = func;
        };
        OnEnter.prototype.detached = function () {
            this.element.removeEventListener("keyup", this.onEnter);
        };
        return OnEnter;
    }());
    OnEnter = __decorate([
        aurelia_framework_1.autoinject,
        aurelia_framework_1.customAttribute('on-enter'),
        __metadata("design:paramtypes", [Element])
    ], OnEnter);
    exports.OnEnter = OnEnter;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"bootstrap/css/bootstrap.css\"></require><require from=\"./styles.css\"></require><require from=\"navig-bar/navig-bar\"></require><navig-bar router.bind=\"router\"></navig-bar><div class=\"container\"><router-view></router-view></div></template>"; });
define('text!styles.css', ['module'], function(module) { module.exports = "body {\n  padding-top: 65px; }\n\nh1 {\n  margin-top: 50%;\n  text-align: center; }\n"; });
define('text!koyla/koyla.html', ['module'], function(module) { module.exports = "<template><require from=\"resources/attributes/on-enter\"></require><require from=\"./koyla.css\"></require><div id=\"koyla_page\" class=\"row text-center col-xs-offset-4 col-xs-4\"><button type=\"submit\" id=\"changeLanguageBtn\" class=\"btn btn-primary\" click.delegate=\"changeLanguage()\">Change language</button><form><div class=\"form-group\"><label id=\"languageTranslatedFromHeader\" class=\"formHeader\" for=\"wordToTranslate\">${lang}</label><input on-enter.call=\"submitWord()\" type=\"text\" placeholder=\"Type any word to translate\" id=\"wordToTranslate\" class=\"form-control wordToTranslate\" value.bind=\"word\"><br></div><button type=\"submit\" id=\"submitBtn\" class=\"btn btn-success\" click.delegate=\"submitWord()\">Submit</button></form><div class=\"row\"><label id=\"languageTranslatedToHeader\" class=\"formHeader\">${langToTranslate}</label><div id=\"translation\" class=\"translationDiv well well-lg\">${translation}</div></div></div></template>"; });
define('text!latay/latay.html', ['module'], function(module) { module.exports = "<template><require from=\"./latay.css\"></require><div class=\"latayPage\"><div repeat.for=\"card of cards\" click.delegate=\"flipCard(card)\" class=\"flipContainer ${ card.flip === true ? 'flip' : ''}\"><div class=\"flipper\"><div class=\"card frontCard\">${card.front}</div><div class=\"card backCard\">${card.back}</div></div></div></div></template>"; });
define('text!koyla/koyla.css', ['module'], function(module) { module.exports = ".formHeader {\n  margin-top: 24px;\n  color: tan;\n  font-size: 24px; }\n  .formHeader:first-letter {\n    text-transform: capitalize; }\n\n.translationDiv {\n  color: chocolate;\n  font-size: 26px; }\n"; });
define('text!navig-bar/navig-bar.html', ['module'], function(module) { module.exports = "<template><nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\"><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"><span class=\"sr-only\">Toggle Navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span></button> <a class=\"navbar-brand\" href=\"#\"><i class=\"fa fa-home\"></i> <span>${router.title}</span></a></div><div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\"><ul class=\"nav navbar-nav\"><li repeat.for=\"row of router.navigation\" class=\"${row.isActive ? 'active' : ''}\"><a data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1.in\" href.bind=\"row.href\">${row.title}</a></li></ul><ul class=\"nav navbar-nav navbar-right\"><li class=\"loader\" if.bind=\"router.isNavigating\"><i class=\"fa fa-spinner fa-spin fa-2x\"></i></li></ul></div></nav></template>"; });
define('text!latay/latay.css', ['module'], function(module) { module.exports = ".latayPage {\n  position: relative;\n  display: inline-flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  top: 25px; }\n\n.flipContainer {\n  perspective: 1000px;\n  position: relative;\n  height: 200px;\n  width: 16%; }\n\n/* flip speed goes here */\n.flipper {\n  transition: 0.6s;\n  transform-style: preserve-3d;\n  position: relative;\n  text-align: center;\n  font-size: x-large;\n  background-color: darkkhaki;\n  height: 100%;\n  display: flex;\n  justify-content: center; }\n\n/* hide back of pane during swap */\n.frontCard, .backCard {\n  backface-visibility: hidden;\n  position: absolute;\n  top: 25%; }\n\n/* front pane, placed above back */\n.frontCard {\n  z-index: 2;\n  /* for firefox 31 */\n  transform: rotateY(0deg); }\n\n/* back, initially hidden pane */\n.backCard {\n  transform: rotateY(180deg); }\n\n.flipContainer.flip .flipper {\n  transform: rotateY(180deg); }\n"; });
//# sourceMappingURL=app-bundle.js.map