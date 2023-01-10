"use strict";

var _headerAndBetween = _interopRequireDefault(require("./headerAndBetween.js"));
var _schedule = _interopRequireDefault(require("./schedule.js"));
var _intentions = _interopRequireDefault(require("./intentions.js"));
var _announce = _interopRequireDefault(require("./announce.js"));
var _nav = _interopRequireDefault(require("./nav.js"));
var _contact = _interopRequireDefault(require("./contact.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var main = function main() {
  (0, _headerAndBetween["default"])();
  (0, _schedule["default"])();
  (0, _intentions["default"])();
  (0, _announce["default"])();
  (0, _nav["default"])();
  (0, _contact["default"])();
};
addEventListener("DOMContentLoaded", main);