'use strict';

var Stdlib__no_aliases = require("../../lib/js/stdlib__no_aliases.js");

function str(e) {
  switch (e.TAG | 0) {
    case /* Numeral */0 :
        return Stdlib__no_aliases.string_of_float(e._0);
    case /* Plus */1 :
        return str(e._0) + ("+" + str(e._1));
    case /* Minus */2 :
        return str(e._0) + ("-" + str(e._1));
    case /* Times */3 :
        return str(e._0) + ("*" + str(e._1));
    case /* Divide */4 :
        return str(e._0) + ("/" + str(e._1));
    case /* Negate */5 :
        return "-" + str(e._0);
    case /* Variable */6 :
        return e._0;
    
  }
}

exports.str = str;
/* No side effect */
