/**
 * @module ui/product.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Product
 * @extends Component
 */
exports.Product = Component.specialize(/** @lends Product# */ {
    constructor: {
        value: function Product() {
        }
    },

    handleAction: {
        value: function (e) {
            this.dispatchEventNamed("goToPage", true, true, {page: 2, args: e.target.identifier});
        }
    }
});
