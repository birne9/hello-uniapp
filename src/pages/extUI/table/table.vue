<template>
	<view>
		<view class="uni-container">
			<uni-table ref="table" :loading="loading" border stripe type="selection" emptyText="暂无更多数据" @selection-change="selectionChange">
				<uni-tr>
					<uni-th width="150" align="center">日期</uni-th>
					<uni-th width="150" align="center">姓名</uni-th>
					<uni-th align="center">地址</uni-th>
					<uni-th width="204" align="center">设置</uni-th>
				</uni-tr>
				<uni-tr v-for="(item, index) in tableData" :key="index">
					<uni-td>{{ item.date }}</uni-td>
					<uni-td>
						<view class="name">{{ item.name }}</view>
					</uni-td>
					<uni-td align="center">{{ item.address }}</uni-td>
					<uni-td>
						<view class="uni-group">
							<button class="uni-button" size="mini" type="primary">修改</button>
							<button class="uni-button" size="mini" type="warn">删除</button>
						</view>
					</uni-td>
				</uni-tr>
			</uni-table>
			<view class="uni-pagination-box"><uni-pagination show-icon :page-size="pageSize" :current="pageCurrent" :total="total" @change="change" /></view>
		</view>
	</view>
</template>

<script setup>
import tableDataMock from './tableData.js'
import { ref } from 'vue'

const searchVal = ref('')
const tableData = ref(tableDataMock)
const pageSize = ref(10)
const pageCurrent = ref(1)
const total = ref(0)
const loading = ref(false)
const selectedIndexs = ref([])

const selectedItems = () => {
  return selectedIndexs.value.map(i => tableData.value[i])
}

const selectionChange = (e) => {
  console.log(e.detail.index)
  selectedIndexs.value = e.detail.index
}

const delTable = () => {
  console.log(selectedItems())
}

const change = (e) => {
  $refs.table.clearSelection()
  selectedIndexs.value.length = 0
  getData(e.current)
}

const search = () => {
  getData(1, searchVal.value)
}

const getData = (pageCurrentValue, value = '') => {
  loading.value = true
  pageCurrent.value = pageCurrentValue
  request({
    pageSize: pageSize.value,
    pageCurrent: pageCurrentValue,
    value: value,
    success: (res) => {
      tableData.value = res.data
      total.value = res.total
      loading.value = false
    }
  })
}

const request = (options) => {
  const { pageSize: pageSizeVal, pageCurrent: pageCurrentVal, success, value } = options
  let totalCount = tableData.value.length
  let data = tableData.value.filter((item, index) => {
    const idx = index - (pageCurrentVal - 1) * pageSizeVal
    return idx < pageSizeVal && idx >= 0
  })
  if (value) {
    data = []
    tableData.value.forEach(item => {
      if (item.name.indexOf(value) !== -1) {
        data.push(item)
      }
    })
    totalCount = data.length
  }

  setTimeout(() => {
    typeof success === 'function' && success({
      data: data,
      total: totalCount
    })
  }, 500)
}

onMounted(() => {
  selectedIndexs.value = []
  getData(1)
})
</script>

<style>
/* #ifndef H5 */
/* page {
	padding-top: 85px;
} */
/* #endif */
.uni-group {
	display: flex;
	align-items: center;
}
</style>
