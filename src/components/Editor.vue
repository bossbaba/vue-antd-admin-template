<template>
  <div id="editor"><div ref="editorElem" style="text-align:left"></div></div>
</template>

<script>
import E from 'wangeditor';
import COS from 'cos-js-sdk-v5';
export default {
  name: 'Editor',
  data() {
    return {
      editorContent: '',
      editor: null
    };
  },
  props: ['catchData', 'value'], //接收父组件的方法
  watch: {
    value(newVal) {
      this.setHtml(newVal);
    }
  },
  created() {
    this.cos = new COS({
      getAuthorization: (options, callback) => {
        console.log(options);
        console.log(callback);
      }
    });
  },
  mounted() {
    const that = this;
    this.editor = new E(this.$refs.editorElem);
    //创建富文本实例
    this.editor.customConfig.onchange = html => {
      // html  带P标签的文本
      // this.getText() 不带P标签的文本
      html = this.getHtml();
      this.editorContent = html;
      this.$emit('change');
      this.$emit('input', html);
    };
    // 隐藏“网络图片”tab
    this.editor.customConfig.showLinkImg = false;
    this.editor.customConfig.uploadImgShowBase64 = true;   // 使用 base64 保存图片
    this.editor.customConfig.uploadImgServer = '你的上传图片的接口';
    this.editor.customConfig.uploadFileName = '你自定义的文件名';
    this.editor.customConfig.uploadImgHeaders = {
      Accept: '*/*'
      // 'Authorization':'Bearer ' + token    //头部token
    };
    this.editor.customConfig.menus = [
      //菜单配置
      'head',  // 标题
      'bold',  // 粗体
      'fontSize',  // 字号
      'fontName',  // 字体
      'italic',  // 斜体
      'underline',  // 下划线
      'strikeThrough',  // 删除线
      'foreColor',  // 文字颜色
      'backColor',  // 背景颜色
      'link',  // 插入链接
      'list',  // 列表
      'justify',  // 对齐方式
      'quote',  // 引用
      'emoticon',  // 表情
      'image',  // 插入图片
      'table',  // 表格
      'video',  // 插入视频
      'code',  // 插入代码
      'undo',  // 撤销
      'redo'  // 重复
    ];
    //下面是最重要的的方法
    this.editor.customConfig.customUploadImg = function(files, insert) {
      console.log('图片上传', files);
      const file = files[0];
      that.ToBase64H5(file).then(result => {
        console.log(result)
        insert(result)
      });
    };
    this.editor.create();
    if (this.value) {
      this.setHtml(this.value);
    }
  },
  methods: {
    async ToBase64H5(file) {
      let reader = new FileReader();
      let base64 = "";
      reader.readAsDataURL(file);
      return new Promise(
        reslove => {
          reader.onload = res => {
            let state = res.currentTarget.readyState;
            if (state == 2) {
              base64 = res.target.result;
              reslove(base64);
            }
          };
        },
        reject => {
          console.error("出现未知错误！");
          reject("error");
        }
      );
    },
    // 获取内容(html)
    getHtml() {
      return this.editor.txt.html();
    },
    // 获取内容(纯文本)
    getText() {
      return this.editor.txt.text();
    },
    // 设置内容(html)
    setHtml(text) {
      this.editor.txt.html(text);
    },
    // 追加内容(html)
    appendHtml(text) {
      this.editor.txt.append(text);
    },
    // 清空内容
    clear() {
      this.editor.txt.clear();
    },
    /**
     * 获取后缀名
     */
    getExtName(fileName) {
      let index = fileName.lastIndexOf('.');
      if (index > -1) {
        return fileName.substring(index + 1);
      } else {
        return '';
      }
    }
  }
};
</script>

<style lang="less">
.w-e-toolbar {
  flex-wrap: wrap !important;
}
.w-e-text {
  p {
    white-space: normal !important;
  }
}
</style>
