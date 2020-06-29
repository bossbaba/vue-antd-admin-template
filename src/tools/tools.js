/**
 * 数组去重
 * @param {Array} arr  
 */
function unique (arr) {
  return Array.from(new Set(arr))
}

export default {
  unique
}