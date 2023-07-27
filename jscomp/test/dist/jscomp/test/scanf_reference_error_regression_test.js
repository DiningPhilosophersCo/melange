// Generated by Melange
'use strict';

var Curry = require("melange.js/curry.js");
var Mt = require("./mt.js");
var Mt_global = require("./mt_global.js");
var Stdlib__List = require("melange/list.js");
var Stdlib__Printf = require("melange/printf.js");
var Stdlib__Scanf = require("melange/scanf.js");

var suites = {
  contents: /* [] */0
};

var test_id = {
  contents: 0
};

function eq(f, param) {
  Mt_global.collect_eq(test_id, suites, f, param[0], param[1]);
}

function scan_rest(ib, accu) {
  return Curry._1(Stdlib__Scanf.bscanf(ib, /* Format */{
                  _0: {
                    TAG: /* Scan_char_set */20,
                    _0: undefined,
                    _1: "\0\0\0\0\0\0\0\0\0\0\0 \0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
                    _2: /* End_of_format */0
                  },
                  _1: "%[]]"
                }), (function (param) {
                if (param === "]") {
                  return accu;
                } else {
                  return Curry._1(Stdlib__Scanf.bscanf(ib, /* Format */{
                                  _0: {
                                    TAG: /* Char_literal */12,
                                    _0: /* ' ' */32,
                                    _1: {
                                      TAG: /* Int */4,
                                      _0: /* Int_i */3,
                                      _1: /* No_padding */0,
                                      _2: /* No_precision */0,
                                      _3: {
                                        TAG: /* Char_literal */12,
                                        _0: /* ' ' */32,
                                        _1: /* End_of_format */0
                                      }
                                    }
                                  },
                                  _1: " %i "
                                }), (function (i) {
                                var accu$1 = {
                                  hd: i,
                                  tl: accu
                                };
                                return Curry._1(Stdlib__Scanf.bscanf(ib, /* Format */{
                                                _0: {
                                                  TAG: /* Scan_char_set */20,
                                                  _0: 1,
                                                  _1: "\0\0\0\0\0\0\0\b\0\0\0 \0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
                                                  _2: /* End_of_format */0
                                                },
                                                _1: "%1[];]"
                                              }), (function (param) {
                                              switch (param) {
                                                case ";" :
                                                    return scan_rest(ib, accu$1);
                                                case "]" :
                                                    return accu$1;
                                                default:
                                                  var s = Stdlib__Printf.sprintf(/* Format */{
                                                        _0: {
                                                          TAG: /* String_literal */11,
                                                          _0: "scan_int_list",
                                                          _1: /* End_of_format */0
                                                        },
                                                        _1: "scan_int_list"
                                                      });
                                                  throw {
                                                        RE_EXN_ID: "Failure",
                                                        _1: s,
                                                        Error: new Error()
                                                      };
                                              }
                                            }));
                              }));
                }
              }));
}

function scan_int_list(ib) {
  Curry._1(Stdlib__Scanf.bscanf(ib, /* Format */{
            _0: {
              TAG: /* String_literal */11,
              _0: " [ ",
              _1: /* End_of_format */0
            },
            _1: " [ "
          }), undefined);
  return Stdlib__List.rev(scan_rest(ib, /* [] */0));
}

eq("File \"jscomp/test/scanf_reference_error_regression_test.ml\", line 36, characters 5-12", [
      scan_int_list(Stdlib__Scanf.Scanning.from_string("[]")),
      /* [] */0
    ]);

Mt.from_pair_suites("Scanf_reference_error_regression_test", suites.contents);

/*  Not a pure module */
