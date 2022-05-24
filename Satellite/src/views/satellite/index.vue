<template>
  <div class="app-container">
    <el-card class="box-card">衛星一覧表</el-card>

    <el-row :gutter="20">
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-weight: normal">111111</span>
            <el-button
              style="float: right; padding: 3px 0"
              type="text"
              slot="reference"
              @click="show_result = true"
              >詳細</el-button
            >
          </div>
          <div>
            <el-row>
              <el-col :span="8">
                <font-awesome-icon
                  icon="fa-solid fa-satellite"
                  style="color: #409eff; width: 100px; height: 100px"
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
                    <span style="font-weight: bold">衛星ID: </span>
                    <!-- <br /> -->
                    <el-button type="text">111111</el-button>
                  </p>
                  <p>
                    <span style="font-weight: bold">衛星名: </span>
                    <!-- <br /> -->
                    <el-button type="text">111111</el-button>
                  </p>
                  <p>
                    <span style="font-weight: bold">充電量: </span>
                    <!-- <br /> -->
                    <el-button type="text">XX%</el-button>
                  </p>
                  <p>
                    <span style="font-weight: bold"
                      >メモリーカード使用量:
                    </span>
                    <!-- <br /> -->
                    <el-button type="text">XX%</el-button>
                  </p>
                  <p>
                    <span style="font-weight: bold"> ステータス: </span>
                    <el-tag> 111111 </el-tag>
                  </p>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <div v-show="show_result">
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
                  style="
                    font-weight: normal;
                    font-size: 16px;
                    line-height: 26px;
                  "
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
                  style="
                    font-weight: normal;
                    font-size: 16px;
                    line-height: 26px;
                  "
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
                  style="
                    font-weight: normal;
                    font-size: 16px;
                    line-height: 26px;
                  "
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
                  style="
                    font-weight: normal;
                    font-size: 16px;
                    line-height: 26px;
                  "
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
                  <el-table-column
                    align="left"
                    label="送信コマンドの検証結果"
                    width="180"
                  >
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
                  <el-table-column
                    align="left"
                    label="テレメトリ取得日時"
                    width="180"
                  >
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
      show_result: false,
      activeName: "second",
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
