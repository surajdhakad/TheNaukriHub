import Api from "./Api";

export const getPlacementReport = async () => {
  return await Api.get("/reports");
};