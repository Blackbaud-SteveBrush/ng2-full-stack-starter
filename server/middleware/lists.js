const router = require('express').Router();

module.exports = function () {
    router
        .route('/lists')
        .get((request, response) => {
            response.json({
                message: "GET success."
            });
        })
        .post((request, response) => {
            response.json({
                message: "POST success."
            });
        });
    return router;
};
