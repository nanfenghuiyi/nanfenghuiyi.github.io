<template>
  <div id="tool">
    <button class="add" @click="add_note">新增</button>
    <button class="fav" @click="fav_note">收藏</button>
    <button class="del" @click="del_note">删除</button>
  </div>
</template>
<script type="text/javascript">
import { mapState, mapGetter, mapActions } from 'vuex'
export default {
  name: 'tool',
  methods: {
    ...mapActions(['add_note', 'del_note', 'fav_note'])
  }
}
</script>
<style type="text/css" scoped>
#tool {
  width: 200px;
  height: 600px;
  border: 2px solid #ccc;
  float: left;
}

button {
  width: 100%;
  height: calc(100% / 3);
  font-size: 16px;
}
</style>