module.exports = (req, res, context) => {
    return `<!DOCTYPE html>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            ${req.styles}
        </head>
        <body>
            <Component type="DevTools"></Component>
            <div id="router"></div>

            <script>
                window.ssr = false;
                window.restAPI = '/api';
                window.parseAppId = '${parseAppId}';
            </script>
            ${req.scripts}
        </body>
    </html>`;
};
