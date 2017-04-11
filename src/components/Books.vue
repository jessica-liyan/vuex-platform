<template>
  <div class="books">
    <input type="text" v-model="book">
    <a href="javascript:;" class="search-btn v-m" v-on:click="search"><img src="../../static/img/search.png" class="v-m"></a>
    <p id="msg" v-text="'检索出'+ total + '条数据'"></p>
    <div class="list">
      <div class="item" v-for="item in data">
        <a :href="item.alt" class="ib v-t">
          <img :src="item.image" alt="">
        </a>
        <div class="ib v-t pl-10">
          <p class="item-tit">
            <a :href="item.alt">{{item.title}}</a>
          </p>
          <p class="item-info" v-text="item.author[0] + '/'+ item.pages + '页' + '/'+ item.pubdate + '/'+ item.price"></p>
        </div>
      </div>
    </div>
    <div class="book-pages" v-if="num < 10">
      <a href="javascript:;" v-for="(item,index) in n" v-on:click="change(index)">
        <span v-if="index+1 !== current">{{item}}</span>
        <span class="current" v-if="index+1 == current">{{current}}</span>
      </a> 
    </div>
    <div class="book-pages" v-if="num > 10">
      <a href="javascript:;" v-for="(item,index) in n" v-on:click="change(index)">
        <span v-if="index+1 !== current && index+1 <= 10">{{item}}</span>
        <span class="current" v-if="index+1 == current">{{current}}</span>
        <span v-if="index+1 == num - 1 || index+1 == num">{{item}}</span>
      </a> 
    </div>
  </div>
</template>

<script>
// 搜索后计算得到总页数，点击事件可以得到当前的页数
// 如果总页数少于10，循环n，同时当前页面页面用span
export default {
  name: 'app',
  data () {
    return {
      book: '',
      data: [],
      count: 0,
      start: 0,
      total: 0,
      current: 1 // 当前显示的页面
    }
  },
  computed: {
    num () {
      return Math.ceil(this.total / this.count)
    },
    n () {
      var arr = []
      for (var i = 1; i < this.num + 1; i++) {
        arr.push(i)
      }
      return arr
    }
  },
  components: {
  },
  methods: {
    search: function () {
      this.$http.jsonp('https://api.douban.com/v2/book/search?q=' + this.book + '&count=15').then(function (res) {
        console.log(res.body)
        this.data = res.body.books
        this.count = res.body.count
        this.start = res.body.start
        this.total = res.body.total
      })
    },
    change: function (idx) {
      this.current = idx + 1
      console.log(this.current)
      this.$http.jsonp('https://api.douban.com/v2/book/search?q=' + this.book + '&count=15&start=' + idx * 15 + '').then(function (res) {
        console.log(res.body)
        console.log(res.body.start)
        this.data = res.body.books
      })
    }
  },
  created () {
  }
}
</script>

<style>
</style>
