var assert = require('assert')

function test() {
  assert.equal(2 + 2, 6);
}

if (module == require.main) require('test').run(test);
