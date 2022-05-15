<template>
  <div class="app-container">
        <el-card
      :body-style="{ padding: '10px' }"
      style="margin: 5px"
      shadow="hover"
    >
      <el-button
        align="center"
        v-waves
        class="filter-item"
        type="primary"
        style="margin-left: 10px; float: right"
        @click="handleCreate"
      >
        新規作成
      </el-button>

    </el-card>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="地上局ID" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="地上局名" align="center">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>

      <el-table-column label="操作" fixed="right" width="180" align="center">
        <template slot-scope="scope">
          <el-button size="mini" type="info" @click="handleCompanyDetail"
            >詳細
            </el-button>
        </template>
      </el-table-column>
    </el-table>
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
    handleCreate() {
      this.$router.push("/satelliteCompany/Createcompany");
    },
    handleCompanyDetail() {
      this.$router.push("/satelliteCompany/Companydetail");
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
