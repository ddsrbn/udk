#!/usr/bin/env node
// Copyright (c) 2018 Steven Enten. All rights reserved. Licensed under the MIT license.

import * as path from 'path';

(() => {
  try {
    const localBin = require.resolve(path.join(
      process.cwd(),
      'node_modules',
      '@architect',
      'udk',
      'bin',
      'ng-udkc.js',
    ));

    if (__filename !== localBin) {
      return require(localBin);
    }
  } catch (e) {}

  require('./udk-ng-container');
})();
