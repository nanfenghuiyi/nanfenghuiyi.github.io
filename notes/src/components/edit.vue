<template>
  <div id="edit">
    <div class="title">
      <input
        type="text"
        placeholder="在这里输入标题"
        v-model="activeNote.title"
      />
    </div>
    <div class="content">
      <textarea
        name=""
        placeholder="在这里吐槽"
        v-model="activeNote.content"
      ></textarea>
    </div>
  </div>
</template>
<script type="text/javascript">
import { mapState, mapGetter, mapActions } from 'vuex'
export default {
  name: 'edit',
  computed: {
    ...mapState(['activeNote'])     //  当本组件中 computed 中的属性名与 Vuex 中的 state 属性名相同时,就可以在 mapState() 中简写
  }
}
</script>
<style type="text/css" scoped="scoped">
#edit {
  width: 300px;
  height: 600px;
  border: 2px solid #ccc;
  float: left;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
}

.title {
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

.content {
  flex-grow: 1;
  background: orange;
  display: flex;
  flex-direction: column;
}

textarea {
  width: 100%;
  box-sizing: border-box;
  flex-grow: 1;
  resize: none;
  padding: 10px;
  font-size: 12px;
  outline: none;
  font-family: inherit;
}
</style>