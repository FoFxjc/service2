import request from "@/utils/request";

export function fetchList(query) {
  return request({
    url: "/vue-admin-template/videoresource/list",
    method: "get",
    params: query,
  });
}

export function fetchvideoresource(id) {
  return request({
    url: "/vue-admin-template/videoresource/detail",
    method: "get",
    params: { id },
  });
}

export function fetchPv(pv) {
  return request({
    url: "/vue-admin-template/videoresource/pv",
    method: "get",
    params: { pv },
  });
}

export function createvideoresource(data) {
  return request({
    url: "/vue-admin-template/videoresource/create",
    method: "post",
    data,
  });
}

export function updatevideoresource(data) {
  return request({
    url: "/vue-admin-template/videoresource/update",
    method: "post",
    data,
  });
}
