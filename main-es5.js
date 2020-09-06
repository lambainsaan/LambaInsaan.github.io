(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/rhitik/LambaInsaan.github.io/angular-app/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "LgBW":
    /*!****************************************!*\
      !*** ./src/app/blog/blog.component.ts ***!
      \****************************************/

    /*! exports provided: BlogComponent */

    /***/
    function LgBW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlogComponent", function () {
        return BlogComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @fortawesome/free-brands-svg-icons */
      "8tEE");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");
      /* harmony import */


      var ngx_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-markdown */
      "lR5k");

      var BlogComponent = /*#__PURE__*/function () {
        function BlogComponent() {
          _classCallCheck(this, BlogComponent);

          this.faAngellist = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faAngellist"];
          this.faTwitter = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTwitter"];
          this.faYoutube = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faYoutube"];
          this.faLinkedin = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faLinkedin"];
          this.faInstagram = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faInstagram"];
          this.faGithub = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGithub"];
          this.faBitcoin = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBitcoin"];
          this.blogMdFile = 'assets/test.md';
          this.colors = ['#1a1a2e', '#16213e', '#439821', '#87431d', '#431241', '#290001', '#7d0633'];
        }

        _createClass(BlogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BlogComponent;
      }();

      BlogComponent.ɵfac = function BlogComponent_Factory(t) {
        return new (t || BlogComponent)();
      };

      BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BlogComponent,
        selectors: [["app-blog"]],
        decls: 41,
        vars: 7,
        consts: [[1, "heading-container"], [1, "header-logo"], [1, "contact"], ["href", "https://www.youtube.com/c/RhitikBhatt/featured", "target", "_blank"], [1, "youtube-icon", "icon", 3, "icon"], ["href", "https://twitter.com/lambainsaan", "target", "_blank"], [1, "twitter-icon", "icon", 3, "icon"], ["href", "https://angel.co/u/lambainsaan", "target", "_blank"], [1, "angellist-icon", "icon", 3, "icon"], ["href", "https://github.com/lambainsaan/", "target", "_blank"], [1, "github-icon", "icon", 3, "icon"], ["href", "https://www.instagram.com/lambainsaan_/", "target", "_blank"], [1, "instagram-icon", "icon", 3, "icon"], [1, "blog-container"], [1, "blog-title"], [1, "timestamp"], [3, "src"], [1, "outro-content-hr"], [1, "outro-container"], [1, "outro"], ["href", "mailto:rhitikbhatt@gmail.com"], [1, "donation-buttons"], ["href", "https://fonts.googleapis.com/css?family=Cookie", "rel", "stylesheet"], ["target", "_blank", "href", "https://www.buymeacoffee.com/lambainsaan", 1, "bmc-button"], ["src", "https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg", "alt", "Buy me a coffee"], [2, "margin-left", "5px", "font-size", "24px !important"], ["href", "https://commerce.coinbase.com/checkout/7d671661-0438-40d2-bdb5-9689ff98b497", 1, "donate-with-crypto"], [1, "bitcoin-icon", 3, "icon"]],
        template: function BlogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Lambi Kathas ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "fa-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "fa-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "fa-icon", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "fa-icon", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "fa-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "markdown", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Hey hey hi there! Rhitik here. \uD83D\uDC4B\uD83C\uDFFC ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Did you like what you just read? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Why not send me a note about it?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " I like appreciation. \uD83D\uDE02 You can also buy me a coffee or send me bitc\uD83E\uDD11ins. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Also, if you didn't like it let me know how I can get better. \uD83D\uDE00 That's what we all strive for. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "link", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Buy me a coffee");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "fa-icon", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Donate with Crypto ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faYoutube);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faTwitter);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faAngellist);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faGithub);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faInstagram);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.blogMdFile);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faBitcoin);
          }
        },
        directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"], ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownComponent"]],
        styles: [".heading-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.contact[_ngcontent-%COMP%] {\n  display: flex;\n  width: 400px;\n  justify-content: space-between;\n}\n\n.blog-container[_ngcontent-%COMP%] {\n  margin-top: 6.2em;\n}\n\n.header-logo[_ngcontent-%COMP%] {\n  font-family: \"Bungee Shade\", cursive;\n  color: #62319d;\n  font-size: 4em;\n}\n\n.blog-title[_ngcontent-%COMP%] {\n  font-family: \"Roboto Slab\", serif;\n  font-size: 3em;\n}\n\n.timestamp[_ngcontent-%COMP%] {\n  background: rgba(117, 117, 117, 0.2);\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  padding: 4px;\n  border-radius: 8px;\n  font-style: \"Roboto Slab\", serif;\n  font-family: \"Roboto Slab\", serif;\n  margin: 2em;\n}\n\n.blog-content-container[_ngcontent-%COMP%] {\n  font-family: \"Roboto Slab\", serif;\n  margin: 3em;\n}\n\n.bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.quote[_ngcontent-%COMP%] {\n  border-left: 3px;\n  border-color: black;\n  border-color: grey;\n  border-style: solid;\n  border-top: 0px;\n  border-bottom: 0px;\n  border-right: 0px;\n}\n\n.quote-content[_ngcontent-%COMP%] {\n  margin-left: 3em;\n}\n\n.quote-author[_ngcontent-%COMP%] {\n  font-style: italic;\n  margin-left: 5em;\n}\n\n.quote[_ngcontent-%COMP%] {\n  margin-top: 1.5em;\n  margin-bottom: 1.5em;\n  padding-top: 1em;\n  padding-bottom: 1em;\n}\n\n.blog-container[_ngcontent-%COMP%] {\n  padding: 0px 8em 7em 8em;\n}\n\n.github-icon[_ngcontent-%COMP%] {\n  color: #333;\n}\n\n.youtube-icon[_ngcontent-%COMP%] {\n  color: #e52d27;\n}\n\n.twitter-icon[_ngcontent-%COMP%] {\n  color: #55acee;\n}\n\n.instagram-icon[_ngcontent-%COMP%] {\n  color: #3f729b;\n}\n\n.contact[_ngcontent-%COMP%] {\n  font-size: 2em;\n  align-items: center;\n}\n\n.heading-container[_ngcontent-%COMP%] {\n  margin-right: 2em;\n}\n\n.icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.outro[_ngcontent-%COMP%] {\n  font-family: \"Roboto Slab\", serif;\n  height: 9em;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n\n.donate-with-crypto[_ngcontent-%COMP%] {\n  background-color: #4caf50;\n  border: none;\n  color: white;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  background-color: #000000e3 !important;\n  border-radius: 8px !important;\n  font-family: \"Cookie\", cursive !important;\n  font-size: 24px !important;\n  padding: 7px 15px 7px 10px;\n}\n\n.bitcoin-icon[_ngcontent-%COMP%] {\n  color: #ee9209;\n}\n\n\n\n.donate-with-crypto[_ngcontent-%COMP%] {\n  padding: 9px 15px 9px 10px;\n}\n\n\n\n.donation-buttons[_ngcontent-%COMP%] {\n  margin-top: 3em;\n  display: flex;\n}\n\n.bmc-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.bmc-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 34px !important;\n  width: 35px !important;\n  margin-bottom: 1px !important;\n  box-shadow: none !important;\n  border: none !important;\n  vertical-align: middle !important;\n}\n\n.bmc-button[_ngcontent-%COMP%] {\n  padding: 9px 15px 9px 10px;\n  line-height: 35px !important;\n  text-decoration: none !important;\n  color: #ffffff !important;\n  background-color: #ff5f5f !important;\n  border-radius: 8px !important;\n  border: 1px solid transparent !important;\n  font-size: 24px !important;\n  letter-spacing: 0.6px !important;\n  box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5) !important;\n  -webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;\n  font-family: \"Cookie\", cursive !important;\n  -webkit-box-sizing: border-box !important;\n}\n\n.bmc-button[_ngcontent-%COMP%]:hover, .bmc-button[_ngcontent-%COMP%]:active, .bmc-button[_ngcontent-%COMP%]:focus {\n  -webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;\n  text-decoration: none !important;\n  box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;\n  opacity: 0.85 !important;\n  color: #ffffff !important;\n}\n\n.donate-with-crypto[_ngcontent-%COMP%]:hover, .donate-with-crypto[_ngcontent-%COMP%]:active, .donate-with-crypto[_ngcontent-%COMP%]:focus {\n  -webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;\n  text-decoration: none !important;\n  box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;\n  opacity: 0.85 !important;\n  color: #ffffff !important;\n}\n\n.bmc-button[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.donate-with-crypto[_ngcontent-%COMP%] {\n  padding: 9px 15px 9px 10px !important;\n  line-height: 35px !important;\n  text-decoration: none !important;\n  color: #ffffff !important;\n  border-radius: 8px !important;\n  border: 1px solid transparent !important;\n  font-size: 24px !important;\n  letter-spacing: 0.6px !important;\n  box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5) !important;\n  -webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;\n  font-family: \"Cookie\", cursive !important;\n  -webkit-box-sizing: border-box !important;\n}\n\n.outro-content-hr[_ngcontent-%COMP%] {\n  margin: 5em 0em 5em 0em;\n}\n\n@media (min-width: 1300px) {\n  .donation-buttons[_ngcontent-%COMP%] {\n    width: 30em;\n    justify-content: space-between;\n  }\n}\n\n@media (max-width: 750px) {\n  .donate-with-crypto[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .donation-buttons[_ngcontent-%COMP%] {\n    margin-bottom: 3em;\n    height: 8em;\n    justify-content: space-between;\n  }\n\n  .bmc-button[_ngcontent-%COMP%] {\n    height: unset;\n  }\n\n  .heading-container[_ngcontent-%COMP%] {\n    display: unset;\n  }\n\n  .contact[_ngcontent-%COMP%] {\n    width: unset;\n    justify-content: space-between;\n    justify-content: space-around;\n    margin-top: 1em;\n    width: 100%;\n  }\n\n  .contact[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n  }\n\n  .heading-container[_ngcontent-%COMP%] {\n    margin-right: unset;\n  }\n\n  .timestamp[_ngcontent-%COMP%] {\n    padding: unset;\n  }\n\n  .blog-container[_ngcontent-%COMP%] {\n    padding: unset;\n    padding-left: 1em;\n    padding-right: 1em;\n  }\n\n  .donation-buttons[_ngcontent-%COMP%] {\n    margin-top: 3em;\n    display: flex;\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9ibG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0FBQUY7O0FBR0E7RUFDRSxpQkFBQTtBQUFGOztBQUdBO0VBQ0Usb0NBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUdBO0VBQ0UsaUNBQUE7RUFDQSxjQUFBO0FBQUY7O0FBR0E7RUFDRSxvQ0FBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUNBQUE7RUFDQSxXQUFBO0FBQUY7O0FBR0E7RUFDRSxpQ0FBQTtFQUNBLFdBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLHdCQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0FBQUY7O0FBSUE7RUFDRSxpQ0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtBQURGOztBQUlBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHNDQUFBO0VBQ0EsNkJBQUE7RUFDQSx5Q0FBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7QUFERjs7QUFJQSw2Q0FBQTs7QUFFQTtFQUNFLDBCQUFBO0FBRkY7O0FBS0EscUNBQUE7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQ0FBQTtBQUhGOztBQUtBO0VBQ0UsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtFQUNBLDZCQUFBO0VBQ0Esd0NBQUE7RUFDQSwwQkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkRBQUE7RUFDQSx1RUFBQTtFQUNBLHlDQUFBO0VBQ0EseUNBQUE7QUFGRjs7QUFJQTs7O0VBR0UsdUVBQUE7RUFDQSxnQ0FBQTtFQUNBLCtEQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtBQURGOztBQUlBOzs7RUFHRSx1RUFBQTtFQUNBLGdDQUFBO0VBQ0EsK0RBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0FBREY7O0FBS0E7RUFDRSxZQUFBO0FBRkY7O0FBTUE7RUFDRSxxQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0Esd0NBQUE7RUFDQSwwQkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkRBQUE7RUFDQSx1RUFBQTtFQUNBLHlDQUFBO0VBQ0EseUNBQUE7QUFIRjs7QUFPQTtFQUNFLHVCQUFBO0FBSkY7O0FBT0E7RUFDRTtJQUNFLFdBQUE7SUFDQSw4QkFBQTtFQUpGO0FBQ0Y7O0FBVUE7RUFFRTtJQUNFLFdBQUE7RUFURjs7RUFZQTtJQUNFLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLDhCQUFBO0VBVEY7O0VBWUE7SUFDRSxhQUFBO0VBVEY7O0VBWUE7SUFDRSxjQUFBO0VBVEY7O0VBWUE7SUFDRSxZQUFBO0lBQ0EsOEJBQUE7SUFDQSw2QkFBQTtJQUNBLGVBQUE7SUFDQSxXQUFBO0VBVEY7O0VBWUE7SUFDRSxnQkFBQTtFQVRGOztFQVlBO0lBQ0UsbUJBQUE7RUFURjs7RUFZQTtJQUNFLGNBQUE7RUFURjs7RUFZQTtJQUNFLGNBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VBVEY7O0VBWUE7SUFDRSxlQUFBO0lBQ0EsYUFBQTtJQUNBLHNCQUFBO0VBVEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvYmxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcbi5oZWFkaW5nLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmNvbnRhY3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogNDAwcHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmJsb2ctY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNi4yZW07XG59XG5cbi5oZWFkZXItbG9nbyB7XG4gIGZvbnQtZmFtaWx5OiBcIkJ1bmdlZSBTaGFkZVwiLCBjdXJzaXZlO1xuICBjb2xvcjogIzYyMzE5ZDtcbiAgZm9udC1zaXplOiA0ZW07XG59XG5cbi5ibG9nLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIFNsYWJcIiwgc2VyaWY7XG4gIGZvbnQtc2l6ZTogM2VtO1xufVxuXG4udGltZXN0YW1wIHtcbiAgYmFja2dyb3VuZDogcmdiKDExNywgMTE3LCAxMTcsIDAuMik7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgcGFkZGluZzogNHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtc3R5bGU6IFwiUm9ib3RvIFNsYWJcIiwgc2VyaWY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90byBTbGFiXCIsIHNlcmlmO1xuICBtYXJnaW46IDJlbTtcbn1cblxuLmJsb2ctY29udGVudC1jb250YWluZXIge1xuICBmb250LWZhbWlseTogXCJSb2JvdG8gU2xhYlwiLCBzZXJpZjtcbiAgbWFyZ2luOiAzZW07XG59XG5cbi5ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5xdW90ZSB7XG4gIGJvcmRlci1sZWZ0OiAzcHg7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIGJvcmRlci1jb2xvcjogZ3JleTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXRvcDogMHB4O1xuICBib3JkZXItYm90dG9tOiAwcHg7XG4gIGJvcmRlci1yaWdodDogMHB4O1xufVxuXG4ucXVvdGUtY29udGVudCB7XG4gIG1hcmdpbi1sZWZ0OiAzZW07XG59XG5cbi5xdW90ZS1hdXRob3Ige1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIG1hcmdpbi1sZWZ0OiA1ZW07XG59XG5cbi5xdW90ZSB7XG4gIG1hcmdpbi10b3A6IDEuNWVtO1xuICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcbiAgcGFkZGluZy10b3A6IDFlbTtcbiAgcGFkZGluZy1ib3R0b206IDFlbTtcbn1cblxuLmJsb2ctY29udGFpbmVyIHtcbiAgcGFkZGluZzogMHB4IDhlbSA3ZW0gOGVtO1xufVxuXG4uZ2l0aHViLWljb24ge1xuICBjb2xvcjogIzMzMztcbn1cblxuLnlvdXR1YmUtaWNvbiB7XG4gIGNvbG9yOiAjZTUyZDI3O1xufVxuXG4udHdpdHRlci1pY29uIHtcbiAgY29sb3I6ICM1NWFjZWU7XG59XG5cbi5pbnN0YWdyYW0taWNvbiB7XG4gIGNvbG9yOiAjM2Y3MjliO1xufVxuXG4uY29udGFjdCB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaGVhZGluZy1jb250YWluZXIge1xuICBtYXJnaW4tcmlnaHQ6IDJlbTtcbn1cblxuLmljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuLm91dHJvIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIFNsYWJcIiwgc2VyaWY7XG4gIGhlaWdodDogOWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLmRvbmF0ZS13aXRoLWNyeXB0byB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNXB4IDMycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGUzICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDhweCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJDb29raWVcIiwgY3Vyc2l2ZSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogN3B4IDE1cHggN3B4IDEwcHg7XG59XG5cbi5iaXRjb2luLWljb24ge1xuICBjb2xvcjogI2VlOTIwOTtcbn1cblxuLyogSW5saW5lICMxMSB8IGh0dHA6Ly9sb2NhbGhvc3Q6NDIwMC9ibG9ncyAqL1xuXG4uZG9uYXRlLXdpdGgtY3J5cHRvIHtcbiAgcGFkZGluZzogOXB4IDE1cHggOXB4IDEwcHg7XG59XG5cbi8qIEVsZW1lbnQgfCBodHRwOi8vbG9jYWxob3N0OjQyMDAvICovXG5cbi5kb25hdGlvbi1idXR0b25zIHtcbiAgbWFyZ2luLXRvcDogM2VtO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYm1jLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYm1jLWJ1dHRvbiBpbWcge1xuICBoZWlnaHQ6IDM0cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDM1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMXB4ICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgIWltcG9ydGFudDtcbn1cbi5ibWMtYnV0dG9uIHtcbiAgcGFkZGluZzogOXB4IDE1cHggOXB4IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1ZjVmICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDhweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4ICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggMnB4IHJnYmEoMTkwLCAxOTAsIDE5MCwgMC41KSAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxcHggMnB4IDJweCByZ2JhKDE5MCwgMTkwLCAxOTAsIDAuNSkgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFwiQ29va2llXCIsIGN1cnNpdmUgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94ICFpbXBvcnRhbnQ7XG59XG4uYm1jLWJ1dHRvbjpob3Zlcixcbi5ibWMtYnV0dG9uOmFjdGl2ZSxcbi5ibWMtYnV0dG9uOmZvY3VzIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMXB4IDJweCAycHggcmdiYSgxOTAsIDE5MCwgMTkwLCAwLjUpICFpbXBvcnRhbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwcHggMXB4IDJweCAycHggcmdiYSgxOTAsIDE5MCwgMTkwLCAwLjUpICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDAuODUgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cblxuLmRvbmF0ZS13aXRoLWNyeXB0bzpob3Zlcixcbi5kb25hdGUtd2l0aC1jcnlwdG86YWN0aXZlLFxuLmRvbmF0ZS13aXRoLWNyeXB0bzpmb2N1cyB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDFweCAycHggMnB4IHJnYmEoMTkwLCAxOTAsIDE5MCwgMC41KSAhaW1wb3J0YW50O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMHB4IDFweCAycHggMnB4IHJnYmEoMTkwLCAxOTAsIDE5MCwgMC41KSAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwLjg1ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG5cblxuLmJtYy1idXR0b24ge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cblxuLmRvbmF0ZS13aXRoLWNyeXB0byB7XG4gIHBhZGRpbmc6IDlweCAxNXB4IDlweCAxMHB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyNHB4ICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjZweCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwcHggMXB4IDJweCByZ2JhKDE5MCwgMTkwLCAxOTAsIDAuNSkgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMXB4IDJweCAycHggcmdiYSgxOTAsIDE5MCwgMTkwLCAwLjUpICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIkNvb2tpZVwiLCBjdXJzaXZlICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveCAhaW1wb3J0YW50O1xufVxuXG5cbi5vdXRyby1jb250ZW50LWhyIHtcbiAgbWFyZ2luOiA1ZW0gMGVtIDVlbSAwZW07XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1sYXB0b3ApIHtcbiAgLmRvbmF0aW9uLWJ1dHRvbnMge1xuICAgIHdpZHRoOiAzMGVtO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtdGFibGV0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbGFwdG9wKSB7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1waG9uZSkge1xuXG4gIC5kb25hdGUtd2l0aC1jcnlwdG97XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuZG9uYXRpb24tYnV0dG9ucyB7XG4gICAgbWFyZ2luLWJvdHRvbTogM2VtO1xuICAgIGhlaWdodDogOGVtO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gIC5ibWMtYnV0dG9uIHtcbiAgICBoZWlnaHQ6IHVuc2V0O1xuICB9XG5cbiAgLmhlYWRpbmctY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiB1bnNldDtcbiAgfVxuXG4gIC5jb250YWN0IHtcbiAgICB3aWR0aDogdW5zZXQ7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5jb250YWN0IHtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICB9XG5cbiAgLmhlYWRpbmctY29udGFpbmVyIHtcbiAgICBtYXJnaW4tcmlnaHQ6IHVuc2V0O1xuICB9XG5cbiAgLnRpbWVzdGFtcCB7XG4gICAgcGFkZGluZzogdW5zZXQ7XG4gIH1cblxuICAuYmxvZy1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IHVuc2V0O1xuICAgIHBhZGRpbmctbGVmdDogMWVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDFlbTtcbiAgfVxuXG4gIC5kb25hdGlvbi1idXR0b25zIHtcbiAgICBtYXJnaW4tdG9wOiAzZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-blog',
            templateUrl: './blog.component.html',
            styleUrls: ['./blog.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: [".content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.card[_ngcontent-%COMP%] {\n  \n}\n\n.cards-container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 495px;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLHVDQUFBO0FBRUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQURKO0FBSUU7RUFDRSxnQkFBQTtBQURKO0FBSUUscUNBQUE7QUFFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7QUFGSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogSW5saW5lICM1IHwgaHR0cDovL2xvY2FsaG9zdDo0MjAwLyAqL1xuXG4uY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5jYXJkIHtcbiAgICAvKiB3aWR0aDogNzAlOyAqL1xuICB9XG4gIFxuICAvKiBFbGVtZW50IHwgaHR0cDovL2xvY2FsaG9zdDo0MjAwLyAqL1xuICBcbiAgLmNhcmRzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogNDk1cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG4gICJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./landing-page/landing-page.component */
      "mSt+");
      /* harmony import */


      var _blog_blog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./blog/blog.component */
      "LgBW");
      /* harmony import */


      var ngx_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-markdown */
      "lR5k");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _mailing_list_mailing_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./mailing-list/mailing-list.component */
      "syCZ");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_6__["MarkdownModule"].forRoot({
          loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_4__["LandingPageComponent"], _blog_blog_component__WEBPACK_IMPORTED_MODULE_5__["BlogComponent"], _mailing_list_mailing_list_component__WEBPACK_IMPORTED_MODULE_9__["MailingListComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_6__["MarkdownModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_4__["LandingPageComponent"], _blog_blog_component__WEBPACK_IMPORTED_MODULE_5__["BlogComponent"], _mailing_list_mailing_list_component__WEBPACK_IMPORTED_MODULE_9__["MailingListComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_6__["MarkdownModule"].forRoot({
              loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]
            })],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "mSt+":
    /*!********************************************************!*\
      !*** ./src/app/landing-page/landing-page.component.ts ***!
      \********************************************************/

    /*! exports provided: LandingPageComponent */

    /***/
    function mSt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function () {
        return LandingPageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");

      var _c0 = function _c0() {
        return ["fa", "github"];
      };

      var LandingPageComponent = /*#__PURE__*/function () {
        function LandingPageComponent() {
          _classCallCheck(this, LandingPageComponent);
        }

        _createClass(LandingPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LandingPageComponent;
      }();

      LandingPageComponent.ɵfac = function LandingPageComponent_Factory(t) {
        return new (t || LandingPageComponent)();
      };

      LandingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LandingPageComponent,
        selectors: [["app-landing-page"]],
        decls: 22,
        vars: 2,
        consts: [[1, "wrapper"], [1, "toolbar-social-media"], [1, "social-media-button"], ["target", "_blank", "href", "https://twitter.com/LambaInsaan"], ["id", "twitterLogo", 1, "fa", "fa-twitter", "logo"], ["target", "_blank", "href", "https://www.facebook.com/profile.php?id=100000545047114"], ["id", "facebookLogo", 1, "fa", "fa-facebook-official", "logo"], ["target", "_blank", "href", "https://github.com/lambainsaan"], ["id", "githubLogo", 1, "fa", "fa-github", "logo", 3, "icon"], ["target", "_blank", "href", "mailto:lambainsaan@gmail.com?Subject=Hey"], ["id", "mailLogo", 1, "fa", "fa-envelope", "logo"], [1, "content"], [1, "shadow", "card"], [1, "main-heading"], [1, "footer"]],
        template: function LandingPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "fa-icon", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Hello! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Welcome to LambaLand!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
          }
        },
        directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FaIconComponent"]],
        styles: ["a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.card[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.shadow[_ngcontent-%COMP%] {\n  box-shadow: -4px 6px 19px #000000;\n}\n.header[_ngcontent-%COMP%] {\n  min-width: dev;\n}\n.logo[_ngcontent-%COMP%] {\n  font-size: 1.7em;\n  color: #311D59;\n}\ni#twitterLogo[_ngcontent-%COMP%]:hover {\n  color: #1DA1F2;\n}\ni#facebookLogo[_ngcontent-%COMP%]:hover {\n  color: #45629D;\n}\ni#githubLogo[_ngcontent-%COMP%]:hover {\n  color: black;\n}\ni#mailLogo[_ngcontent-%COMP%]:hover {\n  color: #ffd629;\n}\n\n.card[_ngcontent-%COMP%] {\n  background-color: white;\n  margin-top: 10%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding: 10px;\n  border-radius: 5px;\n}\n.main-heading[_ngcontent-%COMP%] {\n  font-family: \"Graduate\", cursive;\n  font-size: 50px;\n}\n\n.footer[_ngcontent-%COMP%] {\n  margin-top: 10em;\n  background-color: #5044C5;\n  text-align: center;\n}\n.toolbar-social-media[_ngcontent-%COMP%] {\n  padding: 10px;\n  justify-content: space-around;\n  display: flex;\n  flex-direction: row;\n  background: #ff2d7e;\n}\n.social-media-button[_ngcontent-%COMP%] {\n  display: flex;\n  text-align: center;\n}\n.content[_ngcontent-%COMP%] {\n  background: rgba(59, 46, 190, 0.89);\n  height: 100%;\n  display: flex;\n  justify-content: center;\n}\n.wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.card[_ngcontent-%COMP%] {\n  \n}\n\n.cards-container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 495px;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxTQUFBO0FBRUE7RUFDRSxxQkFBQTtBQUFGO0FBR0E7RUFDRSxrQkFBQTtBQUFGO0FBR0E7RUFDRSxpQ0FBQTtBQUFGO0FBSUE7RUFDRSxjQUFBO0FBREY7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQURGO0FBS0E7RUFDRSxjQUFBO0FBRkY7QUFLQTtFQUNFLGNBQUE7QUFGRjtBQUtBO0VBQ0UsWUFBQTtBQUZGO0FBS0E7RUFDRSxjQUFBO0FBRkY7QUFLQSxZQUFBO0FBRUE7RUFDRSx1QkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFIRjtBQU1BO0VBQ0UsZ0NBQUE7RUFDQSxlQUFBO0FBSEY7QUFNQSxTQUFBO0FBRUE7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFKRjtBQU9BO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFKRjtBQU9BO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FBSkY7QUFPQTtFQUNFLG1DQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUpGO0FBT0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBSkY7QUFRQSx1Q0FBQTtBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFORjtBQVNBO0VBQ0UsZ0JBQUE7QUFORjtBQVNBLHFDQUFBO0FBRUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0FBUEYiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypIZWFkZXIqL1xuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY2FyZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNoYWRvdyB7XG4gIGJveC1zaGFkb3c6IC00cHggNnB4IDE5cHggIzAwMDAwMDtcbn1cblxuXG4uaGVhZGVyIHtcbiAgbWluLXdpZHRoOiBkZXY7XG59XG5cbi5sb2dvIHtcbiAgZm9udC1zaXplOiAxLjcwZW07XG4gIGNvbG9yOiAjMzExRDU5O1xufVxuXG5cbmkjdHdpdHRlckxvZ286aG92ZXIge1xuICBjb2xvcjogIzFEQTFGMjtcbn1cblxuaSNmYWNlYm9va0xvZ286aG92ZXIge1xuICBjb2xvcjogIzQ1NjI5RDtcbn1cblxuaSNnaXRodWJMb2dvOmhvdmVyIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5pI21haWxMb2dvOmhvdmVyIHtcbiAgY29sb3I6IHJnYigyNTUsIDIxNCwgNDEpO1xufVxuXG4vKkNvbnRhaW5lciovXG5cbi5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czo1cHg7XG59XG5cbi5tYWluLWhlYWRpbmcge1xuICBmb250LWZhbWlseTogJ0dyYWR1YXRlJywgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiA1MHB4O1xufVxuXG4vKkZvb3RlciovXG5cbi5mb290ZXIge1xuICBtYXJnaW4tdG9wOiAxMGVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTA0NEM1O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50b29sYmFyLXNvY2lhbC1tZWRpYSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCA0NSwgMTI2KTtcbn1cblxuLnNvY2lhbC1tZWRpYS1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250ZW50IHtcbiAgYmFja2dyb3VuZDogcmdiYSg1OSwgNDYsIDE5MCwgMC44OSk7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi53cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5cbi8qIElubGluZSAjNSB8IGh0dHA6Ly9sb2NhbGhvc3Q6NDIwMC8gKi9cblxuLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2FyZCB7XG4gIC8qIHdpZHRoOiA3MCU7ICovXG59XG5cbi8qIEVsZW1lbnQgfCBodHRwOi8vbG9jYWxob3N0OjQyMDAvICovXG5cbi5jYXJkcy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogNDk1cHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingPageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-landing-page',
            templateUrl: './landing-page.component.html',
            styleUrls: ['./landing-page.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "syCZ":
    /*!********************************************************!*\
      !*** ./src/app/mailing-list/mailing-list.component.ts ***!
      \********************************************************/

    /*! exports provided: MailingListComponent */

    /***/
    function syCZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MailingListComponent", function () {
        return MailingListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MailingListComponent = /*#__PURE__*/function () {
        function MailingListComponent() {
          _classCallCheck(this, MailingListComponent);
        }

        _createClass(MailingListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MailingListComponent;
      }();

      MailingListComponent.ɵfac = function MailingListComponent_Factory(t) {
        return new (t || MailingListComponent)();
      };

      MailingListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MailingListComponent,
        selectors: [["app-mailing-list"]],
        decls: 1,
        vars: 0,
        template: function MailingListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Hey you are quite early to the party! \uD83E\uDD73 This page is still under development, and should be up and running in a week. If you want to subscribe, drop me a message at lambainsaan [at] gmail [dot] com.\n");
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haWxpbmctbGlzdC9tYWlsaW5nLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MailingListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-mailing-list',
            templateUrl: './mailing-list.component.html',
            styleUrls: ['./mailing-list.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./landing-page/landing-page.component */
      "mSt+");
      /* harmony import */


      var _blog_blog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./blog/blog.component */
      "LgBW");
      /* harmony import */


      var _mailing_list_mailing_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./mailing-list/mailing-list.component */
      "syCZ");

      var routes = [{
        path: '',
        component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_2__["LandingPageComponent"]
      }, {
        path: 'blogs',
        component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_3__["BlogComponent"]
      }, {
        path: 'mailing-list',
        component: _mailing_list_mailing_list_component__WEBPACK_IMPORTED_MODULE_4__["MailingListComponent"]
      }, {
        path: '**',
        redirectTo: ''
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var prismjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! prismjs */
      "wZee");
      /* harmony import */


      var prismjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! prismjs/components/prism-typescript */
      "XIHC");
      /* harmony import */


      var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! prismjs/components/prism-javascript */
      "QWvX");
      /* harmony import */


      var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1"); // typescript
      // javascript


      if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_5__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map