'use strict';

var Mt = require("./mt.js");
var Curry = require("../../lib/js/curry.js");
var Caml_oo = require("../../lib/js/caml_oo.js");
var Caml_obj = require("../../lib/js/caml_obj.js");
var Caml_oo_curry = require("../../lib/js/caml_oo_curry.js");
var CamlinternalOO = require("../../lib/js/camlinternalOO.js");
var Stdlib__no_aliases = require("../../lib/js/stdlib__no_aliases.js");

var shared = [
  "move",
  "get_x",
  "*dummy method*"
];

var shared$1 = [
  "move",
  "get_x"
];

var shared$2 = ["m"];

var shared$3 = ["x"];

var shared$4 = [
  "m",
  "*dummy method*"
];

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

function point_init($$class) {
  var x_init = CamlinternalOO.new_variable($$class, "");
  var ids = CamlinternalOO.new_methods_variables($$class, shared, shared$3);
  var move = ids[0];
  var get_x = ids[1];
  var x = ids[3];
  CamlinternalOO.set_methods($$class, [
        get_x,
        (function (self$neg1) {
            return self$neg1[x];
          }),
        move,
        (function (self$neg1, d) {
            self$neg1[x] = self$neg1[x] + d | 0;
            
          })
      ]);
  return function (env, self, x_init$1) {
    var self$1 = CamlinternalOO.create_object_opt(self, $$class);
    self$1[x_init] = x_init$1;
    self$1[x] = x_init$1;
    return self$1;
  };
}

var point = CamlinternalOO.make_class(shared$1, point_init);

function colored_point_init($$class) {
  var x = CamlinternalOO.new_variable($$class, "");
  var c = CamlinternalOO.new_variable($$class, "");
  var ids = CamlinternalOO.new_methods_variables($$class, [
        "move",
        "get_x",
        "color",
        "*dummy method*"
      ], ["c"]);
  var color = ids[2];
  var c$1 = ids[4];
  var inh = CamlinternalOO.inherits($$class, shared$3, 0, [
        "get_x",
        "move"
      ], point, true);
  var obj_init = inh[0];
  CamlinternalOO.set_method($$class, color, (function (self$neg2) {
          return self$neg2[c$1];
        }));
  return function (env, self, x$1, c$2) {
    var self$1 = CamlinternalOO.create_object_opt(self, $$class);
    self$1[c] = c$2;
    self$1[x] = x$1;
    Curry._2(obj_init, self$1, x$1);
    self$1[c$1] = c$2;
    return CamlinternalOO.run_initializers_opt(self, self$1, $$class);
  };
}

var colored_point = CamlinternalOO.make_class([
      "move",
      "color",
      "get_x"
    ], colored_point_init);

function colored_point_to_point(cp) {
  return cp;
}

var p = Curry._2(point[0], undefined, 3);

var q = Curry._3(colored_point[0], undefined, 4, "blue");

function lookup_obj(obj, _param) {
  while(true) {
    var param = _param;
    if (param) {
      var obj$p = param.hd;
      if (Caml_obj.caml_equal(obj, obj$p)) {
        return obj$p;
      }
      _param = param.tl;
      continue ;
    }
    throw {
          RE_EXN_ID: Stdlib__no_aliases.Not_found,
          Error: new Error()
        };
  };
}

function c_init($$class) {
  var ids = CamlinternalOO.get_method_labels($$class, shared$4);
  var m = ids[0];
  CamlinternalOO.set_method($$class, m, (function (self$neg3) {
          return 1;
        }));
  return function (env, self) {
    return CamlinternalOO.create_object_opt(self, $$class);
  };
}

var c = CamlinternalOO.make_class(shared$2, c_init);

function d_init($$class) {
  var ids = CamlinternalOO.get_method_labels($$class, [
        "n",
        "m",
        "as_c",
        "*dummy method*"
      ]);
  var n = ids[0];
  var as_c = ids[2];
  var inh = CamlinternalOO.inherits($$class, 0, 0, shared$2, c, true);
  var obj_init = inh[0];
  CamlinternalOO.set_methods($$class, [
        n,
        (function (self$neg4) {
            return 2;
          }),
        as_c,
        (function (self$neg4) {
            return self$neg4;
          })
      ]);
  return function (env, self) {
    var self$1 = CamlinternalOO.create_object_opt(self, $$class);
    Curry._1(obj_init, self$1);
    return CamlinternalOO.run_initializers_opt(self, self$1, $$class);
  };
}

var table = CamlinternalOO.create_table([
      "as_c",
      "m",
      "n"
    ]);

var env_init = d_init(table);

CamlinternalOO.init_class(table);

var d_0 = Curry._1(env_init, undefined);

var d = [
  d_0,
  d_init,
  env_init,
  undefined
];

function c2$p_1($$class) {
  CamlinternalOO.get_method_labels($$class, shared$4);
  return function (env, self) {
    return CamlinternalOO.create_object_opt(self, $$class);
  };
}

var c2$p = [
  undefined,
  c2$p_1,
  undefined,
  undefined
];

function functional_point_init($$class) {
  var y = CamlinternalOO.new_variable($$class, "");
  var ids = CamlinternalOO.new_methods_variables($$class, shared, shared$3);
  var move = ids[0];
  var get_x = ids[1];
  var x = ids[3];
  CamlinternalOO.set_methods($$class, [
        get_x,
        (function (self$neg6) {
            return self$neg6[x];
          }),
        move,
        (function (self$neg6, d) {
            var copy = Caml_oo.caml_set_oo_id(Caml_obj.caml_obj_dup(self$neg6));
            copy[x] = self$neg6[x] + d | 0;
            return copy;
          })
      ]);
  return function (env, self, y$1) {
    var self$1 = CamlinternalOO.create_object_opt(self, $$class);
    self$1[y] = y$1;
    self$1[x] = y$1;
    return self$1;
  };
}

var functional_point = CamlinternalOO.make_class(shared$1, functional_point_init);

var p$1 = Curry._2(functional_point[0], undefined, 7);

var tmp = Caml_oo_curry.js2(-933174511, 2, p$1, 3);

eq("File \"class6_test.ml\", line 60, characters 5-12", [
      7,
      10,
      7
    ], [
      Caml_oo_curry.js1(291546447, 1, p$1),
      Caml_oo_curry.js1(291546447, 3, tmp),
      Caml_oo_curry.js1(291546447, 4, p$1)
    ]);

function bad_functional_point_init($$class) {
  var y = CamlinternalOO.new_variable($$class, "");
  var ids = CamlinternalOO.new_methods_variables($$class, shared, shared$3);
  var move = ids[0];
  var get_x = ids[1];
  var x = ids[3];
  CamlinternalOO.set_methods($$class, [
        get_x,
        (function (self$neg7) {
            return self$neg7[x];
          }),
        move,
        (function (self$neg7, d) {
            return Curry._2(bad_functional_point[0], undefined, self$neg7[x] + d | 0);
          })
      ]);
  return function (env, self, y$1) {
    var self$1 = CamlinternalOO.create_object_opt(self, $$class);
    self$1[y] = y$1;
    self$1[x] = y$1;
    return self$1;
  };
}

var table$1 = CamlinternalOO.create_table(shared$1);

var env_init$1 = bad_functional_point_init(table$1);

CamlinternalOO.init_class(table$1);

var bad_functional_point_0 = Curry._1(env_init$1, undefined);

var bad_functional_point = [
  bad_functional_point_0,
  bad_functional_point_init,
  env_init$1,
  undefined
];

var p$2 = Curry._2(bad_functional_point_0, undefined, 7);

var tmp$1 = Caml_oo_curry.js2(-933174511, 6, p$2, 3);

eq("File \"class6_test.ml\", line 74, characters 5-12", [
      7,
      10,
      7
    ], [
      Caml_oo_curry.js1(291546447, 5, p$2),
      Caml_oo_curry.js1(291546447, 7, tmp$1),
      Caml_oo_curry.js1(291546447, 8, p$2)
    ]);

Mt.from_pair_suites("Class6_test", suites.contents);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.point = point;
exports.colored_point = colored_point;
exports.colored_point_to_point = colored_point_to_point;
exports.p = p;
exports.q = q;
exports.lookup_obj = lookup_obj;
exports.c = c;
exports.d = d;
exports.c2$p = c2$p;
exports.functional_point = functional_point;
exports.bad_functional_point = bad_functional_point;
/* point Not a pure module */
