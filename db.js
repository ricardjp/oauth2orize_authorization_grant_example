var mongojs = require('mongojs')

var db = mongojs('127.0.0.1/oauth2orize_authorization_grant_example')

exports.db = function() {
    return db
}
