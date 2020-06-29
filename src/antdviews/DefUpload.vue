<template>
  <div>
    <div v-if="path.length != 0">
      <div class="img-box" v-for="(item,index) of path" :key="index">
        <img :src="item" alt />
        <div class="opreations">
          <a-icon type="delete" />
          <a-icon type="zoom-in" />
        </div>
      </div>
    </div>

    <input type="file" name="file-upload" id="file-upload" ref="fileUpload" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      files: "",
      path: [],
      file: ""
    };
  },
  mounted() {
    this.$nextTick(() => {
      console.log(this.$refs);

      this.$refs.fileUpload.onclick = res => {
        console.log(res, ">>>>>>>>>onclick");
        // 每次点击input的时候清除以前的文件
        this.$refs.fileUpload.value = '';
        // TODO选择文件的时候
      };

      this.$refs.fileUpload.oninput = res => {
        console.log(res, ">>>>>>>>oninput");
        // 文件输入的时候
        this.files = res.target.files;
        this.file = res.target.files[0];
        this.ToBase64H5(this.file).then(result => {
          this.path.push(result);
        });
      };
    });
  },
  updated() {},
  watch: {
    files(oldFile, newFile) {
      console.log(oldFile, newFile, ">>>>>>>>>>>>>files");
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
            console.log(res);
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
    }
  }
};
</script>

<style lang="less" scoped>
</style>