var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "../../utils/ui-event"], function (require, exports, aurelia_framework_1, ui_event_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UISidebar = (function () {
        function UISidebar(element) {
            this.element = element;
            this.label = "";
            this.collapsed = false;
            this.position = "start";
            this.glyph = 'ui-arrow-left';
            this.contentCls = '';
            this.miniDisplay = false;
            this.collapsible = false;
            if (element.hasAttribute('scroll'))
                this.contentCls += ' ui-scroll';
            if (element.hasAttribute('padded'))
                this.contentCls += ' ui-pad-all';
            if (element.hasAttribute('small'))
                element.classList.add('ui-small');
            if (this.miniDisplay = element.hasAttribute('mini-display'))
                element.classList.add('ui-mini-display');
            this.collapsible = element.hasAttribute('collapsible');
            this.obClick = ui_event_1.UIEvent.subscribe('mouseclick', function () {
                element.classList.remove('ui-show-overlay');
            });
        }
        UISidebar.prototype.created = function (owningView, myView) { };
        UISidebar.prototype.bind = function (bindingContext, overrideContext) {
            this.collapsed = isTrue(this.collapsed);
            if (this.position == 'end')
                this.glyph = "ui-arrow-right";
        };
        UISidebar.prototype.attached = function () { };
        UISidebar.prototype.detached = function () { };
        UISidebar.prototype.unbind = function () { };
        UISidebar.prototype.collapsedChanged = function (newValue) {
            this.glyph = (this.position == 'end' && !isTrue(newValue)) || (this.position == 'start' && isTrue(newValue)) ? "ui-arrow-right" : "ui-arrow-left";
        };
        UISidebar.prototype.toggleCollapse = function ($event) {
            this.collapsed = !this.collapsed;
            this.element.classList.remove('ui-show-overlay');
            $event.cancelBubble = true;
            return true;
        };
        UISidebar.prototype.showOverlay = function ($event) {
            if (this.miniDisplay || $event.target != this.element)
                return true;
            if (this.collapsed)
                this.element.classList.add('ui-show-overlay');
            else
                this.element.classList.remove('ui-show-overlay');
        };
        return UISidebar;
    }());
    __decorate([
        aurelia_framework_1.bindable(),
        __metadata("design:type", Object)
    ], UISidebar.prototype, "label", void 0);
    __decorate([
        aurelia_framework_1.bindable(),
        __metadata("design:type", Object)
    ], UISidebar.prototype, "collapsed", void 0);
    __decorate([
        aurelia_framework_1.bindable(),
        __metadata("design:type", Object)
    ], UISidebar.prototype, "position", void 0);
    UISidebar = __decorate([
        aurelia_framework_1.autoinject(),
        aurelia_framework_1.inlineView("<template class=\"ui-sidebar ui-row-vertical ui-row-stretch ${collapsed?'ui-collapse':''} ${position}\" click.trigger=\"showOverlay($event)\">\n  <div class=\"ui-col-auto ui-row ui-row-end ui-row-middle ui-sidebar-head ${position=='start'?'':'ui-reverse'}\" if.bind=\"collapsible || label\">\n  <div class=\"ui-col-fill ui-sidebar-title\">${label}</div>\n  <a click.trigger=\"toggleCollapse($event)\" class=\"ui-col-auto ui-sidebar-close\" if.bind=\"collapsible\"><ui-glyph glyph.bind=\"glyph\"></ui-glyph></a></div>\n  <div class=\"ui-col-fill ui-sidebar-content ${contentCls}\"><slot></slot></div>\n</template>"),
        aurelia_framework_1.customElement('ui-sidebar'),
        __metadata("design:paramtypes", [Element])
    ], UISidebar);
    exports.UISidebar = UISidebar;
});