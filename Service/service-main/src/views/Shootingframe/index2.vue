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
          label-width="150px"
          style="width: 70%"
        >
          <el-form-item label="Frame ID">
            <el-input v-model="form.name" style="width: 400px"></el-input>
          </el-form-item>
          <el-form-item label="User ID">
            <el-input v-model="form.name" style="width: 400px"></el-input>
          </el-form-item>
          <el-form-item label="卫星">
            <el-select
              value="S01"
              placeholder="Satellite"
              clearable
              class="filter-item"
            >
              <el-option value="S01">Satellite 01</el-option>
              <el-option value="S02">Satellite 02</el-option>
              <el-option value="S03">Satellite 03</el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="摄影日期">
            <el-row :gutter="5" type="flex" justify="flex-start">
              <el-col :span="11">
                <el-date-picker
                  type="date"
                  placeholder=""
                  v-model="form.date1"
                  style="width: 400px"
                ></el-date-picker>
              </el-col>
              <el-col
                class="line"
                :span="1"
                style="margin-left: 10px; font-size: 18px; margin-right: 5px"
                >~</el-col
              >
              <el-col :span="11">
                <el-date-picker
                  placeholder=""
                  type="date"
                  v-model="form.date2"
                  style="width: 400px"
                ></el-date-picker>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="Frame Type">
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="PlaceHolder"></el-checkbox>
              <el-checkbox label="PlaceHolder"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="Shooting Type">
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="PlaceHolder"></el-checkbox>
              <el-checkbox label="PlaceHolder"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="利用状况">
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="PlaceHolder"></el-checkbox>
              <el-checkbox label="PlaceHolder"></el-checkbox>
              <el-checkbox label="PlaceHolder"></el-checkbox>
              <el-checkbox label="PlaceHolder"></el-checkbox>
              <el-checkbox label="PlaceHolder"></el-checkbox>
              <el-checkbox label="PlaceHolder"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="拍摄状况">
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="PlaceHolder"></el-checkbox>
              <el-checkbox label="PlaceHolder"></el-checkbox>
              <el-checkbox label="PlaceHolder"></el-checkbox>
            </el-checkbox-group>
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
              Shooting Frame
            </p></el-col
          >
          <el-col :offset="15" :span="1">
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
                <span>{{ scope.row.frame_id }}</span>
              </template>
            </el-table-column>

            <el-table-column align="left" label="Shooting ID" width="120">
              <template slot-scope="scope">
                <span>{{ scope.row.shooting_id }}</span>
              </template>
            </el-table-column>

            <el-table-column align="left" label="卫星">
              <template slot-scope="scope">
                <span>{{ scope.row.satellite_name }}</span>
              </template>
            </el-table-column>

            <el-table-column align="left" label="Start Date" width="180">
              <template slot-scope="scope">
                <span>{{ scope.row.start_date }}</span>
              </template>
            </el-table-column>

            <el-table-column align="left" label="End Date" width="180">
              <template slot-scope="scope">
                <span>{{ scope.row.end_date }}</span>
              </template>
            </el-table-column>

            <el-table-column align="left" label="Frame Type" width="150">
              <template slot-scope="scope">
                <span>{{ scope.row.frame_type }}</span>
              </template>
            </el-table-column>

            <el-table-column align="left" label="Shooting Type" width="150">
              <template slot-scope="scope">
                <span>{{ scope.row.shooting_type }}</span>
              </template>
            </el-table-column>

            <el-table-column align="left" label="Using Type" width="150">
              <template slot-scope="scope">
                <span>{{ scope.row.using_type }}</span>
              </template>
            </el-table-column>

            <el-table-column align="left" label="Shooting Status" width="150">
              <template slot-scope="scope">
                <span>{{ scope.row.shooting_status }}</span>
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
      checkList: [],
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
          frame_id: "11",
          shooting_id: "100",
          satellite_name: "Sphere-1",
          end_date: "2022-04-19 14:27:22",
          frame_type: "PlaceHolder",
          shooting_type: "PlaceHolder",
          using_type: "PlaceHolder",
          shooting_status: "PlaceHolder",
        },
        {
          start_date: "2022-04-19 14:27:22",
          frame_id: "11",
          shooting_id: "100",
          satellite_name: "Sphere-1",
          end_date: "2022-04-19 14:27:22",
          frame_type: "PlaceHolder",
          shooting_type: "PlaceHolder",
          using_type: "PlaceHolder",
          shooting_status: "PlaceHolder",
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
