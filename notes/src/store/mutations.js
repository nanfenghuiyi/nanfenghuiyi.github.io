import { SWITCH_NOTE, ADD_NOTE, SELECT_NOTE, DEL_NOTE, FAV_NOTE } from './mutation-types'

export default {
  [ADD_NOTE](state, note = {
    id: +new Date(),
    title: '新建笔记' + new Date().getMilliseconds(),
    content: '笔记内容',
    fav: false
  }) {
    state.notes.push(note)
    state.activeNote = note
  },
  [SELECT_NOTE](state, note) {
    state.activeNote = note
  },
  [DEL_NOTE](state) {
    for (let i = 0; i < state.notes.length; i++) {
      if (state.notes[i].id === state.activeNote.id) {
        state.notes.splice(i, 1)
        state.activeNote = state.notes[i] || state.notes[i - 1] || {}
        return
      }
    }
  },
  [FAV_NOTE](state) {
    state.activeNote.fav = !state.activeNote.fav
  },
  [SWITCH_NOTE](state, type) {
    state.show = type
  }
}