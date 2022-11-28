<template>
  <div>
    <!-- START ROW -->
    <div class="row">
      <div class="col-xl-12">
        <div class="card m-b-30">
          <div class="card-body">
            <h4 class="mt-0 header-title mb-4">공지사항</h4>
            <div class="table-responsive">
              <table class="table table-hover" id="table">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">순번</th>
                    <th scope="col">내용</th>
                    <th scope="col">날짜</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="d in state.data" :key="d.id">
                    <td class="col-md-1">
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          value="option1"
                        />
                        <label
                          class="form-check-label"
                          for="inlineCheckbox1"
                        ></label>
                      </div>
                    </td>
                    <td class="col-md-1">
                      <div>
                        <span>{{ d.num }}</span>
                      </div>
                    </td>
                    <td class="col-6">
                      <div>
                        <span>{{ d.content }}</span>
                      </div>
                    </td>
                    <td class="col-md-4">
                      <div>
                        <span>{{ d.date }}</span>
                      </div>
                    </td>
                  </tr>

                  <!--<tr>
                    <td>Jassa</td>
                    <td>
                      <span class="badge badge-success">Delivered</span>
                    </td>
                    <td>$9,420,000</td>
                    <td>
                      <div>
                        <img
                          src="assets/images/user-2.jpg"
                          alt=""
                          class="thumb-md rounded-circle mr-2"
                        />
                        Jassa
                      </div>
                    </td>
                    <td>Ludhiana</td>
                    <td>15/1/2021</td>
                    <td>
                      <div>
                        <a href="#" class="btn btn-primary btn-sm">Edit</a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Jassa</td>
                    <td>
                      <span class="badge badge-warning">Pending</span>
                    </td>
                    <td>$3,120,000</td>
                    <td>
                      <div>
                        <img
                          src="assets/images/user-3.jpg"
                          alt=""
                          class="thumb-md rounded-circle mr-2"
                        />
                        Jassa
                      </div>
                    </td>
                    <td>Ludhiana</td>
                    <td>16/1/2021</td>
                    <td>
                      <div>
                        <a href="#" class="btn btn-primary btn-sm">Edit</a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Jassa</td>
                    <td>
                      <span class="badge badge-success">Delivered</span>
                    </td>
                    <td>$6,360,000</td>
                    <td>
                      <div>
                        <img
                          src="assets/images/user-4.jpg"
                          alt=""
                          class="thumb-md rounded-circle mr-2"
                        />
                        Jassa
                      </div>
                    </td>
                    <td>Ludhiana</td>
                    <td>17/1/2021</td>
                    <td>
                      <div>
                        <a href="#" class="btn btn-primary btn-sm">Edit</a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Jassa</td>
                    <td>
                      <span class="badge badge-danger">Cancel</span>
                    </td>
                    <td>$5,200,000</td>
                    <td>
                      <div>
                        <img
                          src="assets/images/user-5.jpg"
                          alt=""
                          class="thumb-md rounded-circle mr-2"
                        />
                        Jassa
                      </div>
                    </td>
                    <td>Ludhiana</td>
                    <td>18/1/2021</td>
                    <td>
                      <div>
                        <a href="#" class="btn btn-primary btn-sm">Edit</a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Jassa</td>
                    <td>
                      <span class="badge badge-success">Delivered</span>
                    </td>
                    <td>$7,250,000</td>
                    <td>
                      <div>
                        <img
                          src="assets/images/user-6.jpg"
                          alt=""
                          class="thumb-md rounded-circle mr-2"
                        />
                        Jassa
                      </div>
                    </td>
                    <td>Ludhiana</td>
                    <td>19/1/2021</td>
                    <td>
                      <div>
                        <a href="#" class="btn btn-primary btn-sm">Edit</a>
                      </div>
                    </td>
                  </tr>
                </tbody>-->
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END ROW -->
  </div>
</template>

<script>
import { reactive } from 'vue'
import axios from 'axios'
export default {
  components: {},
  data() {
    return {
      sampleData: ''
    }
  },
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

<style scoped></style>
