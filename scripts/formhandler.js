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
  FormHandler.prototype.addvalidHandler = function(fn1,fn2){
    console.log('Setting input handler for the form');
    this.$formElement.on('input', '[name="movie"]', function (event) {
      var movie = event.target.value;
      var message='';
      if(fn1(movie)){
        event.target.setCustomValidity('');
      }else{
        message = movie + ' is not available'
        event.target.setCustomValidity(message);
      }
    });
    this.$sliderThreads.on('change', function(event){
      var threads = event.target.value;
      var message='';
      if(fn2(threads)){
        event.target.setCustomValidity('');
      }else{
        message = threads + ' is not available'
        event.target.setCustomValidity(message);
      }
    });
  };
FormHandler.prototype.addInputHandler = function(fn){
  console.log('Setting input handler for the form');
  this.$formElement.on('input', '[name="emailAddress"]', function (event) {
    var emailAddress = event.target.value;
    var message='';
    if(fn(emailAddress)){
      event.target.setCustomValidity('');
    }else{
      message = emailAddress + ' is not a Prime member email address!'
      event.target.setCustomValidity(message);
    }
  });
};

  App.FormHandler = FormHandler;
  window.App = App;
})(window);
