import Utils from "./Utils";

const SubcategoryAPI = {
    GetAll: async function () {
        let result = await Utils.CreateGetRequest("subcategory");
        if (result == null) result = [];
        return result;
    },
    Create: async function (model, category_id) {
        model.category_id = category_id;
        let result = await Utils.CreatePostRequest("subcategory", model);
        return result;
    },

};

export default SubcategoryAPI;
