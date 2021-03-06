const Mock = require("mockjs");

const List = [];
const count = 100;

const baseContent =
  '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>';
const image_uri =
  "data:image/jpeg;base64,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";

const video_url =
  "https://cdn.videvo.net/videvo_files/video/free/2014-07/large_watermarked/Galaxy_With_Customization_preview.mp4";

for (let i = 0; i < count; i++) {
  List.push(
    Mock.mock({
      id: "@increment",
      "uid|+1": 1,
      "fromNowOn|+1": 1,
      "now|+1": '@now("yyyy-MM-dd")',
      "date_time|-1": function () {
        let now = new Date(this.now);
        now.setTime(now.getTime() - this.fromNowOn * 24 * 60 * 60 * 1000);
        let sub = now;
        var year =
          sub.getFullYear() < 10 ? "0" + sub.getFullYear() : sub.getFullYear();
        var month =
          sub.getMonth() + 1 < 10 ? "0" + sub.getMonth() : sub.getMonth();
        var day = sub.getDate() < 10 ? "0" + sub.getDate() : sub.getDate();
        return year + "-" + month + "-" + day;
      },
      "status|1": ["Public", "Private", "Draft"],
      views: "@integer(3000, 5000)",
      downloads: "@integer(300, 600)",
      "price|1": ["3000", "6000", "9000", "12000"],
      timestamp: +Mock.Random.date("T"),
      author: "@first",
      reviewer: "@first",
      title: "@title(2, 5)",
      content_short: "mock data",
      content: "@sentence",
      forecast: "@float(0, 100, 2, 2)",
      importance: "@integer(1, 3)",
      "type|1": ["CN", "US", "JP", "EU"],
      display_time: "@datetime",
      comment_disabled: true,
      pageviews: "@integer(300, 5000)",
      image_uri,
      video_url,
      platforms: ["a-platform"],
      "isDownload|1": [true, false],
    })
  );
}

module.exports = [
  {
    url: "/vue-admin-template/article/list",
    type: "get",
    response: (config) => {
      const {
        importance,
        type,
        title,
        page = 1,
        limit = 20,
        sort,
      } = config.query;

      let mockList = List.filter((item) => {
        if (importance && item.importance !== +importance) return false;
        if (type && item.type !== type) return false;
        if (title && item.title.indexOf(title) < 0) return false;
        return true;
      });

      if (sort === "-id") {
        mockList = mockList.reverse();
      }

      const pageList = mockList.filter(
        (item, index) => index < limit * page && index >= limit * (page - 1)
      );

      return {
        code: 20000,
        data: {
          total: mockList.length,
          items: pageList,
        },
      };
    },
  },

  {
    url: "/vue-admin-template/article/detail",
    type: "get",
    response: (config) => {
      const { id } = config.query;
      for (const article of List) {
        if (article.id === +id) {
          return {
            code: 20000,
            data: article,
          };
        }
      }
    },
  },

  {
    url: "/vue-admin-template/article/pv",
    type: "get",
    response: (_) => {
      return {
        code: 20000,
        data: {
          pvData: [
            { key: "PC", pv: 1024 },
            { key: "mobile", pv: 1024 },
            { key: "ios", pv: 1024 },
            { key: "android", pv: 1024 },
          ],
        },
      };
    },
  },

  {
    url: "/vue-admin-template/article/create",
    type: "post",
    response: (_) => {
      return {
        code: 20000,
        data: "success",
      };
    },
  },

  {
    url: "/vue-admin-template/article/update",
    type: "post",
    response: (_) => {
      return {
        code: 20000,
        data: "success",
      };
    },
  },
];
