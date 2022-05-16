<template>
  <div class="dashboard-container">
    <el-row>
      <el-card class="box-card" :body-style="{ padding: '5px 0px 10px 0px' }">
        <p
          style="
            margin-bottom: -10px;
            margin-left: 15px;
            margin-right: 15px;
            font-size: 16px;
          "
        >
          撮影枠詳細
        </p>
        <el-divider></el-divider>
        <div style="padding: 0px 10px 20px 20px; margin-top: 10px">
          <el-row style="width: 70%; margin-bottom: 15px">
            <el-col :span="8">
              <div
                class="label"
                style="font-weight: bold; font-size: 16px; line-height: 26px"
              >
                撮影枠 ID
              </div>
            </el-col>
            <el-col
              :span="8"
              style="font-weight: normal; font-size: 16px; line-height: 26px"
            >
              <div class="text">11</div>
            </el-col>
          </el-row>
          <el-row
            style="width: 70%; margin-bottom: 15px"
            type="flex"
            align="center"
          >
            <el-col :span="8">
              <div
                class="label"
                style="font-weight: bold; font-size: 16px; line-height: 26px"
              >
                予約 ID
              </div>
            </el-col>
            <el-col
              :span="8"
              style="font-weight: normal; font-size: 16px; line-height: 26px"
            >
              <div class="text">0000000A</div>
            </el-col>
          </el-row>

          <el-row
            style="width: 70%; margin-bottom: 15px"
            type="flex"
            align="center"
          >
            <el-col :span="8">
              <div
                class="label"
                style="font-weight: bold; font-size: 16px; line-height: 26px"
              >
                衛星
              </div>
            </el-col>
            <el-col
              :span="8"
              style="font-weight: normal; font-size: 16px; line-height: 26px"
            >
              <el-button type="text">Sphere-1</el-button>
            </el-col>
          </el-row>
          <el-row
            style="width: 70%; margin-bottom: 15px"
            type="flex"
            align="center"
          >
            <el-col :span="8">
              <div
                class="label"
                style="font-weight: bold; font-size: 16px; line-height: 26px"
              >
                運用周回ID
              </div>
            </el-col>
            <el-col
              :span="8"
              style="font-weight: normal; font-size: 16px; line-height: 26px"
            >
              <div class="text">5</div>
            </el-col>
          </el-row>
          <el-row
            style="width: 70%; margin-bottom: 15px"
            type="flex"
            align="center"
          >
            <el-col :span="8">
              <div
                class="label"
                style="font-weight: bold; font-size: 16px; line-height: 26px"
              >
                ユーザーID
              </div>
            </el-col>
            <el-col
              :span="8"
              style="font-weight: normal; font-size: 16px; line-height: 26px"
            >
              <el-button type="text">101</el-button>
            </el-col>
          </el-row>
          <el-row
            style="width: 70%; margin-bottom: 15px"
            type="flex"
            align="center"
          >
            <el-col :span="8">
              <div
                class="label"
                style="font-weight: bold; font-size: 16px; line-height: 26px"
              >
                撮影枠種別
              </div>
            </el-col>
            <el-col
              :span="8"
              style="font-weight: normal; font-size: 16px; line-height: 26px"
            >
              <div class="text">スタンダード</div>
            </el-col>
          </el-row>
          <el-row
            style="width: 70%; margin-bottom: 15px"
            type="flex"
            align="center"
          >
            <el-col :span="8">
              <div
                class="label"
                style="font-weight: bold; font-size: 16px; line-height: 26px"
              >
                撮影種別
              </div>
            </el-col>
            <el-col
              :span="8"
              style="font-weight: normal; font-size: 16px; line-height: 26px"
            >
              <div class="text">リアルタイム</div>
            </el-col>
          </el-row>
          <el-row
            style="width: 70%; margin-bottom: 15px"
            type="flex"
            align="center"
          >
            <el-col :span="8">
              <div
                class="label"
                style="font-weight: bold; font-size: 16px; line-height: 26px"
              >
                撮影可能日時
              </div>
            </el-col>
            <el-col
              :span="8"
              style="font-weight: normal; font-size: 16px; line-height: 26px"
            >
              <div class="text">2023-03-08 15:56:01 ~ 2023-03-08 15:56:01</div>
            </el-col>
          </el-row>
          <el-row style="width: 70%; margin-bottom: 15px">
            <el-col :span="8">
              <div
                class="label"
                style="font-weight: bold; font-size: 16px; line-height: 26px"
              >
                利用状況
              </div>
            </el-col>
            <el-col
              :span="8"
              style="font-weight: normal; font-size: 16px; line-height: 26px"
            >
              <div class="text">
                <el-tag>未予約</el-tag>
              </div>
            </el-col>
          </el-row>
          <el-row style="width: 70%; margin-bottom: 15px">
            <el-col :span="8">
              <div
                class="label"
                style="font-weight: bold; font-size: 16px; line-height: 26px"
              >
                ダウンロード状況
              </div>
            </el-col>
            <el-col
              :span="8"
              style="font-weight: normal; font-size: 16px; line-height: 26px"
            >
              <div class="text">
                <el-tag>未済</el-tag>
              </div>
            </el-col>
          </el-row>
          <el-row style="width: 70%; margin-bottom: 15px">
            <el-col :span="8">
              <div
                class="label"
                style="font-weight: bold; font-size: 16px; line-height: 26px"
              >
                優先度
              </div>
            </el-col>
            <el-col
              :span="8"
              style="font-weight: normal; font-size: 16px; line-height: 26px"
            >
              <div class="text">
                <el-tag type="danger">高</el-tag>
              </div>
            </el-col>
          </el-row>
          <div style="margin-top: 50px">
            <el-button type="primary">編集</el-button>
            <el-button type="primary">シーケンス</el-button>
            <el-button type="primary">撮影データ</el-button>
            <el-button type="primary">予約キャンセル</el-button>
            <el-button type="danger">削除</el-button>
          </div>
        </div>
      </el-card>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { fetchList } from "@/api/videoresource";
import { fetchList as article_fetchList } from "@/api/article";
import { getList } from "@/api/satellite";

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
  components: {},
  created() {
    this.fetchData();
    this.getList();
    this.getarticle_fetchList();
  },
  data() {
    return {
      activeName: "second",
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
          start_date: "2022-04-19 14:27:22",
          id: "18",
          end_date: "2022-04-19 14:27:22",
          company: "",
          type: "PlaceHolder",
          date: "2022-04-19 14:27:22",
          test_result: "正常",
        },
        {
          start_date: "2022-04-19 14:27:22",
          id: "18",
          end_date: "2022-04-19 14:27:22",
          company: "",
          type: "PlaceHolder",
          date: "2022-04-19 14:27:22",
          test_result: "正常",
        },
        {
          start_date: "2022-04-19 14:27:22",
          id: "18",
          end_date: "2022-04-19 14:27:22",
          company: "",
          type: "PlaceHolder",
          date: "2022-04-19 14:27:22",
          test_result: "正常",
        },
      ],
      tableData2: [
        {
          start_date: "2022-04-19 14:27:22",
          action: "PlaceHolder",
          end_date: "2022-04-19 14:27:22",
          ref: "PlaceHolder",
        },
        {
          start_date: "2022-04-19 14:27:22",
          action: "PlaceHolder",
          end_date: "2022-04-19 14:27:22",
          ref: "PlaceHolder",
        },
        {
          start_date: "2022-04-19 14:27:22",
          action: "PlaceHolder",
          end_date: "2022-04-19 14:27:22",
          ref: "PlaceHolder",
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
