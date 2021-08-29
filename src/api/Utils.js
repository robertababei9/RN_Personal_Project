import AsyncStorage from '@react-native-async-storage/async-storage';

const SiteUrl = "http://10.0.2.2:8080/api/";

const GetAccessToken = async function() {
    try {
        let token = await AsyncStorage.getItem("UserLogin_Token");

        return token;
    } catch (e) {
        console.log("GetAccessToken: ", e);
    }
}

const Utils = {

    CreatePostRequest: async function (partialUrl, jsonObject) {
        let resultObject = null;
        let token = await GetAccessToken();
        let dataPostObj = {
            method: "POST",
            credentials: "same-origin",
            mode: "same-origin",
            body: JSON.stringify(jsonObject),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
        };

        await fetch(
            SiteUrl + partialUrl,
            dataPostObj
        )
            .then((response) => response.json())
            .then((json) => {
                resultObject = json;
            })
            .catch((error) => {
                resultObject = null;
            });

        return resultObject;
    },
    CreatePostRequestEmpty: async function (partialUrl, jsonObject) {
        let resultObject = null;
        let dataPostObj = {
            method: "POST",
            credentials: "same-origin",
            mode: "same-origin",
            body: JSON.stringify(jsonObject),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        };
        
        await fetch(SiteUrl + partialUrl, dataPostObj)
            .then((response) => response.json())
            .then((json) => {
                resultObject = json;
            })
            .catch((error) => {
                resultObject = null;
            });

        return resultObject;
    },
}

export default Utils;