const path = require('path')
require('dotenv').config({
    path: path.resolve(`.env.${process.env.NODE_ENV}`),
});
const { PORT = 3000, EMAIL, EMAIL_PASSWORD, TO_MAIL } = process.env
module.exports = {
    PORT,
    EMAIL,
    EMAIL_PASSWORD,
    TO_MAIL
}