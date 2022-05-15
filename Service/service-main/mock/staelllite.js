const Mock = require("mockjs");

var Random = Mock.Random;

const data = Mock.mock({
  "items|10": [
    {
      id: "@id",
      name: /^(2)[a-z](2)[A-Z](8)[0-9]/,
      company_name: function () {
        return Random.first() + " Ltd.";
      },
      "email|1": [
        "e.nvdpgf@gqhx.zm",
        "j.lbthdhd@hgkvx.bi",
        "q.hbrs@kcgpgwhv.bd",
        "n.fmmtqvpwm@hvbxtx.l",
        "e.nvdpgf@gqhx.zm",
        "j.lbthdhd@hgkvx.bi",
        "q.hbrs@kcgpgwhv.bd",
        "n.fmmtqvpwm@hvbxtx.l",
      ],
      api_url: "@url",
      "fromNowOn|+1": 1,
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
      ping: "@integer(10, 110)",
      "status|1": ["Online", "Offline"],
    },
  ],
});

module.exports = [
  {
    url: "/vue-admin-template/satellite/list",
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
