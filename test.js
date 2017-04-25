const test = require('micro-analytics-cli/adapter-tests/unit-tests');
const path = require('path');

const adapter = require('./index');

test({
  name: 'memory',
  modulePath: path.resolve(__dirname, './index.js'),
  beforeEach: () => {
    adapter.clear();
  }
});
