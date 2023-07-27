// Generated by Melange
'use strict';

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

function f0(x) {
  if (x === "azdwbie") {
    return 1;
  } else {
    return 0;
  }
}

function f1(x) {
  if (x.NAME === "azdwbie") {
    return x.VAL + 2 | 0;
  } else {
    return x.VAL + 1 | 0;
  }
}

var hi = [
  "Eric_Cooper",
  "azdwbie"
];

eq("File \"jscomp/test/hash_collision_test.ml\", line 24, characters 9-16", 0, 0);

eq("File \"jscomp/test/hash_collision_test.ml\", line 25, characters 9-16", 1, 1);

eq("File \"jscomp/test/hash_collision_test.ml\", line 27, characters 9-16", f1({
          NAME: "Eric_Cooper",
          VAL: -1
        }), 0);

eq("File \"jscomp/test/hash_collision_test.ml\", line 29, characters 9-16", f1({
          NAME: "azdwbie",
          VAL: -2
        }), 0);

Mt.from_pair_suites("jscomp/test/hash_collision_test.ml", suites.contents);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.f0 = f0;
exports.f1 = f1;
exports.hi = hi;
/*  Not a pure module */
