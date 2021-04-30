<template>
  <div class="note-container">
    <div class="tab">
      <div class="add" @click="add_note">新增</div>
      <div class="fav" @click="fav_note">收藏</div>
      <div class="del" @click="del_note">删除</div>
    </div>
    <div class="list" v-touch:right="onSwipeRight" v-touch:left="onSwipeLeft">
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
    ...mapActions(['select_note', 'switch_note', 'add_note', 'del_note', 'fav_note']),
    get_select_note(note) {
      this.select_note(note)
    },
    onSwipeRight() {
      console.log("向右");
      this.$router.push({
        path: "/note/noteDetail",
        query: { data: "right" }
      })
    },
    onSwipeLeft() {
      console.log("向左");
      this.$router.push({
        path: "/note/noteDetail",
        query: { data: "left" }
      })
    },
    get_switch_note(type) {
      this.switch_note(type)
    }
  }
}
</script>
<style lang='less' scoped="scoped">
.tab {
  display: flex;
  > div {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #999;
    border: 1px solid #fff;
    color: #fff;
  }
}
.list {
  width: 95vw;
  height: 90vh;
  overflow: auto;
  border: 2px solid #ccc;
  float: left;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
}

p {
  margin: 0;
}

.switch button {
  height: 40px;
  width: 50%;
  font-size: 16px;
}

.search {
  border: 1px solid #cccccc;
}

input {
  width: 100%;
  box-sizing: border-box;
  height: 30px;
  line-height: 20px;
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
  .content {
    font-size: 14px;
    padding: 0 10px;
    margin: 0 0 10px;
    word-break: break-all;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
}

.favColor {
  background: pink;
}

.active {
  background: lightblue;
}
// @media screen and (min-width: 1024px) {
//   .note-container {
//     display: flex;
//     .tab {
//       flex-wrap: wrap;
//       font-size: 16px;
//     }
//   }
// }
</style>