export default {
  // 设置当前菜单
  setCurrentKey(state, value) {
    state.currentKey = value;
    localStorage.setItem("currentKey", value);
  },
  // 设置当前系统
  setCurrentSystem(state,value){
    state.defaultSystem = value;
  }
}