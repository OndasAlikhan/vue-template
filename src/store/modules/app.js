
const types = {
  // SET_LAYOUT: 'SET_LAYOUT'
  SET_SIDEBAR: 'SET_SIDEBAR'
}
console.log(types)
export default {
  namespaced: true,
  state: () => ({
    sidebar: true
  }),
  getters: {
    sidebar: state => state.sidebar
  },
  mutations: {
    [types.SET_SIDEBAR]: (state, sidebarState) => state.sidebar = sidebarState
  },
  actions: {
    toggleSidebar: ({ commit, getters }) => {
      console.log("getters['sidebar']", getters['sidebar'])
      commit(types.SET_SIDEBAR, !getters['sidebar'])
    }
  }
}