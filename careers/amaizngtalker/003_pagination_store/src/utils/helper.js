import { anchorTeacherPrefix } from "./constant";

export function getTeacherIdAnchor() {
  const urls = window.location.href.split("#");
  if (urls.length !== 2) {
    return 0;
  }
  return parseInt(urls[1].replace(anchorTeacherPrefix, ""), 10);
}
