<template>
  <el-card>
    <el-card
      :body-style="{ padding: '10px' }"
      style="margin: 5px"
      shadow="hover"
    >
      <el-input
        v-model="listQuery.title"
        placeholder="User Name or ID"
        style="width: 200px"
        class="filter-item"
        @keyup.enter.native="handleFilter"
      />
      <el-select
        value="All"
        placeholder="Type"
        clearable
        class="filter-item"
        style="width: 130px"
      >
        <el-option value="All">すべて</el-option>
        <el-option value="Public">リアルタイム</el-option>
        <el-option value="Private">予約</el-option>
      </el-select>
      <el-select
        value="S01"
        placeholder="Satellite"
        clearable
        class="filter-item"
        style="width: 130px"
      >
        <el-option value="S01">Satellite 01</el-option>
        <el-option value="S02">Satellite 02</el-option>
        <el-option value="S03">Satellite 03</el-option>
      </el-select>
      <el-select
        value="Finished"
        placeholder="Status"
        clearable
        class="filter-item"
        style="width: 130px"
      >
        <el-option value="Shooting">撮影中</el-option>
        <el-option value="In Appointment">予約</el-option>
        <el-option value="Finished">完了</el-option>
      </el-select>
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
        class="filter-item"
        style="margin-left: 10px; float: right"
        type="primary"
        icon="el-icon-circle-plus"
        @click="handleCreate"
      >
        新規追加
      </el-button>
    </el-card>
    <el-card
      :body-style="{ padding: '0px' }"
      style="margin: 5px; margin-top: 15px"
      shadow="hover"
    >
      <el-table
        :data="list"
        border
        fit
        highlight-current-row
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

        <el-table-column v-if="type == 'Video'" align="center" label="ビデオ">
          <template slot-scope="scope">
            <div>
              <video
                v-if="scope.row.status == 'Finished'"
                slot="reference"
                :src="scope.row.video_url"
                controls="controls"
                style="width: 100%; height: 100%"
              />
              <span v-if="scope.row.status == 'Pending'">データ存在しません</span>
              <span v-if="scope.row.status == 'Shooting'">データ存在しません</span>
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

        <el-table-column align="center" label="ユーザー ID">
          <template slot-scope="{ row }">
            <span>{{ row.user_id }}</span>
          </template>
        </el-table-column>

        <el-table-column align="center" label="種類">
          <template slot-scope="{ row }">
            <el-tag v-if="row.type == 'Appointment'" style="font-weight: bold">
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

        <el-table-column width="300px" align="center" label="日付">
          <template slot-scope="scope">
            <span style="font-weight: bold"
              >2022/03/18 17:00 - 2022/03/18 18:00</span
            >
            <br />
            <span
              v-if="scope.row.type == 'Appointment'"
              style="font-size: 11px; line-height: 8px"
              >予約時間</span
            >
            <span
              v-if="scope.row.type == 'Live'"
              style="font-size: 11px; line-height: 8px"
              >リアルタイム</span
            >
          </template>
        </el-table-column>

        <el-table-column align="center" label="状態">
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
            <span v-if="scope.row.status == 'Pending'" style="color: #409eff">
              {{ scope.row.status }}</span
            >
            <i
              v-if="scope.row.status == 'Shooting'"
              class="el-icon-video-camera-solid"
              style="color: orange"
            ></i>
            <span v-if="scope.row.status == 'Shooting'" style="color: orange">
              {{ scope.row.status }}</span
            >
          </template>
        </el-table-column>
        <el-table-column align="center" label="衛星">
          <template slot-scope="scope">
            <span>{{ scope.row.satellite }}</span>
          </template>
        </el-table-column>

        <el-table-column align="center" label="費用">
          <template slot-scope="scope">
            <span v-if="scope.row.status == 'Finished'"
              >¥ {{ scope.row.price }}</span
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
            <el-button @click="handleClick(scope.row)" size="mini" type="info"
              >Detail</el-button
            >
            <el-button size="mini" type="danger">削除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </el-card>
</template>

<script>
import { fetchList } from "@/api/videoresource";

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "info",
        deleted: "danger",
      };
      return statusMap[status];
    },
  },
  props: {
    type: {
      type: String,
      default: "Video",
    },
  },
  data() {
    return {
      list: null,
      listQuery: {
        page: 1,
        limit: 5,
        sort: "+id",
      },
      loading: false,
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.loading = true;
      this.$emit("create"); // for test
      fetchList(this.listQuery).then((response) => {
        this.list = response.data.items;
        this.loading = false;
      });
    },
  },
};
</script>
