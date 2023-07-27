// Generated by Melange
'use strict';

var Caml_exceptions = require("melange.js/caml_exceptions.js");
var Curry = require("melange.js/curry.js");
var Exception_def = require("./exception_def.js");
var Mt = require("./mt.js");
var Stdlib__Format = require("melange/format.js");
var Stdlib__Printexc = require("melange/printexc.js");

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

var Hi = /* @__PURE__ */Caml_exceptions.create("Exception_repr_test.Hi");

var Hello = /* @__PURE__ */Caml_exceptions.create("Exception_repr_test.Hello");

var A = /* @__PURE__ */Caml_exceptions.create("Exception_repr_test.A");

Stdlib__Printexc.register_printer(function (param) {
      if (param.RE_EXN_ID === Hi) {
        return "hey";
      } else if (param.RE_EXN_ID === A) {
        return Curry._1(Stdlib__Format.asprintf(/* Format */{
                        _0: {
                          TAG: /* String_literal */11,
                          _0: "A(",
                          _1: {
                            TAG: /* Int */4,
                            _0: /* Int_d */0,
                            _1: /* No_padding */0,
                            _2: /* No_precision */0,
                            _3: {
                              TAG: /* Char_literal */12,
                              _0: /* ')' */41,
                              _1: /* End_of_format */0
                            }
                          }
                        },
                        _1: "A(%d)"
                      }), param._1);
      } else {
        return ;
      }
    });

eq("File \"jscomp/test/exception_repr_test.ml\", line 24, characters 7-14", "hey", Stdlib__Printexc.to_string({
          RE_EXN_ID: Hi
        }));

eq("File \"jscomp/test/exception_repr_test.ml\", line 25, characters 7-14", "A(1)", Stdlib__Printexc.to_string({
          RE_EXN_ID: A,
          _1: 1
        }));

eq("File \"jscomp/test/exception_repr_test.ml\", line 26, characters 7-14", Stdlib__Printexc.to_string({
            RE_EXN_ID: Hello
          }).startsWith("Exception_repr_test.Hello"), true);

eq("File \"jscomp/test/exception_repr_test.ml\", line 27, characters 7-14", "A", Stdlib__Printexc.to_string({
          RE_EXN_ID: Exception_def.A,
          _1: 3
        }));

Mt.from_pair_suites("Exception_repr_test", suites.contents);

var AAA = Exception_def.A;

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.Hi = Hi;
exports.Hello = Hello;
exports.A = A;
exports.AAA = AAA;
/*  Not a pure module */
