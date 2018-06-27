"use strict";

module.exports = function (req, res, context) {
    return "<html>\n        <head>\n            " + req.styles + "\n        </head>\n        <body>\n            <Component type=\"DevTools\"></Component>\n            <div id=\"router\"></div>\n\n            <script>\n                window.ssr = false;\n                window.restAPI = '/api';\n                window.parseAppId = '" + parseAppId + "';\n            </script>\n            " + req.scripts + "\n        </body>\n    </html>";
};