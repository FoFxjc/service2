<template>
  <div class="app-container">
    <el-row :gutter="10">
      <el-col :span="5">
        <el-card
          :body-style="{ padding: '5px 5px 10px 5px' }"
          style="margin: 5px; margin-top: 15px"
          shadow="hover"
          class="box-card"
        >
          <el-tree
            :data="treeData1"
            ref="tree1"
            class="tree"
            node-key="id"
            draggable
            default-expand-all
            :allow-drop="returnFalse"
            @node-drag-start="handleDragstart"
            @node-drag-end="handleDragend"
          >
            <template class="custom-tree-node" slot-scope="{ node, data }">
              <div
                v-if="data.class == 'orange'"
                class="orange"
                style="width: 300px"
              >
                <span>{{ node.label }}</span>
              </div>
              <div
                v-else-if="data.class == 'blue'"
                class="blue"
                style="width: 300px"
              >
                <span>{{ node.label }}</span>
              </div>
              <div
                v-else-if="data.class == 'yellow'"
                class="yellow"
                style="width: 282px; height: 18px"
              >
                <img
                  src="https://cdn-japantimes.com/wp-content/uploads/2021/12/np_file_132986.jpeg"
                  style="
                    width: 14px;
                    height: 14px;
                    margin-right: 8px;
                    margin-top: 2px;
                  "
                  alt=""
                />
                <span>{{ node.label }}</span>
              </div>

              <span v-else>{{ node.label }}</span>
            </template></el-tree
          >
        </el-card>
      </el-col>
      <el-col :span="19">
        <el-card
          :body-style="{ padding: '5px 5px 10px 5px' }"
          style="margin: 5px; margin-top: 15px"
          shadow="hover"
          class="box-card"
        >
          <el-row
            style="
              margin-bottom: -10px;
              margin-left: 15px;
              margin-right: 15px;
              padding: 10px;
              font-size: 16px;
              background: black;
              color: white;
            "
          >
            <el-col :span="4" style="padding-top: 10px">
              <span> 通信パス：T01 </span>
            </el-col>
            <el-col :span="10">
              <el-button type="info" style="width: 150px">自動選択</el-button>
              <el-button type="info" style="width: 150px">一括削除</el-button>
              <el-button type="info" style="width: 150px">保存</el-button>
              <el-button type="info" style="width: 150px">確定</el-button>
            </el-col>
            <el-col :span="4" style="padding-top: 10px">
              <span> ダウンロード可能残量：1.24G</span>
            </el-col>
          </el-row>
          <el-divider></el-divider>
          <el-row :gutter="60">
            <el-col :span="12">
              <el-card
                :body-style="{ padding: '10px 10px 10px 10px' }"
                style="margin: 5px; margin-top: 15px; height: 160px"
                shadow="hover"
                class="box-card"
                @dragover.native="dragenter2"
                @dragleave.native="dragleave2"
              >
                <el-row
                  style="
                    margin-bottom: -10px;
                    margin-left: 15px;
                    margin-right: 15px;
                    font-size: 16px;
                    display: flex;
                    justify-content: center;
                  "
                >
                  <el-col :span="7" style="padding-top: 15px">
                    <span> サムネイルダウンロード予約</span>
                  </el-col>
                </el-row>
                <el-divider></el-divider>
                <div>
                  <el-tag
                    class="orange"
                    v-for="item in selectItems"
                    :key="item.id"
                    style="width: 100%; color: black"
                    @dragover.native="dragenter2"
                  >
                    <el-row>
                      <el-col
                        :span="12"
                        style="
                          display: flex;
                          justify-content: flex-start;
                          font-size: 18px;
                        "
                      >
                        {{ item.label }}
                      </el-col>
                      <el-col
                        :offset="11"
                        :span="1"
                        style="
                          display: flex;
                          justify-content: flex-end;
                          margin-top: 5px;
                          font-size: 18px;
                        "
                      >
                        <i
                          class="el-icon-remove-outline"
                          style="cursor: pointer; color: red"
                          @click="removeFromTree(item.id)"
                        ></i>
                      </el-col>
                    </el-row>
                  </el-tag>
                </div>
              </el-card>
            </el-col>

            <el-col :span="12">
              <el-card
                :body-style="{ padding: '10px 10px 10px 10px' }"
                style="margin: 5px; margin-top: 15px"
                shadow="hover"
                class="box-card"
                @dragover.native="dragenter3"
                @dragleave.native="dragleave3"
              >
                <el-row
                  style="
                    margin-bottom: -10px;
                    margin-left: 15px;
                    margin-right: 15px;
                    font-size: 16px;
                    display: flex;
                    justify-content: center;
                  "
                >
                  <el-col :span="6" style="padding-top: 15px">
                    <span> ファイルダウンロード予約</span>
                  </el-col>
                </el-row>
                <el-divider></el-divider>
                <el-tree
                  :data="treeData3"
                  ref="tree3"
                  class="tree"
                  node-key="id"
                  draggable=""
                  default-expand-all
                  :allow-drop="returnTrue"
                >
                  <template
                    class="custom-tree-node"
                    slot-scope="{ node, data }"
                  >
                    <div
                      v-if="data.class == 'orange'"
                      class="orange"
                      style="width: 300px"
                    >
                      <span>{{ node.label }}</span>
                    </div>
                    <div
                      v-else-if="data.class == 'blue'"
                      class="blue"
                      style="width: 100%"
                    >
                      <span>{{ node.label }}</span>
                      <i
                        class="el-icon-remove-outline"
                        style="
                          cursor: pointer;
                          color: red;
                          float: right;
                          margin-right: 10px;
                        "
                        @click="() => remove(node, data)"
                      ></i>
                    </div>
                    <div
                      v-else-if="data.class == 'yellow'"
                      class="yellow"
                      style="width: 100%; height: 18px"
                    >
                      <img
                        src="https://cdn-japantimes.com/wp-content/uploads/2021/12/np_file_132986.jpeg"
                        style="
                          width: 14px;
                          height: 14px;
                          margin-right: 8px;
                          margin-top: 2px;
                        "
                        alt=""
                      />
                      <span>{{ node.label }}</span>
                      <i
                        class="el-icon-remove-outline"
                        style="
                          cursor: pointer;
                          color: red;
                          float: right;
                          margin-right: 10px;
                        "
                        @click="() => remove(node, data)"
                      ></i>
                    </div>

                    <div v-else>
                      <span>{{ node.label }}</span>
                      <el-button
                        type="text"
                        size="mini"
                        @click="() => remove(node, data)"
                      >
                        Delete
                      </el-button>
                    </div>
                  </template></el-tree
                >
              </el-card>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      enterTree3: false,
      enterTree2: false,
      selectItems: [],
      treeData1: [
        {
          id: 1,
          label: "サムネイル未ダウンロード",
          class: "normal",
          children: [
            {
              id: 4,
              label: "撮影枠予約",
              class: "normal",
              children: [
                { id: 5, class: "orange", label: "Y0000006" },
                { id: 7, class: "orange", label: "Y0000007" },
                { id: 8, class: "orange", label: "Y0000008" },
                { id: 9, class: "orange", label: "Y0000009" },
                { id: 11, class: "orange", label: "Y0000010" },
              ],
            },
          ],
        },
        {
          id: 2,
          label: "サムネイルダウンロード済",
          class: "normal",
          children: [
            {
              id: 5,
              label: "撮影枠予約",
              class: "normal",
              children: [
                {
                  id: 56,
                  class: "blue",
                  label: "Y0000001",
                  children: [
                    {
                      id: 5,
                      class: "yellow",
                      label: "11.ARW",
                    },
                  ],
                },
                {
                  id: 57,
                  class: "blue",
                  label: "Y0000002",
                  children: [
                    {
                      id: 7,
                      class: "yellow",
                      label: "21.ARW",
                    },
                    {
                      id: 8,
                      class: "yellow",
                      label: "22.MP4",
                    },
                  ],
                },
                {
                  id: 58,
                  class: "blue",
                  label: "Y0000003",
                  children: [
                    {
                      id: 7,
                      class: "yellow",
                      label: "31.ARW",
                    },
                    {
                      id: 8,
                      class: "yellow",
                      label: "32.MP4",
                    },
                  ],
                },
                {
                  id: 59,
                  class: "blue",
                  label: "Y0000004",
                  children: [
                    {
                      id: 7,
                      class: "yellow",
                      label: "41.ARW",
                    },
                    {
                      id: 8,
                      class: "yellow",
                      label: "22.MP4",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      treeData2: [
        {
          id: 2,
          label: "Item 2",
          children: [
            {
              id: 5,
              label: "Item 2 Child 1",
              children: [{ id: 8, label: "Item 2 Grand Child 1" }],
            },
          ],
        },
      ],
      treeData3: [
        {
          id: 56,
          class: "blue",
          label: "Y0000001",
          children: [
            {
              id: 5,
              class: "yellow",
              label: "11.ARW",
            },
          ],
        },
      ],
    };
  },

  methods: {
    handleDragstart(node, event) {
      this.$refs.tree3.$emit("tree-node-drag-start", event, { node: node });
    },
    handleDragend(draggingNode, endNode, position, event) {
      console.log(draggingNode);
      if (this.enterTree2) {
        this.selectItems.push(draggingNode.data);
      } else {
        if (this.treeData3.length === 0) {
          this.treeData3.push(draggingNode.data);
          this.$refs.tree3.$emit("tree-node-drag-end", event);
        } else {
          let emptyData = { id: +new Date(), children: [] };
          this.$refs.tree1.insertBefore(emptyData, draggingNode);

          this.$refs.tree3.$emit("tree-node-drag-end", event);
          this.$nextTick(() => {
            if (this.$refs.tree1.getNode(draggingNode.data)) {
              this.$refs.tree1.remove(emptyData);
            } else {
              let data = JSON.parse(JSON.stringify(draggingNode.data));
              this.$refs.tree1.insertAfter(
                data,
                this.$refs.tree1.getNode(emptyData)
              );
              this.$refs.tree1.remove(emptyData);
            }
          });
        }
      }

      this.enterTree3 = false;
      this.enterTree2 = false;
    },
    returnTrue() {
      return true;
    },
    returnFalse() {
      return false;
    },
    dragenter3() {
      this.enterTree3 = true;
    },
    dragleave3() {
      this.enterTree3 = false;
    },
    dragenter2() {
      this.enterTree2 = true;
    },
    dragleave2() {
      setTimeout(() => {
        this.enterTree2 = false;
      }, 2000);
    },
    removeFromTree(id) {
      this.selectItems = this.selectItems.filter((item) => {
        return item.id != id;
      });
    },
    append(data) {
      const newChild = { id: id++, label: "testtest", children: [] };
      if (!data.children) {
        this.$set(data, "children", []);
      }
      data.children.push(newChild);
    },

    remove(node, data) {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex((d) => d.id === data.id);
      children.splice(index, 1);
    },
  },
};
</script>
<style>
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
.orange {
  background: #f0b8b8;
}
.blue {
  background: #c4d7e6;
}
.yellow {
  background: #fff294;
}
</style>
