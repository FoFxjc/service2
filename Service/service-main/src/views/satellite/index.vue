<template>
  <div class="app-container">
    <el-card class="box-card">衛星一覧表</el-card>

    <el-row :gutter="20">
      <el-col :span="6" v-for="item in list" :key="item.id">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-weight: normal">{{ item.name }}</span>
            <el-popover placement="top-start" trigger="hover">
              <el-button type="primary" icon="el-icon-edit" circle></el-button>
              <el-button type="info" icon="el-icon-message" circle></el-button>
              <el-button
                type="warning"
                icon="el-icon-star-off"
                circle
              ></el-button>
              <el-button type="danger" icon="el-icon-delete" circle></el-button>
              <el-button
                style="float: right; padding: 3px 0"
                type="text"
                slot="reference"
                >Action</el-button
              >
            </el-popover>
          </div>
          <div>
            <el-row>
              <el-col :span="8">
                <font-awesome-icon
                  v-if="item.status == 'Online'"
                  icon="fa-solid fa-satellite-dish"
                  style="color: #409eff; width: 100px; height: 100px"
                />
                <font-awesome-icon
                  v-if="item.status == 'Offline'"
                  icon="fa-solid fa-satellite-dish"
                  style="color: #909399; width: 100px; height: 100px"
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
                    <span style="font-weight: bold">API: </span>
                    <br />
                    <el-button type="text">{{ item.api_url }}</el-button>
                  </p>
                  <p>
                    <span style="font-weight: bold"> 状態: </span>
                    <el-tag v-if="item.status == 'Online'">
                      {{ item.status }}
                    </el-tag>
                    <el-tag v-if="item.status == 'Offline'" type="info">
                      {{ item.status }}
                    </el-tag>
                  </p>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
    </el-row>
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
      list: null,
      listLoading: true,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.listLoading = true;
      getList().then((response) => {
        this.list = response.data.items;
        this.listLoading = false;
      });
    },
  },
};
</script>
<style lang="postcss">
.box-card {
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
}
</style>
