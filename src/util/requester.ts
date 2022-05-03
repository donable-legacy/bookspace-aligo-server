import axios from "axios";

const ALIGO_HOST = "https://apis.aligo.in";

export function createAligoRequester() {
  const requester = axios.create({ baseURL: ALIGO_HOST });
  return requester;
}
export const aligoRequester = createAligoRequester();

const BIZTALK_HOST = "https://www.biztalk-api.com";

export function createBiztalkRequester() {
  const requester = axios.create({ baseURL: BIZTALK_HOST });
  return requester;
}
export const biztalkRequester = createBiztalkRequester();
