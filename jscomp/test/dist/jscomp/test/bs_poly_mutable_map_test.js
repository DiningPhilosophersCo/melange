// Generated by Melange
'use strict';

var Array_data_util = require("./array_data_util.js");
var Belt__Belt_Array = require("melange.belt/belt_Array.js");
var Belt__Belt_Id = require("melange.belt/belt_Id.js");
var Belt__Belt_MutableMap = require("melange.belt/belt_MutableMap.js");
var Belt__Belt_Set = require("melange.belt/belt_Set.js");
var Belt__Belt_internalAVLtree = require("melange.belt/belt_internalAVLtree.js");
var Caml = require("melange.js/caml.js");
var Mt = require("./mt.js");

var suites = {
  contents: /* [] */0
};

var test_id = {
  contents: 0
};

function eq(loc, x, y) {
  Mt.eq_suites(test_id, suites, loc, x, y);
}

function b(loc, v) {
  Mt.bool_suites(test_id, suites, loc, v);
}

var Icmp = Belt__Belt_Id.comparable(Caml.caml_int_compare);

function f(x) {
  return Belt__Belt_MutableMap.fromArray(x, Icmp);
}

function ff(x) {
  return Belt__Belt_Set.fromArray(x, Icmp);
}

function randomRange(i, j) {
  return Belt__Belt_Array.map(Array_data_util.randomRange(i, j), (function (x) {
                return [
                        x,
                        x
                      ];
              }));
}

var a0 = Belt__Belt_MutableMap.fromArray(randomRange(0, 10), Icmp);

Belt__Belt_MutableMap.set(a0, 3, 33);

eq("File \"jscomp/test/bs_poly_mutable_map_test.ml\", line 29, characters 5-12", Belt__Belt_MutableMap.getExn(a0, 3), 33);

Belt__Belt_MutableMap.removeMany(a0, [
      7,
      8,
      0,
      1,
      3,
      2,
      4,
      922,
      4,
      5,
      6
    ]);

eq("File \"jscomp/test/bs_poly_mutable_map_test.ml\", line 31, characters 5-12", Belt__Belt_internalAVLtree.keysToArray(a0.data), [
      9,
      10
    ]);

Belt__Belt_MutableMap.removeMany(a0, Array_data_util.randomRange(0, 100));

b("File \"jscomp/test/bs_poly_mutable_map_test.ml\", line 33, characters 4-11", Belt__Belt_MutableMap.isEmpty(a0));

var a0$1 = Belt__Belt_MutableMap.fromArray(randomRange(0, 10000), Icmp);

Belt__Belt_MutableMap.set(a0$1, 2000, 33);

Belt__Belt_MutableMap.removeMany(a0$1, Belt__Belt_Array.map(randomRange(0, 1998), (function (prim) {
            return prim[0];
          })));

Belt__Belt_MutableMap.removeMany(a0$1, Belt__Belt_Array.map(randomRange(2002, 11000), (function (prim) {
            return prim[0];
          })));

eq("File \"jscomp/test/bs_poly_mutable_map_test.ml\", line 41, characters 6-13", Belt__Belt_internalAVLtree.toArray(a0$1.data), [
      [
        1999,
        1999
      ],
      [
        2000,
        33
      ],
      [
        2001,
        2001
      ]
    ]);

Mt.from_pair_suites("Bs_poly_mutable_map_test", suites.contents);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.b = b;
exports.Icmp = Icmp;
exports.f = f;
exports.ff = ff;
exports.randomRange = randomRange;
/* Icmp Not a pure module */
