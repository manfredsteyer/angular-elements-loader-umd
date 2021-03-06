(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/elements'), require('@angular/platform-browser')) :
  typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@angular/elements', '@angular/platform-browser'], factory) :
  (factory((global['ng-playbook-elementals'] = {}),global.ng.core,global.ng.common,global.ng.elements,global.ng.platformBrowser));
}(this, (function (exports,i0,i2,elements,i3) { 'use strict';

  var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var ElementsComponent = /** @class */ (function () {
      function ElementsComponent() {
      }
      ElementsComponent = __decorate([
          i0.Component({
              selector: "ng-playbook-elements",
              template: "elements works!"
          })
      ], ElementsComponent);
      return ElementsComponent;
  }());
  var ElementalsModule = /** @class */ (function () {
      function ElementalsModule(injector) {
          this.injector = injector;
      }
      ElementalsModule.prototype.ngDoBootstrap = function () {
          var element = elements.createCustomElement(ElementsComponent, {
              injector: this.injector
          });
          customElements.define('ng-playbook-elements', element);
      };
      ElementalsModule = __decorate([
          i0.NgModule({
              imports: [i2.CommonModule, i3.BrowserModule],
              declarations: [ElementsComponent],
              entryComponents: [ElementsComponent]
          })
      ], ElementalsModule);
      return ElementalsModule;
  }());

  /* XX: see below that the bootstrap code needs to replaced for AoT
  i3.platformBrowser()
      .bootstrapModule(ElementalsModule)
      .catch(function (err) { return console.log(err); });
  */

  /**
   * @fileoverview This file was generated by the Angular template compiler. Do not edit.
   *
   * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
   * tslint:disable
   */
  var ElementalsModuleNgFactory = i0.ɵcmf(ElementalsModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [ElementsComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵangular_packages_core_core_l, [[3, i0.LOCALE_ID]]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID, [2, i2.ɵangular_packages_common_common_a]]), i0.ɵmpd(4608, i0.Compiler, i0.Compiler, []), i0.ɵmpd(5120, i0.APP_ID, i0.ɵangular_packages_core_core_f, []), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵangular_packages_core_core_j, []), i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵangular_packages_core_core_k, []), i0.ɵmpd(4608, i3.DomSanitizer, i3.ɵangular_packages_platform_browser_platform_browser_e, [i2.DOCUMENT]), i0.ɵmpd(6144, i0.Sanitizer, null, [i3.DomSanitizer]), i0.ɵmpd(4608, i3.HAMMER_GESTURE_CONFIG, i3.HammerGestureConfig, []), i0.ɵmpd(5120, i3.EVENT_MANAGER_PLUGINS, function (p0_0, p0_1, p1_0, p2_0, p2_1, p2_2) { return [new i3.ɵDomEventsPlugin(p0_0, p0_1), new i3.ɵKeyEventsPlugin(p1_0), new i3.ɵHammerGesturesPlugin(p2_0, p2_1, p2_2)]; }, [i2.DOCUMENT, i0.NgZone, i2.DOCUMENT, i2.DOCUMENT, i3.HAMMER_GESTURE_CONFIG, i0.ɵConsole]), i0.ɵmpd(4608, i3.EventManager, i3.EventManager, [i3.EVENT_MANAGER_PLUGINS, i0.NgZone]), i0.ɵmpd(135680, i3.ɵDomSharedStylesHost, i3.ɵDomSharedStylesHost, [i2.DOCUMENT]), i0.ɵmpd(4608, i3.ɵDomRendererFactory2, i3.ɵDomRendererFactory2, [i3.EventManager, i3.ɵDomSharedStylesHost]), i0.ɵmpd(6144, i0.RendererFactory2, null, [i3.ɵDomRendererFactory2]), i0.ɵmpd(6144, i3.ɵSharedStylesHost, null, [i3.ɵDomSharedStylesHost]), i0.ɵmpd(4608, i0.Testability, i0.Testability, [i0.NgZone]), i0.ɵmpd(4608, i3.Meta, i3.Meta, [i2.DOCUMENT]), i0.ɵmpd(4608, i3.Title, i3.Title, [i2.DOCUMENT]), i0.ɵmpd(1073742336, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(1024, i0.ErrorHandler, i3.ɵangular_packages_platform_browser_platform_browser_a, []), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0) { return [i3.ɵangular_packages_platform_browser_platform_browser_h(p0_0)]; }, [[2, i0.NgProbeToken]]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ApplicationRef, i0.ApplicationRef, [i0.NgZone, i0.ɵConsole, i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver, i0.ApplicationInitStatus]), i0.ɵmpd(1073742336, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]), i0.ɵmpd(1073742336, i3.BrowserModule, i3.BrowserModule, [[3, i3.BrowserModule]]), i0.ɵmpd(1073742336, ElementalsModule, ElementalsModule, [i0.Injector]), i0.ɵmpd(256, i0.ɵAPP_ROOT, true, [])]); });
  var styles_ElementsComponent = [];
  var RenderType_ElementsComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_ElementsComponent, data: {} });
  function View_ElementsComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵted(-1, null, ["elements works!"]))], null, null); }
  function View_ElementsComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ng-playbook-elements", [], null, null, null, View_ElementsComponent_0, RenderType_ElementsComponent)), i0.ɵdid(1, 49152, null, 0, ElementsComponent, [], null, null)], null, null); }
  var ElementsComponentNgFactory = i0.ɵccf("ng-playbook-elements", ElementsComponent, View_ElementsComponent_Host_0, {}, {}, []);

  exports.ElementalsModuleNgFactory = ElementalsModuleNgFactory;
  exports.RenderType_ElementsComponent = RenderType_ElementsComponent;
  exports.View_ElementsComponent_0 = View_ElementsComponent_0;
  exports.View_ElementsComponent_Host_0 = View_ElementsComponent_Host_0;
  exports.ElementsComponentNgFactory = ElementsComponentNgFactory;

  Object.defineProperty(exports, '__esModule', { value: true });

  /*
   * XX: for AoT, we need to override the bootstrap code, grabbing a reference to the generated factory class
   *
   * I replaced the boottrap code manually.
   *
   * However, the browser errors at runtime:
   *
   * elements.umd.js:459 Uncaught TypeError: Failed to construct 'HTMLElement': Please use the 'new' operator, this DOM object constructor cannot be called as a function.
    at NgElementImpl.NgElement [as constructor] (elements.umd.js:459)
    at new NgElementImpl (elements.umd.js:495)
   */
  i3.platformBrowser()
    .bootstrapModuleFactory(ElementalsModuleNgFactory)
    .catch(function (err) { return console.log(err); });

})));
