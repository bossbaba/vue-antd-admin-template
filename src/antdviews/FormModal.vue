<template>
  <div class="form">
    <div class="label">FormModal</div>
    <a-form-model
      ref="ruleForm"
      :model="form"
      :rules="rules"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
    >
      <a-form-model-item ref="name" label="Activity name" prop="name">
        <a-input
          v-model="form.name"
          @blur="
          () => {
            $refs.name.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-form-model-item label="Activity zone" prop="region">
        <a-select v-model="form.region" placeholder="please select your zone">
          <a-select-option value="shanghai">Zone one</a-select-option>
          <a-select-option value="beijing">Zone two</a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item label="Activity time" required prop="date1">
        <a-date-picker
          v-model="form.date1"
          show-time
          type="date"
          placeholder="Pick a date"
          style="width: 100%;"
        />
      </a-form-model-item>
      <a-form-model-item label="Instant delivery" prop="delivery">
        <a-switch v-model="form.delivery" />
      </a-form-model-item>
      <a-form-model-item label="Activity type" prop="type">
        <a-checkbox-group v-model="form.type">
          <a-checkbox value="1" name="type">Online</a-checkbox>
          <a-checkbox value="2" name="type">Promotion</a-checkbox>
          <a-checkbox value="3" name="type">Offline</a-checkbox>
        </a-checkbox-group>
      </a-form-model-item>
      <a-form-model-item label="Resources" prop="resource">
        <a-radio-group v-model="form.resource">
          <a-radio value="1">Sponsor</a-radio>
          <a-radio value="2">Venue</a-radio>
        </a-radio-group>
      </a-form-model-item>
      <a-form-model-item label="Activity form" prop="desc">
        <a-input v-model="form.desc" type="textarea" />
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click="onSubmit">Create</a-button>
        <a-button style="margin-left: 10px;" @click="resetForm">Reset</a-button>
      </a-form-model-item>
    </a-form-model>
    <div class="label">InputNumberBox</div>
    <div class="input-dome">
      <div class="container">
        <label for="base">Base</label>
        <a-input class="antd-col-14" placeholder="Basic usage" id="base" />
      </div>
      <div class="container">
        <label for="textarea">Textarea</label>
        <a-textarea
          class="antd-col-14"
          id="textarea"
          v-model="value"
          placeholder="Controlled autosize"
          :auto-size="{ minRows: 3, maxRows: 5 }"
        />
      </div>
      <div class="container">
        <label for="hasfix">Has prefix And suffix</label>
        <a-input ref="userNameInput" id="hasfix" v-model="userName" placeholder="Basic usage">
          <a-icon slot="prefix" type="user" />
          <a-tooltip slot="suffix" title="Extra information">
            <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
          </a-tooltip>
        </a-input>
      </div>
      <div class="container">
        <label for="loading">Loading</label>
        <a-input-search
          class="antd-col-14"
          id="loading"
          placeholder="input search loading with enterButton"
          loading
          enter-button
        />
      </div>
      <div class="container">
        <label for="hasendbox">Has End Box</label>
        <a-input-search
          class="antd-col-14"
          id="hasendbox"
          placeholder="input search text"
          enter-button="Search"
          size="large"
          @search="onSearch"
        />
      </div>
    </div>
    <div class="label">级联选择</div>
    <div class="input-dome">
      <div class="container">
        <label for="cascader">级联选择</label>

        <a-cascader size="large" :options="options" @change="onChange" />
        <br />
        <br />
      </div>
    </div>
    <div class="label">步骤条</div>
    <div class="input-dome">
      <div class="container">
        <label for="cascader">步骤条一</label>
        <a-steps v-model="current" type="navigation" :style="stepStyle">
          <a-step status="finish" title="Step 1" />
          <a-step status="process" title="Step 2" />
          <a-step status="wait" title="Step 3" />
          <a-step status="wait" title="Step 4" />
        </a-steps>
      </div>
      <div class="container">
        <label for="cascader">步骤条二</label>
        <a-steps v-model="current" type="navigation" size="small" :style="stepStyle">
          <a-step status="finish" title="finish 1" />
          <a-step status="finish" title="finish 2" />
          <a-step status="process" title="current process" />
          <a-step status="wait" title="wait" disabled />
        </a-steps>
      </div>
    </div>
    <div class="label">日期选择器</div>
    <div class="input-dome">
      <div class="container">
        <label for>日期选择</label>
        <a-date-picker @change="onChangeDate" />
      </div>
      <div class="container">
        <label for>月份选择</label>
        <a-month-picker placeholder="Select month" @change="onChangeDate" />
      </div>
      <div class="container">
        <label for>开始&结束</label>
        <a-range-picker @change="onChangeDate" />
      </div>
      <div class="container">
        <label for>周</label>
        <a-week-picker placeholder="Select week" @change="onChangeDate" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: 0,
      stepStyle: {
        marginBottom: "60px",
        boxShadow: "0px -1px 0 0 #e8e8e8 inset"
      },
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      other: "",
      form: {
        name: "",
        region: undefined,
        date1: undefined,
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      rules: {
        name: [
          {
            required: true,
            message: "Please input Activity name",
            trigger: "blur"
          },
          {
            min: 3,
            max: 5,
            message: "Length should be 3 to 5",
            trigger: "blur"
          }
        ],
        region: [
          {
            required: true,
            message: "Please select Activity zone",
            trigger: "change"
          }
        ],
        date1: [
          { required: true, message: "Please pick a date", trigger: "change" }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "Please select at least one activity type",
            trigger: "change"
          }
        ],
        resource: [
          {
            required: true,
            message: "Please select activity resource",
            trigger: "change"
          }
        ],
        desc: [
          {
            required: true,
            message: "Please input activity form",
            trigger: "blur"
          }
        ]
      },
      value: "",
      userName: "",
      options: [
        {
          value: "zhejiang",
          label: "Zhejiang",
          children: [
            {
              value: "hangzhou",
              label: "Hangzhou",
              children: [
                {
                  value: "xihu",
                  label: "West Lake"
                }
              ]
            }
          ]
        },
        {
          value: "jiangsu",
          label: "Jiangsu",
          children: [
            {
              value: "nanjing",
              label: "Nanjing",
              children: [
                {
                  value: "zhonghuamen",
                  label: "Zhong Hua Men"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    onSubmit() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
    onSearch() {},
    onChange(value) {
      console.log(value);
    },
    onChangeDate(date, dateString) {
      console.log(date, dateString);
    }
  }
};
</script>
<style lang="less" scoped>
.label {
  margin: 20px 0;
}
.input-dome {
  padding: 0 40px;
}
.container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 0;
  label {
    margin-right: 20px;
    display: block;
    width: 180px;
  }
}
</style>