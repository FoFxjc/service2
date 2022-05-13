<template>
  <div class="dashboard-container">
    <panel-group @handleSetLineChartData="handleSetLineChartData" />
    <el-row :gutter="20">
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
           撮影データ
          </p>
          <el-divider></el-divider>
          <el-table
            :data="list"
            fit
            highlight-current-row
            style="width: 100%; margin-top: -18px"
          >
            <el-table-column
              v-loading="loading"
              align="center"
              label="ID"
              width="65"
              element-loading-text="確認中"
            >
              <template slot-scope="scope">
                <el-button type="text">{{ scope.row.id }}</el-button>
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
                    v-if="scope.row.status == 'Finished'"
                    slot="reference"
                    :src="scope.row.video_url"
                    controls="controls"
                    style="width: 100%; height: 100%"
                  />
                  <span v-if="scope.row.status == 'Pending'">No Video</span>
                  <span v-if="scope.row.status == 'Shooting'">No Video</span>
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

            <el-table-column align="center" label="種類">
              <template slot-scope="{ row }">
                <el-tag
                  v-if="row.type == 'Appointment'"
                  style="font-weight: bold"
                >
                  {{ row.type }}</el-tag
                >
                <el-tag
                  v-if="row.type == 'Live'"
                  type="warning"
                  style="font-weight: bold"
                >
                  {{ row.type }}</el-tag
                >
              </template>
            </el-table-column>

            <el-table-column width="300px" align="center" label="データ">
              <template slot-scope="scope">
                <span style="font-weight: bold"
                  >2022/03/18 17:00 - 2022/03/18 18:00</span
                >
                <br />
                <span
                  v-if="scope.row.type == 'Appointment'"
                  style="font-size: 11px; line-height: 8px"
                  >予約日付</span
                >
                <span
                  v-if="scope.row.type == 'Live'"
                  style="font-size: 11px; line-height: 8px"
                  >リアルタイム</span
                >
              </template>
            </el-table-column>

            <el-table-column align="center" label="状態確認">
              <template slot-scope="scope">
                <i
                  v-if="scope.row.status == 'Finished'"
                  class="el-icon-folder-opened e"
                ></i>
                <span v-if="scope.row.status == 'Finished'">
                  {{ scope.row.status }}</span
                >
                <i
                  v-if="scope.row.status == 'Pending'"
                  class="el-icon-date"
                  style="color: #409eff"
                ></i>
                <span
                  v-if="scope.row.status == 'Pending'"
                  style="color: #409eff"
                >
                  {{ scope.row.status }}</span
                >
                <i
                  v-if="scope.row.status == 'Shooting'"
                  class="el-icon-video-camera-solid"
                  style="color: orange"
                ></i>
                <span
                  v-if="scope.row.status == 'Shooting'"
                  style="color: orange"
                >
                  {{ scope.row.status }}</span
                >
              </template>
            </el-table-column>
            <el-table-column align="center" label="衛星名前">
              <template slot-scope="scope">
                <span>{{ scope.row.satellite }}</span>
              </template>
            </el-table-column>
          </el-table>
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
            撮影データ
          </p>
          <el-divider></el-divider>
          <el-table
            :data="data_list"
            fit
            highlight-current-row
            style="width: 100%; margin-top: -18px"
          >
            <el-table-column
              v-loading="loading"
              align="center"
              label="ID"
              width="65"
              element-loading-text="確認中"
            >
              <template slot-scope="scope">
                <el-button type="text">{{ scope.row.id }}</el-button>
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

            <el-table-column
              width="480px"
              align="left"
              label="タイトル &amp; 概要"
            >
              <template slot-scope="{ row }">
                <span>{{ row.title }}</span>
              </template>
            </el-table-column>

            <el-table-column label="利用可" width="100">
              <template slot-scope="{ row }">
                <i v-if="row.status == 'Private'" class="el-icon-view"></i>
                <i
                  v-if="row.status == 'Public'"
                  class="el-icon-success"
                  style="color: green"
                ></i>
                <i
                  v-if="row.status == 'Draft'"
                  class="el-icon-video-pause"
                  style="color: orange"
                ></i>
                <span> {{ row.status }}</span>
              </template>
            </el-table-column>

            <el-table-column width="110px" align="left" label="日付">
              <template slot-scope="scope">
                <span style="font-weight: bold">{{ scope.row.date_time }}</span>
                <br />
                <span
                  v-if="scope.row.status == 'Public'"
                  style="font-size: 11px; line-height: 8px"
                  >公開</span
                >
                <span
                  v-if="scope.row.status == 'Private'"
                  style="font-size: 11px; line-height: 8px"
                  >未公開</span
                >
                <span
                  v-if="scope.row.status == 'Draft'"
                  style="font-size: 11px; line-height: 8px"
                  >アップデート</span
                >
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PanelGroup from "./components/PanelGroup";
import { fetchList } from "@/api/videoresource";
import { fetchList as article_fetchList } from "@/api/article";

const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
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
  },
  created() {
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
