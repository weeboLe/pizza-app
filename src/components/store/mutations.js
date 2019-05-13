export default {
  // 更改属性的状态
  setMenuItems(state, data) {
    state.meunItems = data
  },
  removeMenuItems(state, data) {
    state.meunItems.forEach((item, index) => {
      if (item === data) {
        state.meunItems.splice(index, 1)
      }
    });
  },
  pushToMenuItems(state, data) {
    state.meunItems.push(data)
  },
  userStatus(state, user) {
    if (user) {
      state.currentUser = user
      state.isLogin = true
    } else {
      state.currentUser = null
      state.isLogin = false
    }
  }
}