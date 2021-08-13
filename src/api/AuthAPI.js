import Utils from "./Utils";

const UserAPI = {
    SignUp: async function (model) {
        var result = await Utils.CreatePostRequestEmpty("auth/signup", model);
        return result;
    },
    SignIn: async function (model) {
        let result = await Utils.CreatePostRequestEmpty("auth/signin", model);
        return result;
    }
};

export default UserAPI;
