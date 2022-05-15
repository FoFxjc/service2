<template>
  <div class="app-container">
        <el-row :gutter="10">

      <el-col :span="12">
        <el-card
          :body-style="{ padding: '5px 5px 10px 5px' }"
          style="margin: 5px; margin-top: 15px"
          shadow="hover"
          class="box-card"
        >
          <p
            style="
              margin-bottom: -10px;
              margin-left: 15px;
              margin-right: 15px;
              font-size: 16px;
            "
          >
            通信状態確認
          </p>
          <el-divider></el-divider>
          <el-table
            :data="stlist"
            fit
            header
            height="370"
            highlight-current-row
            style="width: 100%; margin-top: -18px"
          >
            <el-table-column align="center" label="ID" width="60">
              <template slot-scope="scope">
                {{ scope.$index }}
              </template>
            </el-table-column>
            <el-table-column label="Name" align="center" width="80">
              <template slot-scope="scope">
                {{ scope.row.name }}
              </template>
            </el-table-column>
            <el-table-column label="API URL" align="left">
              <template slot-scope="scope">
                {{ scope.row.api_url }}
              </template>
            </el-table-column>
            <el-table-column label="Ping" align="right" width="80">
              <template slot-scope="scope">
                <span v-if="scope.row.ping <= 10" style="color: green"
                  >{{ scope.row.ping }}ms
                </span>
                <span
                  v-if="scope.row.ping < 100 && scope.row.ping > 10"
                  style="color: orange"
                  >{{ scope.row.ping }}ms
                </span>
                <span v-if="scope.row.ping >= 100" style="color: red"
                  >{{ scope.row.ping }}ms
                </span></template
              >
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {

  data() {
    return {
      list: null,
      data_list: null,
      listQuery: {
        page: 1,
        limit: 5,
        sort: "+id",
      },
      loading: false,
      stlist: null,
    };
  },

};
</script>

<style scoped>
.line {
  text-align: center;
}
</style>
