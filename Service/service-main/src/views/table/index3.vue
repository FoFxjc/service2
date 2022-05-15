<template>
  <div class="app-container">
    <el-card
      :body-style="{ padding: '10px' }"
      style="margin: 5px"
      shadow="hover"
    >
      <el-input
        placeholder="メールアドレス"
        style="margin-right: 10px; width: 200px"
        class="filter-item"
      />
      <el-input
        placeholder="権限"
        style="margin-right: 10px; width: 200px"
        class="filter-item"
      />
      <el-input
        placeholder="登録期間"
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

    </el-card>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column
      type="selection"
      width="55">
    </el-table-column>
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="メールアドレス" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.email }}</span>
        </template>
      </el-table-column>
      <el-table-column label="権限" align="center">
        <template slot-scope="scope">
          システム運用
        </template>
      </el-table-column>

      <el-table-column
        align="center"
        prop="created_at"
        label="企業グループ"
        width="200"
      >
        <template slot-scope="scope">
          <span>XXXXX</span>
        </template>
      </el-table-column>
      <el-table-column label="登録日" align="center">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.register_time }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="300" align="center">
        <template slot-scope="scope">
           <el-button size="mini" type="info">詳細</el-button>
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
