<template>
  <div class="dashboard-container">
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
        <el-col :span="8"> <p style="font-size: 16px">衛星情報</p></el-col>

      </el-row>
      <el-divider></el-divider>
      <div
        style="
          padding: 20px;
          margin-top: -15px;
          font-weight: normal;
          font-size: 14px;
        "
      >
        <el-row :gutter="20" style="width: 60%; margin-bottom: 12px">
          <el-col :span="10">
            <div>地上局ID</div>
          </el-col>

          <el-col :span="12" style="font-weight: normal">
            <div>1</div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="width: 60%; margin-bottom: 12px">
          <el-col :span="10">
            <div>地上局名</div>
          </el-col>

          <el-col :span="12" style="font-weight: normal">
            <div>XX局</div>
          </el-col>
        </el-row>

        <el-row :gutter="20" style="width: 60%; margin-bottom: 12px">
          <el-col :span="10">
            <div>緯度</div>
          </el-col>
          <el-col :span="12" style="font-weight: normal">
              <div>35.4017</div>
          </el-col>
        </el-row>

        <el-row :gutter="20" style="width: 60%; margin-bottom: 12px">
          <el-col :span="10">
            <div>経度</div>
          </el-col>
          <el-col :span="12" style="font-weight: normal">
            <div>125.4017</div>
          </el-col>
        </el-row>

      </div>
    </el-card>

  </div>
</template>

<script>
import { mapGetters } from "vuex";
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
      notification_tableData: [
        {
          date: "2022-03-31 11:22:33",
          content: "I am testing data, I am testing data.",
        },
      ],
      payment_tableData: [
        {
          id: "01",
          payment_time: "2022-03-31 11:22:33",
          appointment_id: "359114040",
          payment_status: "支払済み",
          price: "100,000",
        },
        {
          id: "02",
          payment_time: "2022-03-31 11:22:33",
          appointment_id: "187678325",
          payment_status: "支払済み",
          price: "100,000",
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
  margin-bottom: 10px;
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
