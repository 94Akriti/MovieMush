(function(window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function CheckList(selector) {
    if (!selector) {
      throw new Error('No selector provided');
    }
    this.$element = $(selector);
    if (this.$element.length === 0) {
      throw new Error('Could not find element with selector: ' + selector);
    }
  }
  CheckList.prototype.addClickHandler = function(fn) {
    this.$element.on('click', 'input', function(event) {
      var email = event.target.value;
      this.removeRow(email);
      fn(email);
    }.bind(this));
  };
  CheckList.prototype.addRow = function(movieDemand) {
    // Remove any existing rows that match the email address
    this.removeRow(movieDemand.emailAddress);
    // Create a new instance of a row, using the movie demand info
    var rowElement = new Row(movieDemand);
    // Add the new row instance's $element property to the checklist
    this.$element.append(rowElement.$element);
  };

  CheckList.prototype.removeRow = function(email) {
    this.$element
      .find('[value="' + email + '"]')
      .closest('[data-movie-demand="checkbox"]')
      .remove();
  };

  function Row(movieDemand) {
    var $div = $('<div></div>', {
      'data-movie-demand': 'checkbox',
      'class': 'checkbox'
    });

    var $label = $('<label></label>');
    var $checkbox = $('<input></input>', {
      type: 'checkbox',
      value: movieDemand.emailAddress
    });
    var description = movieDemand.quality + ' ';
    if (movieDemand.Language) {
      description += movieDemand.Language + ' ';
    }
    description += movieDemand.movie + ', ';
    description += ' (' + movieDemand.emailAddress + ')';
    description += ' [' + movieDemand.threads + 'threads]';
    $label.append($checkbox);
    $label.append(description);
    $div.append($label);

    this.$element = $div;
  }
  App.CheckList = CheckList;
  window.App = App;
})(window);
