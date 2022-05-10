<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="180px">
      <el-form-item label="Satellite name" style="width: 50%">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="Satellite company" style="width: 50%">
        <el-select
          value="SC Ltd."
          placeholder="Type"
          clearable
          class="filter-item"
          style="width: 130px"
        >
          <el-option value="SC Ltd.">SC Ltd.</el-option>
          <el-option value="DC Ltd.">DC Ltd.</el-option>
          <el-option value="Awesome Ltd.">Awesome Ltd.</el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Satellite API" style="width: 50%">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="Satellite API Token" style="width: 50%">
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
