"use strict";

module.exports = function (req, res, context) {
    return "<!DOCTYPE html>\n        <head>\n            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n            " + req.styles + "\n        </head>\n        <body>\n            <Component type=\"DevTools\"></Component>\n            <div id=\"router\"></div>\n\n            <script>\n                window.ssr = false;\n                window.restAPI = '/api';\n                window.parseAppId = '" + parseAppId + "';\n            </script>\n            " + req.scripts + "\n        </body>\n    </html>";
};