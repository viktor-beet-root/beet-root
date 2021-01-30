$(document).ready(function () {
    const calc = $(".calculator");
    const calcDisp = $("#display");
    const calcKeys = $(".calculator__key");
    const calcButtons = $(".calculator__button");
    const calcClear = $(".calculator__clear");
    const calcBackspace = $(".calculator__backspace");
    const calcPower = $(".calculator__power");
    const calcEqual = $(".calculator__key--equal");

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
