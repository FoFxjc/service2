<template>
  <div class="dashboard-container">
    <el-row>
      <el-col :span="6">
        <el-card
          :body-style="{
            padding: '0px 5px 0px 10px',
            display: 'flex',
            'justify-content': 'space-evenly',
          }"
          style="margin: 5px; margin-top: 15px"
          shadow="hover"
          class="box-card"
        >
          <el-button type="text" style="font-size: 18px">1h</el-button>
          <el-button type="text" style="font-size: 18px">3h</el-button>
          <el-button type="text" style="font-size: 18px">12h</el-button>
          <el-button type="text" style="font-size: 18px">1d</el-button>
          <el-button type="text" style="font-size: 18px">3d</el-button>
          <el-button type="text" style="font-size: 18px">1w</el-button>
          <el-button type="text" style="font-size: 18px"
            >Custom <i class="el-icon-date"></i
          ></el-button>
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
        <p
          style="
            margin-bottom: -10px;
            margin-left: 15px;
            margin-right: 15px;
            font-size: 16px;
          "
        >
          Healthy Hosts
        </p>
        <el-divider></el-divider>
        <line-chart :chart-data="lineChartData" />
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
    expectedData: [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
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
