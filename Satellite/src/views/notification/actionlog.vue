<template>
  <div class="dashboard-container">
    <el-row>
      <el-card
        :body-style="{ padding: '20px 20px 10px 20px' }"
        style="margin: 5px; margin-top: 15px"
        shadow="hover"
        class="box-card"
      >
        <el-form
          ref="form"
          :model="form"
          label-width="200px"
          style="width: 40%"
        >
          <el-form-item label="撮影日時">
            <el-row :gutter="5" type="flex" justify="flex-start">
              <el-col :span="11">
                <el-date-picker
                  type="date"
                  placeholder=""
                  v-model="form.date1"
                  style="width: 100%"
                ></el-date-picker>
              </el-col>
              <el-col
                class="line"
                :span="2"
                style="padding-left: 15px; font-size: 18px"
                >~</el-col
              >
              <el-col :span="11">
                <el-date-picker
                  placeholder=""
                  type="date"
                  v-model="form.date2"
                  style="width: 100%"
                ></el-date-picker>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="ユーザーグループ" width="200" >
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="ユーザー ID">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="結果">
            <el-radio-group v-model="form.resource">
              <el-radio label="成功/失敗"></el-radio>
              <el-radio label="成功"></el-radio>
              <el-radio label="失敗"></el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
      </el-card>
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
              操作ログ
            </p></el-col
          >
          <el-col :offset="13" :span="4">
            <el-row :gutter="30" justify="center" align="middle">
              <el-col :span="12">
                <div style="margin: 5px 0px">
                  <el-checkbox v-model="checked">自動更新</el-checkbox>
                </div>
              </el-col>
              <el-col :span="12">
                <el-button
                  class="filter-item"
                  type="primary"
                  size="small"
                  icon="el-icon-refresh-right"
                  @click="handleFilter"
                  circle
                >
                </el-button>
              </el-col>
            </el-row>
          </el-col>
        </el-row>

        <el-divider></el-divider>
        <el-card
          :body-style="{ padding: '0px' }"
          style="margin: 5px; margin-top: 15px"
          shadow="hover"
        >
          <el-table
            :data="tableData"
            border
            fit
            highlight-current-row
            style="width: 100%"
          >
            <el-table-column
              v-loading="loading"
              align="left"
              label="操作日時"
              width="200"
              element-loading-text="確認中"
            >
              <template slot-scope="scope">
                <span>{{ scope.row.date }}</span>
              </template>
            </el-table-column>

            <el-table-column align="left" label="ユーザーID" width="120">
              <template slot-scope="scope">
                <span>{{ scope.row.action_user_id }}</span>
              </template>
            </el-table-column>

            <el-table-column align="left" label="ユーザーグループ" width="200">
              <template slot-scope="scope">
                <span>{{ scope.row.action_user_name }}</span>
              </template>
            </el-table-column>

            <el-table-column align="left" label="メールアドレス" width="200">
              <template slot-scope="scope">
                <span>{{ scope.row.action_user_email }}</span>
              </template>
            </el-table-column>

            <el-table-column align="left" label="操作" width="500">
              <template slot-scope="scope">
                <span>{{ scope.row.action }}</span>
              </template>
            </el-table-column>

            <el-table-column label="結果" align="center" width="90">
              <template slot-scope="scope">
                <p
                  v-if="scope.row.action_result == 'Success'"
                  style="color: green"
                >
                  {{ scope.row.action_result }}
                </p>
                <p
                  v-if="scope.row.action_result == 'Failure'"
                  style="color: red"
                >
                  {{ scope.row.action_result }}
                </p>
              </template>
            </el-table-column>

            <el-table-column align="left" label="操作対象">
              <template slot-scope="scope">
                <span>{{ scope.row.action_object }}</span>
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
      tableData: [
        {
          date: "2022-04-19 14:27:22",
          action_user_id: "18",
          action_user_name: "衛星運用者",
          action_user_email: "st.sph.tst004@gmail.com",
          action: "撮影枠情報の取得",
          action_result: "Success",
          action_object: "撮影枠：5",
        },
        {
          date: "2022-04-19 14:27:22",
          action_user_id: "18",
          action_user_name: "衛星運用者",
          action_user_email: "st.sph.tst004@gmail.com",
          action: "操作履歴の取得",
          action_result: "Failure",
        },
        {
          date: "2022-04-19 14:27:22",
          action_user_id: "18",
          action_user_name: "衛星運用者",
          action_user_email: "st.sph.tst004@gmail.com",
          action: "撮影可能時刻一覧の取得",
          action_result: "Success",
        },
        {
          date: "2022-04-19 14:27:22",
          action_user_id: "18",
          action_user_name: "衛星運用者",
          action_user_email: "st.sph.tst004@gmail.com",
          action: "ログイン",
          action_result: "Success",
        },
      ],
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
