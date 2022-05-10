<template>
  <div class="tab-container">
    <!-- <el-tag>mounted times ：{{ createdTimes }}</el-tag>
    <el-alert
      :closable="false"
      style="
        width: 200px;
        display: inline-block;
        vertical-align: middle;
        margin-left: 30px;
      "
      title="Tab with keep-alive"
      type="success"
    /> -->
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane
        v-for="item in tabMapOptions"
        :key="item.key"
        :label="item.label"
        :name="item.label"
      >
        <keep-alive>
          <tab-pane
            v-if="activeName == item.key"
            :type="item.label"
            @create="showCreatedTimes"
          />
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
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
  },
};
</script>

<style scoped>
.tab-container {
  margin: 10px;
}
</style>
