const Mysqli = require('mysqli');

let conn = new Mysqli({
    Host: 'localhost', // IP/domain name
    post: '', // port, default 3306
    user: 'root1', // username
    passwd: '123456', // password
    db: 'mega_shop'
});

let db = conn.emit(false, '');

module.exports = {
    database : db
};