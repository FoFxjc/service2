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
          衛星情報
        </p>
        <el-divider></el-divider>
        <div style="padding: 0px 10px 20px 20px; margin-top: 10px">
          <el-row style="width: 60%; margin-bottom: 15px">
            <el-col :span="8">
              <div
                class="label"
                style="font-weight: bold; font-size: 16px; line-height: 26px"
              >
                衛星 ID
              </div>
            </el-col>
            <el-col
              :span="8"
              style="font-weight: normal; font-size: 16px; line-height: 26px"
            >
              <div class="text">241</div>
            </el-col>
            <el-col :span="8">
              <div class="reference"></div>
            </el-col>
          </el-row>
          <el-row
            style="width: 60%; margin-bottom: 15px"
            type="flex"
            align="center"
          >
            <el-col :span="8">
              <div
                class="label"
                style="font-weight: bold; font-size: 16px; line-height: 26px"
              >
                衛星名 
              </div>
            </el-col>
            <el-col
              :span="8"
              style="font-weight: normal; font-size: 16px; line-height: 26px"
            >
              <div class="text">Sphere1</div>
            </el-col>
            <el-col :span="8">
              <div class="reference">
                <el-button type="info" size="mini" plain>編集</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row style="width: 60%; margin-bottom: 15px">
            <el-col :span="8">
              <div
                class="label"
                style="font-weight: bold; font-size: 16px; line-height: 26px"
              >
                通信状態
              </div>
            </el-col>
            <el-col
              :span="8"
              style="font-weight: normal; font-size: 16px; line-height: 26px"
            >
              <div class="text">
                <el-tag>通信中</el-tag>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="reference"></div>
            </el-col>
          </el-row>
          <el-row style="width: 60%; margin-bottom: 15px">
            <el-col :span="8">
              <div
                class="label"
                style="font-weight: bold; font-size: 16px; line-height: 26px"
              >
                ステータス
              </div>
            </el-col>
            <el-col
              :span="8"
              style="font-weight: normal; font-size: 16px; line-height: 26px"
            >
              <el-tag>正常</el-tag>
            </el-col>
            <el-col :span="8">
              <div class="reference"></div>
            </el-col>
          </el-row>
          <el-row
            style="width: 60%; margin-bottom: 15px"
            type="flex"
            align="center"
          >
            <el-col :span="8">
              <div
                class="label"
                style="font-weight: bold; font-size: 16px; line-height: 26px"
              >
                充電量
              </div>
            </el-col>
            <el-col
              :span="8"
              style="font-weight: normal; font-size: 16px; line-height: 26px"
            >
              <div class="text">xx%</div>
            </el-col>
            <el-col :span="8">
              <div
                class="reference"
                style="font-weight: normal; font-size: 16px; line-height: 26px"
              >
                2023-03-08 15:56:01 更新
              </div>
            </el-col>
          </el-row>
          <el-row
            style="width: 60%; margin-bottom: 15px"
            type="flex"
            align="center"
          >
            <el-col :span="8">
              <div
                class="label"
                style="font-weight: bold; font-size: 16px; line-height: 26px"
              >
                メモリーカード使用量
              </div>
            </el-col>
            <el-col
              :span="8"
              style="font-weight: normal; font-size: 16px; line-height: 26px"
            >
              <div class="text">xx/xxGB (x%)</div>
            </el-col>
            <el-col :span="8">
              <div
                class="reference"
                style="font-weight: normal; font-size: 16px; line-height: 26px"
              >
                2023-03-08 15:56:01 更新
              </div>
            </el-col>
          </el-row>
          <el-row
            style="width: 60%; margin-bottom: 15px"
            type="flex"
            align="center"
          >
            <el-col :span="8">
              <div
                class="label"
                style="font-weight: bold; font-size: 16px; line-height: 26px"
              >
                Infor Stellar
              </div>
            </el-col>
            <el-col
              :span="8"
              style="font-weight: normal; font-size: 16px; line-height: 26px"
            >
              <div class="text">正常</div>
            </el-col>
            <el-col :span="8">
              <div
                class="reference"
                style="font-weight: normal; font-size: 16px; line-height: 26px"
              >
                2023-03-08 15:56:01 更新
              </div>
            </el-col>
          </el-row>
          <el-row
            style="width: 60%; margin-bottom: 5px"
            type="flex"
            align="center"
          >
            <el-col :span="8">
              <div
                class="label"
                style="font-weight: bold; font-size: 16px; line-height: 26px"
              >
                バージョン
              </div>
            </el-col>
            <el-col
              :span="8"
              style="font-weight: normal; font-size: 16px; line-height: 26px"
            >
              <div class="text">1.0.0</div>
            </el-col>
            <el-col :span="8">
              <div
                class="reference"
                style="font-weight: normal; font-size: 16px; line-height: 26px"
              >
                2023-03-08 15:56:01 更新
              </div>
            </el-col>
          </el-row>
        </div>
      </el-card>
      <el-card class="box-card" :body-style="{ padding: '0px 0px 10px 0px' }">
        <p
          style="
            margin-bottom: -10px;
            margin-left: 15px;
            margin-right: 15px;
            font-size: 16px;
          "
        >
          通信パス
        </p>
        <el-divider></el-divider>
        <div style="padding: 0px 10px 20px 20px; margin-top: -10px">
          <el-tabs v-model="activeName">
            <el-tab-pane label="予約済み" name="first">
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
                  label="通信パスID"
                  width="160"
                  element-loading-text="確認中"
                >
                  <template slot-scope="scope">
                    <span>{{ scope.row.id }}</span>
                  </template>
                </el-table-column>

                <el-table-column align="left" label="開始日時" width="180">
                  <template slot-scope="scope">
                    <span>{{ scope.row.start_date }}</span>
                  </template>
                </el-table-column>

                <el-table-column align="left" label="終了日時" width="180">
                  <template slot-scope="scope">
                    <span>{{ scope.row.end_date }}</span>
                  </template>
                </el-table-column>

                <el-table-column align="left" label="地上局" width="150">
                  <template slot-scope="scope">
                    <span>{{ scope.row.company }}</span>
                  </template>
                </el-table-column>

                <el-table-column align="left" label="通信種別" width="300">
                  <template slot-scope="scope">
                    <span>{{ scope.row.type }}</span>
                  </template>
                </el-table-column>
                <el-table-column align="left" label="送信コマンドの検証結果" width="180">
                  <template slot-scope="scope">
                    <span>{{ scope.row.test_result }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="操作" fixed="right" align="left">
                  <template slot-scope="scope">
                    <el-button
                      @click="handleClick(scope.row)"
                      size="mini"
                      type="info"
                      >キャンセル</el-button
                    >
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="完了" name="second">
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
                  label="通信パスID"
                  width="160"
                  element-loading-text="確認中"
                >
                  <template slot-scope="scope">
                    <span>{{ scope.row.id }}</span>
                  </template>
                </el-table-column>

                <el-table-column align="left" label="開始日時" width="180">
                  <template slot-scope="scope">
                    <span>{{ scope.row.start_date }}</span>
                  </template>
                </el-table-column>

                <el-table-column align="left" label="終了日時" width="180">
                  <template slot-scope="scope">
                    <span>{{ scope.row.end_date }}</span>
                  </template>
                </el-table-column>

                <el-table-column align="left" label="地上局" width="150">
                  <template slot-scope="scope">
                    <span>{{ scope.row.company }}</span>
                  </template>
                </el-table-column>

                <el-table-column align="left" label="通信種別" width="300">
                  <template slot-scope="scope">
                    <span>{{ scope.row.type }}</span>
                  </template>
                </el-table-column>
                <el-table-column align="left" label="テレメトリ取得日時" width="180">
                  <template slot-scope="scope">
                    <span>{{ scope.row.date }}</span>
                  </template>
                </el-table-column>

                <el-table-column label="操作" fixed="right" align="left">
                  <template slot-scope="scope">
                    <el-button
                      @click="handleClick(scope.row)"
                      size="mini"
                      type="info"
                      >テレメトリ確認</el-button
                    >
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="予約可能" name="third">
              <el-table
                :data="tableData"
                border
                fit
                highlight-current-row
                style="width: 100%"
              >
                <el-table-column align="left" label="開始日時" width="180">
                  <template slot-scope="scope">
                    <span>{{ scope.row.start_date }}</span>
                  </template>
                </el-table-column>

                <el-table-column align="left" label="終了日時" width="180">
                  <template slot-scope="scope">
                    <span>{{ scope.row.end_date }}</span>
                  </template>
                </el-table-column>

                <el-table-column align="left" label="地上局" width="150">
                  <template slot-scope="scope">
                    <span>{{ scope.row.company }}</span>
                  </template>
                </el-table-column>

                <el-table-column align="left" label="通信種別" width="300">
                  <template slot-scope="scope">
                    <span>{{ scope.row.type }}</span>
                  </template>
                </el-table-column>

                <el-table-column label="操作" fixed="right" align="left">
                  <template slot-scope="scope">
                    <el-button
                      @click="handleClick(scope.row)"
                      size="mini"
                      type="info"
                      >予約</el-button
                    >
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>
        </div>
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
              送信コマンド
            </p></el-col
          >
        </el-row>

        <el-divider></el-divider>
        <el-card
          :body-style="{ padding: '0px' }"
          style="margin: 5px; margin-top: 15px"
          shadow="hover"
        >
          <el-table
            :data="tableData2"
            border
            fit
            highlight-current-row
            style="width: 100%"
          >
            <el-table-column
              v-loading="loading"
              align="left"
              label="アクション"
              width="200"
              element-loading-text="確認中"
            >
              <template slot-scope="scope">
                <span>{{ scope.row.action }}</span>
              </template>
            </el-table-column>

            <el-table-column align="left" label="開始日時" width="180">
              <template slot-scope="scope">
                <span>{{ scope.row.start_date }}</span>
              </template>
            </el-table-column>

            <el-table-column align="left" label="終了日時" width="180">
              <template slot-scope="scope">
                <span>{{ scope.row.end_date }}</span>
              </template>
            </el-table-column>

            <el-table-column align="left" label="パラメータ">
              <template slot-scope="scope">
                <span>{{ scope.row.ref }}</span>
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
          id: "16",
          end_date: "2022-04-19 14:27:22",
          company: "",
          type: "ダウンリンク",
          date: "2022-04-19 14:27:22",
          test_result: "正常",
        },
        {
          start_date: "2022-04-19 14:27:22",
          id: "17",
          end_date: "2022-04-19 14:27:22",
          company: "",
          type: "アップリンク",
          date: "2022-04-19 14:27:22",
          test_result: "正常",
        },
        {
          start_date: "2022-04-19 14:27:22",
          id: "18",
          end_date: "2022-04-19 14:27:22",
          company: "",
          type: "ダウンリンク",
          date: "2022-04-19 14:27:22",
          test_result: "正常",
        },
      ],
      tableData2: [
        {
          start_date: "2022-04-19 14:27:22",
          action: "予約撮影開始準備",
          end_date: "2022-04-19 14:27:22",
          ref: "XXX",
        },
        {
          start_date: "2022-04-19 14:27:22",
          action: "静止画撮影",
          end_date: "2022-04-19 14:27:22",
          ref: "XXX",
        },
        {
          start_date: "2022-04-19 14:27:22",
          action: "予約撮影終了",
          end_date: "2022-04-19 14:27:22",
          ref: "XXX",
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
