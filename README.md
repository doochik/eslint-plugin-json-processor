# eslint-plugin-json-processor
Simple plugin to lint JSON with ESLint rules

## Installation

`npm install --save-dev eslint-plugin-json-processor`

eslintrc.js
```...
"plugins": [
    "es5",
    "jest",
    "react",
    'eslint-plugin-json-processor',
],
....
"overrides": [
    // NOTE: basically you should override JS rules to be compatible with JSON
    {
        files: [ '*.json' ],
        rules: {
            'comma-dangle': [ 'error', 'never' ],
            'eol-last': [ 'error', 'never' ],
            'max-len': 'off',
            quotes: [ 'error', 'double' ],
            'quote-props': [ 'error', 'always' ],
            semi: [ 'error', 'never' ],
        },
    },
....
``` 
