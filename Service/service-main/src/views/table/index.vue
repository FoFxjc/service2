<template>
  <div class="app-container">
    <el-card
      :body-style="{ padding: '10px' }"
      style="margin: 5px"
      shadow="hover"
    >
      <el-input
        placeholder="メールアドレス"
        style="margin-right: 10px; width: 200px"
        class="filter-item"
      />
      <el-input
        placeholder="アカウント区分"
        style="margin-right: 10px; width: 200px"
        class="filter-item"
      />
      <el-input
        placeholder="登録期間"
        style="margin-right: 10px; width: 200px"
        class="filter-item"
      />
      <el-button
        v-waves
        class="filter-item"
        type="primary"
        icon="el-icon-search"
        @click="handleFilter"
      >
        検索
      </el-button>
      <el-button
        align="center"
        v-waves
        class="filter-item"
        type="primary"
        style="margin-left: 10px; float: right"
        @click="handleFilter"
      >
        メール通知
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
      <!-- <el-table-column label="名前" align="center">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column> -->
      <el-table-column label="メールアドレス" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.email }}</span>
        </template>
      </el-table-column>
      <el-table-column label="企業グループ" align="center">
        <template slot-scope="scope">
          {{ scope.row.email }}
        </template>
      </el-table-column>

      <el-table-column
        align="center"
        prop="created_at"
        label="登録日"
        width="200"
      >
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
          <el-row :gutter="20" style="width: 60%; margin-bottom: 12px">
            <el-col :span="10">
              <div>ユーザー ID</div>
            </el-col>

            <el-col :span="12" style="font-weight: normal">
              <div>1</div>
            </el-col>
          </el-row>
          <el-row :gutter="20" style="width: 60%; margin-bottom: 12px">
            <el-col :span="10">
              <div>メールアドレス</div>
            </el-col>

            <el-col :span="12" style="font-weight: normal">
              <div>morize@gmail.com</div>
            </el-col>
          </el-row>
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
          </el-row>
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
      rowclick_show: false,
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
  created() {
    this.fetchData();
  },
  methods: {
    handleRowClick() {
      this.rowclick_show = true;
    },
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
