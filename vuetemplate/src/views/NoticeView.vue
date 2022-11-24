<template>
  <div class="content-page">
    <div class="content">
      <div class="notice">
        <ul class="list-group">
          <li class="list-group item" v-for="d in state.data" :key="d.id">
            <div>
              <span>{{ d.num }}</span> | <span>{{ d.content }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import axios from 'axios'
export default {
  components: {},
  data() {},
  setup() {
    const state = reactive({
      data: []
    })
    axios.get('/api/notice/').then((res) => {
      state.data = res.data
    })
    return {
      state
    }
  },
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.notice {
  text-align: left;
  padding: 10px 10px 5px 5px;
  ul {
    list-style: none;
    padding: 15px;
    margin: 0;
    li {
      padding: 10px;
      margin: 10px 0;
      border: 1px solid #eee;
    }
  }
}
</style>
