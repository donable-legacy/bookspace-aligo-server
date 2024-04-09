const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

module.exports = [
  {
    script: 'dist/lambda.js',
    name: 'aligo-bypass',
  },
];
