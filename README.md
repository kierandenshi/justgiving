### Just Giving programmer test

This solution has been completed as though it were part of a bigger application. This app could have been created with a much simpler stack, but I have emphasised the tooling as implied in the test instruction. I have used ES2015 React, Redux, Redux Saga as the basis for the application. I am bundling with Webpack, which is using Babel and Sass transformers.

#### To install

Git clone and then
`npm install` or `yarn`

#### To run locally

Start the Webpack dev server with `npm run dev` or `yarn run dev`. The server will listen on port 4040.

#### To run tests

There is basic test coverage for state reducers, containers and components. Test use Mocha with Chai and Sinon assertions. Run the tests with `npm run test` or `yarn run test`.

#### To build

A distributable package can be created with `npm run build` or `yarn run build`.
