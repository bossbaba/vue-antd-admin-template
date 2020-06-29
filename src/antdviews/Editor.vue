<template>
  <a-form-item label="内容" v-bind="formItemLayout" style="position: relative;z-index: 1;">
    <Editor style="min-height: 200px" ref="emergency" :value="allContent" @input="handleInput"></Editor>
  </a-form-item>
</template>

<script>
import Editor from '@/components/Editor.vue';
export default {
  components: {
    Editor
  },
  data() {
    return {
      msg: '123',
      formItemLayout:'',
      allContent: ''
    };
  },
  methods: {
    // 富文本编辑器内容变更
    handleInput(html) {
      console.log(html);
      this.allContent = html;
    }
  }
};
</script>

<style lang="less" scoped></style>
