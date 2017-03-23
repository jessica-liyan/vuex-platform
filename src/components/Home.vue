<template>
  <div class="wrapper">
    <div class="search">
      <div class="row w h mb-10">
        <div class="col v-m">
          <input type="text" placeholder="数据源显示名称" v-model="name">
          <input type="text" placeholder="数据库类型" v-model="type">
          <a href="javascript:;" class="search-btn" v-on:click="search({name, type})"><img src="../../static/img/search.png" class="v-m"></a>
        </div>
        <div class="col v-m t-r">
          <a href="#" class="add ib v-m" v-on:click="showMask">
            <img src="../../static/img/add.png" alt="" class="v-m">
            <span class="v-m">新增数据源</span>
          </a>
        </div>
      </div>
    </div>
    <div class="table-wrap">
      <table>
        <colgroup>
          <col width="5%" />
          <col width="18%" />
          <col width="10%" />
          <col width="10%" />
          <col width="10%" />
          <col width="10%" />
          <col width="10%" />
          <col width="10%" />
          <col width="17%" />
        </colgroup>
        <tr>
          <th v-for="item in caption">{{item}}</th>
        </tr>
        <tr v-for="(item,index) in limit" v-bind:index ="index">
          <td>{{index+1+idx}}</td>
          <td>
            <img :src="'static/img/' + item.type + '.png'" alt="" class="v-m mr-10 ml-10">
            {{item.tit}}
          </td>
          <td>{{item.entit}}</td>
          <td>{{item.default}}</td>
          <td>{{item.type}}</td>
          <td>{{item.ip}}</td>
          <td>{{item.post}}</td>
          <td>{{item.description}}</td>
          <td>
            <button class="btn edit" v-on:click="edit({item,index,idx})">修改</button>
            <button class="btn del" v-on:click="del({item,index,idx})">删除</button>
          </td>
        </tr>
      </table>
    </div>
    <div class="pages">
      <div class="row w h">
        <div class="col t-l v-m">
          共<i v-text="n"></i>页，当前第<i v-text="i"></i>页，<i v-text="sum"></i>条记录
        </div>
        <div class="col t-r v-m">
          <a href="javascript:;" v-on:click="home()">首页</a>
          <a href="javascript:;" v-on:click="prev()">上一页</a>
          <a href="javascript:;" v-on:click="next(n)">下一页</a>
          <a href="javascript:;" v-on:click="end(n)">末页</a>
        </div>
      </div>
    </div>
    <AddMask></AddMask>
    <ChangeMask></ChangeMask>
  </div>
</template>

<script>
// 新增的时候，英文名称不能重复。修改的时候，英文名称不能修改
// 如何将更改添加到数据库？
import {mapGetters, mapMutations, mapActions} from 'vuex'
import AddMask from './AddMask'
import ChangeMask from './ChangeMask'
export default {
  data () {
    return {
      name: '',
      type: '',
      index: 0,
      caption: []
    }
  },
  created () {
    this.caption = this.$root.caption
    console.log(this.$root.caption)
  },
  components: {
    AddMask,
    ChangeMask
  },
  computed: {
    ...mapGetters({
      caption: 'getCaption',
      info: 'getInfo',
      limit: 'limit',
      idx: 'idx',
      sum: 'sum',
      i: 'i',
      n: 'n'
    })
  },
  methods: {
    ...mapMutations({
      prev: 'prev',
      next: 'next',
      home: 'home',
      end: 'end',
      search: 'search',
      showMask: 'showMask',
      edit: 'edit',
      del: 'del'
    }),
    ...mapActions([])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
