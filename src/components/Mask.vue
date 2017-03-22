<template>
  <div class="mask">
    <div class="mask-wrap t-r">
      <a href="#" class="search-btn" style="color:#fff;margin-bottom:10px;" v-on:click="addlist(list)">确定</a>
      <table class="mask-table">
        <colgroup>
          <col width="30%">
          <col width="40%">
          <col width="30%">
        </colgroup>
        <tr>
          <th>信息名称</th>
          <th>请在此栏填写信息内容</th>
          <th>说明</th>
        </tr>
        <tr>
          <th>数据源显示名称</th>
          <td class="input"><input type="text" v-model="list.tit" :value="list.tit"></td>
          <td>数据源中文名称</td>
        </tr>
        <tr>
          <th>数据源名称</th>
          <td class="input"><input type="text" v-model="list.entit"></td>
          <td>数据源英文名称</td>
        </tr>
        <tr>
          <th>默认数据库</th>
          <td class="input"><input type="text" v-model="list.default"></td>
          <td>连接的默认数据库</td>
        </tr>
        <tr>
          <th>数据库类型</th>
          <td class="input"><input type="text" v-model="list.type"></td>
          <td>数据库类型</td>
        </tr>
        <tr>
          <th>服务器地址</th>
          <td class="input"><input type="text" v-model="list.ip"></td>
          <td>连接的数据库服务器地址</td>
        </tr>
        <tr>
          <th>端口号</th>
          <td class="input"><input type="text" v-model="list.post"></td>
          <td>连接的数据库服务端口</td>
        </tr>
        <tr>
          <th>数据库描述</th>
          <td class="input"><input type="text" v-model="list.description"></td>
          <td></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import config from '../config'
import {mapMutations, mapActions} from 'vuex'
export default {
  name: 'mask',
  data () {
    return {
      form: config.form,
      list: {
        tit: '',
        entit: '',
        default: '',
        type: '',
        ip: '',
        post: '',
        description: ''
      }
    }
  },
  computed: {
  },
  methods: {
<<<<<<< HEAD
    add () {
      this.form.map((item) => {
        console.log(item.enname)
      })
    }
=======
    ...mapMutations({
      addlist: 'addlist'
    }),
    ...mapActions({
      clear: 'clear'
    })
>>>>>>> a756dc861817a43d11c3f0b0fa57b3405bf8ecf8
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
