
const PROXY_CONFIG = {
    "/api": {
        "target": "http://localhost:1309",
        "changeOrigin": true,
        "secure": false,
        "logLevel": "debug",
        "pathRewrite": {
            "^/api": ""
        }
    }
};

module.exports = PROXY_CONFIG;