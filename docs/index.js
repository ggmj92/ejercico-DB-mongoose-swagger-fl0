const basicInfo = require('./basicInfo');
const tasks = require('./users');
const components = require('./components');

module.exports = {
    ...basicInfo,
    ...tasks,
    ...components
};