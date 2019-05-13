 export default {
  // 应用mutations
  setUser({
    commit
  }, user) {
    commit('userStatus', user)
  }
}
