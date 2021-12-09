import axios from 'axios';

// eslint-disable-next-line import/no-anonymous-default-export
export default {

    getList: async function (page: any) {
        try {
            let url;
            if (page != null && page > 1) {
                url = "https://gardien.tokodistributor.co.id/api-web/v2/product-recommendation?page=" + page;
            } else {
                url = "https://gardien.tokodistributor.co.id/api-web/v2/product-recommendation?page=2";
            }
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}