<template>
  <div id="list">
    <div class="switch">
      <button class="all" @click="get_switch_note('all')">全部</button
      ><button class="fav" @click="get_switch_note('fav')">已收藏</button>
    </div>
    <div class="search">
      <input type="text" placeholder="在这里搜索" v-model="search" />
    </div>
    <div class="noteList">
      <div
        class="note"
        v-for="(note, index) in search_filteredNote"
        :key="index"
        :class="{
          favColor: note.fav === true,
          active: note.id === activeNote.id,
        }"
        @click="get_select_note(note)"
      >
        <div class="title">
          <p>{{ note.title }}</p>
        </div>
        <div class="content">
          <p>{{ note.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  name: 'list',
  data: function () {
    return {
      search: ""
    }
  },
  computed: {
    ...mapState(['notes', 'activeNote']),
    ...mapGetters(['filteredNote']),
    //  二次过滤：在当前列表(全部 或 已收藏)中进行筛选,返回值被用在组件的 v-for 中 
    search_filteredNote() {
      if (this.search.length > 0) {        //  如果输入框有值,返回二次过滤的结果并加载
        return this.filteredNote.filter(note => {
          if (note.title.indexOf(this.search) > 0) {
            return note
          }
        })
      } else {            //  输入框没值,不过滤,直接拿来加载
        return this.filteredNote
      }
    }
  },
  methods: {
    ...mapActions(['select_note', 'switch_note']),
    get_select_note(note) {
      this.select_note(note)
    },
    get_switch_note(type) {
      this.switch_note(type)
    }
  }
}
</script>
<style type="text/css" scoped="scoped">
#list {
  width: 300px;
  height: 600px;
  border: 2px solid #ccc;
  float: left;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
}

p {
  margin: 0;
}

.switch {
}

.switch button {
  height: 60px;
  width: 50%;
  font-size: 14px;
}

.search {
  border: 1px solid #cccccc;
}

input {
  width: 100%;
  box-sizing: border-box;
  height: 50px;
  line-height: 50px;
  padding: 10px;
  outline: none;
  font-size: 12px;
  border: none;
}

.noteList {
  flex-grow: 1;
  overflow: auto;
}

.note {
  border: 1px solid #cccccc;
}

.favColor {
  background: pink;
}

.active {
  background: lightblue;
}
</style>