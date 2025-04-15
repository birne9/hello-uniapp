"use strict";
const uni_modules_uniSwipeAction_components_uniSwipeActionItem_mpwxs = require("./mpwxs.js");
const uni_modules_uniSwipeAction_components_uniSwipeActionItem_bindingx = require("./bindingx.js");
const uni_modules_uniSwipeAction_components_uniSwipeActionItem_mpother = require("./mpother.js");
const common_vendor = require("../../../../common/vendor.js");
const block0 = {};
const block1 = {};
const _sfc_main = {
  mixins: [uni_modules_uniSwipeAction_components_uniSwipeActionItem_mpwxs.mpMixins, uni_modules_uniSwipeAction_components_uniSwipeActionItem_bindingx.bindIngXMixins, uni_modules_uniSwipeAction_components_uniSwipeActionItem_mpother.mpother],
  emits: ["click", "change"],
  props: {
    // 控制开关
    show: {
      type: String,
      default: "none"
    },
    // 禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 是否自动关闭
    autoClose: {
      type: Boolean,
      default: true
    },
    // 滑动缺省距离
    threshold: {
      type: Number,
      default: 20
    },
    // 左侧按钮内容
    leftOptions: {
      type: Array,
      default() {
        return [];
      }
    },
    // 右侧按钮内容
    rightOptions: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  // TODO vue3
  unmounted() {
    this.__isUnmounted = true;
    this.uninstall();
  },
  methods: {
    uninstall() {
      if (this.swipeaction) {
        this.swipeaction.children.forEach((item, index) => {
          if (item === this) {
            this.swipeaction.children.splice(index, 1);
          }
        });
      }
    },
    /**
     * 获取父元素实例
     */
    getSwipeAction(name = "uniSwipeAction") {
      let parent = this.$parent;
      let parentName = parent.$options.name;
      while (parentName !== name) {
        parent = parent.$parent;
        if (!parent)
          return false;
        parentName = parent.$options.name;
      }
      return parent;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
if (typeof block0 === "function")
  block0(_sfc_main);
if (typeof block1 === "function")
  block1(_sfc_main);
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/birne/Desktop/mp-weixin/src/uni_modules/uni-swipe-action/components/uni-swipe-action-item/uni-swipe-action-item.vue"]]);
xhs.createComponent(Component);
