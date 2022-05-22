<template>
  <div class="app-container">
    <el-row :gutter="30">
      <el-col :span="5">
        <el-card>
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
          ></el-tree>
        </el-card>
      </el-col>
      <el-col :span="10">
        <el-card>
          <el-row :gutter="60">
            <el-col
              :span="12"
              style="padding: 20px; border: 1px black solid; height: 200px"
              @dragover.native="dragenter2"
              @dragleave.native="dragleave2"
            >
              <div @dragover.native="dragenter2">
                <p v-for="item in selectItems" :key="item.id">
                  {{ item.label }}
                </p>
              </div>
            </el-col>

            <el-col :span="12">
              <el-card>
                <el-tree
                  :data="treeData3"
                  ref="tree3"
                  class="tree"
                  node-key="id"
                  draggable
                  default-expand-all
                  :allow-drop="returnTrue"
                ></el-tree>
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
          label: "Item 1",
          children: [
            {
              id: 4,
              label: "Item 1 Child 1",
              children: [
                { id: 9, label: "Item 1 Grand Child 1" },
                { id: 9, label: "Item 1 Grand Child 1" },
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
          id: 2,
          label: "Item 3",
          children: [
            {
              id: 5,
              label: "Item 3 Child 1",
              children: [{ id: 8, label: "Item 3 Grand Child 1" }],
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
      if (this.enterTree2) {
        this.selectItems.push(draggingNode.data);
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
      }, 800);
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
