const router = require('express').Router();

module.exports = function () {
    router
        .route('/resources')
        .get((req, res) => {
            res.json({
                message: "GET success."
            });
        })
        .post((req, res) => {
            res.json({
                message: "POST success."
            });
        });
    return router;
};
