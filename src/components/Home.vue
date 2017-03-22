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
    <div class="mask" v-show="add">
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
            <td class="input"><input type="text" v-model="list.tit"></td>
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
            <td class="select">
              <select v-model="list.type">
                <option>PostgreSQL</option>
                <option>MySQL</option>
                <option>Oracle</option>
                <option>SQLServer</option>
                <option>Hive</option>
              </select>
            </td>
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
    <div class="mask" v-show="change">
      <div class="mask-wrap t-r">
        <a href="#" class="search-btn" style="color:#fff;margin-bottom:10px;" v-on:click="changelist(list)">确定</a>
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
            <td class="input"><input type="text" v-model="list.tit"></td>
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
  </div>
</template>

<script>
// 过滤掉重复的。name相同的就是修改，name不同的就是新增
// 监听input中的数值变化，mutation中改变list的值     新增的input的值会互相影响？新增的如何添加到数据库？
import {mapGetters, mapMutations, mapActions} from 'vuex'
export default {
  data () {
    return {
      name: '',
      type: '',
      index: 0
    }
  },
  computed: {
    ...mapGetters({
      caption: 'getCaption',
      info: 'getInfo',
      limit: 'limit',
      idx: 'idx',
      add: 'add',
      change: 'change',
      sum: 'sum',
      i: 'i',
      n: 'n',
      list: 'list'
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
      confirm: 'confirm',
      addlist: 'addlist',
      changelist: 'changelist',
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
