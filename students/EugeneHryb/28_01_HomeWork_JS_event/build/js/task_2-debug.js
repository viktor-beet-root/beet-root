"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function () {
  var productTable = document.querySelector('.product-table');
  productTable.addEventListener('click', sortTable);

  function sortTable(event) {
    if (event.target.tagName === "TH") {
      var _productTable$tBodies;

      var indexSort = event.target.cellIndex;
      var table = Array.from(productTable.rows);
      table.splice(0, 1);
      table.sort(function (itemA, itemB) {
        var contentA = itemA.cells[indexSort].innerText;
        var contentB = itemB.cells[indexSort].innerText;
        contentA = contentA.toLowerCase();
        contentB = contentB.toLowerCase();
        if (contentA > contentB) return 1;else return -1;
      });

      (_productTable$tBodies = productTable.tBodies[0]).append.apply(_productTable$tBodies, _toConsumableArray(table));
    }
  } //console.log(productTable.rows)

})();