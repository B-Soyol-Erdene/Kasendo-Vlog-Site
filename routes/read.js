const express = require('express');
const router = express.Router();
const conn = require('../connection/connection');

router.get('/read/:id', function(request, response) {
	var id = request.params.id;
	conn.query('SELECT * FROM accounts WHERE id = ?', [id], function (error, results, fields) {
        if (!error) {
            response.render("index", {user: results[0]});
        }  else {
            console.log(error);
        }            
    })
	response.render("read");
});

module.exports = router;