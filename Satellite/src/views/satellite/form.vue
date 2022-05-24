<template>
  <div class="app-container">
    <el-card
      :body-style="{ padding: '10px' }"
      style="margin: 5px"
      shadow="hover"
    >
      <p
        style="
          margin-bottom: -10px;
          margin-left: 15px;
          margin-right: 15px;
          font-size: 16px;
        "
      >
        衛星 Sphere1
      </p>
      <br />
      <el-input
        placeholder="通信パス"
        style="margin-right: 10px; width: 200px"
        class="filter-item"
      />

      <el-date-picker
        type="date"
        placeholder="開始日時"
        v-model="form.date1"
        style="margin-right: 10px; width: 200px"
      ></el-date-picker>
      <el-date-picker
        placeholder="終了日時"
        type="date"
        v-model="form.date2"
        style="margin-right: 10px; width: 200px"
      ></el-date-picker>
      <el-input
        placeholder="テレメトリ"
        style="width: 200px"
        class="filter-item"
      />
      <el-button
        v-waves
        class="filter-item"
        style="width: 100px; margin-left: 15px"
        type="primary"
        icon="el-icon-search"
        @click="handleFilter"
      >
        検索
      </el-button>
    </el-card>
    <el-row>
      <el-card
        :body-style="{ padding: '5px 5px 10px 5px' }"
        style="margin: 5px; margin-top: 15px"
        shadow="hover"
        class="box-card"
      >


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
            @row-click="rowClick"
          >
            <el-table-column align="left" label="通信パスID">
              <template slot-scope="scope">
                <span>{{ scope.row.action_user_id }}</span>
              </template>
            </el-table-column>

            <el-table-column align="left" label="日時">
              <template slot-scope="scope">
                <span>{{ scope.row.action_user_name }}</span>
              </template>
            </el-table-column>

            <el-table-column align="left" label="テレメトリ名">
              <template slot-scope="scope">
                <span>{{ scope.row.action_user_email }}</span>
              </template>
            </el-table-column>

            <el-table-column align="left" label="値">
              <template slot-scope="scope">
                <span>{{ scope.row.action }}</span>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-card>
    </el-row>
    <el-row v-show="show_Result1">
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
              衛星状況
            </p></el-col
          >
        </el-row>

        <el-divider></el-divider>
        <el-card
          :body-style="{ padding: '10px', weight: '100%' }"
          style="margin: 5px; margin-top: 15px"
          shadow="hover"
        >
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
                  SDカード使用量
                </div>
              </el-col>
              <el-col
                :span="8"
                style="font-weight: normal; font-size: 16px; line-height: 26px"
              >
                <!-- <div class="text">xx/xxGB (x%)</div> -->
                <el-progress :text-inside="true" :stroke-width="22" :percentage="50" status="warning"></el-progress>
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
                  2023-04-08 15:56:01 更新
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
                  充電量
                </div>
              </el-col>
              <el-col
                :span="8"
                style="font-weight: normal; font-size: 16px; line-height: 26px"
              >
                <!-- <div class="text">xx%</div> -->
                <el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="success"></el-progress>
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
                  2023-04-08 15:56:01 更新
                </div>
              </el-col>
            </el-row>

        </el-card>
      </el-card>
    </el-row>
    <el-row v-show="show_Result2">
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
              衛星状況
            </p></el-col
          >
        </el-row>

        <el-divider></el-divider>
        <el-card
          :body-style="{ padding: '10px', weight: '100%' }"
          style="margin: 5px; margin-top: 15px"
          shadow="hover"
        >
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
                  SDカード使用量
                </div>
              </el-col>
              <el-col
                :span="8"
                style="font-weight: normal; font-size: 16px; line-height: 26px"
              >
                <!-- <div class="text">xx/xxGB (x%)</div> -->
                <el-progress :text-inside="true" :stroke-width="22" :percentage="40" status="warning"></el-progress>
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
                  2023-04-08 15:56:01 更新
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
                  充電量
                </div>
              </el-col>
              <el-col
                :span="8"
                style="font-weight: normal; font-size: 16px; line-height: 26px"
              >
                <!-- <div class="text">xx%</div> -->
                <el-progress :text-inside="true" :stroke-width="22" :percentage="90" status="success"></el-progress>
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
                  2023-04-08 15:56:01 更新
                </div>
              </el-col>
            </el-row>

        </el-card>
      </el-card>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: "123",
          action_user_id: "19",
          action_user_name: "2022-04-08 13:17:22",
          action_user_email: "xxxx",
          action: "",
        },
        {
          id: "456",
          action_user_id: "22",
          action_user_name: "2022-04-08 14:27:22",
          action_user_email: "xxxx",
          action: "",
        },
      ],
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
      show_Result2: false,
      show_Result1: false,
    };
  },
  methods: {
    onSubmit() {
      this.$message("submit!");
    },
    onCancel() {
      this.$message({
        message: "cancel!",
        type: "warning",
      });
    },
    rowClick(row) {
      if (row.id == "123") {
        this.show_Result1 = true;
        this.show_Result2 = false;
      } else {
        this.show_Result2 = true;
        this.show_Result1 = false;
      }
    },
  },
};
</script>

<style scoped>
.line {
  text-align: center;
}
</style>
