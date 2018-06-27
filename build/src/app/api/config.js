"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var apiConfig = {};

if (typeof window !== 'undefined') {
    apiConfig = {
        parseAppId: window.parseAppId,
        restAPI: window.restAPI
    };
} else {
    apiConfig = {
        parseAppId: process.env.PARSE_APP_ID || "Actinium",
        restAPI: process.env.REST_API_URL || "http://demo3914762.mockable.io"
    };
}

exports.default = apiConfig;