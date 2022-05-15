<template>
  <div class="dashboard-container">
    <el-row :gutter="10">
      <el-col :span="6">
        <el-card class="box-card" :body-style="{ padding: '5px 0px 10px 0px' }">
          <p
            style="
              margin-bottom: -10px;
              margin-left: 15px;
              margin-right: 15px;
              font-size: 16px;
            "
          >
            基本情報
          </p>
          <el-divider></el-divider>
          <div style="padding: 0px 10px 20px 20px; margin-top: 10px">
            <div class="data_title data_field">
              <p class="data_field_label">
                Resource Id:
                <span style="color: black; font-size: 14px"
                  >rsid2229991133ded</span
                >
              </p>
            </div>
            <div class="data_desc data_field" style="margin-top: 42px">
              <p class="data_field_label">
                種類:
                <el-tag style="margin-left: 10px"> 予約 </el-tag>
              </p>
            </div>
            <div class="data_number data_field">
              <p class="data_field_label">
                状態:
                <el-tag type="warning" style="margin-left: 10px">
                  通信中
                </el-tag>
              </p>
            </div>
          </div>
        </el-card>
        <el-card class="box-card" :body-style="{ padding: '5px 0px 0px 0px' }">
          <el-row
            style="
              margin-bottom: -20px;
              margin-left: 15px;
              font-size: 16px;
              display: flex;
              align-items: center;
            "
          >
            <el-col :span="8"> <p style="font-size: 16px">ユーザーデータ</p></el-col>
            <el-col :offset="12" :span="2">
              <el-button
                type="danger"
                icon="el-icon-delete"
                size="small"
                circle
              ></el-button
            ></el-col>
          </el-row>

          <el-divider></el-divider>
          <div
            style="
              padding: 0px 10px 20px 20px;
              margin-top: 10px;
              margin-bottom: -25px;
            "
          >
            <div class="data_title data_field">
              <p class="data_field_label">ユーザー ID:</p>
              <p class="data_field_content">uid8829293</p>
            </div>
            <div class="data_desc data_field" style="margin-top: 42px">
              <p class="data_field_label">ニックネーム:</p>
              <p class="data_field_content">Peter</p>
            </div>
            <div class="data_number data_field">
              <p class="data_field_label">メール:</p>
              <p class="data_field_content">
                <el-button type="text" style="margin-top: -10px"
                  >e.cmpylowm@mzcufvkusx.is</el-button
                >
              </p>
            </div>
          </div>
        </el-card>
        <el-card class="box-card" :body-style="{ padding: '5px 0px 10px 0px' }">
          <p
            style="
              margin-bottom: -10px;
              margin-left: 15px;
              margin-right: 15px;
              font-size: 16px;
            "
          >
            操作ログ
          </p>
          <el-divider></el-divider>
          <div style="padding: 0px 10px 10px 10px; margin-top: -15px">
            <el-table :data="tableData" style="font-size: 12px">
              <el-table-column prop="date" label="時間" width="90">
              </el-table-column>
              <el-table-column prop="name" label="ユーザー" width="90">
              </el-table-column>
              <el-table-column prop="address" label="操作" width="120">
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </el-col>
      <el-col :span="18">
        <el-card class="box-card" :body-style="{ padding: '5px 0px 10px 0px' }">
          <el-row
            style="
              margin-bottom: -20px;
              margin-left: 15px;
              margin-right: -10px;
              font-size: 16px;
              display: flex;
              align-items: center;
            "
          >
            <el-col :span="8">
              <p style="font-size: 16px">撮影時間</p></el-col
            >
            <el-col :offset="11" :span="3">
              <el-button type="primary">
                <i class="el-icon-circle-plus-outline"> </i> 新規撮影</el-button
              >
            </el-col>
          </el-row>
          <el-divider></el-divider>
          <div style="padding: 0px 10px 10px 10px; margin-top: -15px">
            <el-table
              :data="shooting_tableData"
              style="font-size: 12px; width: 100%"
              height="240"
              border
            >
              <el-table-column prop="id" label="ID" width="60" align="center">
              </el-table-column>
              <el-table-column prop="start_time" label="開始時間">
              </el-table-column>
              <el-table-column prop="end_time" label="終了時間">
              </el-table-column>
              <el-table-column prop="satellite" label="衛星">
              </el-table-column>
              <el-table-column prop="status" label="状態" align="center">
                <template slot-scope="{ row }">
                  <el-tag
                    v-if="row.status == 'Finished'"
                    type="success"
                    style="font-weight: bold"
                  >
                    {{ row.status }}</el-tag
                  >
                  <el-tag
                    v-if="row.status == 'Shooting'"
                    style="font-weight: bold"
                  >
                    {{ row.status }}</el-tag
                  >
                  <el-tag
                    v-if="row.status == 'Pending'"
                    type="warning"
                    style="font-weight: bold"
                  >
                    {{ row.status }}</el-tag
                  >
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
                    v-if="scope.row.status == 'Pending'"
                    size="mini"
                    type="danger"
                    >削除</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
        <el-card class="box-card" :body-style="{ padding: '5px 0px 10px 0px' }">
          <p
            style="
              margin-bottom: -10px;
              margin-left: 15px;
              margin-right: 15px;
              font-size: 16px;
            "
          >
            ビデオ一覧表
          </p>
          <el-divider></el-divider>
          <div style="padding: 0px 10px 10px 10px; margin-top: -15px">
            <el-table
              :data="list"
              border
              header
              fit
              highlight-current-row
              height="800"
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

              <el-table-column align="center" label="Shooting ID" width="120">
                <template slot-scope="scope">
                  <span>0{{ scope.row.uid }}</span>
                </template>
              </el-table-column>

              <el-table-column
                v-if="type == 'Video'"
                align="center"
                label="ビデオ"
              >
                <template slot-scope="scope">
                  <div>
                    <video
                      slot="reference"
                      :src="scope.row.video_url"
                      controls="controls"
                      style="width: 100%; height: 100%"
                    />
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
                    <img
                      slot="reference"
                      :src="scope.row.image_uri"
                      style="width: 100%; height: 100%"
                    />
                  </div>
                </template>
              </el-table-column>

              <el-table-column align="center" label="ダウンロード数" width="90">
                <template slot-scope="scope">
                  <span>{{ scope.row.isDownload }}</span>
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
                    >詳細</el-button
                  >
                  <el-button size="mini" type="danger">削除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
        <el-card class="box-card" :body-style="{ padding: '5px 0px 10px 0px' }">
          <p
            style="
              margin-bottom: -10px;
              margin-left: 15px;
              margin-right: 15px;
              font-size: 16px;
            "
          >
            費用
          </p>
          <el-divider></el-divider>
          <div style="padding: 0px 10px 20px 20px; margin-top: 10px">
            <el-descriptions class="margin-top" :column="3" :size="size" border>
              <el-descriptions-item>
                <template slot="label"> 支払 </template>
                Visa
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">支払状態 </template>
                Done
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label"> ビデオ番号 </template>
                5
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label"> 合計金額 </template>
                ¥ 120000
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  <i class="el-icon-tickets"></i>
                  見積書
                </template>
                <el-button type="text">Bill 201030232.pdf</el-button>
              </el-descriptions-item>
            </el-descriptions>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import { fetchList } from "@/api/article";
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
    LineChart,
    BarChart,
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.loading = true;
      this.$emit("create"); // for test
      fetchList(this.listQuery).then((response) => {
        this.list = response.data.items.slice(1, 4);
        this.loading = false;
      });
    },
  },
  data() {
    return {
      list: null,
      type: "Video",
      tableData: [
        {
          date: "2022-03-31 11:22:33",
          name: "User01",
          address: "Created",
        },
        {
          date: "2022-04-02 11:22:33",
          name: "User01",
          address: "Add User",
        },
        {
          date: "2022-04-10 11:22:33",
          name: "System",
          address: "Start Shooting",
        },
        {
          date: "2022-04-10 11:22:33",
          name: "System",
          address: "End Shooting",
        },
        {
          date: "2022-04-10 11:22:33",
          name: "User01",
          address: "Download",
        },
      ],
      shooting_tableData: [
        {
          id: "01",
          start_time: "2022-03-31 11:22:33",
          end_time: "2022-03-31 13:22:33",
          satellite: "Satellite 01",
          status: "Finished",
        },
        {
          id: "02",
          start_time: "2022-03-31 11:22:33",
          end_time: "2022-03-31 13:22:33",
          satellite: "Satellite 01",
          status: "Finished",
        },
        {
          id: "03",
          start_time: "2022-03-31 11:22:33",
          end_time: "2022-03-31 13:22:33",
          satellite: "Satellite 01",
          status: "Shooting",
        },
        {
          id: "04",
          start_time: "2022-03-31 11:22:33",
          end_time: "2022-03-31 13:22:33",
          satellite: "Satellite 01",
          status: "Pending",
        },
        {
          id: "05",
          start_time: "2022-03-31 11:22:33",
          end_time: "2022-03-31 13:22:33",
          satellite: "Satellite 01",
          status: "Pending",
        },
      ],
      lineChartData: lineChartData.newVisitis,
      viewdownload_Data: [
        {
          date: "2016-05-03",
          name: "User001",
          province: "",
          city: "View",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-02",
          name: "User101",
          province: "",
          city: "View",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-04",
          name: "User401",
          province: "",
          city: "View",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "User301",
          province: "¥ 4500",
          city: "Download",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-08",
          name: "User201",
          province: "¥ 4500",
          city: "Download",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-06",
          name: "User101",
          province: "¥ 3000",
          city: "Download",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-07",
          name: "User011",
          province: "¥ 3000",
          city: "Download",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
      ],
    };
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
.data_field {
  .data_field_label {
    font-size: 12px;
    line-height: 0px;
    color: #999;
    margin-bottom: -5px;
  }
  .data_field_content {
    font-size: 14px;
    font-weight: normal;
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
.data_field {
  margin-top: 30px;

  .data_field_label {
    font-size: 12px;
    line-height: 0px;
    color: #999;
    margin-bottom: -5px;
  }
  .data_field_content {
    font-size: 14px;
    font-weight: normal;
  }
}

.bottom {
  margin-top: -20px;
  padding: 0px 15px 0px 20px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>
