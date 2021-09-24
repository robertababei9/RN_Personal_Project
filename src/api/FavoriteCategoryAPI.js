import Utils from "./Utils";

const FavoriteCategoryAPI = {
    GetByUserId: async function (userId) {
        let result = await Utils.CreateGetRequest("favoriteSubcategory/getByUserId/" + userId);
        if (result == null) result = [];
        return result;
    },
    Create: async function (model) {
        let result = await Utils.CreatePostRequest("favoriteSubcategory", model);
        return result;
    },
    Delete: async function (id) {
        let result = await Utils.CreateDeleteRequest("favoriteSubcategory/" + id);
        return result;
    }

};

export default FavoriteCategoryAPI;
