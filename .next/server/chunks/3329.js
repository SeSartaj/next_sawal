"use strict";
exports.id = 3329;
exports.ids = [3329];
exports.modules = {

/***/ 33329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ api)
});

// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 48 modules
var axios = __webpack_require__(62410);
;// CONCATENATED MODULE: ./services/request.ts

const client = axios/* default */.Z.create({
    baseURL: "https://online.tveta.gov.af:8080/api"
});
function takhnikRequest(method, path = "", payload = {}, accessToken = null) {
    const options = {
        method,
        withCredentials: true,
        url: path,
        data: payload,
        json: true,
        headers: {}
    };
    if (accessToken) {
        options.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return client(options);
}

;// CONCATENATED MODULE: ./services/api.js

const removeNullish = (obj)=>Object.entries(obj).reduce((a, [k, v])=>v ? (a[k] = v, a) : a, {});
const buildQueryFromObject = (search, prefix = "")=>Object.entries(search).map(([key, value])=>typeof value === "object" ? buildQueryFromObject(value, key) : `${prefix ? `${prefix}[${key}]` : `${key}`}=${value}`).join("&");
/* harmony default export */ const api = ({
    auth: {
        signin (data) {
            const path = `/signin`;
            return takhnikRequest("POST", path, data);
        }
    },
    users: {
        createUser (data) {
            const path = `/users`;
            return takhnikRequest("POST", path, data);
        },
        createModerator (data, accessToken) {
            const path = `/moderators`;
            return takhnikRequest("POST", path, data, accessToken);
        },
        list () {
            const path = `/users`;
            return takhnikRequest("GET", path);
        },
        querySearchModerators (query) {
            const path = `/moderators?${query}`;
            return takhnikRequest("GET", path);
        },
        querySearchMembers (query) {
            const path = `/members?${query}`;
            return takhnikRequest("GET", path);
        },
        retrieve (userId) {
            const path = `/users/${userId}`;
            return takhnikRequest("GET", path);
        },
        update (userId, data) {
            const path = `/users/${userId}`;
            return takhnikRequest("POST", path, data);
        },
        delete (userId) {
            const path = `/users/${userId}`;
            return takhnikRequest("DELETE", path);
        },
        userActivity (userId) {
            const path = `/users/user-activity/${userId}`;
            return takhnikRequest("GET", path);
        },
        changePassword (userId, data, accessToken) {
            const path = `/users/change-pass/${userId}`;
            return takhnikRequest("POST", path, data, accessToken);
        },
        addTagsToModerator (userId, data, accessToken) {
            const path = `/users/tags/${userId}`;
            return takhnikRequest("POST", path, data, accessToken);
        },
        makeUserModerator (userId, accessToken) {
            const path = `/users/make-moderator/${userId}`;
            return takhnikRequest("PUT", path, accessToken);
        },
        dismissModeratorUser (userId, accessToken) {
            const path = `/users/dismiss-moderator/${userId}`;
            return takhnikRequest("PUT", path, accessToken);
        },
        removeTagsFromModerator (userId, data, accessToken) {
            const path = `/users/tags/remove/${userId}`;
            return takhnikRequest("POST", path, data, accessToken);
        },
        emailSendForPasswordReset (data) {
            const path = `/users/reset-password`;
            return takhnikRequest("POST", path, data);
        },
        resetPasswordByToken (token, data) {
            const path = `/users/reset-pass-token/${token}`;
            return takhnikRequest("POST", path, data);
        },
        suspendUser (userId, data, accessToken) {
            const path = `/users/suspend/${userId}`;
            return takhnikRequest("PUT", path, data, accessToken);
        },
        changeUserLang (userId, data, accessToken) {
            const path = `/users/change-lang/${userId}`;
            return takhnikRequest("PUT", path, data, accessToken);
        }
    },
    tags: {
        create (data, accessToken) {
            const path = `/tags`;
            return takhnikRequest("POST", path, data, accessToken);
        },
        list () {
            const path = `/tags`;
            return takhnikRequest("GET", path);
        },
        options (lang) {
            const path = `/tag-options/${lang}`;
            return takhnikRequest("GET", path);
        },
        querySearch (query) {
            const path = `/query-tags?${query}`;
            return takhnikRequest("GET", path);
        },
        retrieve (tagId) {
            const path = `/tags/${tagId}`;
            return takhnikRequest("GET", path);
        },
        update (data, accessToken) {
            const path = `/tags`;
            return takhnikRequest("PUT", path, data, accessToken);
        },
        delete (tagId) {
            const path = `/tags/${tagId}`;
            return takhnikRequest("DELETE", path);
        }
    },
    reportTypes: {
        create (data, accessToken) {
            const path = `/report_types`;
            return takhnikRequest("POST", path, data, accessToken);
        },
        options (lang) {
            const path = `/report-type-options/${lang}`;
            return takhnikRequest("GET", path);
        },
        querySearch (query) {
            const path = `/query-report-types?${query}`;
            return takhnikRequest("GET", path);
        },
        retrieve (reportTypeId) {
            const path = `/report_types/${reportTypeId}`;
            return takhnikRequest("GET", path);
        },
        update (data, accessToken) {
            const path = `/report_types`;
            return takhnikRequest("PUT", path, data, accessToken);
        },
        delete (reportTypeId) {
            const path = `/report_types/${reportTypeId}`;
            return takhnikRequest("DELETE", path);
        }
    },
    reports: {
        create (data, accessToken) {
            const path = `/reports`;
            return takhnikRequest("POST", path, data, accessToken);
        },
        querySearch (query) {
            const path = `/query-reports?${query}`;
            return takhnikRequest("GET", path);
        },
        retrieve (reportId) {
            const path = `/reports/${reportId}`;
            return takhnikRequest("GET", path);
        },
        update (reportId, data) {
            const path = `/reports/${reportId}`;
            return takhnikRequest("POST", path, data);
        },
        delete (reportId, accessToken) {
            const path = `/reports/${reportId}`;
            return takhnikRequest("DELETE", path, {}, accessToken);
        },
        closeReport (reportId, accessToken) {
            const path = `/reports/close/${reportId}`;
            return takhnikRequest("PUT", path, {}, accessToken);
        }
    },
    discussions: {
        create (data, accessToken) {
            console.log(data, "data");
            const path = `/discussions`;
            return takhnikRequest("POST", path, data, accessToken);
        },
        list () {
            const path = `/discussions`;
            return takhnikRequest("GET", path);
        },
        querySearch (query) {
            const path = `/discussions?${query}`;
            return takhnikRequest("GET", path);
        },
        retrieve (discussionId) {
            const path = `/discussions/${discussionId}`;
            return takhnikRequest("GET", path);
        },
        update (data, accessToken) {
            const path = `/discussions`;
            return takhnikRequest("PUT", path, data, accessToken);
        },
        delete (discussionId, accessToken) {
            const path = `/discussions/${discussionId}`;
            return takhnikRequest("DELETE", path, {}, accessToken);
        },
        lockDiscussion (discussionId, accessToken) {
            const path = `/discussions/lock/${discussionId}`;
            return takhnikRequest("PUT", path, {}, accessToken);
        },
        unlockDiscussion (discussionId, accessToken) {
            const path = `/discussions/unlock/${discussionId}`;
            return takhnikRequest("PUT", path, {}, accessToken);
        },
        fetchByTagId (tagId) {
            const path = `/discussions/tag/${tagId}`;
            return takhnikRequest("GET", path);
        }
    },
    answers: {
        create (data, accessToken) {
            const path = `/answers`;
            return takhnikRequest("POST", path, data, accessToken);
        },
        list () {
            const path = `/answers`;
            return takhnikRequest("GET", path);
        },
        retrieve (answerId) {
            const path = `/answers/${answerId}`;
            return takhnikRequest("GET", path);
        },
        update (data, accessToken) {
            const path = `/answers`;
            return takhnikRequest("PUT", path, data, accessToken);
        },
        delete (answerId, accessToken) {
            const path = `/answers/${answerId}`;
            return takhnikRequest("DELETE", path, {}, accessToken);
        },
        getVotes (answerId) {
            const path = `/answers/votes/${answerId}`;
            return takhnikRequest("GET", path);
        }
    },
    comments: {
        create (data, accessToken) {
            const path = `/comments`;
            return takhnikRequest("POST", path, data, accessToken);
        },
        list () {
            const path = `/comments`;
            return takhnikRequest("GET", path);
        },
        retrieve (commentId) {
            const path = `/comments/${commentId}`;
            return takhnikRequest("GET", path);
        },
        update (data, accessToken) {
            const path = `/comments`;
            return takhnikRequest("PUT", path, data, accessToken);
        },
        delete (commentId, accessToken) {
            const path = `/comments/${commentId}`;
            return takhnikRequest("DELETE", path, {}, accessToken);
        }
    },
    files: {
        uploadFiles (data, accessToken) {
            const path = `/upload`;
            return takhnikRequest("POST", path, data, accessToken);
        },
        upload (userId, data, accessToken) {
            const path = `/upload/${userId}`;
            return takhnikRequest("POST", path, data, accessToken);
        }
    },
    setting: {
        update (data, accessToken) {
            const path = `/settings`;
            return takhnikRequest("PUT", path, data, accessToken);
        }
    },
    vote: {
        create (data, accessToken) {
            const path = `/votes`;
            return takhnikRequest("POST", path, data, accessToken);
        },
        delete (voteId, accessToken) {
            const path = `/votes/${voteId}`;
            return takhnikRequest("DELETE", path, accessToken);
        }
    }
});


/***/ })

};
;