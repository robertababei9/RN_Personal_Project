// const SiteUrl = "/api/";
const SiteUrl = "http://10.0.2.2:8080/api/";

const Utils = {
    // CreateGetRequest: async function (partialUrl) {
    //     let resultObject = null;
    //     let dataGetObj = {
    //         method: "GET",
    //         //crossDomain:true,
    //         //credentials: 'same-origin',
    //         mode: "cors",
    //         // body: JSON.stringify({email: AppConstants.UserEmail}),
    //         headers: {
    //             Accept: "application/json",
    //             "Content-Type": "application/json; charset=utf-8",
    //             Authorization: "bearer " + localStorage.getItem("UserLogin_Token"),
    //             dataType: "json",
    //             //"Access-Control-Allow-Origin": "http://localhost:5994",
    //             //"Access-Control-Allow-Credentials": "true",
    //             //"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
    //             //"Access-Control-Allow-Headers": "Content-Type,Authorization"
    //         },
    //     };

    //     await fetch(AppConstants.SiteUrl + partialUrl, dataPostObj)
    //         .then((response) => response.json())
    //         .then((responseJson) => {
    //             resultObject = responseJson;
    //         })
    //         .catch((error) => {
    //             console.log("Error on get " + partialUrl + ": " + error);
    //         });
    //     //AppConstants.UserApiCall = false;
    //     return resultObject;
    // },
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