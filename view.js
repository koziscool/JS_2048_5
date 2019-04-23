

view2048 = {

  model: model2048,

  init: function(  ) {
    this.update();
    this.addClickHandler();
  },

  update: function(  ) {
    this.$grid = $("#grid-2048");
    this.$grid.empty();
    for( var i = 0; i < this.model.numSquares ; i++ ) {
      var value = this.model.values[i];
      //var value = this.model.values[i] || "";
      var $square = $("<div><div class='value'>" + value + "</div></div>");
      $square.addClass("square");
      this.$grid.append($square);
    }
  },

  addClickHandler: function( ) {
    var that = this;
    window.addEventListener( "keydown", function(e){
      if( e.keyCode === 37 ) that.model.move("left");
      if( e.keyCode === 38 ) that.model.move("up");
      if( e.keyCode === 39 ) that.model.move("right");
      if( e.keyCode === 40 ) that.model.move("down");
      that.update();
    } );
  },
}



