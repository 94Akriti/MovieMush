(function(window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function FormHandler(selector) {
    if (!selector) {
      throw new Error('No selector provided');
    }
    this.$formElement = $(selector);
    if (this.$formElement.length === 0) {
      throw new Error('Could not find element with selector: ' + selector);
    }
    // update strengthOutput when slider changes and add color
    var slider = document.getElementById("threads");
    var sliderOutput = document.getElementById("threadOp");
    var sliderLabel = document.getElementById('threadc');

    // set initial color
    sliderOutput.style.color = "blue";
    sliderLabel.style.color = "green";

    slider.addEventListener("input", function() { // using change only shows
                                                  // number after letting go of slider
      // both value and textContent seem to work
      // can't find any discussion online about which to use
      // sliderOutput.textContent = slider.value;
      sliderOutput.value = slider.value
      // change the color of the label and number based on intensity
      var intensityColor;
      if (slider.value < 2) {
        intensityColor = "green";
      }
      else if (slider.value < 4) {
        intensityColor = "#aaaa00";
      }
      else {
        intensityColor = "red";
      }
      sliderOutput.style.color = intensityColor;
      sliderLabel.style.color = intensityColor;
    });
  }

  FormHandler.prototype.addSubmitHandler = function(fn) {
    console.log('Setting submit handler for form');
    this.$formElement.on('submit', function(event) {
      event.preventDefault();
      var data = {};
      $(this).serializeArray().forEach(function(item) {
        data[item.name] = item.value;
        console.log(item.name + ' is ' + item.value);
      });
      console.log(data);
      fn(data);
      this.reset();
      this.elements[0].focus();
    });
  };
  App.FormHandler = FormHandler;
  window.App = App;
})(window);
