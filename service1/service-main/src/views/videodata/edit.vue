<template>
  <div class="dashboard-container">
    <el-form ref="form" :model="form" label-width="180px">
      <el-row :gutter="10">
        <el-col :span="24">
          <el-card
            class="box-card"
            :body-style="{ padding: '5px 0px 10px 0px' }"
          >
            <p
              style="
                margin-bottom: -10px;
                margin-left: 20px;
                margin-right: 15px;
                font-size: 16px;
              "
            >
              基本情報
            </p>
            <el-divider></el-divider>
            <el-form-item label="タイトル" style="width: 80%">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="概要" style="width: 80%">
              <el-input type="textarea" :rows="4" v-model="form.name">
              </el-input>
            </el-form-item>
            <el-form-item label="状態">
              <el-select v-model="value">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                  :disabled="item.disabled"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="" style="width: 80%">
              <el-switch
                v-model="value1"
                active-text="ビデオ"
                inactive-text="写真"
              >
              </el-switch>
            </el-form-item>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-card class="box-card" :body-style="{ padding: '5px 0px 10px 0px' }">
          <p
            style="
              margin-bottom: -10px;
              margin-left: 20px;
              margin-right: 15px;
              font-size: 16px;
            "
          >
            データアップロード -
            <span v-if="value1">ビデオ</span>
            <span v-else>写真</span>
          </p>
          <el-divider></el-divider>
          <div v-if="value1">
            <el-form-item label="ビデオ" style="width: 50%">
              <el-upload
                class="upload-demo"
                drag
                multiple
                :file-list="fileList_video"
              >
                <i class="el-icon-upload"></i>
                <div
                  class="el-upload__text"
                  style="font-weight: normal; font-size: 14px"
                >
                  アップロード <em></em>
                </div>
                <div
                  class="el-upload__tip"
                  style="font-weight: normal; font-size: 14px"
                  slot="tip"
                >
                  拡張子対応.mp4 .mov
                </div>
              </el-upload>
            </el-form-item>
          </div>
          <div v-else>
            <el-form-item label="ビデオ" style="width: 50%">
              <el-upload
                class="upload-demo"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList_picture"
                list-type="picture"
              >
                <el-button size="small" type="primary">アップロード</el-button>
                <div slot="tip" class="el-upload__tip">
                  拡張子対応 .jpeg .png
                </div>
              </el-upload>
            </el-form-item>
          </div>
        </el-card>
        <el-card
          v-if="value1"
          class="box-card"
          :body-style="{ padding: '5px 0px 10px 0px' }"
        >
          <p
            style="
              margin-bottom: -10px;
              margin-left: 20px;
              margin-right: 15px;
              font-size: 16px;
            "
          >
            概要図
          </p>
          <el-divider></el-divider>
          <div>
            <el-form-item label="Video" style="width: 50%">
              <el-upload
                class="upload-demo"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList_picture"
                list-type="picture"
              >
                <el-button size="small" type="primary">アップロード</el-button>
                <div slot="tip" class="el-upload__tip">
                  拡張子対応 .jpeg .png
                </div>
              </el-upload>
            </el-form-item>
          </div>
        </el-card>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="24">
          <el-card
            class="box-card"
            :body-style="{ padding: '5px 0px 10px 0px' }"
          >
            <p
              style="
                margin-bottom: -10px;
                margin-left: 20px;
                margin-right: 15px;
                font-size: 16px;
              "
            >
              金額
            </p>
            <el-divider></el-divider>
            <el-form-item label="Price" style="width: 30%">
              <Money :max="20000" :min="100" :fixed="2" v-model="a" clearable>
                <template slot="append">JPY</template>
              </Money>
            </el-form-item>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :offset="17" :span="7">
          <el-form-item>
            <el-button type="primary" @click="onSubmit">作成</el-button>
            <el-button @click="onCancel">キャンセル</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Money from "./components/money.vue";

export default {
  name: "Dashboard",
  computed: {
    ...mapGetters(["name"]),
  },
  components: {
    Money,
  },
  data() {
    return {
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
      options: [
        {
          value: "Public",
          label: "Public",
        },
        {
          value: "Private",
          label: "Private",
        },
        {
          value: "Draft",
          label: "Draft",
          disabled: true,
        },
      ],
      value: "",
      value1: true,
      a: 3000,
      fileList_video: [
        {
          name: "milkyway.mp4",
          url: "https://cdn.videvo.net/videvo_files/video/free/2014-07/large_watermarked/Galaxy_With_Customization_preview.mp4",
        },
        {
          name: "milkyway.mp4",
          url: "https://cdn.videvo.net/videvo_files/video/free/2014-07/large_watermarked/Galaxy_With_Customization_preview.mp4",
        },
      ],
      fileList_picture: [
        {
          name: "milkyway.jpeg",
          url: "https://media.istockphoto.com/photos/space-milky-way-picture-id1170047942?b=1&k=20&m=1170047942&s=170667a&w=0&h=byCU5lXtsX-7ya_8nqNjLWTW_gCJ4H0o_ICRJmqeXzg=",
        },
        {
          name: "milkyway.jpeg",
          url: "https://media.istockphoto.com/photos/space-milky-way-picture-id1170047942?b=1&k=20&m=1170047942&s=170667a&w=0&h=byCU5lXtsX-7ya_8nqNjLWTW_gCJ4H0o_ICRJmqeXzg=",
        },
      ],
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
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
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
