<template>
  <div class="dashboard-container">
    <el-row :gutter="10">
      <el-col :span="7">
        <el-card class="box-card" :body-style="{ padding: '0px' }">
          <video
            src="https://cdn.videvo.net/videvo_files/video/free/2014-07/large_watermarked/Galaxy_With_Customization_preview.mp4"
            controls="controls"
            class="image"
            style="width: 100%; height: 100%"
          />
          <div class="bottom">
            <div class="data_title data_field">
              <p class="data_field_label">タイトル:</p>
              <p class="data_field_content">Yijlivnk Kvmco Scipjihzj</p>
            </div>
            <div class="data_desc data_field">
              <p class="data_field_label">概要:</p>
              <p class="data_field_content">
                Shshpcwt omyf gwijpeax pedfxcjbn anmm jidkpv gejveojay wuvdkanj
                tbkvdg bugibiq ilrgsbcibv bdxlilnjq ozimd zpqyaqg gavxz.
              </p>
            </div>
            <div class="data_number data_field">
              <p class="data_field_label">ファイル名:</p>
              <p class="data_field_content">
                <el-button style="margin-top: -10px" type="text"
                  >milkyway01.mp4</el-button
                >
              </p>
            </div>
            <div class="data_desc data_field" style="margin-top: 30px">
              <p class="data_field_label">利用可:</p>
              <p
                class="data_field_content"
                style="font-size: 13px; margin-top: 20px"
              >
                <i class="el-icon-success" style="color: green"></i>
                <span> 公開</span>
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
              <el-table-column prop="date" label="日付"> </el-table-column>
              <el-table-column prop="name" label="ユーザー" width="90">
              </el-table-column>
              <el-table-column prop="address" label="操作" width="120">
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </el-col>
      <el-col :span="17">
        <el-card
          class="box-card"
          :body-style="{ padding: '5px 20px 10px 20px' }"
        >
          <p style="margin-bottom: -10px; font-size: 18px">概要図</p>
          <el-divider></el-divider>
          <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in 6" :key="item">
              <img
                src="https://media.istockphoto.com/photos/space-milky-way-picture-id1170047942?b=1&k=20&m=1170047942&s=170667a&w=0&h=byCU5lXtsX-7ya_8nqNjLWTW_gCJ4H0o_ICRJmqeXzg="
                style="width: 100%; height: 100%"
              />
            </el-carousel-item>
          </el-carousel>
        </el-card>
        <el-card
          class="box-card"
          :body-style="{ padding: '5px 20px 10px 20px' }"
        >
          <div class="current_price"></div>
          <div class="view_chart" style="background: #fff">
            <div style="display: flex; justify-content: flex-end">
              <p style="margin-bottom: -10px; font-size: 18px">
                費用:
                <span style="color: #e6a23c">¥ 3000</span>
              </p>
            </div>

            <el-divider></el-divider>
            <line-chart :chart-data="lineChartData" />
          </div>
        </el-card>
        <el-card class="box-card">
          <div
            class="download_chart"
            style="background: #fff; padding: 16px 16px 0; margin-bottom: 32px"
          >
            <bar-chart />
          </div>
          <div class="download_table">
            <el-table
              :data="viewdownload_Data"
              style="width: 100%"
              height="250"
            >
              <el-table-column fixed prop="date" label="日付">
              </el-table-column>
              <el-table-column prop="name" label="ユーザー ID"> </el-table-column>
              <el-table-column prop="province" label="単価"> </el-table-column>
              <el-table-column prop="city" label="種類"> </el-table-column>
            </el-table>
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
  data() {
    return {
      tableData: [
        {
          date: "2022-03-31 11:22:33",
          name: "Admin01",
          address: "Created",
        },
        {
          date: "2022-04-02 11:22:33",
          name: "Admin01",
          address: "Changed Price",
        },
        {
          date: "2022-04-10 11:22:33",
          name: "Admin02",
          address: "Published",
        },
      ],
      lineChartData: lineChartData.newVisitis,
      viewdownload_Data: [
        {
          date: "2016-05-03",
          name: "User001",
          province: "",
          city: "View",
          address: "",
          zip: 200333,
        },
        {
          date: "2016-05-02",
          name: "User101",
          province: "",
          city: "View",
          address: "",
          zip: 200333,
        },
        {
          date: "2016-05-04",
          name: "User401",
          province: "",
          city: "View",
          address: "",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "User301",
          province: "¥ 4500",
          city: "Download",
          address: "",
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
  margin-top: 50px;

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
