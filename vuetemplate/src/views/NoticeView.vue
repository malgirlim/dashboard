<template>
  <div class="content-page">
    <div class="content">
      <div><MESBoard /></div>

      <div class="board_button">
        <span>
          <button type="button" class="btn btn-primary">
            <i class="bi bi-plus-circle"></i>
            등록
          </button>
        </span>
        <span>
          <button type="button" class="btn btn-danger">
            <i class="bi bi-x-circle"></i>
            삭제
          </button>
        </span>
        <span>
          <button type="button" class="btn btn-success" @click="makeExcelFile">
            <i class="bi bi-arrow-down-circle"></i>
            Excel
          </button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import MESBoard from '@/components/MESBoard.vue'
export default {
  name: 'NoticeView',
  components: {
    MESBoard
  },

  data() {},
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    makeExcelFile() {
      let tab_text = '<html xmlns:x="urn:schemas-microsoft-com:office:excel">'
      tab_text +=
        '<head><meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8">'
      tab_text += '<xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>'
      tab_text += '<x:Name>Test Sheet</x:Name>'
      tab_text +=
        '<x:WorksheetOptions><x:Panes></x:Panes></x:WorksheetOptions></x:ExcelWorksheet>'
      tab_text += '</x:ExcelWorksheets></x:ExcelWorkbook></xml></head><body>'
      tab_text += '<table>'
      const temp = document.getElementById('table').innerHTML
      // console.log(temp)
      tab_text += temp
      tab_text += '</table></body></html>'
      console.log(tab_text)
      const fileName = 'export.xls'
      const a_tag = document.createElement('a')
      const blob = new Blob([tab_text], {
        type: 'application/vnd.ms-excel;charset=utf-8;'
      })
      a_tag.href = window.URL.createObjectURL(blob)
      a_tag.download = fileName
      a_tag.click()
    }
  }
}
</script>

<style lang="scss" scoped>
.board_button {
  text-align: right;
  span {
    margin: 0 5px;
  }
}
</style>
