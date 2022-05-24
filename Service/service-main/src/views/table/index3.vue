<template>
  <div class="app-container">
    <el-card
      :body-style="{ padding: '10px' }"
      style="margin: 5px"
      shadow="hover"
    >
      <el-select v-model="select_1" placeholder="予約撮影">
        <el-option label="予約撮影" value="shanghai"></el-option>
        <el-option label="リアルタイム" value="beijing"></el-option>
      </el-select>
      <el-date-picker
        v-model="date_1"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      >
      </el-date-picker>
      <el-button
        v-waves
        class="filter-item"
        type="primary"
        icon="el-icon-search"
        @click="handleFilter"
      >
        検索
      </el-button>
    </el-card>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
      @row-click="handleRowClick"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="権限" align="center">
        <template slot-scope="scope"> システム運用 </template>
      </el-table-column>

      <el-table-column
        align="center"
        prop="created_at"
        label="企業グループ"
        width="200"
      >
        <template slot-scope="scope">
          <span>XXXXX</span>
        </template>
      </el-table-column>
      <el-table-column label="登録日" align="center">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.register_time }}</span>
        </template>
      </el-table-column>
    </el-table>
    <div v-show="rowclick_show">
      <el-card
        class="box-card"
        :body-style="{ padding: '5px 0px 10px 0px' }"
        style="margin-top: 20px"
      >
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
          <el-col :span="8"> <p style="font-size: 16px">情報</p></el-col>
          <el-col :offset="13" :span="3">
            <el-button type="danger"> 削除</el-button>
            <el-button type="primary"> メール通知</el-button>
          </el-col>
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
          <el-col :span="12">
            <el-row :gutter="20" style="width: 60%; margin-bottom: 12px">
              <el-col :span="10">
                <div>ユーザー ID</div>
              </el-col>

              <el-col :span="12" style="font-weight: normal">
                <div>1</div>
              </el-col>
            </el-row>
            <!-- <el-row :gutter="20" style="width: 60%; margin-bottom: 12px">
              <el-col :span="10">
                <div>メールアドレス</div>
              </el-col>

              <el-col :span="12" style="font-weight: normal">
                <div>morize@gmail.com</div>
              </el-col>
            </el-row> -->
            <el-row :gutter="20" style="width: 60%; margin-bottom: 12px">
              <el-col :span="10">
                <div>企業グループ</div>
              </el-col>

              <el-col :span="12" style="font-weight: normal">
                <div>
                  <el-button type="text">OUxXLTpl Corp.</el-button>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20" style="width: 60%; margin-bottom: 12px">
              <el-col :span="10">
                <div>名前</div>
              </el-col>

              <el-col :span="12" style="font-weight: normal">
                <div>Cora Porter</div>
              </el-col>
            </el-row>
            <el-row :gutter="20" style="width: 60%; margin-bottom: 12px">
              <el-col :span="10">
                <div>生年月日</div>
              </el-col>

              <el-col :span="12" style="font-weight: normal">
                <div>2000-01-01（22歳）</div>
              </el-col>
            </el-row>
            <el-row :gutter="20" style="width: 60%; margin-bottom: 12px">
              <el-col :span="10">
                <div>電話番号</div>
              </el-col>

              <el-col :span="12" style="font-weight: normal">
                <div>(540)582-6788</div>
              </el-col>
            </el-row>
            <el-row :gutter="20" style="width: 60%; margin-bottom: 12px">
              <el-col :span="10">
                <div>アカウント区分</div>
              </el-col>

              <el-col :span="12" style="font-weight: normal">
                <div>(PlaceHolder)</div>
              </el-col>
            </el-row>
            <el-row :gutter="20" style="width: 60%; margin-bottom: 12px">
              <el-col :span="10">
                <div>登録日</div>
              </el-col>

              <el-col :span="12" style="font-weight: normal">
                <div>2022-10-22</div>
              </el-col>
            </el-row></el-col
          >
          <el-col :span="8" :offset="4">
            <el-row
              style="
                margin-bottom: -20px;
                margin-left: 15px;
                margin-right: -10px;
                font-size: 16px;
                display: flex;
                weight: 300px;
              "
            >
              <el-select
                value="スタンダード"
                placeholder="Type"
                clearable
                class="filter-item"
                style="width: 130px"
              >
                <el-option value="All">スタンダード</el-option>
                <el-option value="Public">ムーブメント</el-option>
                <el-option value="Private">BtoB</el-option>
              </el-select>
              <el-button type="text" style="font-size: 18px; margin-left: 15px"
                >1h</el-button
              >
              <el-button type="text" style="font-size: 18px">3h</el-button>
              <el-button type="text" style="font-size: 18px">12h</el-button>
              <el-button type="text" style="font-size: 18px">1d</el-button>
              <el-button type="text" style="font-size: 18px">3d</el-button>
              <el-button type="text" style="font-size: 18px">1w</el-button>
              <el-button type="text" style="font-size: 18px"
                >Custom <i class="el-icon-date"></i
              ></el-button>
            </el-row>
            <line-chart :chart-data="lineChartData" />
          </el-col>
        </div>
      </el-card>
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
          <el-col :span="8"> <p style="font-size: 16px">支払情報</p></el-col>
        </el-row>
        <el-divider></el-divider>
        <div style="padding: 0px 10px 10px 10px; margin-top: -15px">
          <el-table
            :data="payment_tableData"
            style="font-size: 12px; width: 100%"
            height="240"
            border
          >
            <el-table-column prop="payment_time" label="日時">
            </el-table-column>
            <el-table-column prop="appointment_id" label="予約">
              <template slot-scope="scope">
                <el-button type="text">{{
                  scope.row.appointment_id
                }}</el-button>
              </template>
            </el-table-column>
            <el-table-column prop="payment_status" label="ステータス">
            </el-table-column>
            <el-table-column prop="price" label="料金"> </el-table-column>
          </el-table>
        </div>
      </el-card>
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
          <el-col :span="8"> <p style="font-size: 16px">通知履歴</p></el-col>
        </el-row>
        <el-divider></el-divider>
        <div style="padding: 0px 10px 10px 10px; margin-top: -15px">
          <el-table
            :data="notification_tableData"
            style="font-size: 12px; width: 100%"
            height="240"
            border
          >
            <el-table-column prop="date" label="日時" width="300">
            </el-table-column>
            <el-table-column prop="content" label="メールタイトル">
            </el-table-column>
            <el-table-column label="操作" width="300" align="center">
              <template slot-scope="scope">
                <el-button size="mini" type="info">詳細</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { getList } from "@/api/table";

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
      select_1: null,
      rowclick_show: false,
      date_1: [],
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
