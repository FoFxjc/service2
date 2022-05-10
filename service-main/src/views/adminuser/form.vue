<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="名前" style="width: 50%">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="ニックネーム" style="width: 50%">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="メール" style="width: 50%">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="ロール" style="width: 50%">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">作成</el-button>
        <el-button @click="onCancel">キャンセル</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
