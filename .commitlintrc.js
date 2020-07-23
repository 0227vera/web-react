module.exports = {
    "extends": [
      "@commitlint/config-conventional"
    ],
    rules: {
      // Place your rules here
      'scope-enum': [2, 'always', ['a', 'b']] // error if scope is given but not in provided list
    },
    'type-enum': [2, 'always', [
      "feat", "fix", "docs", "style", "refactor", "perf", "test", "ci", "chore", "init"
    ]]
}