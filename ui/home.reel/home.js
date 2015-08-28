/**
 * @module ui/home.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Home
 * @extends Component
 */
exports.Home = Component.specialize(/** @lends Home# */ {
    constructor: {
        value: function Home() {
            this.super();
        }
    },

    didDraw: {
        value: function () {
            var self = this;
            this.templateObjects.openButton.classList.add('animated');
            this.templateObjects.openButton.classList.add('fadeIn');
            setTimeout(function () {
                self.templateObjects.openButton.classList.remove('animated');
                self.templateObjects.openButton.classList.remove('fadeIn');
                self.templateObjects.openButton.classList.add('Home-openButton--isVisible');
            }, 1000);
        }
    },

    handleAction: {
        value: function () {
            this.dispatchEventNamed("goToPage", true, true, {page: 1});
        }
    }

});
