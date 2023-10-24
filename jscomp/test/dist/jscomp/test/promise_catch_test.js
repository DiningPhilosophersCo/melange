// Generated by Melange
'use strict';

var Caml_exceptions = require("melange.js/caml_exceptions.js");
var Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");
var Js__Js_exn = require("melange.js/js_exn.js");
var Mt = require("./mt.js");
var Stdlib = require("melange/stdlib.js");
var Stdlib__Option = require("melange/option.js");

var suites = {
  contents: /* [] */0
};

var test_id = {
  contents: 0
};

function eq(loc, x, y) {
  test_id.contents = test_id.contents + 1 | 0;
  suites.contents = {
    hd: [
      loc + (" id " + String(test_id.contents)),
      (function (param) {
          return {
                  TAG: /* Eq */0,
                  _0: x,
                  _1: y
                };
        })
    ],
    tl: suites.contents
  };
}

function handler(e) {
  if (e.MEL_EXN_ID === Js__Js_exn.$$Error) {
    console.log("js error");
    return Promise.resolve(0);
  }
  if (e.MEL_EXN_ID === Stdlib.Not_found) {
    console.log("hi");
    return Promise.resolve(0);
  }
  throw {
        MEL_EXN_ID: "Assert_failure",
        _1: [
          "jscomp/test/promise_catch_test.ml",
          21,
          9
        ],
        Error: new Error()
      };
}

function myHandler(match) {
  if (Caml_exceptions.caml_is_extension(match)) {
    if (match.MEL_EXN_ID === Stdlib.Not_found) {
      return 1;
    } else if (match.MEL_EXN_ID === Js__Js_exn.$$Error) {
      return 2;
    } else {
      return ;
    }
  }
  
}

function f(x) {
  return x.catch(handler);
}

var exit = 0;

var val;

try {
  val = JSON.parse(" 1. +  ");
  exit = 1;
}
catch (raw_e){
  var e = Caml_js_exceptions.internalToOCamlException(raw_e);
  var r = myHandler(e);
  eq("File \"jscomp/test/promise_catch_test.ml\", line 35, characters 7-14", true, r !== undefined && 2 === Stdlib__Option.get(r));
}

if (exit === 1) {
  throw {
        MEL_EXN_ID: "Assert_failure",
        _1: [
          "jscomp/test/promise_catch_test.ml",
          38,
          9
        ],
        Error: new Error()
      };
}

Mt.from_pair_suites("Promise_catch_test", suites.contents);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.handler = handler;
exports.myHandler = myHandler;
exports.f = f;
/*  Not a pure module */
