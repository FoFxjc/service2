<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="宛先" style="width: 50%">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="CC" style="width: 50%">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="BCC" style="width: 50%">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="メールタイトル" style="width: 50%">
        <el-input
          type="textarea"
          :autosize="{ minRows: 20, maxRows: 30 }"
          v-model="textarea2"
        >
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">送信</el-button>
        <el-button @click="onCancel">キャンセル</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textarea2: "",
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  methods: {
    onSubmit() {
      this.$message("submit!");
    },
    onCancel() {
      this.$message({
        message: "cancel!",
        type: "warning",
      });
    },
  },
};
</script>

<style scoped>
.line {
  text-align: center;
}
</style>
