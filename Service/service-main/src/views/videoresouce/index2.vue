<template>
  <div class="tab-container">
    <el-tabs v-model="activeName" type="border-card">
      <el-tab-pane key="Picture" label="Picture" name="Picture">
        <el-card style="background: rgb(160, 207, 255)">
          <el-row>
            <el-col :span="5"> 一览 </el-col>
            <el-col
              :span="8"
              :offset="11"
              style="display: flex; justify-content: flex-end"
              ><el-button type="info">信息按钮</el-button
              ><el-button type="info">信息按钮</el-button
              ><el-button type="info">信息按钮</el-button>
            </el-col></el-row
          >
        </el-card>
        <el-card style="margin-top: 20px; height: 500px; overflow-y: scroll">
          <el-row :gutter="10">
            <el-col :span="4" v-for="item in images" :key="item.id">
              <div
                style="
                  width: 100%;
                  height: 200px;
                  position: relative;
                  margin: 10px;
                "
              >
                <img
                  src="https://cdn-japantimes.com/wp-content/uploads/2021/12/np_file_132986.jpeg"
                  alt=""
                  style="
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    opacity: 0.8;
                  "
                />
                <div
                  style="
                    z-index: 9;
                    position: absolute;
                    width: 100%;
                    height: 100%;
                  "
                >
                  <div style="top: 10px; left: 10px; position: absolute">
                    <font-awesome-icon
                      icon="fa-solid fa-circle-check"
                      style="color: #fff; font-size: 40px"
                    />
                  </div>
                  <div style="position: absolute; bottom: 15px; left: 15px">
                    <font-awesome-icon
                      icon="fa-solid fa-file-image"
                      style="color: #fff; font-size: 40px"
                    />
                  </div>
                  <div style="position: absolute; top: 15px; right: 15px">
                    <span
                      style="color: #fff; font-size: 20px; font-weight: bold"
                      >{{ item.type }}</span
                    >
                  </div>
                  <div style="position: absolute; bottom: 15px; right: 15px">
                    <font-awesome-icon
                      v-if="item.downloaded"
                      icon="fa-solid fa-cloud-arrow-down"
                      style="color: #fff; font-size: 40px"
                    />
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-tab-pane>
      <el-tab-pane key="Video" label="Video" name="Video">
        <el-card style="background: rgb(160, 207, 255)">
          <el-row> <el-col :span="5"> 一览 </el-col></el-row>
        </el-card>
        <el-card style="margin-top: 20px">
          <el-row :gutter="10">
            <el-col :span="4" v-for="item in videos" :key="item.id">
              <div
                style="
                  width: 100%;
                  height: 200px;
                  position: relative;
                  margin: 5px;
                "
              >
                <video
                  src="https://cdn.videvo.net/videvo_files/video/free/2014-07/large_watermarked/Galaxy_With_Customization_preview.mp4"
                  style="
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                  "
                />
                <div
                  style="
                    z-index: 9;
                    position: absolute;
                    width: 100%;
                    height: 100%;
                  "
                >
                  <div style="top: 30px; left: 10px; position: absolute">
                    <font-awesome-icon
                      icon="fa-solid fa-circle-check"
                      style="color: #fff; font-size: 40px"
                    />
                  </div>
                  <div style="top: 35%; left: 40%; position: absolute">
                    <font-awesome-icon
                      icon="fa-solid fa-circle-play"
                      style="color: #fff; font-size: 60px; opacity: 0.8"
                    />
                  </div>
                  <div style="position: absolute; bottom: 30px; right: 15px">
                    <font-awesome-icon
                      v-if="item.downloaded"
                      icon="fa-solid fa-cloud-arrow-down"
                      style="color: #fff; font-size: 40px"
                    />
                  </div>
                </div>
              </div>
            </el-col>
          </el-row> </el-card
      ></el-tab-pane>
      <el-tab-pane key="Live" label="Live" name="Live">
        <el-card style="background: rgb(160, 207, 255)">
          <el-row> <el-col :span="5"> 一览 </el-col></el-row>
        </el-card>
        <el-card style="margin-top: 20px">
          <el-row
            :gutter="10"
            justify="center"
            type="flex"
            style="margin: 20px"
          >
            <el-col :span="18">
              <video
                src="https://cdn.videvo.net/videvo_files/video/free/2014-07/large_watermarked/Galaxy_With_Customization_preview.mp4"
                style="width: 100%; height: 100%"
                controls="controls"
              />
            </el-col>
          </el-row>
        </el-card>
      </el-tab-pane>
    </el-tabs>
    <el-card style="margin-top: 10px">
      <el-card style="background: #e6a23c">
        <el-row> <el-col :span="5"> 一览 </el-col></el-row>
      </el-card>
      <el-row :gutter="10">
        <el-col :span="4" v-for="item in selected_videos" :key="item.id">
          <div
            style="width: 100%; height: 200px; position: relative; margin: 10px"
          >
            <video
              src="https://cdn.videvo.net/videvo_files/video/free/2014-07/large_watermarked/Galaxy_With_Customization_preview.mp4"
              style="
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
              "
            />
            <div
              style="z-index: 9; position: absolute; width: 100%; height: 100%"
            >
              <div style="top: 30px; left: 10px; position: absolute">
                <font-awesome-icon
                  v-if="item.public"
                  icon="fa-solid fa-users"
                  style="color: #fff; font-size: 40px"
                />
                <font-awesome-icon
                  v-else
                  icon="fa-solid fa-users-slash"
                  style="color: #fff; font-size: 40px"
                />
              </div>
              <div style="top: 35%; left: 40%; position: absolute">
                <font-awesome-icon
                  icon="fa-solid fa-circle-play"
                  style="color: #fff; font-size: 60px; opacity: 0.8"
                />
              </div>
              <!-- <div style="position: absolute; bottom: 15px; left: 15px">
                <font-awesome-icon
                  icon="fa-solid fa-file-image"
                  style="color: #fff; font-size: 40px"
                />
              </div>
              <div style="position: absolute; top: 15px; right: 15px">
                <span style="color: #fff; font-size: 20px; font-weight: bold">{{
                  item.type
                }}</span>
              </div> -->
              <div style="position: absolute; bottom: 30px; right: 70px">
                <font-awesome-icon
                  icon="fa-solid fa-trash-can"
                  style="color: #fff; font-size: 40px"
                />
              </div>
              <div style="position: absolute; bottom: 30px; right: 15px">
                <font-awesome-icon
                  v-if="item.downloaded"
                  icon="fa-solid fa-cloud-arrow-down"
                  style="color: #fff; font-size: 40px"
                />
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import TabPane from "./components/TabPane.vue";

export default {
  name: "Tab",
  components: { TabPane },
  data() {
    return {
      tabMapOptions: [
        { label: "Video", key: "Video" },
        { label: "Picture", key: "Picture" },
      ],
      activeName: "Video",
      createdTimes: 0,
      images: [
        {
          id: "1",
          type: "JPG",
          downloaded: false,
        },
        {
          id: "2",
          type: "JPG",
          downloaded: false,
        },
        {
          id: "3",
          type: "RAW",
          downloaded: true,
        },
        {
          id: "4",
          type: "JPG",
          downloaded: false,
        },
        {
          id: "5",
          type: "JPG",
          downloaded: false,
        },
        {
          id: "6",
          type: "JPG",
          downloaded: false,
        },
        {
          id: "7",
          type: "RAW",
          downloaded: true,
        },
        {
          id: "8",
          type: "JPG",
          downloaded: false,
        },
        {
          id: "9",
          type: "JPG",
          downloaded: false,
        },
        {
          id: "10",
          type: "JPG",
          downloaded: false,
        },
        {
          id: "11",
          type: "JPG",
          downloaded: false,
        },
        {
          id: "12",
          type: "RAW",
          downloaded: true,
        },
        {
          id: "13",
          type: "JPG",
          downloaded: false,
        },
      ],
      videos: [
        {
          id: "1",
          type: "JPG",
          downloaded: false,
        },
        {
          id: "2",
          type: "JPG",
          downloaded: false,
        },
        {
          id: "3",
          type: "RAW",
          downloaded: true,
        },
        {
          id: "4",
          type: "JPG",
          downloaded: false,
        },
        {
          id: "5",
          type: "JPG",
          downloaded: false,
        },
        {
          id: "6",
          type: "JPG",
          downloaded: false,
        },
        {
          id: "7",
          type: "RAW",
          downloaded: true,
        },
        {
          id: "8",
          type: "JPG",
          downloaded: false,
        },
        {
          id: "9",
          type: "JPG",
          downloaded: false,
        },
        {
          id: "10",
          type: "JPG",
          downloaded: false,
        },
        {
          id: "11",
          type: "JPG",
          downloaded: false,
        },
        {
          id: "12",
          type: "RAW",
          downloaded: true,
        },
        {
          id: "13",
          type: "JPG",
          downloaded: false,
        },
      ],
      selected_images: [],
      selected_videos: [
        {
          id: "1",
          type: "JPG",
          downloaded: true,
          public: false,
        },
        {
          id: "2",
          type: "JPG",
          downloaded: true,
          public: true,
        },
      ],
    };
  },
  watch: {
    activeName(val) {
      this.$router.push(`${this.$route.path}?tab=${val}`);
    },
  },
  created() {
    // init the default selected tab
    const tab = this.$route.query.tab;
    if (tab) {
      this.activeName = tab;
    }
  },
  methods: {
    showCreatedTimes() {
      this.createdTimes = this.createdTimes + 1;
    },
    publicPic(id) {
      let select_image = this.images.filter(function (e) {
        return e.id == id;
      })[0];
      this.images = this.images.filter(function (e) {
        return e.id !== id;
      });
      this.selected_images.push(select_image);
      this.selected_images = this.selected_images.sort((a, b) =>
        Number(a.id) > Number(b.id) ? 1 : -1
      );
      this.images = this.images.sort((a, b) =>
        Number(a.id) > Number(b.id) ? 1 : -1
      );
    },
    unpublicPic(id) {
      let select_image = this.selected_images.filter(function (e) {
        return e.id == id;
      })[0];
      this.selected_images = this.selected_images.filter(function (e) {
        return e.id !== id;
      });
      this.images.push(select_image);
      this.selected_images = this.selected_images.sort((a, b) =>
        Number(a.id) > Number(b.id) ? 1 : -1
      );
      this.images = this.images.sort((a, b) =>
        Number(a.id) > Number(b.id) ? 1 : -1
      );
    },
    publicVideo(id) {
      let select_video = this.videos.filter(function (e) {
        return e.id == id;
      })[0];
      this.videos = this.videos.filter(function (e) {
        return e.id !== id;
      });
      this.selected_videos.push(select_video);
      this.selected_videos = this.selected_videos.sort((a, b) =>
        Number(a.id) > Number(b.id) ? 1 : -1
      );
      this.videos = this.videos.sort((a, b) =>
        Number(a.id) > Number(b.id) ? 1 : -1
      );
    },
    unpublicVideo(id) {
      let select_video = this.selected_videos.filter(function (e) {
        return e.id == id;
      })[0];
      this.selected_videos = this.selected_videos.filter(function (e) {
        return e.id !== id;
      });
      this.images.push(select_video);
      this.selected_videos = this.selected_videos.sort((a, b) =>
        Number(a.id) > Number(b.id) ? 1 : -1
      );
      this.videos = this.videos.sort((a, b) =>
        Number(a.id) > Number(b.id) ? 1 : -1
      );
    },
  },
};
</script>

<style scoped>
.tab-container {
  margin: 10px;
}
</style>
