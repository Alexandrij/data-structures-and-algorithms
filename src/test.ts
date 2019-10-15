// // fixes typing errors in Atom editor
// import 'jasmine';

// // Unfortunately there's no typing for the `__karma__` variable. Just declare
// it as any. declare var __karma__: any; declare var require: any;

// // Prevent Karma from running prematurely.
// // tslint:disable-next-line: no-empty
// __karma__.loaded = () => {};

// // First, we find all the tests.
// const context = require.context('./', true, /\.spec\.ts$/);
// // And load the modules
// context.keys().map(context);
// // Finally, start Karma to run the tests.
// __karma__.start();

import 'jasmine';

declare const require: any;

const context = require.context('./', true, /\.spec\.ts$/);
context.keys().map(context);
