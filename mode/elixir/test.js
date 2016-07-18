// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function() {
  var mode = CodeMirror.getMode({indentUnit: 2}, "elixir");
  function MT(name) { test.mode(name, mode, Array.prototype.slice.call(arguments, 1)); }

  MT("left_to_right_operator",
     "[variable collection] [operator \\>] [variable tasl]");

  MT("divide_equal_operator_no_spacing",
     "[variable foo][operator /=][number 42]");

})();
