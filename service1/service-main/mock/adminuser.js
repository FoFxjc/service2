const Mock = require("mockjs");

var Random = Mock.Random;

const data = Mock.mock({
  "items|30": [
    {
      id: "@id",
      name: "@FIRST @Last",
      "payment|1": ["Visa", "MasterCard", "JCB"],
      nickname: "@FIRST",
      email: "@email",
      "fromNowOn|+1": 1,
      "role|1": ["Admin"],
      "now|+1": '@now("yyyy-MM-dd")',
      "register_time|-1": function () {
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
    },
  ],
});

module.exports = [
  {
    url: "/vue-admin-template/adminuser/list",
    type: "get",
    response: (config) => {
      const items = data.items;
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items,
        },
      };
    },
  },
];
