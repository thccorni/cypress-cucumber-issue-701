# Reproduction for <https://github.com/badeball/cypress-cucumber-preprocessor/issues/701>

Run

```sh
npm i
npm start
```

The problem seems to occur due to the interceptor in the `Before` step: <./cypress/integration/common/index.ts>
