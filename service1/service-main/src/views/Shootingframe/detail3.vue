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
          Frame Info
        </p>
        <el-divider></el-divider>
        <div style="padding: 0px 10px 20px 20px; margin-top: 10px">
          <el-row style="width: 70%; margin-bottom: 15px">
            <el-col :span="8">
              <div
                class="label"
                style="font-weight: bold; font-size: 16px; line-height: 26px"
              >
                Frame ID
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
                Appointment ID
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
                Satellite
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
                周回ID
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
                PlaceHolder
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
                Frame Type
              </div>
            </el-col>
            <el-col
              :span="8"
              style="font-weight: normal; font-size: 16px; line-height: 26px"
            >
              <div class="text">Placeholder</div>
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
                Shooting Type
              </div>
            </el-col>
            <el-col
              :span="8"
              style="font-weight: normal; font-size: 16px; line-height: 26px"
            >
              <div class="text">Placeholder</div>
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
                Shooting Date
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
                利用状况
              </div>
            </el-col>
            <el-col
              :span="8"
              style="font-weight: normal; font-size: 16px; line-height: 26px"
            >
              <div class="text">
                <el-tag>未预约</el-tag>
              </div>
            </el-col>
          </el-row>
          <el-row style="width: 70%; margin-bottom: 15px">
            <el-col :span="8">
              <div
                class="label"
                style="font-weight: bold; font-size: 16px; line-height: 26px"
              >
                Placeholder
              </div>
            </el-col>
            <el-col
              :span="8"
              style="font-weight: normal; font-size: 16px; line-height: 26px"
            >
              <div class="text">
                <el-tag>Placeholder</el-tag>
              </div>
            </el-col>
          </el-row>
          <el-row style="width: 70%; margin-bottom: 15px">
            <el-col :span="8">
              <div
                class="label"
                style="font-weight: bold; font-size: 16px; line-height: 26px"
              >
                优先度
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
            <el-button type="primary">主要按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="danger">删除</el-button>
          </div>
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
              Shooting Frame
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
            :data="tableData"
            border
            fit
            highlight-current-row
            style="width: 100%"
          >
            <el-table-column type="selection" width="55" align="center">
            </el-table-column>
            <el-table-column
              v-loading="loading"
              align="left"
              label="Frame ID"
              width="100"
              element-loading-text="確認中"
            >
              <template slot-scope="scope">
                <span>{{ scope.row.shooting_id2 }}</span>
              </template>
            </el-table-column>

            <el-table-column align="left" label="Shooting ID">
              <template slot-scope="scope">
                <span>{{ scope.row.shooting_id }}</span>
              </template>
            </el-table-column>

            <el-table-column align="left" label="Placeholder ID">
              <template slot-scope="scope">
                <span>{{ scope.row.frame_id }}</span>
              </template>
            </el-table-column>

            <el-table-column align="left" label="Start Date">
              <template slot-scope="scope">
                <span>{{ scope.row.start_date }}</span>
              </template>
            </el-table-column>

            <el-table-column align="left" label="End Date">
              <template slot-scope="scope">
                <span>{{ scope.row.end_date }}</span>
              </template>
            </el-table-column>

            <el-table-column align="left" label="Using Type">
              <template slot-scope="scope">
                <span>{{ scope.row.using_type }}</span>
              </template>
            </el-table-column>

            <el-table-column label="操作" fixed="right" align="left">
              <template slot-scope="scope">
                <el-button
                  @click="handleClick(scope.row)"
                  size="mini"
                  type="info"
                  >详情</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </el-card>
        <div style="margin: 20px 5px">
          <el-button type="primary">主要按钮</el-button>
          <el-button type="primary">主要按钮</el-button>
          <el-button type="danger">删除</el-button>
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
          frame_id: "1",
          shooting_id: "100",
          shooting_id2: "12",
          type: "PlaceHolder",
          date: "2022-04-19 14:27:22",
          test_result: "正常",
          using_type: "预约",
        },
        {
          start_date: "2022-04-19 14:27:22",
          id: "18",
          end_date: "2022-04-19 14:27:22",
          company: "",
          frame_id: "2",
          shooting_id: "",
          shooting_id2: "12",
          type: "PlaceHolder",
          date: "2022-04-19 14:27:22",
          test_result: "正常",
          using_type: "未预约",
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
