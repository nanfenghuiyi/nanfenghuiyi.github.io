export default {
  add_note({ commit }) {
    commit('ADD_NOTE')
  },
  select_note({ commit }, note) {
    commit("SELECT_NOTE", note)
  },
  del_note({ commit }) {
    commit("DEL_NOTE")
  },
  fav_note({ commit }) {
    commit("FAV_NOTE")
  },
  switch_note({ commit }, type) {
    commit("SWITCH_NOTE", type)
  }
}