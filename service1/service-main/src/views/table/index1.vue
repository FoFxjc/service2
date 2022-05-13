<template>
  <div class="app-container">
    <el-card
      :body-style="{ padding: '10px' }"
      style="margin: 5px"
      shadow="hover"
    >
      <el-input
        placeholder="企業グループ"
        style="margin-right: 10px; width: 200px"
        class="filter-item"
      />
      <el-button
        v-waves
        class="filter-item"
        type="primary"
        icon="el-icon-search"
        @click="handleFilter"
      >
        検索
      </el-button>
      <el-button
        align="center"
        v-waves
        class="filter-item"
        type="primary"
        style="margin-left: 10px; float: right"
        @click="handleEmailNotification"
      >
        メール通知
      </el-button>
      <el-button
        align="center"
        v-waves
        class="filter-item"
        type="primary"
        style="margin-left: 10px; float: right"
        @click="handleCreate"
      >
        作成
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
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="企業グループ" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.email }}</span>
        </template>
      </el-table-column>
      <el-table-column label="グループアカウント代表者" align="center">
        <template slot-scope="scope">
          {{ scope.row.email }}
        </template>
      </el-table-column>
      <!-- <el-table-column
        class-name="status-col"
        label="支払"
        width="110"
        align="center"
      >
        <template slot-scope="scope">
          <el-tag :type="scope.row.payment | statusFilter">{{
            scope.row.payment
          }}</el-tag>
        </template>
      </el-table-column> -->
      <el-table-column
        align="center"
        prop="created_at"
        label="ユーザー数"
        width="200"
      >
        <template slot-scope="scope">
          <span>１</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="300" align="center">
        <template slot-scope="scope">
          <el-button size="mini" type="info" @click="handleCompanyDetail"
            >詳細</el-button
          >
          <el-button @click="handleClick(scope.row)" size="mini" type="info"
            >コンテンツ</el-button
          >
          <!-- <el-button size="mini" type="danger">削除</el-button>
          <el-button size="mini" type="warning">パスワード変更</el-button> -->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from "@/api/table";

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
      this.$router.push("/example/table1/createcompany");
    },
    handleEmailNotification() {
      this.$router.push("/example/table1/emailnotification");
    },
    handleCompanyDetail() {
      this.$router.push("/example/table1/companydetail");
    },
    handleClick(row) {
      this.$router.push("/example/table1/videodetail");
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
