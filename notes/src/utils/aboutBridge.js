import BEEBridge from "@/SWJS/beeBridge.js";

/**
 * App顶部颜色设置
 * @param {Function} callback
 */
export function setAppStyle(data, callback) {
  BEEBridge.beeBridges.call({
    path: "/Window/Style",
    data: data,
    success: (res) => {
      console.log(res, 'setAppStyle');
      callback(res);
    },
  });
}
