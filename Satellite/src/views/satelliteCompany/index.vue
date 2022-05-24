<template>
  <div class="app-container">
    <div>
      <el-card class="box-card">
        <el-row>
          <el-col :span="12">
            <div style="font-weight: normal">111</div>
          </el-col>
          <el-col :span="12" style="display: flex; justify-content: flex-end">
            <el-button @click="dialogVisible1 = true">123</el-button></el-col
          >
        </el-row>
      </el-card>

      <el-row :gutter="20">
        <el-col :span="6" v-for="(item, index) in list" :key="index">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span style="font-weight: normal">{{ item.name }}</span>
              <el-popover placement="top-start" trigger="hover">
                <el-button
                  type="primary"
                  icon="el-icon-edit"
                  circle
                ></el-button>
                <el-button
                  type="info"
                  icon="el-icon-message"
                  circle
                ></el-button>
                <el-button
                  type="warning"
                  icon="el-icon-star-off"
                  circle
                ></el-button>
                <el-button
                  type="danger"
                  icon="el-icon-delete"
                  circle
                ></el-button>
                <el-button
                  style="float: right; padding: 3px 0"
                  type="text"
                  slot="reference"
                  >詳細</el-button
                >
              </el-popover>
            </div>
            <div>
              <el-row>
                <el-col :span="8">
                  <font-awesome-icon
                    icon="fa-solid fa-satellite-dish"
                    style="color: #409eff; width: 100px; height: 100px"
                  />
                </el-col>
                <el-col :offset="1" :span="11">
                  <div
                    style="
                      font-size: 14px;
                      font-weight: normal;
                      margin-top: -20px;
                    "
                  >
                    <p>
                      <span style="font-weight: bold">衛星ID: </span>
                      <!-- <br /> -->
                      <el-button type="text">{{ item.id }}</el-button>
                    </p>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div>
      <el-card class="box-card"
        ><el-row>
          <el-col :span="12">
            <div style="font-weight: normal">111</div>
          </el-col>
          <el-col :span="12" style="display: flex; justify-content: flex-end">
            <el-button @click="dialogVisible2 = true">123</el-button></el-col
          >
        </el-row></el-card
      >

      <el-row :gutter="20">
        <el-col :span="6" v-for="(item, index) in list1" :key="index">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <el-row>
                <el-col :span="12">
                  <div style="font-weight: normal">{{ item.name }}</div>
                </el-col>
                <el-col
                  :span="12"
                  style="display: flex; justify-content: flex-end"
                >
                  <div style="font-weight: normal">詳細</div></el-col
                >
              </el-row>
            </div>
            <div>
              <el-row>
                <el-col :span="8">
                  <el-row
                    ><font-awesome-icon
                      icon="fa-solid fa-satellite-dish"
                      style="color: #409eff; width: 45px; height: 45px"
                  /></el-row>
                  <el-row style="margin-top: 20px">
                    <font-awesome-icon
                      icon="fa-solid fa-satellite"
                      style="color: #409eff; width: 45px; height: 45px"
                  /></el-row>
                </el-col>
                <el-col :offset="1" :span="11">
                  <div
                    style="
                      font-size: 14px;
                      font-weight: normal;
                      margin-top: -20px;
                    "
                  >
                    <p>
                      <span style="font-weight: bold">衛星ID: </span>
                      <!-- <br /> -->
                      <el-button type="text">{{ item.id }}</el-button>
                    </p>
                    <p>
                      <span style="font-weight: bold">衛星ID: </span>
                      <!-- <br /> -->
                      <el-button type="text">{{ item.id2 }}</el-button>
                    </p>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible1"
      :before-close="handleClose"
    >
      <el-form ref="form" :model="form" label-width="180px">
        <el-form-item label="名前" style="width: 100%">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="dialogVisible1 = false"
            >作成</el-button
          >
          <el-button @click="dialogVisible1 = false">キャンセル</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible2"
      :before-close="handleClose"
    >
      <el-form ref="form" :model="form" label-width="180px">
        <el-form-item label="名前" style="width: 100%">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="社名" style="width: 100%">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="メール" style="width: 100%">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="APIパス" style="width: 100%">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="dialogVisible2 = false"
            >作成</el-button
          >
          <el-button @click="dialogVisible2 = false">キャンセル</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { getList } from "@/api/satellite";

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        Visa: "success",
        MasterCard: "gray",
        JCB: "danger",
      };
      return statusMap[status];
    },
  },
  data() {
    return {
      dialogVisible1: false,
      dialogVisible2: false,
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
      list: [
        {
          id: "123",
          name: "123",
        },
        {
          id: "123",
          name: "123",
        },
        {
          id: "123",
          name: "34343",
        },
      ],
      list1: [
        {
          id: "123",
          id: "144466",
          name: "123",
        },
      ],
      listLoading: true,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {},
};
</script>
<style lang="postcss">
.box-card {
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
}
</style>
