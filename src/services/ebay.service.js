/* eslint-disable no-undef */
import EbayOAuthClient from "ebay-oauth-nodejs-client";
import dotenv from "dotenv";
import eBayApi from "ebay-api";

dotenv.config();

export const {
  EBAY_APP_CLIENT_ID,
  EBAY_APP_CLIENT_SECRET,
  EBAY_APP_REDIRECT_URI,
  EBAY_API_BASE_URL,
  EBAY_API_VERSION,
  EBAY_API_MARKETPLACE_ID,
  EBAY_API_AFFILIATE_REFERENCE_ID,
  EBAY_API_AFFILIATE_CAMPAIGN_ID,
  EBAY_APP_CATEGORY_IDS,
  EBAY_API_MODE
} = process.env;

const ebayOAuthClient = new EbayOAuthClient({
  clientId: `${EBAY_APP_CLIENT_ID}`,
  clientSecret: `${EBAY_APP_CLIENT_SECRET}`,
  redirectUri: ``,
  env: `${EBAY_API_MODE}`,
});

const getToken = async () => {
  try {
    return JSON.parse(await ebayOAuthClient.getApplicationToken(`${EBAY_API_MODE}`));
  } catch (error) {
    console.error(error);
  }
};

const eBay = new eBayApi({
  appId: `${EBAY_APP_CLIENT_ID}`,
  certId: `${EBAY_APP_CLIENT_SECRET}`,
  sandbox: EBAY_API_MODE === 'DEVELOPMENT' ? true : false,
  marketplaceId: `${EBAY_API_MARKETPLACE_ID}`,
  authToken: getToken(),
});

class ebayService {
  async keywordSearch(keywordSearchOptions) {
    const { searchTerm } = keywordSearchOptions;
    return await eBay.buy.browse.search({
      q: `${searchTerm}`,
      category_ids: "33559",
      compatibility_filter:
        "Year:2012;Make:Honda;Model:Civic;Trim:EX Sedan 4-Door;Engine:1.8L 1799CC l4 GAS SOHC Naturally Aspirated",
    });
  }
}
export default new ebayService();
