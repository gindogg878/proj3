import sendRequest from "./send-request";

const BASE_URL = "/api/posts";

// Return all paid orders for the logged in user
export function getPostHistory() {
  return sendRequest(`${BASE_URL}/posts`);
}
