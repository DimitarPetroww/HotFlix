(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+rn0":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/alert/alert.component */ "VYMa");







function LoginComponent_app_alert_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-alert", 12);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("message", ctx_r0.error);
} }
function LoginComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Email is in incorrect format ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    }
    submitHandler(fV) {
        this.userService.login(fV).subscribe(res => this.router.navigate(["/browse"]), err => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(4000).subscribe(_ => this.error = undefined);
            this.error = err.error.message;
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 17, vars: 10, consts: [[3, "message", 4, "ngIf"], ["action", "", 1, "login-box", 3, "ngSubmit"], ["f", "ngForm"], [1, "textbox"], ["class", "error", 4, "ngIf"], [1, "fas", "fa-user"], ["type", "text", "placeholder", "Email", "name", "email", "ngModel", "", "required", "", 3, "pattern"], ["email", "ngModel"], [1, "fas", "fa-lock"], ["type", "password", "placeholder", "Password", "name", "password", "ngModel", "", "required", ""], ["password", "ngModel"], ["type", "submit", "value", "Sign In", 1, "btn", 3, "disabled"], [3, "message"], [1, "error"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LoginComponent_app_alert_0_Template, 1, 1, "app-alert", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2); return ctx.submitHandler(_r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, LoginComponent_p_6_Template, 2, 0, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, LoginComponent_p_7_Template, 2, 0, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, LoginComponent_p_12_Template, 2, 0, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r4.touched && (_r4.errors == null ? null : _r4.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r4.touched && (_r4.errors == null ? null : _r4.errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("input-error", _r4.touched && _r4.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pattern", ctx.regex);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r6.touched && (_r6.errors == null ? null : _r6.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("input-error", _r6.touched && _r6.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r1.invalid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["PatternValidator"], _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__["AlertComponent"]], styles: [".login-box[_ngcontent-%COMP%] {\r\n    width: 280px;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    color: white;\r\n}\r\n.login-box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 40px;\r\n    border-bottom: 6px solid #E50914;\r\n    margin-bottom: 50px;\r\n    padding: 13px 0;\r\n}\r\n.textbox[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    overflow: hidden;\r\n    font-size: 20px;\r\n    padding: 8px 0;\r\n    margin: 8px 0;\r\n    border-bottom: 1px solid #E50914;\r\n}\r\n.textbox[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    width: 26px;\r\n    float: left;\r\n    text-align: center;\r\n}\r\n.textbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    border: none;\r\n    outline: none;\r\n    background: none;\r\n    color:white;\r\n    font-size: 18px;\r\n    width: 80%;\r\n    float: left;\r\n    margin: 0 10px;\r\n}\r\n.btn[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    background: none;\r\n    border: 2.5px solid #E50914;\r\n    color: white;\r\n    cursor: pointer;\r\n    margin: 12 0;\r\n    font-size: 18px;\r\n}\r\n[_ngcontent-%COMP%]::placeholder {\r\n    color:white;\r\n    opacity: 1; \r\n}\r\np.error[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    border-radius: 0.3em;\r\n    font-size: small;\r\n    color: red;\r\n    padding-top: 0;\r\n    margin-bottom: 2px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQ0FBZ0M7SUFDaEMsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxhQUFhO0lBQ2IsZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGVBQWU7SUFDZixVQUFVO0lBQ1YsV0FBVztJQUNYLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tYm94IHtcclxuICAgIHdpZHRoOiAyODBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmxvZ2luLWJveCBoMSB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiA2cHggc29saWQgI0U1MDkxNDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAxM3B4IDA7XHJcbn1cclxuLnRleHRib3gge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFNTA5MTQ7XHJcbn1cclxuLnRleHRib3ggaSB7XHJcbiAgICB3aWR0aDogMjZweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi50ZXh0Ym94IGlucHV0IHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW46IDAgMTBweDtcclxufVxyXG4uYnRuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogMi41cHggc29saWQgI0U1MDkxNDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbjogMTIgMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG46OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgb3BhY2l0eTogMTsgXHJcbn1cclxucC5lcnJvciB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4zZW07XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG59Il19 */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\pc\Desktop\SoftUni\asd\client\src\main.ts */"zUnb");


/***/ }),

/***/ "1Bbi":
/*!*************************************************!*\
  !*** ./src/app/core/browse/browse.component.ts ***!
  \*************************************************/
/*! exports provided: BrowseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseComponent", function() { return BrowseComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/movie.service */ "HGT+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/alert/alert.component */ "VYMa");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");








function BrowseComponent_app_alert_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-alert", 5);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("message", ctx_r0.error);
} }
const _c0 = function (a1) { return ["/details", a1]; };
function BrowseComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](movie_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", movie_r3.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Genre: ", movie_r3.genre, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, movie_r3._id));
} }
const _c1 = function (a0) { return { "page": a0 }; };
function BrowseComponent_nav_4_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c1, ctx_r4.page - 1));
} }
function BrowseComponent_nav_4_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r7 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", x_r7 === ctx_r5.page);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c1, x_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](x_r7);
} }
function BrowseComponent_nav_4_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c1, ctx_r6.page + 1));
} }
function BrowseComponent_nav_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BrowseComponent_nav_4_a_1_Template, 2, 3, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, BrowseComponent_nav_4_li_3_Template, 3, 6, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, BrowseComponent_nav_4_a_4_Template, 2, 3, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.page - 1 > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.pages);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.page - ctx_r2.pages.length < 0);
} }
class BrowseComponent {
    constructor(movieService, route) {
        this.movieService = movieService;
        this.route = route;
    }
    ngOnInit() {
        this.route.queryParams.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(params => {
            this.page = Number(params.page) || 1;
            return this.movieService.loadNextMovies((this.page - 1) * 4);
        })).subscribe(movies => {
            this.movies = movies;
        }, (err) => this.error = err.error.message);
        this.movieService.loadAllMovies().subscribe(x => {
            this.pages = Array.from({ length: Math.ceil(x.length / 4) }, (v, i) => i + 1);
        });
    }
}
BrowseComponent.ɵfac = function BrowseComponent_Factory(t) { return new (t || BrowseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
BrowseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BrowseComponent, selectors: [["app-browse"]], decls: 5, vars: 3, consts: [[3, "message", 4, "ngIf"], [1, "content"], ["fxLayout", "row wrap", "fxLayoutGap", "16px grid"], ["fxFlex", "25%", "fxFlex.xs", "100%", "fxFlex.sm", "33%", 4, "ngFor", "ngForOf"], ["data-pagination", "", 4, "ngIf"], [3, "message"], ["fxFlex", "25%", "fxFlex.xs", "100%", "fxFlex.sm", "33%"], [1, "mat-elevation-z4"], ["mat-card-image", "", 3, "src"], [1, "btn", "btn-md", "btn-primary", 3, "routerLink"], ["data-pagination", ""], ["routerLink", "/browse", 3, "queryParams", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["routerLink", "/browse", 3, "queryParams"], [1, "fas", "fa-backward"], [1, "fas", "fa-forward"]], template: function BrowseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, BrowseComponent_app_alert_0_Template, 1, 1, "app-alert", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, BrowseComponent_div_3_Template, 12, 6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, BrowseComponent_nav_4_Template, 5, 3, "nav", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.movies);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.pages && ctx.page && ctx.pages.length > 1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__["AlertComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardActions"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".content[_ngcontent-%COMP%] {\r\n    padding: 16px;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]    > mat-card[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n}\r\n\r\nmat-card-title[_ngcontent-%COMP%] {\r\n  color: white;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%] {\r\n  background-color: rgb(41, 40, 46, 0.7) !important;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  color: white;\r\n  font-weight: 420;\r\n}\r\n\r\ni[_ngcontent-%COMP%]:not(.rating) {\r\n    color: #E50914;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    height: 420px;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n  color: black;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:hover {\r\n  background-color: #ff000d !important;\r\n  color: white;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n  background-color: #E50914 !important;\r\n  border: none !important;\r\n}\r\n\r\nmat-toolbar[_ngcontent-%COMP%] {\r\n    color: #3F51B5 !important;\r\n    background: 000000 !important;\r\n    text-align: center;\r\n}\r\n\r\n.active[_ngcontent-%COMP%] {\r\n  color: #E50914 !important;\r\n}\r\n\r\n[data-pagination][_ngcontent-%COMP%], [data-pagination][_ngcontent-%COMP%]   *[_ngcontent-%COMP%], [data-pagination][_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:before, [data-pagination][_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:after {\r\n  box-sizing: border-box;\r\n  text-rendering: optimizeLegibility;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  font-kerning: auto;\r\n}\r\n\r\n[data-pagination][_ngcontent-%COMP%] {\r\n  font-size: 8pt;\r\n  line-height: 1;\r\n  font-weight: 400;\r\n  font-family: 'Open Sans', 'Source Sans Pro', Roboto, 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', 'Myriad Pro', 'Segoe UI', Myriad, Helvetica, 'Lucida Grande', 'DejaVu Sans Condensed', 'Liberation Sans', 'Nimbus Sans L', Tahoma, Geneva, Arial, sans-serif;\r\n  -webkit-text-size-adjust: 100%;\r\n  margin: 1em auto;\r\n  text-align: center;\r\n  transition: font-size .2s ease-in-out;\r\n}\r\n\r\n[data-pagination][_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n  display: inline;\r\n  font-size: 100%;\r\n  margin: 0;\r\n  padding: .5em;\r\n}\r\n\r\n[data-pagination][_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  font-size: 100%;\r\n  width: auto;\r\n  border-radius: 3px;\r\n}\r\n\r\n[data-pagination][_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n  font-size: 140%;\r\n}\r\n\r\n[data-pagination][_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: white;\r\n  font-size: 100%;\r\n  padding: .5em;\r\n}\r\n\r\n[data-pagination][_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, [data-pagination][_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: #E50914;\r\n  text-decoration: none;\r\n}\r\n\r\n[data-pagination][_ngcontent-%COMP%]   li.current[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n  color: white;\r\n}\r\n\r\n\r\n\r\n[data-pagination][_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%], [data-pagination][_ngcontent-%COMP%]   [hidden][_ngcontent-%COMP%], [data-pagination][_ngcontent-%COMP%]   [disabled][_ngcontent-%COMP%] {\r\n  opacity: .5;\r\n  pointer-events: none;\r\n}\r\n\r\n@media (min-width: 350px) {\r\n  [data-pagination][_ngcontent-%COMP%] {\r\n    font-size: 10pt;\r\n  }\r\n}\r\n\r\n@media (min-width: 500px) {\r\n  [data-pagination][_ngcontent-%COMP%] {\r\n    font-size: 12pt;\r\n  }\r\n}\r\n\r\n@media (min-width: 700px) {\r\n  [data-pagination][_ngcontent-%COMP%] {\r\n    font-size: 14pt;\r\n  }\r\n}\r\n\r\n@media (min-width: 900px) {\r\n  [data-pagination][_ngcontent-%COMP%] {\r\n    font-size: 16pt;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyb3dzZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxpREFBaUQ7QUFDbkQ7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFDQTtJQUNJLGFBQWE7QUFDakI7O0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMsWUFBWTtBQUNkOztBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLHVCQUF1QjtBQUN6Qjs7QUFDQTtJQUNJLHlCQUF5QjtJQUN6Qiw2QkFBNkI7SUFDN0Isa0JBQWtCO0FBQ3RCOztBQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUNBOzs7O0VBTUUsc0JBQXNCO0VBQ3RCLGtDQUFrQztFQUNsQyxtQ0FBbUM7RUFDbkMsa0NBQWtDO0VBQ2xDLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtSQUFrUjtFQUNsUiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixxQ0FBcUM7QUFDdkM7O0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGVBQWU7RUFDZixTQUFTO0VBQ1QsYUFBYTtBQUNmOztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUNBOztFQUVFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBQ0EsNkJBQTZCOztBQUM3Qjs7O0VBR0UsV0FBVztFQUNYLG9CQUFvQjtBQUN0Qjs7QUFDQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUNBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6ImJyb3dzZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxufVxyXG5cclxuLmNvbnRlbnQgPiBtYXQtY2FyZCB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbn1cclxubWF0LWNhcmQtdGl0bGUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5tYXQtY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA0MCwgNDYsIDAuNykgIWltcG9ydGFudDtcclxufVxyXG5wIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDQyMDtcclxufVxyXG5pOm5vdCgucmF0aW5nKSB7XHJcbiAgICBjb2xvcjogI0U1MDkxNDtcclxufVxyXG5pbWcge1xyXG4gICAgaGVpZ2h0OiA0MjBweDtcclxufVxyXG5hOmhvdmVyIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwZCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTUwOTE0ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxubWF0LXRvb2xiYXIge1xyXG4gICAgY29sb3I6ICMzRjUxQjUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IDAwMDAwMCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5hY3RpdmUge1xyXG4gIGNvbG9yOiAjRTUwOTE0ICFpbXBvcnRhbnQ7XHJcbn1cclxuW2RhdGEtcGFnaW5hdGlvbl0sXHJcbltkYXRhLXBhZ2luYXRpb25dICosXHJcbltkYXRhLXBhZ2luYXRpb25dICo6YmVmb3JlLFxyXG5bZGF0YS1wYWdpbmF0aW9uXSAqOmFmdGVyIHtcclxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gIGZvbnQta2VybmluZzogYXV0bztcclxufVxyXG5bZGF0YS1wYWdpbmF0aW9uXSB7XHJcbiAgZm9udC1zaXplOiA4cHQ7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsICdTb3VyY2UgU2FucyBQcm8nLCBSb2JvdG8sICdIZWx2ZXRpY2FOZXVlLUxpZ2h0JywgJ0hlbHZldGljYSBOZXVlIExpZ2h0JywgJ0hlbHZldGljYSBOZXVlJywgJ015cmlhZCBQcm8nLCAnU2Vnb2UgVUknLCBNeXJpYWQsIEhlbHZldGljYSwgJ0x1Y2lkYSBHcmFuZGUnLCAnRGVqYVZ1IFNhbnMgQ29uZGVuc2VkJywgJ0xpYmVyYXRpb24gU2FucycsICdOaW1idXMgU2FucyBMJywgVGFob21hLCBHZW5ldmEsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcclxuICBtYXJnaW46IDFlbSBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiBmb250LXNpemUgLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcbltkYXRhLXBhZ2luYXRpb25dIHVsIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIGZvbnQtc2l6ZTogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogLjVlbTtcclxufVxyXG5bZGF0YS1wYWdpbmF0aW9uXSB1bCBsaSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTAwJTtcclxuICB3aWR0aDogYXV0bztcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuW2RhdGEtcGFnaW5hdGlvbl0gPiBhIHtcclxuICBmb250LXNpemU6IDE0MCU7XHJcbn1cclxuW2RhdGEtcGFnaW5hdGlvbl0gYSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTAwJTtcclxuICBwYWRkaW5nOiAuNWVtO1xyXG59XHJcbltkYXRhLXBhZ2luYXRpb25dIGE6Zm9jdXMsXHJcbltkYXRhLXBhZ2luYXRpb25dIGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjRTUwOTE0O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5bZGF0YS1wYWdpbmF0aW9uXSBsaS5jdXJyZW50ID4gYSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi8qIERpc2FibGVkICYgSGlkZGVuIFN0eWxlcyAqL1xyXG5bZGF0YS1wYWdpbmF0aW9uXSAuZGlzYWJsZWQsXHJcbltkYXRhLXBhZ2luYXRpb25dIFtoaWRkZW5dLFxyXG5bZGF0YS1wYWdpbmF0aW9uXSBbZGlzYWJsZWRdIHtcclxuICBvcGFjaXR5OiAuNTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMzUwcHgpIHtcclxuICBbZGF0YS1wYWdpbmF0aW9uXSB7XHJcbiAgICBmb250LXNpemU6IDEwcHQ7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA1MDBweCkge1xyXG4gIFtkYXRhLXBhZ2luYXRpb25dIHtcclxuICAgIGZvbnQtc2l6ZTogMTJwdDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XHJcbiAgW2RhdGEtcGFnaW5hdGlvbl0ge1xyXG4gICAgZm9udC1zaXplOiAxNHB0O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHtcclxuICBbZGF0YS1wYWdpbmF0aW9uXSB7XHJcbiAgICBmb250LXNpemU6IDE2cHQ7XHJcbiAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "3GR4":
/*!*********************************************!*\
  !*** ./src/app/core/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





function HomeComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Watch movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Check what movies we have after signing up");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Do you already have an account?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Sign in right now and have fun");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "If you dont have an account? Please, Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Sign up and have fun");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Sign in");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class HomeComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    ngOnInit() {
        if (this.userService.isLogged) {
            this.router.navigate(["/browse"]);
        }
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["ngbd-carousel-navigation"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarouselConfig"]] // add NgbCarouselConfig to the component providers
        )], decls: 4, vars: 0, consts: [[1, "carousel-container"], ["ngbSlide", ""], [1, "carousel-item", "active", 2, "background-image", "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80')"], [1, "container"], [1, "carousel-item", "active", 2, "background-image", "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1594908900066-3f47337549d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80)"], ["routerLink", "/user/login", 1, "btn", "btn-lg", "btn-primary"], [1, "carousel-item", "active", 2, "background-image", "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(https://images.unsplash.com/photo-1586899028174-e7098604235b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80)"], ["routerLink", "/user/register", 1, "btn", "btn-lg", "btn-primary"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-carousel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_ng_template_1_Template, 6, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HomeComponent_ng_template_2_Template, 8, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HomeComponent_ng_template_3_Template, 8, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".carousel-container[_ngcontent-%COMP%] {\r\n    height: 115%;\r\n}\r\n.carousel-item[_ngcontent-%COMP%] {\r\n    height: 46rem;\r\n    background: #777;\r\n    color: white;\r\n    position: relative;\r\n    background-position: center;\r\n    background-size: cover;\r\n}\r\n.container[_ngcontent-%COMP%] { \r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    padding-bottom: 70px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0Isc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1Isb0JBQW9CO0FBQ3hCIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJvdXNlbC1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMTUlO1xyXG59XHJcbi5jYXJvdXNlbC1pdGVtIHtcclxuICAgIGhlaWdodDogNDZyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjNzc3O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7IFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDcwcHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "7UCR":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "+rn0");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ "cEwO");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/profile.component */ "D5oR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../material/material.module */ "hctd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");












class UserModule {
}
UserModule.ɵfac = function UserModule_Factory(t) { return new (t || UserModule)(); };
UserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: UserModule });
UserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](UserModule, { declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"]] }); })();


/***/ }),

/***/ "8rb8":
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");










const _c0 = function () { return { exact: true }; };
function HeaderComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "HOME");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function HeaderComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "BROWSE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CREATE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "PROFILE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_12_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.logout($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "SIGN OUT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "LOGIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "REGISTER");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.sidenavToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onToggleSidenav = () => {
            this.sidenavToggle.emit();
        };
    }
    get isLogged() {
        return this.userService.isLogged;
    }
    ngOnInit() {
    }
    logout(event) {
        event.preventDefault();
        this.userService.logout().subscribe({
            next: () => {
                this.router.navigate(["/"]);
            },
            error: (error) => console.log(error.message)
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], outputs: { sidenavToggle: "sidenavToggle" }, decls: 15, vars: 7, consts: [["color", "dark"], ["fxHide.gt-xs", ""], ["mat-icon-button", "", 3, "click"], ["color", "accent", 1, "toggle"], ["fxFlex", "", "fxLayout", "", "fxLayoutAlign", "start", "fxHide.xs", ""], ["routerLink", "/", "routerLinkActive", "active", 3, "routerLinkActiveOptions", 4, "ngIf"], ["routerLink", "/browse", "routerLinkActive", "active", 4, "ngIf"], ["routerLink", "/create", "routerLinkActive", "active", 4, "ngIf"], ["fxFlex", "", "fxLayout", "", "fxLayoutAlign", "end", "fxHide.xs", ""], ["fxLayout", "", "fxLayoutGap", "15px", 1, "navigation-items"], [4, "ngIf"], ["routerLink", "/", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/browse", "routerLinkActive", "active"], ["routerLink", "/create", "routerLinkActive", "active"], ["routerLink", "/user/profile", "routerLinkActive", "active"], [3, "click"], ["routerLink", "/user/login", "routerLinkActive", "active"], ["routerLink", "/user/register", "routerLinkActive", "active"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_2_listener() { return ctx.onToggleSidenav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_a_6_Template, 2, 2, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeaderComponent_a_7_Template, 2, 0, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HeaderComponent_a_8_Template, 2, 0, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HeaderComponent_li_11_Template, 3, 0, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HeaderComponent_li_12_Template, 3, 0, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HeaderComponent_li_13_Template, 3, 0, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HeaderComponent_li_14_Template, 3, 0, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLogged);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["DefaultShowHideDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutGapDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: ["a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: white !important;\r\n}\r\na[_ngcontent-%COMP%]:hover{\r\n    cursor: pointer !important;\r\n    text-decoration: none;\r\n    color:  #E50914 !important;\r\n}\r\n.navigation-items[_ngcontent-%COMP%]{\r\n    list-style-type: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n.active[_ngcontent-%COMP%] {\r\n    color: #E50914;\r\n}\r\n.toggle[_ngcontent-%COMP%] {\r\n    color: #E50914 !important;\r\n}\r\ndiv[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n    margin-right: 15px;\r\n}\r\nmat-toolbar[_ngcontent-%COMP%]{\r\n    background-color: #29282E;\r\n}\r\n@media(max-width: 959px){\r\n    mat-toolbar[_ngcontent-%COMP%]{\r\n        border-radius: 0px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksMEJBQTBCO0lBQzFCLHFCQUFxQjtJQUNyQiwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsU0FBUztBQUNiO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5hOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogICNFNTA5MTQgIWltcG9ydGFudDtcclxufVxyXG4ubmF2aWdhdGlvbi1pdGVtc3tcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogI0U1MDkxNDtcclxufVxyXG4udG9nZ2xlIHtcclxuICAgIGNvbG9yOiAjRTUwOTE0ICFpbXBvcnRhbnQ7XHJcbn1cclxuZGl2ID4gYSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxubWF0LXRvb2xiYXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyODJFO1xyXG59XHJcbkBtZWRpYShtYXgtd2lkdGg6IDk1OXB4KXtcclxuICAgIG1hdC10b29sYmFye1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: true
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "D5oR":
/*!***************************************************!*\
  !*** ./src/app/user/profile/profile.component.ts ***!
  \***************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");


class ProfileComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 50, vars: 0, consts: [[1, "container-fluid", "py-5", "mx-auto"], [1, "card", "py-4", "px-4"], [1, "row", "justify-content-start", "px-3"], [1, "image-bg", "mr-3"], ["src", "https://toppng.com/uploads/preview/company-profile-video-production-icon-circle-11569043630cktfusgdy8.png", 1, "user-img", "fit-image"], [1, "text-left"], [1, "btn", "btn-pink", "ml-auto"], [1, "line"], [1, "row", "d-flex", "justify-content-between", "px-3"], [1, "prod-bg", "text-center", "py-1"], ["src", "https://upload.wikimedia.org/wikipedia/en/1/14/Tenet_movie_poster.jpg", 1, "prod-pic"], ["src", "https://m.media-amazon.com/images/M/MV5BMjI0NmFkYzEtNzU2YS00NTg5LWIwYmMtNmQ1MTU0OGJjOTMxXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_.jpg", 1, "prod-pic"], ["href", "#", 1, "prod-bg", "text-center", "py-1"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Test");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Test@abv.bg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Liked Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "My Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]], styles: [".line[_ngcontent-%COMP%] {\r\n    height: 1px;\r\n    background-color: #EEEEEE;\r\n    width: 100%;\r\n    margin: 35px 0px\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n    width: 650px;\r\n    margin: auto\r\n}\r\n.user-img[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n    height: 100px;\r\n    border-radius: 50%;\r\n    cursor: pointer\r\n}\r\n.btn-pink[_ngcontent-%COMP%] {\r\n    background-color:#E50914;\r\n    color: #fff !important;\r\n    height: 70px;\r\n    padding: 20px 30px;\r\n    margin-top: 15px\r\n}\r\n.btn-pink[_ngcontent-%COMP%]:hover {\r\n    background-color: #E50914;\r\n}\r\n.image-bg[_ngcontent-%COMP%] {\r\n    width: 100px\r\n}\r\n.fit-image[_ngcontent-%COMP%] {\r\n    object-fit: cover;\r\n    width: 100%\r\n}\r\n.prod-pic[_ngcontent-%COMP%] {\r\n    width: 80px;\r\n    height: 100px;\r\n    cursor: pointer\r\n}\r\n.prod-bg[_ngcontent-%COMP%] {\r\n    width: 19.5%;\r\n    height: 110px;\r\n    margin-bottom: 10px\r\n}\r\n@media screen and (max-width: 677px) {\r\n    .card[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        margin: auto\r\n    }\r\n\r\n    .btn-pink[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        height: 40px;\r\n        padding: 6px 30px\r\n    }\r\n\r\n    .prod-bg[_ngcontent-%COMP%] {\r\n        width: 33%;\r\n        height: 110px;\r\n        background-color: #E0E0E0\r\n    }\r\n\r\n    .more[_ngcontent-%COMP%] {\r\n        width: 66%\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsV0FBVztJQUNYO0FBQ0o7QUFDQTtJQUNJLFlBQVk7SUFDWjtBQUNKO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQjtBQUNKO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEI7QUFDSjtBQUVBO0lBQ0kseUJBQXlCO0FBQzdCO0FBRUE7SUFDSTtBQUNKO0FBRUE7SUFDSSxpQkFBaUI7SUFDakI7QUFDSjtBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYjtBQUNKO0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiO0FBQ0o7QUFHQTtJQUNJO1FBQ0ksV0FBVztRQUNYO0lBQ0o7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaO0lBQ0o7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsYUFBYTtRQUNiO0lBQ0o7O0lBRUE7UUFDSTtJQUNKO0FBQ0oiLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpbmUge1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDM1cHggMHB4XHJcbn1cclxuLmNhcmQge1xyXG4gICAgd2lkdGg6IDY1MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvXHJcbn1cclxuLnVzZXItaW1nIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXJcclxufVxyXG4uYnRuLXBpbmsge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojRTUwOTE0O1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHhcclxufVxyXG5cclxuLmJ0bi1waW5rOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNTA5MTQ7XHJcbn1cclxuXHJcbi5pbWFnZS1iZyB7XHJcbiAgICB3aWR0aDogMTAwcHhcclxufVxyXG5cclxuLmZpdC1pbWFnZSB7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIHdpZHRoOiAxMDAlXHJcbn1cclxuXHJcbi5wcm9kLXBpYyB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXJcclxufVxyXG5cclxuLnByb2QtYmcge1xyXG4gICAgd2lkdGg6IDE5LjUlO1xyXG4gICAgaGVpZ2h0OiAxMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHhcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY3N3B4KSB7XHJcbiAgICAuY2FyZCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvXHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1waW5rIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgcGFkZGluZzogNnB4IDMwcHhcclxuICAgIH1cclxuXHJcbiAgICAucHJvZC1iZyB7XHJcbiAgICAgICAgd2lkdGg6IDMzJTtcclxuICAgICAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFMEUwRTBcclxuICAgIH1cclxuXHJcbiAgICAubW9yZSB7XHJcbiAgICAgICAgd2lkdGg6IDY2JVxyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "HGT+":
/*!*******************************************!*\
  !*** ./src/app/services/movie.service.ts ***!
  \*******************************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class MovieService {
    constructor(http) {
        this.http = http;
    }
    loadNextMovies(offset) {
        return this.http.get(`/api/movies?offset=${offset}`, { withCredentials: true });
    }
    loadAllMovies() {
        return this.http.get(`/api/movies`, { withCredentials: true });
    }
    loadMovieById(id) {
        return this.http.get("/api/movies/" + id, { withCredentials: true });
    }
    createMovie(data) {
        return this.http.post("/api/movies", data, { withCredentials: true });
    }
    editMovie(id, data) {
        return this.http.patch("/api/movies/" + id, data, { withCredentials: true });
    }
    deleteMovie(id) {
        return this.http.delete("/api/movies/" + id, { withCredentials: true });
    }
    likeMovie(movieId) {
        return this.http.put("/api/movies/like", { movieId }, { withCredentials: true });
    }
    comment(data) {
        return this.http.post("/api/movies/comment", data, { withCredentials: true });
    }
    deleteComment(commentId) {
        return this.http.delete("/api/movies/comment/" + commentId, { withCredentials: true });
    }
    likeComment(commentId, movieId) {
        return this.http.put("/api/movies/comment/like", { commentId, movieId }, { withCredentials: true });
    }
    dislikeComment(commentId, movieId) {
        return this.http.put("/api/movies/comment/dislike", { commentId, movieId }, { withCredentials: true });
    }
}
MovieService.ɵfac = function MovieService_Factory(t) { return new (t || MovieService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
MovieService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MovieService, factory: MovieService.ɵfac });


/***/ }),

/***/ "LJYf":
/*!**********************************************!*\
  !*** ./src/app/movie/edit/edit.component.ts ***!
  \**********************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/movie.service */ "HGT+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/alert/alert.component */ "VYMa");
/* harmony import */ var _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/spinner/spinner.component */ "f3yp");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









function EditComponent_app_alert_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-alert", 3);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("message", ctx_r0.error);
} }
function EditComponent_app_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-spinner");
} }
function EditComponent_div_2_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Movie name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EditComponent_div_2_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Genre is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EditComponent_div_2_p_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Author is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EditComponent_div_2_p_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Description is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EditComponent_div_2_p_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Description must be atleast 10 characters long ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EditComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Edit movie");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function EditComponent_div_2_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.submitHandler(_r3.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Movie Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, EditComponent_div_2_p_9_Template, 2, 0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "input", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EditComponent_div_2_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r15.data.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Genre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, EditComponent_div_2_p_15_Template, 2, 0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Author ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, EditComponent_div_2_p_18_Template, 2, 0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "input", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EditComponent_div_2_Template_input_ngModelChange_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r16.data.genre = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "input", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EditComponent_div_2_Template_input_ngModelChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r17.data.author = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, EditComponent_div_2_p_27_Template, 2, 0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, EditComponent_div_2_p_28_Template, 2, 0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "textarea", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EditComponent_div_2_Template_textarea_ngModelChange_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r18.data.description = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](11);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](21);
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](23);
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](30);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r5.touched && (_r5.errors == null ? null : _r5.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("input-error", _r5.touched && _r5.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.data.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r8.touched && (_r8.errors == null ? null : _r8.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r9.touched && (_r9.errors == null ? null : _r9.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("input-error", _r8.touched && _r8.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.data.genre);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("input-error", _r9.touched && _r9.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.data.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r12.touched && (_r12.errors == null ? null : _r12.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r12.touched && (_r12.errors == null ? null : _r12.errors.minlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("input-error", _r12.touched && _r12.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.data.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", _r3.invalid);
} }
class EditComponent {
    constructor(movieService, router, route) {
        this.movieService = movieService;
        this.router = router;
        this.route = route;
        this.isLoading = false;
    }
    ngOnInit() {
        this.isLoading = true;
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(params => {
            this.movieId = params.id;
            return this.movieService.loadMovieById(this.movieId);
        })).subscribe(movie => {
            this.data = movie;
            this.isLoading = false;
        });
    }
    submitHandler(fV) {
        const data = {
            author: fV.author,
            description: fV.description,
            genre: fV.genre,
            name: fV.name,
        };
        this.isLoading = true;
        this.movieService.editMovie(this.movieId, data)
            .subscribe(res => {
            this.isLoading = false;
            this.router.navigate(["/details", this.movieId]);
        }, err => {
            this.isLoading = false;
            Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(4000).subscribe(_ => this.error = undefined);
            this.error = err.error.message;
        });
    }
}
EditComponent.ɵfac = function EditComponent_Factory(t) { return new (t || EditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
EditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditComponent, selectors: [["app-edit"]], decls: 3, vars: 3, consts: [[3, "message", 4, "ngIf"], [4, "ngIf"], ["class", "container create-trip", 4, "ngIf"], [3, "message"], [1, "container", "create-trip"], [3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["for", "name"], ["class", "error", 4, "ngIf"], ["type", "text", "id", "name", "placeholder", "Movie Name", "name", "name", "ngModel", "", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["movie", "ngModel"], [1, "create-label"], ["for", "genre"], ["for", "author"], [1, "form-group", "create-input"], ["type", "text", "id", "genre", "placeholder", "Genre", "name", "genre", "ngModel", "", "required", "", 1, "form-control-2", 3, "ngModel", "ngModelChange"], ["genre", "ngModel"], ["type", "text", "id", "author", "placeholder", "Author", "name", "author", "ngModel", "", "required", "", 1, "form-control-2", 3, "ngModel", "ngModelChange"], ["author", "ngModel"], ["for", "description"], ["id", "description", "placeholder", "Information about the movie", "name", "description", "ngModel", "", "required", "", "minlength", "10", 1, "form-control", 3, "ngModel", "ngModelChange"], ["description", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "error"]], template: function EditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, EditComponent_app_alert_0_Template, 1, 1, "app-alert", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EditComponent_app_spinner_1_Template, 1, 0, "app-spinner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EditComponent_div_2_Template, 33, 18, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__["AlertComponent"], _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__["SpinnerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["MinLengthValidator"]], styles: ["@import url('https://use.fontawesome.com/releases/v5.12.1/css/all.css');\r\n@import url('https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css');\r\n.create-label[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\nh1[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n.create-input[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n.file[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n  width: 0.1px;\r\n  height: 0.1px;\r\n  position: absolute;\r\n}\r\n.file-label[_ngcontent-%COMP%] {\r\n  display: block;\r\n  position: relative;\r\n  width: 80%;\r\n  height: 50px;\r\n  border-radius: 5px;\r\n  background: linear-gradient(90deg, rgba(245,0,12,1) 0%, rgba(172,38,59,0.7374300061821604) 35%, rgba(245,0,12,1) 100%);\r\n  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.4);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: #fff;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n  transition: transform .2s ease-out;\r\n  margin: 0 auto;\r\n}\r\n.create-trip[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 90px;\r\n}\r\n.form-control-2[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  display: block;\r\n  width: 45%;\r\n  height: calc(1.5em + 0.75rem + 2px);\r\n  padding: 0.375rem 0.75rem;\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n  line-height: 1.5;\r\n  color: #495057;\r\n  background-color: #fff;\r\n  background-clip: padding-box;\r\n  border: 1px solid #ced4da;\r\n  border-radius: 0.25rem;\r\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n}\r\ninput.form-control-2[_ngcontent-%COMP%], textarea.form-control[_ngcontent-%COMP%], input.form-control[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]:disabled {\r\n  background: rgba(0, 0, 0, 0.5);\r\n  color: white;\r\n  border: none;\r\n  outline: none;\r\n}\r\ntextarea[_ngcontent-%COMP%]:disabled {\r\n  width: 100%;\r\n  resize: none;\r\n}\r\n\r\ninput.form-control-2[_ngcontent-%COMP%]::placeholder, textarea.form-control[_ngcontent-%COMP%]::placeholder {\r\n  color: rgb(167, 162, 162);\r\n}\r\ninput.input-error[_ngcontent-%COMP%], textarea.input-error[_ngcontent-%COMP%] {\r\n  border: 1px solid #E50914;\r\n  background: rgba(0, 0, 0, 0.5);\r\n  color: white;\r\n  box-shadow: none;\r\n}\r\ninput.form-control[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\ntextarea[_ngcontent-%COMP%], textarea.form-control[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]:disabled {\r\n  padding: 5px 10px;\r\n  text-align: center;\r\n  border-top-left-radius: 20px;\r\n  border-top-right-radius: 20px;\r\n  word-wrap: break-word;\r\n}\r\ntextarea[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\r\n  background: rgba(0, 0, 0, 0.6);\r\n}\r\nlabel[_ngcontent-%COMP%], .container[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%] {\r\n  color: white;\r\n}\r\nlabel[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n}\r\n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n  resize: none;\r\n}\r\n.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\ni[_ngcontent-%COMP%] {\r\n  color: #0578B9;\r\n}\r\n.btn.btn-primary[_ngcontent-%COMP%] {\r\n  background-color: #E50914;\r\n  border: none;\r\n}\r\n.btn.btn-primary[_ngcontent-%COMP%]:hover {\r\n  background-color: #c72830;\r\n}\r\np.error[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  border-radius: 0.3em;\r\n  font-size: small;\r\n  color: red;\r\n  padding-top: 0;\r\n  margin-bottom: 2px;\r\n  width: 100%;\r\n}\r\n@media(max-width: 360px) {\r\n   .create-trip[_ngcontent-%COMP%]{\r\n    padding-top: 90px;\r\n  }\r\n}\r\n@media(max-width: 540px) {\r\n  .create-trip[_ngcontent-%COMP%]{\r\n   padding-top: 95px;\r\n }\r\n}\r\n@media(max-width: 1024px) {\r\n  .create-trip[_ngcontent-%COMP%]{\r\n   padding-top: 110px;\r\n }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1RUFBdUU7QUFDdkUsb0ZBQW9GO0FBRXBGO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsc0hBQXNIO0VBQ3RILHdDQUF3QztFQUN4QyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQ0FBa0M7RUFDbEMsY0FBYztBQUNoQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxVQUFVO0VBQ1YsbUNBQW1DO0VBQ25DLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHdFQUF3RTtBQUMxRTtBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtBQUNmO0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7Ozs7OztHQU1HO0FBQ0g7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7QUFDQTtHQUNHO0lBQ0MsaUJBQWlCO0VBQ25CO0FBQ0Y7QUFDQTtFQUNFO0dBQ0MsaUJBQWlCO0NBQ25CO0FBQ0Q7QUFDQTtFQUNFO0dBQ0Msa0JBQWtCO0NBQ3BCO0FBQ0QiLCJmaWxlIjoiZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS4xMi4xL2Nzcy9hbGwuY3NzJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjAuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnKTtcclxuXHJcbi5jcmVhdGUtbGFiZWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY3JlYXRlLWlucHV0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4uZmlsZSB7XHJcbiAgb3BhY2l0eTogMDtcclxuICB3aWR0aDogMC4xcHg7XHJcbiAgaGVpZ2h0OiAwLjFweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLmZpbGUtbGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogODAlO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI0NSwwLDEyLDEpIDAlLCByZ2JhKDE3MiwzOCw1OSwwLjczNzQzMDAwNjE4MjE2MDQpIDM1JSwgcmdiYSgyNDUsMCwxMiwxKSAxMDAlKTtcclxuICBib3gtc2hhZG93OiAwIDRweCA3cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyBlYXNlLW91dDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4uY3JlYXRlLXRyaXAgdGV4dGFyZWEuZm9ybS1jb250cm9sIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDkwcHg7XHJcbn1cclxuLmZvcm0tY29udHJvbC0yIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDQ1JTtcclxuICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAwLjc1cmVtICsgMnB4KTtcclxuICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgY29sb3I6ICM0OTUwNTc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbmlucHV0LmZvcm0tY29udHJvbC0yLCB0ZXh0YXJlYS5mb3JtLWNvbnRyb2wsIGlucHV0LmZvcm0tY29udHJvbCwgdGV4dGFyZWE6ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbnRleHRhcmVhOmRpc2FibGVkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICByZXNpemU6IG5vbmU7XHJcbn1cclxuLyogXHJcbi5mb3JtLWdyb3VwIHAge1xyXG4gIGNvbG9yOiAjZjhmOWZhO1xyXG4gIHRleHQtc2hhZG93OiAxcHggMXB4ICNFNTA5MTQ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufSAqL1xyXG5pbnB1dC5mb3JtLWNvbnRyb2wtMjo6cGxhY2Vob2xkZXIsIHRleHRhcmVhLmZvcm0tY29udHJvbDo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiByZ2IoMTY3LCAxNjIsIDE2Mik7XHJcbn1cclxuaW5wdXQuaW5wdXQtZXJyb3IsIHRleHRhcmVhLmlucHV0LWVycm9yIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjRTUwOTE0O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuaW5wdXQuZm9ybS1jb250cm9sIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxudGV4dGFyZWEsIHRleHRhcmVhLmZvcm0tY29udHJvbCwgdGV4dGFyZWE6ZGlzYWJsZWQge1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxufVxyXG5cclxudGV4dGFyZWEsIGlucHV0IHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbn1cclxuXHJcbmxhYmVsLCAuY29udGFpbmVyPmgxIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxubGFiZWwge1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHRleHRhcmVhIHtcclxuICByZXNpemU6IG5vbmU7XHJcbn1cclxuXHJcbi5jb250YWluZXIgZm9ybSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pIHtcclxuICBjb2xvcjogIzA1NzhCOTtcclxufVxyXG4uYnRuLmJ0bi1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTUwOTE0O1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG4uYnRuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzcyODMwO1xyXG59XHJcbnAuZXJyb3Ige1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAwLjNlbTtcclxuICBmb250LXNpemU6IHNtYWxsO1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgcGFkZGluZy10b3A6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbkBtZWRpYShtYXgtd2lkdGg6IDM2MHB4KSB7XHJcbiAgIC5jcmVhdGUtdHJpcHtcclxuICAgIHBhZGRpbmctdG9wOiA5MHB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEobWF4LXdpZHRoOiA1NDBweCkge1xyXG4gIC5jcmVhdGUtdHJpcHtcclxuICAgcGFkZGluZy10b3A6IDk1cHg7XHJcbiB9XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgLmNyZWF0ZS10cmlwe1xyXG4gICBwYWRkaW5nLXRvcDogMTEwcHg7XHJcbiB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "LetT":
/*!**************************************!*\
  !*** ./src/app/shared/validators.ts ***!
  \**************************************/
/*! exports provided: ConfirmedValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmedValidator", function() { return ConfirmedValidator; });
function ConfirmedValidator(controlName, matchingControlName) {
    return (formGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmedValidator: true });
            return ({ confirmedValidator: true });
        }
        else {
            matchingControl.setErrors(null);
        }
        return null;
    };
}


/***/ }),

/***/ "LjNy":
/*!*****************************************************!*\
  !*** ./src/app/core/side-nav/side-nav.component.ts ***!
  \*****************************************************/
/*! exports provided: SideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return SideNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");







function SideNavComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideNavComponent_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onSidenavClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SideNavComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideNavComponent_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.onSidenavClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "local_movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "BROWSE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SideNavComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideNavComponent_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.onSidenavClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SideNavComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideNavComponent_a_4_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.onSidenavClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "REGISTER");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SideNavComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideNavComponent_a_5_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.onSidenavClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "lock_open");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "LOGIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SideNavComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideNavComponent_a_6_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.onSidenavClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "face");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "PROFILE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SideNavComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideNavComponent_a_7_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.logout($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "exit_to_app");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "SIGN OUT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SideNavComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.sidenavClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSidenavClose = () => {
            this.sidenavClose.emit();
        };
    }
    get isLogged() {
        return this.userService.isLogged;
    }
    ngOnInit() {
    }
    logout(event) {
        event.preventDefault();
        this.userService.logout().subscribe({
            next: () => {
                this.sidenavClose.emit();
                this.router.navigate(["/"]);
            },
            error: (error) => console.log(error.message)
        });
    }
}
SideNavComponent.ɵfac = function SideNavComponent_Factory(t) { return new (t || SideNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
SideNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SideNavComponent, selectors: [["app-side-nav"]], outputs: { sidenavClose: "sidenavClose" }, decls: 8, vars: 7, consts: [["mat-list-item", "", "routerLink", "/", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/browse", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/create", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/user/register", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/user/login", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/user/profile", 3, "click", 4, "ngIf"], ["mat-list-item", "", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/", 3, "click"], [1, "nav-caption"], ["mat-list-item", "", "routerLink", "/browse", 3, "click"], ["mat-list-item", "", "routerLink", "/create", 3, "click"], ["mat-list-item", "", "routerLink", "/user/register", 3, "click"], ["mat-list-item", "", "routerLink", "/user/login", 3, "click"], ["mat-list-item", "", "routerLink", "/user/profile", 3, "click"], ["mat-list-item", "", 3, "click"]], template: function SideNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideNavComponent_a_1_Template, 5, 0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SideNavComponent_a_2_Template, 5, 0, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SideNavComponent_a_3_Template, 5, 0, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SideNavComponent_a_4_Template, 5, 0, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SideNavComponent_a_5_Template, 5, 0, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SideNavComponent_a_6_Template, 5, 0, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SideNavComponent_a_7_Template, 5, 0, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogged);
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]], styles: ["a[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    color: white;\r\n}\r\na[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:active{\r\n    color: lightgray;\r\n}\r\n.nav-caption[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    padding-left: 6px;\r\n}\r\nmat-icon[_ngcontent-%COMP%] {\r\n    color: #E50914 !important;\r\n}\r\nspan[_ngcontent-%COMP%] {\r\n    color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGUtbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic2lkZS1uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuYTpob3ZlciwgYTphY3RpdmV7XHJcbiAgICBjb2xvcjogbGlnaHRncmF5O1xyXG59XHJcbi5uYXYtY2FwdGlvbntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmctbGVmdDogNnB4O1xyXG59XHJcbm1hdC1pY29uIHtcclxuICAgIGNvbG9yOiAjRTUwOTE0ICFpbXBvcnRhbnQ7XHJcbn1cclxuc3BhbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert/alert.component */ "VYMa");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spinner/spinner.component */ "f3yp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_alert_alert_component__WEBPACK_IMPORTED_MODULE_1__["AlertComponent"],
        _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__["SpinnerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"]], exports: [_alert_alert_component__WEBPACK_IMPORTED_MODULE_1__["AlertComponent"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__["SpinnerComponent"]] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _core_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/side-nav/side-nav.component */ "LjNy");
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/header/header.component */ "8rb8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AppComponent {
    constructor() {
        this.title = 'html3';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 0, consts: [["role", "navigation"], ["sidenav", ""], [3, "sidenavClose"], [3, "sidenavToggle"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-side-nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sidenavClose", function AppComponent_Template_app_side_nav_sidenavClose_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-header", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sidenavToggle", function AppComponent_Template_app_header_sidenavToggle_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenav"], _core_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_2__["SideNavComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavContent"], _core_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["mat-sidenav-container[_ngcontent-%COMP%], mat-sidenav-content[_ngcontent-%COMP%], mat-sidenav[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n}\r\nmat-sidenav[_ngcontent-%COMP%] {\r\n    width: 250px;\r\n    background-color: #29282E;\r\n}\r\nmain[_ngcontent-%COMP%] {\r\n    height: 80%;\r\n}\r\nmat-sidenav-container[_ngcontent-%COMP%] {\r\n    background: transparent;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0IiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtc2lkZW5hdi1jb250YWluZXIsIG1hdC1zaWRlbmF2LWNvbnRlbnQsIG1hdC1zaWRlbmF2IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5tYXQtc2lkZW5hdiB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyODJFO1xyXG59XHJcbm1haW4ge1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbn1cclxubWF0LXNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59Il19 */"] });


/***/ }),

/***/ "Tsbi":
/*!**************************************************!*\
  !*** ./src/app/movie/create/create.component.ts ***!
  \**************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/movie.service */ "HGT+");
/* harmony import */ var src_app_services_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/upload.service */ "jT/F");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/alert/alert.component */ "VYMa");
/* harmony import */ var _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/spinner/spinner.component */ "f3yp");









function CreateComponent_app_alert_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-alert", 28);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("message", ctx_r0.error);
} }
function CreateComponent_app_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-spinner");
} }
function CreateComponent_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Movie name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateComponent_p_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Genre is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateComponent_p_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Author is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateComponent_p_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r9.trailerFileError);
} }
function CreateComponent_p_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r11.imgfileError);
} }
function CreateComponent_p_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Description is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateComponent_p_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Description must be atleast 10 characters long ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class CreateComponent {
    constructor(movieService, uploadService, router) {
        this.movieService = movieService;
        this.uploadService = uploadService;
        this.router = router;
        this.isLoading = false;
        this.imgNameAndSize = "Choose Movie Image";
        this.trailerNameAndSize = "Choose Movie Trailer under 100MB";
        this.imageFile = undefined;
        this.trailerFile = undefined;
    }
    ngOnInit() {
    }
    submitHandler(fV) {
        const data = {
            author: fV.author,
            description: fV.description,
            genre: fV.genre,
            name: fV.name,
        };
        this.isLoading = true;
        Promise.all([
            this.uploadService.upload(this.imageFile).toPromise(),
            this.uploadService.upload(this.trailerFile).toPromise(),
        ]).then(x => {
            const image = x.find(file => file.video === undefined);
            const trailer = x.find(file => file.video !== undefined);
            Object.assign(data, { trailerID: trailer.public_id, trailerUrl: trailer.url, imageID: image.public_id, imageUrl: image.url });
            this.movieService.createMovie(data).subscribe(res => {
                this.isLoading = false;
                this.router.navigate(["/browse"]);
            }, err => {
                this.isLoading = false;
                Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(4000).subscribe(_ => this.error = undefined);
                this.error = err.error.message;
            });
        });
    }
    onImgChange(event) {
        const [file] = event.target.files;
        const { name: fileName, size } = file;
        const fileSize = (size / 1000).toFixed(2);
        this.imgNameAndSize = `${fileName} - ${fileSize}KB`;
        if (!["image/jpg", "image/jpeg", "image/png"].includes(file.type)) {
            this.imageFile = undefined;
            this.imgfileError = "Image should be in image format";
            return undefined;
        }
        this.imgfileError = undefined;
        this.imageFile = file;
    }
    onTrailerChange(event) {
        const [file] = event.target.files;
        const { name: fileName, size } = file;
        const fileSize = (size / 1000).toFixed(2);
        this.trailerNameAndSize = `${fileName} - ${fileSize}KB`;
        if (!["video/mp4", "video/mov", "video/wmv", "video/avi"].includes(file.type)) {
            this.trailerFile = undefined;
            this.trailerFileError = "Trailer should be in video format";
            return undefined;
        }
        if (Number(fileSize) > 100000) {
            this.trailerFile = undefined;
            this.trailerFileError = "Trailer should be under 100MB";
            return undefined;
        }
        this.trailerFileError = undefined;
        this.trailerFile = file;
    }
}
CreateComponent.ɵfac = function CreateComponent_Factory(t) { return new (t || CreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_upload_service__WEBPACK_IMPORTED_MODULE_3__["UploadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
CreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CreateComponent, selectors: [["app-create"]], decls: 47, vars: 20, consts: [[3, "message", 4, "ngIf"], [4, "ngIf"], [1, "container", "create-trip"], [3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["for", "name"], ["class", "error", 4, "ngIf"], ["type", "text", "id", "name", "placeholder", "Movie Name", "name", "name", "ngModel", "", "required", "", 1, "form-control"], ["movie", "ngModel"], [1, "create-label"], ["for", "genre"], ["for", "author"], [1, "form-group", "create-input"], ["type", "text", "id", "genre", "placeholder", "Genre", "name", "genre", "ngModel", "", "required", "", 1, "form-control-2"], ["genre", "ngModel"], ["type", "text", "id", "author", "placeholder", "Author", "name", "author", "ngModel", "", "required", "", 1, "form-control-2"], ["author", "ngModel"], ["for", "trailer", 1, "file-label"], ["type", "file", "name", "trailer", "id", "trailer", "ngModel", "", "required", "", 1, "file", 3, "change"], ["trailer", "ngModel"], ["for", "movieImage", 1, "file-label"], ["type", "file", "name", "image", "id", "movieImage", "ngModel", "", "required", "", 1, "file", 3, "change"], ["img", "ngModel"], ["for", "description"], ["id", "description", "placeholder", "Information about the movie", "name", "description", "ngModel", "", "required", "", "minlength", "10", 1, "form-control"], ["description", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [3, "message"], [1, "error"]], template: function CreateComponent_Template(rf, ctx) { if (rf & 1) {
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CreateComponent_app_alert_0_Template, 1, 1, "app-alert", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CreateComponent_app_spinner_1_Template, 1, 0, "app-spinner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Create movie");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CreateComponent_Template_form_ngSubmit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7); return ctx.submitHandler(_r2.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Movie Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, CreateComponent_p_11_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Genre ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, CreateComponent_p_17_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Author ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, CreateComponent_p_20_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, CreateComponent_p_27_Template, 2, 1, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CreateComponent_Template_input_change_30_listener($event) { return ctx.onTrailerChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, CreateComponent_p_33_Template, 2, 1, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "input", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CreateComponent_Template_input_change_36_listener($event) { return ctx.onImgChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, CreateComponent_p_41_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, CreateComponent_p_42_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "textarea", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](23);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](25);
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r4.touched && (_r4.errors == null ? null : _r4.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("input-error", _r4.touched && _r4.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r7.touched && (_r7.errors == null ? null : _r7.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r8.touched && (_r8.errors == null ? null : _r8.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("input-error", _r7.touched && _r7.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("input-error", _r8.touched && _r8.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.trailerFileError);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.trailerNameAndSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.imgfileError);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.imgNameAndSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r15.touched && (_r15.errors == null ? null : _r15.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r15.touched && (_r15.errors == null ? null : _r15.errors.minlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("input-error", _r15.touched && _r15.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r2.invalid || !ctx.imageFile || !ctx.trailerFile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MinLengthValidator"], _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_7__["AlertComponent"], _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_8__["SpinnerComponent"]], styles: ["@import url('https://use.fontawesome.com/releases/v5.12.1/css/all.css');\r\n@import url('https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css');\r\n.create-label[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\nh1[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n.create-input[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n.file[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n  width: 0.1px;\r\n  height: 0.1px;\r\n  position: absolute;\r\n}\r\n.file-label[_ngcontent-%COMP%] {\r\n  display: block;\r\n  position: relative;\r\n  width: 80%;\r\n  height: 50px;\r\n  border-radius: 5px;\r\n  background: linear-gradient(90deg, rgba(245,0,12,1) 0%, rgba(172,38,59,0.7374300061821604) 35%, rgba(245,0,12,1) 100%);\r\n  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.4);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: #fff;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n  transition: transform .2s ease-out;\r\n  margin: 0 auto;\r\n}\r\n.create-trip[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 90px;\r\n}\r\n.form-control-2[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  display: block;\r\n  width: 45%;\r\n  height: calc(1.5em + 0.75rem + 2px);\r\n  padding: 0.375rem 0.75rem;\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n  line-height: 1.5;\r\n  color: #495057;\r\n  background-color: #fff;\r\n  background-clip: padding-box;\r\n  border: 1px solid #ced4da;\r\n  border-radius: 0.25rem;\r\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n}\r\ninput.form-control-2[_ngcontent-%COMP%], textarea.form-control[_ngcontent-%COMP%], input.form-control[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]:disabled {\r\n  background: rgba(0, 0, 0, 0.5);\r\n  color: white;\r\n  border: none;\r\n  outline: none;\r\n}\r\ntextarea[_ngcontent-%COMP%]:disabled {\r\n  width: 100%;\r\n  resize: none;\r\n}\r\n\r\ninput.form-control-2[_ngcontent-%COMP%]::placeholder, textarea.form-control[_ngcontent-%COMP%]::placeholder {\r\n  color: rgb(167, 162, 162);\r\n}\r\ninput.input-error[_ngcontent-%COMP%], textarea.input-error[_ngcontent-%COMP%] {\r\n  border: 1px solid #E50914;\r\n  background: rgba(0, 0, 0, 0.5);\r\n  color: white;\r\n  box-shadow: none;\r\n}\r\ninput.form-control[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\ntextarea[_ngcontent-%COMP%], textarea.form-control[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]:disabled {\r\n  padding: 5px 10px;\r\n  text-align: center;\r\n  border-top-left-radius: 20px;\r\n  border-top-right-radius: 20px;\r\n  word-wrap: break-word;\r\n}\r\ntextarea[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\r\n  background: rgba(0, 0, 0, 0.6);\r\n}\r\nlabel[_ngcontent-%COMP%], .container[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%] {\r\n  color: white;\r\n}\r\nlabel[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n}\r\n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n  resize: none;\r\n}\r\n.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\ni[_ngcontent-%COMP%] {\r\n  color: #0578B9;\r\n}\r\n.btn.btn-primary[_ngcontent-%COMP%] {\r\n  background-color: #E50914;\r\n  border: none;\r\n}\r\n.btn.btn-primary[_ngcontent-%COMP%]:hover {\r\n  background-color: #c72830;\r\n}\r\np.error[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  border-radius: 0.3em;\r\n  font-size: small;\r\n  color: red;\r\n  padding-top: 0;\r\n  margin-bottom: 2px;\r\n  width: 100%;\r\n}\r\n@media(max-width: 360px) {\r\n   .create-trip[_ngcontent-%COMP%]{\r\n    padding-top: 90px;\r\n  }\r\n}\r\n@media(max-width: 540px) {\r\n  .create-trip[_ngcontent-%COMP%]{\r\n   padding-top: 95px;\r\n }\r\n}\r\n@media(max-width: 1024px) {\r\n  .create-trip[_ngcontent-%COMP%]{\r\n   padding-top: 110px;\r\n }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVFQUF1RTtBQUN2RSxvRkFBb0Y7QUFFcEY7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0FBQy9CO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixzSEFBc0g7RUFDdEgsd0NBQXdDO0VBQ3hDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtDQUFrQztFQUNsQyxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFVBQVU7RUFDVixtQ0FBbUM7RUFDbkMseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsd0VBQXdFO0FBQzFFO0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTs7Ozs7O0dBTUc7QUFDSDtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3QixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQztBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjtBQUNBO0dBQ0c7SUFDQyxpQkFBaUI7RUFDbkI7QUFDRjtBQUNBO0VBQ0U7R0FDQyxpQkFBaUI7Q0FDbkI7QUFDRDtBQUNBO0VBQ0U7R0FDQyxrQkFBa0I7Q0FDcEI7QUFDRCIsImZpbGUiOiJjcmVhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuMTIuMS9jc3MvYWxsLmNzcycpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4wLjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJyk7XHJcblxyXG4uY3JlYXRlLWxhYmVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmNyZWF0ZS1pbnB1dCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLmZpbGUge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgd2lkdGg6IDAuMXB4O1xyXG4gIGhlaWdodDogMC4xcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5maWxlLWxhYmVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyNDUsMCwxMiwxKSAwJSwgcmdiYSgxNzIsMzgsNTksMC43Mzc0MzAwMDYxODIxNjA0KSAzNSUsIHJnYmEoMjQ1LDAsMTIsMSkgMTAwJSk7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggN3B4IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnMgZWFzZS1vdXQ7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuLmNyZWF0ZS10cmlwIHRleHRhcmVhLmZvcm0tY29udHJvbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA5MHB4O1xyXG59XHJcbi5mb3JtLWNvbnRyb2wtMiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiA0NSU7XHJcbiAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgMC43NXJlbSArIDJweCk7XHJcbiAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGNvbG9yOiAjNDk1MDU3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5pbnB1dC5mb3JtLWNvbnRyb2wtMiwgdGV4dGFyZWEuZm9ybS1jb250cm9sLCBpbnB1dC5mb3JtLWNvbnRyb2wsIHRleHRhcmVhOmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG50ZXh0YXJlYTpkaXNhYmxlZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcmVzaXplOiBub25lO1xyXG59XHJcbi8qIFxyXG4uZm9ybS1ncm91cCBwIHtcclxuICBjb2xvcjogI2Y4ZjlmYTtcclxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAjRTUwOTE0O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn0gKi9cclxuaW5wdXQuZm9ybS1jb250cm9sLTI6OnBsYWNlaG9sZGVyLCB0ZXh0YXJlYS5mb3JtLWNvbnRyb2w6OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogcmdiKDE2NywgMTYyLCAxNjIpO1xyXG59XHJcbmlucHV0LmlucHV0LWVycm9yLCB0ZXh0YXJlYS5pbnB1dC1lcnJvciB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0U1MDkxNDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbmlucHV0LmZvcm0tY29udHJvbCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbnRleHRhcmVhLCB0ZXh0YXJlYS5mb3JtLWNvbnRyb2wsIHRleHRhcmVhOmRpc2FibGVkIHtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcbnRleHRhcmVhLCBpbnB1dCB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG59XHJcblxyXG5sYWJlbCwgLmNvbnRhaW5lcj5oMSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbmxhYmVsIHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB0ZXh0YXJlYSB7XHJcbiAgcmVzaXplOiBub25lO1xyXG59XHJcblxyXG4uY29udGFpbmVyIGZvcm0ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaSB7XHJcbiAgY29sb3I6ICMwNTc4Qjk7XHJcbn1cclxuLmJ0bi5idG4tcHJpbWFyeSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U1MDkxNDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLmJ0bi5idG4tcHJpbWFyeTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M3MjgzMDtcclxufVxyXG5wLmVycm9yIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4zZW07XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxuICBjb2xvcjogcmVkO1xyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDJweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5AbWVkaWEobWF4LXdpZHRoOiAzNjBweCkge1xyXG4gICAuY3JlYXRlLXRyaXB7XHJcbiAgICBwYWRkaW5nLXRvcDogOTBweDtcclxuICB9XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDogNTQwcHgpIHtcclxuICAuY3JlYXRlLXRyaXB7XHJcbiAgIHBhZGRpbmctdG9wOiA5NXB4O1xyXG4gfVxyXG59XHJcbkBtZWRpYShtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gIC5jcmVhdGUtdHJpcHtcclxuICAgcGFkZGluZy10b3A6IDExMHB4O1xyXG4gfVxyXG59Il19 */"] });


/***/ }),

/***/ "VYMa":
/*!*************************************************!*\
  !*** ./src/app/shared/alert/alert.component.ts ***!
  \*************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AlertComponent {
    constructor() {
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(); };
AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertComponent, selectors: [["app-alert"]], inputs: { message: "message" }, decls: 3, vars: 1, consts: [[1, "error"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
    } }, styles: ["div.error[_ngcontent-%COMP%] {\r\n    animation: fadeOut 1s forwards;\r\n    animation-delay: 3s;\r\n    position: fixed;\r\n    right: 0;\r\n    min-width: 350px;\r\n    margin-top: 55px;\r\n    margin-right: 20px;\r\n    display: block;\r\n    z-index: 11111;\r\n}\r\ndiv.error[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    background: rgba(204, 55, 55, 0.726);\r\n    color: white;\r\n    padding: 5px 25px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    border-radius: 20px;\r\n    position: relative;\r\n    margin-bottom: 5px;\r\n    overflow: hidden;\r\n}\r\n@keyframes fadeOut {\r\n    from {\r\n      opacity: 1;\r\n    }\r\n    to {\r\n      opacity: 0;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsZXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixRQUFRO0lBQ1IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGNBQWM7QUFDbEI7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBV0U7SUFDRTtNQUNFLFVBQVU7SUFDWjtJQUNBO01BQ0UsVUFBVTtJQUNaO0VBQ0YiLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5lcnJvciB7XHJcbiAgICBhbmltYXRpb246IGZhZGVPdXQgMXMgZm9yd2FyZHM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDNzO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtaW4td2lkdGg6IDM1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgei1pbmRleDogMTExMTE7XHJcbn1cclxuZGl2LmVycm9yIHAge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMDQsIDU1LCA1NSwgMC43MjYpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogNXB4IDI1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVPdXQge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgZmFkZU91dCB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICB9Il19 */"] });


/***/ }),

/***/ "Yu5h":
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "+rn0");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile/profile.component */ "D5oR");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "cEwO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    {
        path: "user",
        children: [
            {
                path: "login",
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
            },
            {
                path: "register",
                component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]
            },
            {
                path: "profile",
                component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"]
            }
        ]
    }
];
class UserRoutingModule {
}
UserRoutingModule.ɵfac = function UserRoutingModule_Factory(t) { return new (t || UserRoutingModule)(); };
UserRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: UserRoutingModule });
UserRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](UserRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material/material.module */ "hctd");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/core.module */ "pKmL");
/* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/movie.service */ "HGT+");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/user.module */ "7UCR");
/* harmony import */ var _movie_movie_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./movie/movie.module */ "ubTF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");












class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [_services_movie_service__WEBPACK_IMPORTED_MODULE_7__["MovieService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _user_user_module__WEBPACK_IMPORTED_MODULE_9__["UserModule"],
            _movie_movie_module__WEBPACK_IMPORTED_MODULE_10__["MovieModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
        _user_user_module__WEBPACK_IMPORTED_MODULE_9__["UserModule"],
        _movie_movie_module__WEBPACK_IMPORTED_MODULE_10__["MovieModule"]] }); })();


/***/ }),

/***/ "cEwO":
/*!*****************************************************!*\
  !*** ./src/app/user/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _shared_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/validators */ "LetT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/alert/alert.component */ "VYMa");









function RegisterComponent_app_alert_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-alert", 13);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("message", ctx_r0.error);
} }
function RegisterComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RegisterComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email is in incorrect format");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RegisterComponent_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Username is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RegisterComponent_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RegisterComponent_p_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Repeat Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RegisterComponent_p_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Passwords must match");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class RegisterComponent {
    constructor(fb, userService, router) {
        this.fb = fb;
        this.userService = userService;
        this.router = router;
        this.isSubmited = false;
        this.form = this.fb.group({
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
            username: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            repeatPassword: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
        }, { validators: [Object(_shared_validators__WEBPACK_IMPORTED_MODULE_2__["ConfirmedValidator"])("password", "repeatPassword")] });
    }
    ngOnInit() {
    }
    submitHandler() {
        this.userService.register(this.form.value).subscribe(res => {
            this.router.navigate(["/browse"]);
        }, err => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(4000).subscribe(_ => this.error = undefined);
            this.error = err.error.message;
        });
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 23, vars: 17, consts: [[3, "message", 4, "ngIf"], [1, "register-box", 3, "formGroup", "ngSubmit"], [1, "textbox"], ["class", "error", 4, "ngIf"], [1, "fas", "fa-user"], ["type", "text", "placeholder", "Email", "name", "email", "formControlName", "email"], [1, "fas", "fa-user-tie"], ["type", "text", "placeholder", "Username", "name", "username", "formControlName", "username"], [1, "fas", "fa-lock"], ["type", "password", "placeholder", "Password", "name", "password", "formControlName", "password"], [1, "fas", "fa-key"], ["type", "password", "placeholder", "Repeat Password", "name", "repeatPassword", "formControlName", "repeatPassword"], ["type", "submit", "value", "Sign Up", 1, "btn", 3, "disabled"], [3, "message"], [1, "error"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, RegisterComponent_app_alert_0_Template, 1, 1, "app-alert", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_1_listener() { return ctx.submitHandler(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, RegisterComponent_p_5_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, RegisterComponent_p_6_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, RegisterComponent_p_10_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, RegisterComponent_p_14_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, RegisterComponent_p_18_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, RegisterComponent_p_19_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.form.get("email").touched && (ctx.form.get("email").errors == null ? null : ctx.form.get("email").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.form.get("email").touched && (ctx.form.get("email").errors == null ? null : ctx.form.get("email").errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("input-error", ctx.form.get("email").touched && ctx.form.get("email").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.form.get("username").touched && (ctx.form.get("username").errors == null ? null : ctx.form.get("username").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("input-error", ctx.form.get("username").touched && ctx.form.get("username").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.form.get("password").touched && (ctx.form.get("password").errors == null ? null : ctx.form.get("password").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("input-error", ctx.form.get("password").touched && ctx.form.get("password").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.form.get("repeatPassword").touched && (ctx.form.get("repeatPassword").errors == null ? null : ctx.form.get("repeatPassword").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.form.get("repeatPassword").touched && (ctx.form.get("repeatPassword").errors == null ? null : ctx.form.get("repeatPassword").errors.confirmedValidator));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("input-error", ctx.form.get("repeatPassword").touched && ctx.form.get("repeatPassword").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.form.invalid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_7__["AlertComponent"]], styles: [".register-box[_ngcontent-%COMP%] {\r\n    width: 280px;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    color: white;\r\n}\r\n.register-box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 40px;\r\n    border-bottom: 6px solid #E50914;\r\n    margin-bottom: 20px;\r\n    padding: 13px 0;\r\n}\r\n.textbox[_ngcontent-%COMP%]    > input.input-error[_ngcontent-%COMP%] {\r\n    border: 1px solid #E50914;\r\n    background: rgba(0, 0, 0, 0.5);\r\n    color: white;\r\n    box-shadow: none;\r\n}\r\n.textbox[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    overflow: hidden;\r\n    font-size: 20px;\r\n    padding: 8px 0;\r\n    margin: 8px 0;\r\n    border-bottom: 1px solid #E50914;\r\n}\r\n.textbox[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    width: 26px;\r\n    float: left;\r\n    text-align: center;\r\n}\r\n.textbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    border: none;\r\n    outline: none;\r\n    background: none;\r\n    color: white;\r\n    font-size: 18px;\r\n    width: 80%;\r\n    float: left;\r\n    margin: 0 10px;\r\n}\r\n.btn[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    background: none;\r\n    border: 2.5px solid #E50914;\r\n    color: white;\r\n    cursor: pointer;\r\n    margin: 12 0;\r\n    font-size: 18px;\r\n}\r\n[_ngcontent-%COMP%]::placeholder { \r\n    color:white;\r\n    opacity: 1; \r\n}\r\np.error[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    border-radius: 0.3em;\r\n    font-size: small;\r\n    color: red;\r\n    padding-top: 0;\r\n    margin-bottom: 2px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQ0FBZ0M7SUFDaEMsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6Qiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztJQUNkLGFBQWE7SUFDYixnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZUFBZTtJQUNmLFVBQVU7SUFDVixXQUFXO0lBQ1gsY0FBYztBQUNsQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQiwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFVBQVU7QUFDZDtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEIiLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3Rlci1ib3gge1xyXG4gICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4ucmVnaXN0ZXItYm94IGgxIHtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCAjRTUwOTE0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHBhZGRpbmc6IDEzcHggMDtcclxufVxyXG4udGV4dGJveCA+IGlucHV0LmlucHV0LWVycm9yIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFNTA5MTQ7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbi50ZXh0Ym94IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHBhZGRpbmc6IDhweCAwO1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTUwOTE0O1xyXG59XHJcbi50ZXh0Ym94IGkge1xyXG4gICAgd2lkdGg6IDI2cHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udGV4dGJveCBpbnB1dCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbjogMCAxMHB4O1xyXG59XHJcbi5idG4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm9yZGVyOiAyLjVweCBzb2xpZCAjRTUwOTE0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luOiAxMiAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbjo6cGxhY2Vob2xkZXIgeyBcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgb3BhY2l0eTogMTsgXHJcbn1cclxucC5lcnJvciB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4zZW07XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG59Il19 */"] });


/***/ }),

/***/ "f3yp":
/*!*****************************************************!*\
  !*** ./src/app/shared/spinner/spinner.component.ts ***!
  \*****************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SpinnerComponent {
    constructor() { }
    ngOnInit() {
    }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(); };
SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["app-spinner"]], decls: 1, vars: 0, consts: [[1, "loader"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: [".loader[_ngcontent-%COMP%] {\r\n    border: 16px solid #f3f3f3; \r\n    border-top: 16px solid #E50914; \r\n    border-radius: 50%;\r\n    width: 120px;\r\n    height: 120px;\r\n    animation: spin 2s linear infinite;\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    z-index: 9999;\r\n}\r\n  \r\n@keyframes spin {\r\n    0% { transform: rotate(0deg); }\r\n    100% { transform: rotate(360deg); }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwaW5uZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQixFQUFFLGVBQWU7SUFDM0MsOEJBQThCLEVBQUUsU0FBUztJQUN6QyxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsZUFBZTtJQUNmLFFBQVE7SUFDUixTQUFTO0lBQ1QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLEtBQUssdUJBQXVCLEVBQUU7SUFDOUIsT0FBTyx5QkFBeUIsRUFBRTtBQUN0QyIsImZpbGUiOiJzcGlubmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVyIHtcclxuICAgIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzOyAvKiBMaWdodCBncmV5ICovXHJcbiAgICBib3JkZXItdG9wOiAxNnB4IHNvbGlkICNFNTA5MTQ7IC8qIEJsdWUgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG59XHJcbiAgXHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG59Il19 */"] });


/***/ }),

/***/ "gSFs":
/*!****************************************************!*\
  !*** ./src/app/movie/details/details.component.ts ***!
  \****************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/movie.service */ "HGT+");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/alert/alert.component */ "VYMa");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");













function DetailsComponent_app_alert_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-alert", 2);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("message", ctx_r0.error);
} }
const _c0 = function (a1) { return ["/edit", a1]; };
function DetailsComponent_div_1_a_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c0, ctx_r2.movieId));
} }
function DetailsComponent_div_1_a_15_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DetailsComponent_div_1_a_15_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r9.deleteMovie(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DetailsComponent_div_1_a_16_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DetailsComponent_div_1_a_16_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r11.likeMovie(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "favorite");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Like ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DetailsComponent_div_1_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "favorite");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r5.movie.likes.length, " likes ");
} }
function DetailsComponent_div_1_li_27_h5_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h5", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", comment_r13.owner.username, " (you) ");
} }
function DetailsComponent_div_1_li_27_h5_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h5", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](comment_r13.owner.username);
} }
function DetailsComponent_div_1_li_27_mat_icon_9_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DetailsComponent_div_1_li_27_mat_icon_9_Template_mat_icon_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); const comment_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r21.likeComment($event.target, comment_r13._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "thumb_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("disabled", comment_r13.isLiked);
} }
function DetailsComponent_div_1_li_27_mat_icon_10_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DetailsComponent_div_1_li_27_mat_icon_10_Template_mat_icon_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const comment_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r25.dislikeComment($event.target, comment_r13._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "thumb_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("disabled", !comment_r13.isLiked);
} }
function DetailsComponent_div_1_li_27_mat_icon_13_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DetailsComponent_div_1_li_27_mat_icon_13_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31); const comment_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r29.deleteComment(comment_r13._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DetailsComponent_div_1_li_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DetailsComponent_div_1_li_27_h5_2_Template, 2, 1, "h5", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DetailsComponent_div_1_li_27_h5_3_Template, 2, 1, "h5", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, DetailsComponent_div_1_li_27_mat_icon_9_Template, 2, 2, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, DetailsComponent_div_1_li_27_mat_icon_10_Template, 2, 2, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, DetailsComponent_div_1_li_27_mat_icon_13_Template, 2, 0, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r13 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", comment_r13.owner._id == ctx_r8.user._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", comment_r13.owner._id != ctx_r8.user._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](comment_r13.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", comment_r13.owner._id != ctx_r8.user._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", comment_r13.owner._id != ctx_r8.user._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](comment_r13.likes.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", comment_r13.owner._id == ctx_r8.user._id);
} }
function DetailsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "video", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, DetailsComponent_div_1_a_14_Template, 4, 3, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, DetailsComponent_div_1_a_15_Template, 4, 0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, DetailsComponent_div_1_a_16_Template, 4, 0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, DetailsComponent_div_1_span_17_Template, 4, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "form", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function DetailsComponent_div_1_Template_form_ngSubmit_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r33); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](20); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); ctx_r32.comment(_r6.value); return _r6.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "input", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, DetailsComponent_div_1_li_27_Template, 14, 7, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](20);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](24);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r1.movie.trailerUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("poster", ctx_r1.movie.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Description: ", ctx_r1.movie.description, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Genre: ", ctx_r1.movie.genre, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Author: ", ctx_r1.movie.author, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.movie.owner == ctx_r1.user._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.movie.owner == ctx_r1.user._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.isLiked && ctx_r1.movie.owner != ctx_r1.user._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.isLiked || ctx_r1.movie.owner == ctx_r1.user._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("input-error", _r7.touched && _r7.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", _r6.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.comments);
} }
class DetailsComponent {
    constructor(route, movieService, userService, router) {
        this.route = route;
        this.movieService = movieService;
        this.userService = userService;
        this.router = router;
    }
    ngOnInit() {
        this.userService.getUser().subscribe(x => {
            this.user = x;
        }, this.errorHandler);
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(params => {
            this.movieId = params.id;
            return this.movieService.loadMovieById(this.movieId);
        })).subscribe(movie => {
            this.movie = movie;
            this.isLiked = this.movie.likes.some(x => x == this.user._id);
            this.assignComments(movie.comments);
        }, this.errorHandler);
    }
    likeMovie() {
        this.movieService.likeMovie(this.movieId).subscribe(x => {
            this.movie = x;
            this.isLiked = this.movie.likes.some(x => x == this.user._id);
        }, this.errorHandler);
    }
    deleteMovie() {
        this.movieService.deleteMovie(this.movieId).subscribe(x => {
            this.router.navigate(["/browse"]);
        }, this.errorHandler);
    }
    comment(fV) {
        Object.assign(fV, { movie: this.movieId });
        this.movieService.comment(fV).subscribe(x => {
            this.assignComments(x);
        }, this.errorHandler);
    }
    deleteComment(commentId) {
        this.movieService.deleteComment(commentId).subscribe(x => {
            this.assignComments(x);
        }, this.errorHandler);
    }
    likeComment(target, commentId) {
        if (target.classList.contains("disabled")) {
            return;
        }
        this.movieService.likeComment(commentId, this.movieId).subscribe(x => {
            this.assignComments(x);
        }, this.errorHandler);
    }
    dislikeComment(target, commentId) {
        if (target.classList.contains("disabled")) {
            return;
        }
        this.movieService.dislikeComment(commentId, this.movieId).subscribe(x => {
            this.assignComments(x);
        }, this.errorHandler);
    }
    assignComments(comments) {
        this.comments = comments;
        this.comments.map(x => x.isLiked = x.likes.some((y) => y == this.user._id));
    }
    errorHandler(err) {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(4000).subscribe(_ => this.error = undefined);
        this.error = err.error.message;
    }
}
DetailsComponent.ɵfac = function DetailsComponent_Factory(t) { return new (t || DetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_4__["MovieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
DetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DetailsComponent, selectors: [["app-details"]], decls: 2, vars: 2, consts: [[3, "message", 4, "ngIf"], ["class", "content", 4, "ngIf"], [3, "message"], [1, "content"], ["fxLayout", "row wrap"], ["fxFlex", "100%"], [1, "mat-elevation-z4", "container"], [1, "wrapper"], ["controls", "", "width", "100%", "height", "450px", 3, "src", "poster"], [1, "info"], ["class", "orange", "mat-button", "", 3, "routerLink", 4, "ngIf"], ["class", "red", "mat-button", "", 3, "click", 4, "ngIf"], ["class", "favorite", "mat-button", "", 3, "click", 4, "ngIf"], [4, "ngIf"], [3, "ngSubmit"], ["f", "ngForm"], [1, "d-flex", "flex-row", "add-comment-section", "mt-4", "mb-4"], ["src", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png", "width", "38", 1, "img-fluid", "img-responsive", "rounded-circle", "mr-2"], ["type", "text", "placeholder", "Add comment", "name", "message", "ngModel", "", "required", "", 1, "form-control", "mr-3", "comment"], ["message", "ngModel"], ["type", "submit", "value", "Comment", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngFor", "ngForOf"], ["mat-button", "", 1, "orange", 3, "routerLink"], ["mat-button", "", 1, "red", 3, "click"], ["mat-button", "", 1, "favorite", 3, "click"], [1, "likes"], [1, "d-flex", "flex-row", "align-items-center", "commented-user"], ["class", "mr-2", 4, "ngIf"], [1, "comment-text-sm"], [1, "reply-section"], [1, "d-flex", "flex-row", "align-items-center", "voting-icons"], ["class", "vote", 3, "disabled", "click", 4, "ngIf"], [1, "ml-2"], ["class", "trashcan", 3, "click", 4, "ngIf"], [1, "mr-2"], [1, "vote", 3, "click"], [1, "trashcan", 3, "click"]], template: function DetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, DetailsComponent_app_alert_0_Template, 1, 1, "app-alert", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DetailsComponent_div_1_Template, 28, 13, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.movie);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_7__["AlertComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardActions"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"]], styles: [".content[_ngcontent-%COMP%] {\r\n    padding-top: 10px;\r\n}\r\n.container.mat-card[_ngcontent-%COMP%] {\r\n    background-color: rgb(41, 40, 46, 0.5) !important;\r\n    color: white;\r\n    margin: 0 auto;\r\n}\r\nsection[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    margin-left: 30px;\r\n}\r\n.red[_ngcontent-%COMP%] {\r\n    background-color: #E50914 !important;\r\n    text-decoration: none;\r\n    color: white;\r\n}\r\n.favorite[_ngcontent-%COMP%] {\r\n    background-color:#FF516C !important;\r\n    color: white;\r\n    text-decoration: none;\r\n}\r\n.red[_ngcontent-%COMP%]:hover {\r\n    background-color: #ff000d !important\r\n}\r\n.favorite[_ngcontent-%COMP%]:hover {\r\n    background-color:#dd1331 !important;\r\n    color: white;\r\n}\r\n.likes[_ngcontent-%COMP%] {\r\n    color: #FF516C;\r\n    position: relative;\r\n    top: 7px;\r\n}\r\n.comment[_ngcontent-%COMP%] {\r\n    background: rgba(0, 0, 0, 0.5);\r\n    color: white;\r\n    border: none;\r\n}\r\ninput.input-error[_ngcontent-%COMP%] {\r\n    border: 1px solid #E50914;\r\n    background: rgba(0, 0, 0, 0.5);\r\n    color: white;\r\n    box-shadow: none;\r\n}\r\n.info[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    width: 100%;\r\n    vertical-align: top;\r\n}\r\nul[_ngcontent-%COMP%] {\r\n    padding-left: 0px;\r\n    background-color: rgb(41, 40, 46, 0.5) !important;\r\n}\r\nsection[_ngcontent-%COMP%] {\r\n    background-color: rgb(41, 40, 46, 0.7) !important;\r\n    border-radius: 4px;\r\n}\r\nvideo[_ngcontent-%COMP%] {\r\n    background: black;\r\n    border-radius: 7px;\r\n}\r\nform[_ngcontent-%COMP%] {\r\n    padding: 0 5px;\r\n}\r\n.vote[_ngcontent-%COMP%] {\r\n    color: #2D88FF;\r\n    cursor: pointer;\r\n    margin-right: 4px;\r\n}\r\n.vote[_ngcontent-%COMP%]:hover:not(.disabled) {\r\n    color: #0a4ea7;\r\n}\r\nmat-icon.disabled[_ngcontent-%COMP%] {\r\n    cursor: default;\r\n    color: rgb(150, 142, 142);\r\n}\r\n.btn[_ngcontent-%COMP%] {\r\n    background: #E50914 !important;\r\n    border: none;\r\n}\r\nli[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    background-color: rgb(41, 40, 46, 0.7) !important;\r\n    color: white;\r\n    margin-bottom: 10px;\r\n    padding: 5px;\r\n    border-radius: 6px;\r\n    border-top: 1px solid gray;\r\n    border-top-right-radius: 0;\r\n    border-top-left-radius: 0;\r\n}\r\n.wrapper[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    width: 50%;\r\n}\r\n.comment-text-sm[_ngcontent-%COMP%] {\r\n    max-width: 500px;\r\n}\r\n.orange[_ngcontent-%COMP%] {\r\n    background-color: tomato;\r\n    text-decoration: none;\r\n}\r\n.orange[_ngcontent-%COMP%]:hover {\r\n    color: white;\r\n    background-color: rgb(238, 69, 39);\r\n}\r\n@media(max-width: 1200px) {\r\n    .wrapper[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n    }\r\n    section[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        margin: 0;\r\n    }\r\n}\r\n.trashcan[_ngcontent-%COMP%] {\r\n    color: #E50914 !important;\r\n    cursor: pointer;\r\n    margin-right: 20px;\r\n}\r\n.disabled[_ngcontent-%COMP%] {\r\n    color: gray;\r\n    cursor: default;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaURBQWlEO0lBQ2pELFlBQVk7SUFDWixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxtQ0FBbUM7SUFDbkMsWUFBWTtJQUNaLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksbUNBQW1DO0lBQ25DLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsUUFBUTtBQUNaO0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6Qiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixpREFBaUQ7QUFDckQ7QUFDQTtJQUNJLGlEQUFpRDtJQUNqRCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlEQUFpRDtJQUNqRCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGtDQUFrQztBQUN0QztBQUNBO0lBQ0k7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLFdBQVc7UUFDWCxTQUFTO0lBQ2I7QUFDSjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0FBQ25CIiwiZmlsZSI6ImRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcbi5jb250YWluZXIubWF0LWNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA0MCwgNDYsIDAuNSkgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbnNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcbi5yZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U1MDkxNCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5mYXZvcml0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGRjUxNkMgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4ucmVkOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMGQgIWltcG9ydGFudFxyXG59XHJcbi5mYXZvcml0ZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNkZDEzMzEgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4ubGlrZXMge1xyXG4gICAgY29sb3I6ICNGRjUxNkM7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDdweDtcclxufVxyXG4uY29tbWVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuaW5wdXQuaW5wdXQtZXJyb3Ige1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0U1MDkxNDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLmluZm8ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcbnVsIHtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA0MCwgNDYsIDAuNSkgIWltcG9ydGFudDtcclxufVxyXG5zZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNDAsIDQ2LCAwLjcpICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxudmlkZW8ge1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbn1cclxuZm9ybSB7XHJcbiAgICBwYWRkaW5nOiAwIDVweDtcclxufVxyXG4udm90ZSB7XHJcbiAgICBjb2xvcjogIzJEODhGRjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG59XHJcbi52b3RlOmhvdmVyOm5vdCguZGlzYWJsZWQpIHtcclxuICAgIGNvbG9yOiAjMGE0ZWE3O1xyXG59XHJcbm1hdC1pY29uLmRpc2FibGVkIHtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIGNvbG9yOiByZ2IoMTUwLCAxNDIsIDE0Mik7XHJcbn1cclxuLmJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRTUwOTE0ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxubGkge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNDAsIDQ2LCAwLjcpICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbn1cclxuLndyYXBwZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG4uY29tbWVudC10ZXh0LXNtIHtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbn1cclxuLm9yYW5nZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0b21hdG87XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLm9yYW5nZTpob3ZlciB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCA2OSwgMzkpO1xyXG59XHJcbkBtZWRpYShtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgLndyYXBwZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgc2VjdGlvbiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG59XHJcbi50cmFzaGNhbiB7XHJcbiAgICBjb2xvcjogI0U1MDkxNCAhaW1wb3J0YW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcbi5kaXNhYmxlZCB7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "hctd":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");












class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [[], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_0__["MatSidenavModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_0__["MatSidenavModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"]] }); })();


/***/ }),

/***/ "jT/F":
/*!********************************************!*\
  !*** ./src/app/services/upload.service.ts ***!
  \********************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class UploadService {
    constructor(http) {
        this.http = http;
    }
    upload(file) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "HotFlix");
        formData.append("cloud_name", "douwa5b0u");
        return this.http.post("https://api.cloudinary.com/v1_1/douwa5b0u/auto/upload", formData);
    }
}
UploadService.ɵfac = function UploadService_Factory(t) { return new (t || UploadService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UploadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UploadService, factory: UploadService.ɵfac });


/***/ }),

/***/ "pKmL":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "8rb8");
/* harmony import */ var _browse_browse_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./browse/browse.component */ "1Bbi");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../material/material.module */ "hctd");
/* harmony import */ var _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./side-nav/side-nav.component */ "LjNy");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_user_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user/user-routing.module */ "Yu5h");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "3GR4");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");












class CoreModule {
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(); };
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _user_user_routing_module__WEBPACK_IMPORTED_MODULE_6__["UserRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"],
        _browse_browse_component__WEBPACK_IMPORTED_MODULE_2__["BrowseComponent"],
        _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_4__["SideNavComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
        _user_user_routing_module__WEBPACK_IMPORTED_MODULE_6__["UserRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]], exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"],
        _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_4__["SideNavComponent"]] }); })();


/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class UserService {
    constructor(http) {
        this.http = http;
    }
    get isLogged() {
        return !!sessionStorage.getItem("isLogged");
    }
    register(body) {
        return this.http.post(`/api/user/register`, body, { withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])((x) => {
            sessionStorage.setItem("isLogged", "true");
        }));
    }
    login(body) {
        return this.http.post(`/api/user/login`, body, { withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])((x) => {
            sessionStorage.setItem("isLogged", "true");
        }));
    }
    logout() {
        return this.http.post(`/api/user/logout`, {}, { withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(() => {
            sessionStorage.removeItem("isLogged");
        }));
    }
    getUser() {
        return this.http.get("/api/user/profile");
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac });


/***/ }),

/***/ "ubTF":
/*!***************************************!*\
  !*** ./src/app/movie/movie.module.ts ***!
  \***************************************/
/*! exports provided: MovieModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieModule", function() { return MovieModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details/details.component */ "gSFs");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../material/material.module */ "hctd");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create/create.component */ "Tsbi");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "LJYf");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/movie.service */ "HGT+");
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/upload.service */ "jT/F");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");












class MovieModule {
}
MovieModule.ɵfac = function MovieModule_Factory(t) { return new (t || MovieModule)(); };
MovieModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: MovieModule });
MovieModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [_services_movie_service__WEBPACK_IMPORTED_MODULE_8__["MovieService"], _services_upload_service__WEBPACK_IMPORTED_MODULE_9__["UploadService"], _services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](MovieModule, { declarations: [_details_details_component__WEBPACK_IMPORTED_MODULE_1__["DetailsComponent"], _create_create_component__WEBPACK_IMPORTED_MODULE_4__["CreateComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]], exports: [_details_details_component__WEBPACK_IMPORTED_MODULE_1__["DetailsComponent"],
        _create_create_component__WEBPACK_IMPORTED_MODULE_4__["CreateComponent"],
        _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _movie_details_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movie/details/details.component */ "gSFs");
/* harmony import */ var _core_browse_browse_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/browse/browse.component */ "1Bbi");
/* harmony import */ var _core_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/home/home.component */ "3GR4");
/* harmony import */ var _movie_create_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movie/create/create.component */ "Tsbi");
/* harmony import */ var _movie_edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movie/edit/edit.component */ "LJYf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    {
        path: "",
        pathMatch: "full",
        component: _core_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: "browse",
        component: _core_browse_browse_component__WEBPACK_IMPORTED_MODULE_2__["BrowseComponent"]
    },
    {
        path: "details/:id",
        component: _movie_details_details_component__WEBPACK_IMPORTED_MODULE_1__["DetailsComponent"]
    },
    {
        path: "create",
        component: _movie_create_create_component__WEBPACK_IMPORTED_MODULE_4__["CreateComponent"]
    },
    {
        path: "edit/:id",
        component: _movie_edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"]
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map