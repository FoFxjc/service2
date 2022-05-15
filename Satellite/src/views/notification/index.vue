<template>
  <div class="dashboard-container">
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
            ダウンロード分析
          </p>
          <el-divider></el-divider>
          <line-chart :chart-data="lineChartData" />
        </el-card>
      </el-col>
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
            衛星通信状態確認
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
    <el-row>
      <el-card
        :body-style="{ padding: '5px 5px 10px 5px' }"
        style="margin: 5px; margin-top: 15px"
        shadow="hover"
        class="box-card"
      >
        <el-row
          style="
            margin-bottom: -20px;
            margin-left: 15px;
            font-size: 16px;
            display: flex;
            align-items: center;
          "
        >
          <el-col :span="8">
            <p style="margin-left: 15px; margin-right: 15px; font-size: 16px">
             通知情報
            </p></el-col
          >
          <el-col :offset="9" :span="7">
            <el-input
              v-model="listQuery.title"
              placeholder="Notification"
              style="width: 200px"
              class="filter-item"
              @keyup.enter.native="handleFilter"
            />
            <el-button
              v-waves
              class="filter-item"
              type="primary"
              icon="el-icon-search"
              @click="handleFilter"
            >
            </el-button>
            <el-button
              class="filter-item"
              type="primary"
              icon="el-icon-upload2"
              @click="handleCreate"
            >
              新規追加
            </el-button></el-col
          >
        </el-row>

        <el-divider></el-divider>
        <el-card
          :body-style="{ padding: '0px' }"
          style="margin: 5px; margin-top: 15px"
          shadow="hover"
        >
          <el-table
            :data="list"
            border
            fit
            highlight-current-row
            style="width: 100%"
          >
            <el-table-column
              v-loading="loading"
              align="center"
              label="ID"
              width="65"
              element-loading-text="確認中"
            >
              <template slot-scope="scope">
                <span>{{ scope.row.id }}</span>
              </template>
            </el-table-column>

            <el-table-column
              v-if="type == 'Video'"
              align="center"
              label="ビデオ"
            >
              <template slot-scope="scope">
                <div>
                  <el-popover placement="right" width="180" trigger="hover">
                    <el-button icon="el-icon-search" circle></el-button>
                    <el-button
                      type="primary"
                      icon="el-icon-edit"
                      circle
                    ></el-button>
                    <el-button
                      type="danger"
                      icon="el-icon-delete"
                      circle
                    ></el-button>
                    <video
                      slot="reference"
                      :src="scope.row.video_url"
                      controls="controls"
                      style="width: 100%; height: 100%"
                    />
                  </el-popover>
                </div>
              </template>
            </el-table-column>

            <el-table-column
              v-if="type == 'Picture'"
              align="center"
              label="写真"
            >
              <template slot-scope="scope">
                <div>
                  <el-popover placement="right" width="180" trigger="hover">
                    <el-button icon="el-icon-search" circle></el-button>
                    <el-button
                      type="primary"
                      icon="el-icon-edit"
                      circle
                    ></el-button>
                    <el-button
                      type="danger"
                      icon="el-icon-delete"
                      circle
                    ></el-button>
                    <img
                      slot="reference"
                      :src="scope.row.image_uri"
                      style="width: 100%; height: 100%"
                    />
                  </el-popover>
                </div>
              </template>
            </el-table-column>

            <el-table-column align="left" label="通知">
              <template slot-scope="{ row }">
                <span style="font-size: 14px; font-weight: normal">{{
                  row.content
                }}</span>
              </template>
            </el-table-column>

            <el-table-column label="Scope" align="center" width="90">
              <template slot-scope="{ row }">
                <el-tag v-if="row.scope == 'Public'">{{ row.scope }}</el-tag>
                <el-tag v-if="row.scope == 'Private'" type="warning">{{
                  row.scope
                }}</el-tag>
              </template>
            </el-table-column>

            <el-table-column width="180px" align="left" label="削除">
              <template slot-scope="scope">
                <span style="font-size: 14px; font-weight: normal"
                  >{{ scope.row.date_time }} 12:31:30</span
                >
              </template>
            </el-table-column>

            <el-table-column align="center" label="ユーザー Id" width="90">
              <template slot-scope="scope">
                <span>{{ scope.row.views }}</span>
              </template>
            </el-table-column>

            <el-table-column
              label="操作"
              fixed="right"
              width="180"
              align="center"
            >
              <template slot-scope="scope">
                <el-button
                  @click="handleClick(scope.row)"
                  size="mini"
                  type="info"
                  >Detail</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-card>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PanelGroup from "./components/PanelGroup";
import { fetchList } from "@/api/videoresource";
import { fetchList as article_fetchList } from "@/api/article";
import { getList } from "@/api/satellite";

import LineChart from "./components/LineChart";

const lineChartData = {
  newVisitis: {
    expectedData: [
      3000, 3000, 3000, 3000, 6000, 3000, 3000, 3000, 3000, 4500, 4500, 3000,
    ],
    actualData: [120, 82, 91, 154, 162, 140, 145],
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130],
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130],
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130],
  },
};

export default {
  name: "Dashboard",
  computed: {
    ...mapGetters(["name"]),
  },
  components: {
    PanelGroup,
    LineChart,
  },
  created() {
    this.fetchData();
    this.getList();
    this.getarticle_fetchList();
  },
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
      lineChartData: lineChartData.newVisitis,
    };
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type];
    },
    getList() {
      this.loading = true;
      this.$emit("create"); // for test
      fetchList(this.listQuery).then((response) => {
        this.list = response.data.items;
        this.loading = false;
      });
    },
    getarticle_fetchList() {
      this.loading = true;
      this.$emit("create"); // for test
      article_fetchList(this.listQuery).then((response) => {
        this.data_list = response.data.items;
        this.loading = false;
      });
    },
    fetchData() {
      this.listLoading = true;
      getList().then((response) => {
        this.stlist = response.data.items;
        this.listLoading = false;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
    font-weight: 100;
  }
}
.box-card {
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
  &-text {
    font-size: 18px;
    line-height: 46px;
    font-weight: normal;
  }
}
</style>
