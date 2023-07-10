const crypto = require('crypto');
const salt = crypto.randomBytes(16).toString('base64');

module.exports = ({ env }) => ({
  auth: {
    secret:crypto.randomBytes(16).toString('base64'),
  },
  apiToken: {
    salt:crypto.randomBytes(16).toString('base64'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', salt),
    },
  },
});

