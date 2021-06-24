import axios from "axios";

const ALIGO_HOST = "https://kakaoapi.aligo.in";

export function createAligoRequester() {
  const requester = axios.create({ baseURL: ALIGO_HOST });
  return requester;
}
export const aligoRequester = createAligoRequester();
