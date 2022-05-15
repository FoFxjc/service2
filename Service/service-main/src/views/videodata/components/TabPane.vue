<template>
  <el-card>
    <el-card
      :body-style="{ padding: '10px' }"
      style="margin: 5px"
      shadow="hover"
    >
      <el-input
        v-model="listQuery.title"
        placeholder="Title or Description"
        style="width: 450px"
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
        <el-option value="All">All</el-option>
        <el-option value="Public">Public</el-option>
        <el-option value="Private">Private</el-option>
      </el-select>
      <el-button
        v-waves
        class="filter-item"
        type="primary"
        icon="el-icon-search"
        @click="handleFilter"
      >
        Search
      </el-button>
      <el-button
        class="filter-item"
        style="margin-left: 10px; float: right"
        type="primary"
        icon="el-icon-upload2"
        @click="handleCreate"
      >
        Upload Video
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

        <el-table-column v-if="type == 'Video'" align="center" label="Video">
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
          label="Picture"
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
            <span style="font-weight: bold">{{ row.title }}</span>
            <br />
            <span>{{ row.content }}</span>
          </template>
        </el-table-column>

        <el-table-column label="利用可能">
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

        <el-table-column width="110px" align="left" label="Date">
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
              >変更</span
            >
            <span
              v-if="scope.row.status == 'Draft'"
              style="font-size: 11px; line-height: 8px"
              >アップデート</span
            >
          </template>
        </el-table-column>

        <el-table-column align="center" label="視聴回数">
          <template slot-scope="scope">
            <span>{{ scope.row.views }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="ダウンロード">
          <template slot-scope="scope">
            <span>{{ scope.row.downloads }}</span>
          </template>
        </el-table-column>

        <el-table-column align="center" label="価額">
          <template slot-scope="scope">
            <span>¥ {{ scope.row.price }}</span>
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
              >詳細</el-button
            >
            <el-button size="mini" type="danger">削除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </el-card>
</template>

<script>
import { fetchList } from "@/api/article";

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
