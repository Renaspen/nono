import { ENV } from "../utils/costants";

async function getAllBanners(){
    try {

        const sort="sort=position:asc";
        const populate="populate=*"
        const filters=`${sort}&${sort};`
      const url=`${ENV,API_URL}/${ENV.ENDPOINTS.HOME_BANNERS}?${filters}`;
      const response=await fetch(URL);
      if(response.satus!==200)throw response;
      return await response.json();
    } catch (error) {
        throw error
    }
}
export const homeBannerCtrl = {
    getAll:getAllBanners,
};
