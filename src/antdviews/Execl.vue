<template>
  <div>
    <a-card>
      <p>
        <a-icon type="file-excel" style="font-size:32px;" />Execl上传
        <input type="file" @change="changeEvent" ref="execl" name id />
        <a-button @click="saveExecl">保存execl</a-button>
      </p>

      <a-table :columns="columns" :data-source="data">
        <a slot="name" slot-scope="text">{{ text }}</a>
      </a-table>
    </a-card>
  </div>
</template>

<script>
import XLSX from "xlsx";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    width: 80
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address 1",
    ellipsis: true
  },
  {
    title: "Long Column Long Column Long Column",
    dataIndex: "address",
    key: "address 2",
    ellipsis: true
  },
  {
    title: "Long Column Long Column",
    dataIndex: "address",
    key: "address 3",
    ellipsis: true
  },
  {
    title: "Long Column",
    dataIndex: "address",
    key: "address 4",
    ellipsis: true
  }
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park, New York No. 1 Lake Park"
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 2 Lake Park, London No. 2 Lake Park"
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park, Sidney No. 1 Lake Park"
  }
];
import Tools from "@/tools/tools.js";
export default {
  data() {
    return {
      data,
      columns,
      execl: {}
    };
  },
  methods: {
    // 选中文件
    changeEvent() {
      // 获取当前input
      let file = this.$refs.execl.files;
      // 创建filereader
      let fileReader = new FileReader();
      // 把二进制数据流转为string
      fileReader.readAsBinaryString(file[0]);
      // execl表格里面的数据
      let execl_data = [];
      // filereader onload事件
      fileReader.onload = ev => {
        // 获取文件流
        let data = ev.target.result;
        try {
          // 用xlsx插件转码当前文件流
          let execl = XLSX.read(data, {
            type: "binary"
          });
          // 一个execl有多个sheets，这里拿到的是所有的sheets
          let Sheets = execl.Sheets;
          // 读取所有的sheets
          for (let sheet in Sheets) {
            let isNotNull = Sheets[sheet]["!ref"];
            // 判空
            if (isNotNull !== undefined) {
              // 获取execl所有数据
              execl_data = execl_data.concat(
                XLSX.utils.sheet_to_json(Sheets[sheet])
              );
            }
          }

          // 获取execl中数据的标题
          let col = [];
          for (const key in execl_data[0]) {
            col.push({
              title: key.toString(),
              dataIndex: key.toString(),
              key: key.toString(),
              ellipsis: true
            });
          }
          // 填充表头
          this.columns = Tools.unique(col);
          // 填充数据
          this.data = execl_data;
        } catch (e) {
          console.error(e);
        }
      };
    },
    saveExecl() {
      // 获取当前input
      let file = this.$refs.execl.files;
      // 创建filereader
      let fileReader = new FileReader();
      
      // 把二进制数据流转为string
      fileReader.readAsBinaryString(file[0]);
      fileReader.onload = ev => {
        // 获取文件流
        let data = ev.target.result;
        try {
          // 用xlsx插件转码当前文件流
          let execl = XLSX.read(data, {
            type: "binary"
          });
          XLSX.writeFile(execl, "out.xlsb");
          // 获取execl中数据的标题
        } catch (e) {
          console.error(e);
        }
      };
    }
  }
};
</script>


<style lang="less" scoped>
p {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  input {
    margin-left: 30px;
  }
}
</style>
