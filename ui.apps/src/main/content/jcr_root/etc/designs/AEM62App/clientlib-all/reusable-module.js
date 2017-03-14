System.amdDefine('utils/reusable-module', [], function() {
  'use strict';
  var module = {
    sayHi: function() {
      $('.hello-world-js').html('Hi!!! from defined');
    }
  }

  return module;
});