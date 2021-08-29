import Utils from "./Utils";

const CategoryAPI = {
    Create: async function (model) {
        let result = await Utils.CreatePostRequest("category", model);
        return result;
    }
};

export default CategoryAPI;
