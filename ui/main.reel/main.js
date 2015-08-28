/**
 * @module ui/main.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
            this.addEventListener('goToPage', this);
        }
    },

    enterDocument: {
        value: function (firstTime) {
            if (firstTime) {
                this.templateObjects.panelFlow.__flowTranslateComposer.handleTouchmove = function () {
                    return false;
                };
                this.templateObjects.panelFlow.__flowTranslateComposer.handleTouchend = function () {
                    return false;
                };
                this.templateObjects.panelFlow.__flowTranslateComposer.captureTouchend = function () {
                    return false;
                };
                this.templateObjects.panelFlow.__flowTranslateComposer.captureTouchmove = function () {
                    return false;
                };
            }
        }
    },

    handleTranslateStart: {
        value: function (e) {
            this.templateObjects.panelFlow.stopScrolling()
        }
    },

    handleGoToPage: {
        value: function (e) {
            this.templateObjects.panelFlow.startScrollingIndexToOffset(e.detail.page, 0)
        }
    }
});
