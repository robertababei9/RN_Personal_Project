import Utils from "./Utils";

const CategoryAPI = {
    GetAll: async function () {
        let result = await Utils.CreateGetRequest("category");
        if (result == null) result = [];
        return result;
    },
    Create: async function (model) {
        let result = await Utils.CreatePostRequest("category", model);
        return result;
    },
    GetCategorySubcategoryModel: async function () {
        let result = await Utils.CreateGetRequest("category/getCategorySubcategoryModel");
        if (result == null) result = [];
        return result;
    }
};

export default CategoryAPI;
