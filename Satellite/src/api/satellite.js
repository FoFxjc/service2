import request from "@/utils/request";

export function getList(params) {
  return request({
    url: "/vue-admin-template/satellite/list",
    method: "get",
    params,
  });
}
