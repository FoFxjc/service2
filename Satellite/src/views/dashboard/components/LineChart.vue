<template>
  <div :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import * as echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme
import resize from "./mixins/resize";

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: "chart",
    },
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "350px",
    },
    autoResize: {
      type: Boolean,
      default: true,
    },
    chartData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val);
      },
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart();
    });
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el);
      this.setOptions(this.chartData);
    },
    setOptions({ expectedData, actualData } = {}) {
      this.chart.setOption({
        xAxis: {
          data: [
            "4月11日",
            "4月12日",
            "4月13日",
            "4月14日",
            "4月15日",
            "4月16日",
            "4月17日",
          ],
        },
        grid: {
          left: 10,
          right: 10,
          bottom: 20,
          top: 30,
          containLabel: true,
        },
        symbolSize: 3,
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
          },
          padding: [5, 10],
        },
        yAxis: {
          axisTick: {
            show: false,
          },
        },
        // legend: {
        //   data: ["expected"],
        // },
        series: [
          {
            name: "expected",
            itemStyle: {
              normal: {
                color: "#E6A23C",
                lineStyle: {
                  color: "#E6A23C",
                  width: 2,
                },
                label: {
                  show: true,
                  position: "top",
                },
              },
            },
            type: "line",
            data: expectedData,
            animationDuration: 2800,
            animationEasing: "cubicInOut",
          },
        ],
      });
    },
  },
};
</script>
