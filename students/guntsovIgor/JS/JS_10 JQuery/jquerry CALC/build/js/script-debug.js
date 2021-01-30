"use strict";

$(document).ready(function () {
  var calc = $(".calculator");
  var calcDisp = $("#display");
  var calcKeys = $(".calculator__key");
  var calcButtons = $(".calculator__button");
  var calcClear = $(".calculator__clear");
  var calcBackspace = $(".calculator__backspace");
  var calcPower = $(".calculator__power");
  var calcEqual = $(".calculator__key--equal");
  calcKeys.each(function () {
    $(this).text($(this).attr("value"));
  });
  calcButtons.on("click", function () {
    calcDisp.val(calcDisp.val() + $(this).attr("value"));
  });
  calcClear.on("click", function () {
    calcDisp.val("");
  });
  calcBackspace.on("click", function () {
    calcDisp.val(calcDisp.val().substring(0, calcDisp.val().length - 1));
  });
  calcPower.on("click", function () {
    calcDisp.val(Math.pow(calcDisp.val(), 2));
  });
  calcEqual.on("click", function () {
    calcDisp.val(eval(calcDisp.val()));
  });
});