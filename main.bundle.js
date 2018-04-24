webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  text-align: center;\n}\n\npre {\n  background: #f5f6f7;\n  padding: 16px 32px 16px 56px;\n  overflow: auto;\n  font-size: 13px;\n}\n\ninput[type='range'] {\n  max-width: 400px;\n  margin: auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div>\n\n    <h1>\n      ng-dblclick directive\n    </h1>\n\n    <h3>\n      basic: (click) / (dblclick)\n    </h3>\n\n    <pre><code class=\"language-html\">   <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">button</span> (<span class=\"hljs-attribute\">click</span>)=<span class=\"hljs-value\">\"onClick()\"</span> (<span class=\"hljs-attribute\">dblclick</span>)=<span class=\"hljs-value\">\"onDblclick()\"</span>&gt;</span> Click<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">button</span>&gt;</span>\n    </code></pre>\n\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"click = click + 1\" (dblclick)=\"dblclick = dblclick + 1\">Click\n    </button>\n    <button type=\"button\" class=\"btn btn-warning\" (click)=\"click = 0; dblclick = 0;\">clear</button>\n\n    <p>\n      <b>click:</b> {{click}} <br>\n      <b>dblclick:</b>{{dblclick}}\n    </p>\n  </div>\n\n  <div>\n\n    <h3>\n      ngDblClick: (on-click) / (on-dblclick)\n    </h3>\n\n    <pre><code class=\"language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">button</span> [<span class=\"hljs-attribute\">ngDblClick</span>]=<span class=\"hljs-value\">\"deley\"</span> (<span class=\"hljs-attribute\">on-click</span>)=<span class=\"hljs-value\">\"onClick()\"</span> (<span class=\"hljs-attribute\">on-dblclick</span>)=<span class=\"hljs-value\">\"onDblClick()\"</span>&gt;</span>Click<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">button</span>&gt;</span>\n    </code></pre>\n\n    <button type=\"button\"\n            class=\"btn btn-success\"\n            [ngDblClick]=\"delay\"\n            (mouseup)=\"startTimer()\"\n            (on-click)=\"ngClick = ngClick + 1\"\n            (on-dblclick)=\"ngDblClick = ngDblClick + 1\">\n      Click {{ timer }}\n    </button>\n    <button\n      type=\"button\"\n      class=\"btn btn-warning\"\n      (click)=\"ngClick = 0; ngDblClick = 0; delay = 300\">\n      Reset\n    </button>\n    <h4>delay: </h4>\n    <input type=\"range\" min=\"100\" max=\"600\" step=\"100\" [value]=\"delay\" (change)=\"delay = $event.target.value\"/>\n    {{ delay }}\n    <p>\n      <b>click:</b> {{ngClick}} <br>\n      <b>dblclick:</b> {{ngDblClick}}\n    </p>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_interval__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeWhile__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeWhile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.click = 0;
        this.dblclick = 0;
        this.ngClick = 0;
        this.ngDblClick = 0;
        this.delay = 300;
        this.timer = 0;
    }
    AppComponent.prototype.startTimer = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].interval()
            .takeWhile(function (v) { return v <= +_this.delay / 10; })
            .do(function (v) { return _this.timer = v * 10; })
            .filter(function (v) { return v === +_this.delay / 10; })
            .do(function () { return _this.timer = 0; })
            .subscribe();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_dblclick__ = __webpack_require__("../../../../ng-dblclick/dist/public_api.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_dblclick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_dblclick__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ng_dblclick__["NgDbclickModule"]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map