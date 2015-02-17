'use strict';

var keyMirror = require('react/lib/keyMirror');

var MemoryAlpha = {

  AsyncRequestStatuses: keyMirror({
    STARTED: null,
    SUCCEEDED: null,
    FAILED: null
  }),

  ValidationActions: keyMirror({
    VALIDATION_FAILED: null
  })
};

module.exports = MemoryAlpha;

