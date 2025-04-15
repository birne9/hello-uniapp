"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_airport = require("../../../common/airport.js");
if (!Array) {
  const _easycom_uni_indexed_list2 = common_vendor.resolveComponent("uni-indexed-list");
  _easycom_uni_indexed_list2();
}
const _easycom_uni_indexed_list = () => "../../../uni_modules/uni-indexed-list/components/uni-indexed-list/uni-indexed-list.js";
if (!Math) {
  _easycom_uni_indexed_list();
}
const _sfc_main = {
  __name: "indexed-list",
  setup(__props) {
    const list = common_vendor.ref(common_airport.airport.list);
    const bindClick = (e) => {
      console.log(`点击item，返回数据${JSON.stringify(e)}`);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(bindClick),
        b: common_vendor.p({
          options: list.value,
          ["show-select"]: true
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/birne/Desktop/mp-weixin/src/pages/extUI/indexed-list/indexed-list.vue"]]);
xhs.createPage(MiniProgramPage);
