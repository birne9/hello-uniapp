<template>
	<view class="container">
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">uni-forms 组件一般由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据。</text>
		</uni-card>
		<uni-section title="基本用法" type="line">
			<view class="example">
				<!-- 基础用法，不包含校验规则 -->
				<uni-forms ref="baseForm" :model="baseFormData" labelWidth="80px">
					<uni-forms-item label="姓名" required>
						<uni-easyinput v-model="baseFormData.name" placeholder="请输入姓名" />
					</uni-forms-item>
					<uni-forms-item label="年龄" required>
						<uni-easyinput v-model="baseFormData.age" placeholder="请输入年龄" />
					</uni-forms-item>
					<uni-forms-item label="性别" required>
						<uni-data-checkbox v-model="baseFormData.sex" :localdata="sexs" />
					</uni-forms-item>
					<uni-forms-item label="兴趣爱好" required>
						<uni-data-checkbox v-model="baseFormData.hobby" multiple :localdata="hobbys" />
					</uni-forms-item>
					<uni-forms-item label="自我介绍">
						<uni-easyinput type="textarea" v-model="baseFormData.introduction" placeholder="请输入自我介绍" />
					</uni-forms-item>
					<uni-forms-item label="日期时间">
						<uni-datetime-picker type="datetime" return-type="timestamp"
							v-model="baseFormData.datetimesingle" />
					</uni-forms-item>
					<uni-forms-item label="选择城市">
						<uni-data-picker v-model="baseFormData.city" :localdata="cityData" popup-title="选择城市">
						</uni-data-picker>
					</uni-forms-item>

					<uni-forms-item label="选择技能">
						<uni-data-select v-model="baseFormData.skills" :localdata="skillsRange" >
						</uni-data-select>
					</uni-forms-item>
				</uni-forms>
			</view>
		</uni-section>

		<uni-section title="对齐方式" type="line">
			<view class="example">
				<view class="segmented-control">
					<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem"
						styleType="button">
					</uni-segmented-control>
				</view>
				<!-- 展示不同的排列方式 -->
				<uni-forms ref="baseForm" :modelValue="alignmentFormData" :label-position="alignment">
					<uni-forms-item label="姓名" required>
						<uni-easyinput v-model="baseFormData.name" placeholder="请输入姓名" />
					</uni-forms-item>
					<uni-forms-item label="年龄" required>
						<uni-easyinput v-model="baseFormData.age" placeholder="请输入年龄" />
					</uni-forms-item>
				</uni-forms>
			</view>
		</uni-section>

		<uni-section title="表单校验" type="line">
			<view class="example">
				<!-- 基础表单校验 -->
				<uni-forms ref="valiForm" :rules="rules" :model="valiFormData" labelWidth="80px">
					<uni-forms-item label="姓名" required name="name">
						<uni-easyinput v-model="valiFormData.name" placeholder="请输入姓名" />
					</uni-forms-item>
					<uni-forms-item label="年龄" required name="age">
						<uni-easyinput v-model="valiFormData.age" placeholder="请输入年龄" />
					</uni-forms-item>
					<uni-forms-item label="自我介绍">
						<uni-easyinput type="textarea" v-model="valiFormData.introduction" placeholder="请输入自我介绍" />
					</uni-forms-item>
				</uni-forms>
				<button type="primary" @click="submit('valiForm')">提交</button>
			</view>
		</uni-section>

		<uni-section title="自定义校验规则" type="line">
			<view class="example">
				<!-- 自定义表单校验 -->
				<uni-forms ref="customForm" :rules="customRules" labelWidth="80px" :modelValue="customFormData">
					<uni-forms-item label="姓名" required name="name">
						<uni-easyinput v-model="customFormData.name" placeholder="请输入姓名" />
					</uni-forms-item>
					<uni-forms-item label="年龄" required name="age">
						<uni-easyinput v-model="customFormData.age" placeholder="请输入年龄" />
					</uni-forms-item>
					<uni-forms-item label="兴趣爱好" required name="hobby">
						<uni-data-checkbox v-model="customFormData.hobby" multiple :localdata="hobbys" />
					</uni-forms-item>
				</uni-forms>
				<button type="primary" @click="submit('customForm')">提交</button>
			</view>
		</uni-section>


		<uni-section title="动态表单" type="line">
			<view class="example">
				<!-- 动态表单校验 -->
				<uni-forms ref="dynamicForm" :rules="dynamicRules" :model="dynamicFormData" labelWidth="80px">
					<uni-forms-item label="邮箱" required name="email">
						<uni-easyinput v-model="dynamicFormData.email" placeholder="请输入姓名" />
					</uni-forms-item>
					<uni-forms-item v-for="(item,index) in dynamicFormData.domains" :key="item.id"
						:label="item.label+' '+index" required :rules="item.rules" :name="['domains',index,'value']">
						<view class="form-item">
							<uni-easyinput v-model="dynamicFormData.domains[index].value" placeholder="请输入域名" />
							<button class="button" size="mini" type="default" @click="del(item.id)">删除</button>
						</view>
					</uni-forms-item>
				</uni-forms>
				<view class="button-group">
					<button type="primary" size="mini" @click="add">新增域名</button>
					<button type="primary" size="mini" @click="submit('dynamicForm')">提交</button>
				</view>
			</view>
		</uni-section>
	</view>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

// Data
const baseFormData = ref({
  name: '',
  age: '',
  introduction: '',
  sex: 2,
  hobby: [5],
  datetimesingle: 1627529992399,
  city: '',
  skills: 0
})

const cityData = ref([
  { text: "北京", value: "10001" },
  { text: "上海", value: "10002" },
  { text: "深圳", value: "10004" }
])

const skillsRange = ref([
  { value: 0, text: "编程" },
  { value: 1, text: "绘画" },
  { value: 2, text: "运动" }
])

const sexs = ref([
  { text: '男', value: 0 },
  { text: '女', value: 1 },
  { text: '保密', value: 2 }
])

const hobbys = ref([
  { text: '跑步', value: 0 },
  { text: '游泳', value: 1 },
  { text: '绘画', value: 2 },
  { text: '足球', value: 3 },
  { text: '篮球', value: 4 },
  { text: '其他', value: 5 }
])

const current = ref(0)
const items = ref(['左对齐', '顶部对齐'])

const valiFormData = ref({
  name: '',
  age: '',
  introduction: ''
})

const dynamicFormData = ref({
  email: '',
  domains: []
})

const dynamicLists = ref([])

const rules = {
  name: {
    rules: [{ required: true, errorMessage: '姓名不能为空' }]
  },
  age: {
    rules: [
      { required: true, errorMessage: '年龄不能为空' },
      { format: 'number', errorMessage: '年龄只能输入数字' }
    ]
  }
}

const customRules = {
  name: {
    rules: [{ required: true, errorMessage: '姓名不能为空' }]
  },
  age: {
    rules: [{ required: true, errorMessage: '年龄不能为空' }]
  },
  hobby: {
    rules: [
      { format: 'array' },
      { validateFunction: (rule, value, data, callback) => {
          if (value.length < 2) callback('请至少勾选两个兴趣爱好')
          return true
      }}
    ]
  }
}

const alignment = computed(() => {
  return current.value === 0 ? 'left' : 'top'
})

// Methods
const onClickItem = (e) => {
  current.value = e.currentIndex
}

const add = () => {
  dynamicLists.value.push({
    label: '域名',
    value: '',
    rules: [{ required: true, errorMessage: '域名项必填' }],
    id: Date.now()
  })
}

const del = (id) => {
  const index = dynamicLists.value.findIndex(v => v.id === id)
  dynamicLists.value.splice(index, 1)
}

const submit = (ref) => {
  console.log(baseFormData.value)
  const formRef = ref(ref)
  formRef.validate()
    .then(res => {
      console.log('success', res)
      uni.showToast({ title: `校验通过` })
    })
    .catch(err => {
      console.log('err', err)
    })
}

onMounted(() => {
  // Handle form validation rules setup
  const customForm = ref('customForm')
  customForm.value.setRules(customRules)
})
</script>


<style lang="scss" scoped>
	.example {
		padding: 15px;
		background-color: #fff;
	}

	.segmented-control {
		margin-bottom: 15px;
	}

	.button-group {
		margin-top: 15px;
		display: flex;
		justify-content: space-around;
	}

	.form-item {
		display: flex;
		align-items: center;
		flex: 1;
	}

	.button {
		display: flex;
		align-items: center;
		height: 35px;
		line-height: 35px;
		margin-left: 10px;
	}
</style>
