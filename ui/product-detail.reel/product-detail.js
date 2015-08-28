/**
 * @module ui/product-detail.reel
 */
var Component = require("montage/ui/component").Component,
    SwipeComposer = require("montage/composer/swipe-composer").SwipeComposer;

/**
 * @class ProductDetail
 * @extends Component
 */
exports.ProductDetail = Component.specialize(/** @lends ProductDetail# */ {
    constructor: {
        value: function ProductDetail() {
            this.super();
            this._swipeComposer = new SwipeComposer();
            this.addComposer(this._swipeComposer);
        }
    },

    selectedMenuIndex: {
        value: 0
    },

    enterDocument: {
        value: function (firstTime) {
            if (firstTime) {
                this._swipeComposer.addEventListener('swipe', this)
            }
        }
    },

    handleSwipe: {
        value: function (e) {
            if (e.direction === 'RIGHT' && this.selectedMenuIndex === 1) {
                this.selectedMenuIndex = 0;
                this._isChangingMenu = true;
                this.needsDraw = true;
            } else if (e.direction === 'LEFT' && this.selectedMenuIndex === 0) {
                this.selectedMenuIndex = 1;
                this._isChangingMenu = true;
                this.needsDraw = true;
            }
        }
    },

    handleAction: {
        value: function (e) {
            if (e.target.identifier === 'moreBtn') {
                this.showMore = true;
            } else if (e.target.identifier === 'homeBtn') {
                this.dispatchEventNamed("goToPage", true, true, {page: 1});
            } else if (e.target.identifier === 'cover') {
                this.showMore = false;
            } else if (e.target.identifier === 'info1' || e.target.identifier === 'info2') {
                this._showFakeInfo = true;
            } else if (e.target.identifier === 'video1' || e.target.identifier === 'video2') {
                this._showFakeVideo = true;
            } else if (e.target.identifier === 'backBtn') {
                this._showFakeInfo = false;
            } else if (e.target.identifier === 'backBtn1') {
                this._showFakeVideo = false;
            } else if (e.target.identifier === 'abilityMenu' || e.target.identifier === 'introductionMenu') {
                if (this.selectedMenuIndex !== e.target.index) {
                    this.selectedMenuIndex = e.target.index;
                    this._isChangingMenu = true;
                    this.needsDraw = true;
                }
            }
        }
    },

    draw: {
        value: function () {
            if (this._isChangingMenu) {
                this.abilityList.classList.remove('ProductDetail-list-goLeft');
                this.informationList.classList.remove('ProductDetail-list-goRight');
                this.abilityList.classList.remove('ProductDetail-list-goIn');
                this.informationList.classList.remove('ProductDetail-list-goIn');
                if (this.selectedMenuIndex == 1) {
                    this.abilityList.classList.add('ProductDetail-list-goLeft');
                    this.informationList.classList.add('ProductDetail-list-goIn');
                } else if (this.selectedMenuIndex == 0) {
                    this.informationList.classList.add('ProductDetail-list-goRight');
                    this.abilityList.classList.add('ProductDetail-list-goIn');
                }
                this._isChangingMenu = false;
            }
        }
    }

});
