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
              <el-checkbox v-model="checked">Raw形式で表示</el-checkbox>
            </p></el-col
          >
          <el-col :offset="13" :span="4">
            <el-row :gutter="30" justify="center" align="middle">
              <el-col :span="12">
                <div style="margin: 5px 0px">
                  <el-checkbox v-model="checked">自動更新</el-checkbox>
                </div>
              </el-col>
              <el-col :span="12">
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
              1111
            </p></el-col
          >
        </el-row>

        <el-divider></el-divider>
        <el-card
          :body-style="{ padding: '10px', weight: '100%' }"
          style="margin: 5px; margin-top: 15px"
          shadow="hover"
        >
          <el-row>
            <el-col :span="8">
              <el-row :gutter="20" style="width: 100%; margin-bottom: 12px">
                <el-col :span="10">
                  <div>ユーザー ID</div>
                </el-col>

                <el-col :span="12" style="font-weight: normal">
                  <div>1</div>
                </el-col>
              </el-row>
              <el-row :gutter="20" style="width: 100%; margin-bottom: 12px">
                <el-col :span="10">
                  <div>メールアドレス</div>
                </el-col>

                <el-col :span="12" style="font-weight: normal">
                  <div>morize@gmail.com</div>
                </el-col>
              </el-row>
              <el-row :gutter="20" style="width: 100%; margin-bottom: 12px">
                <el-col :span="10">
                  <div>企業グループ</div>
                </el-col>

                <el-col :span="12" style="font-weight: normal">
                  <div>
                    <el-button type="text">OUxXLTpl Corp.</el-button>
                  </div>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="6">
              <el-progress type="circle" :percentage="25"></el-progress>
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
              1111
            </p></el-col
          >
        </el-row>

        <el-divider></el-divider>
        <el-card
          :body-style="{ padding: '10px', weight: '100%' }"
          style="margin: 5px; margin-top: 15px"
          shadow="hover"
        >
          <el-row>
            <el-col :span="8">
              <el-row :gutter="20" style="width: 100%; margin-bottom: 12px">
                <el-col :span="10">
                  <div>ユーザー ID</div>
                </el-col>

                <el-col :span="12" style="font-weight: normal">
                  <div>1</div>
                </el-col>
              </el-row>
              <el-row :gutter="20" style="width: 100%; margin-bottom: 12px">
                <el-col :span="10">
                  <div>メールアドレス</div>
                </el-col>

                <el-col :span="12" style="font-weight: normal">
                  <div>morize@gmail.com</div>
                </el-col>
              </el-row>
              <el-row :gutter="20" style="width: 100%; margin-bottom: 12px">
                <el-col :span="10">
                  <div>企業グループ</div>
                </el-col>

                <el-col :span="12" style="font-weight: normal">
                  <div>
                    <el-button type="text">OUxXLTpl Corp.</el-button>
                  </div>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="6">
              <el-progress
                type="circle"
                :percentage="100"
                status="success"
              ></el-progress>
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
          action_user_id: "2022-04-19 14:27:22",
          action_user_name: "16",
          action_user_email: "2022-04-19 14:27:22",
          action: "",
        },
        {
          id: "456",
          action_user_id: "2022-04-19 14:27:22",
          action_user_name: "16",
          action_user_email: "2022-04-19 14:27:22",
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
