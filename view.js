

view2048 = {

  model: model2048,

  init: function(  ) {
    this.update();
    this.addClickHandler();
  },

  update: function(  ) {
    this.$grid = $("#grid-2048");
    for( var i = 0; i < this.model.numSquares ; i++ ) {
      var value = this.model.values[i];
      //var value = this.model.values[i] || "";
      var $square = $("<div><div class='value'>" + value + "</div></div>");
      $square.addClass("square");
      this.$grid.append($square);
    }
  },

  addClickHandler: function( ) {
    
  },
}



