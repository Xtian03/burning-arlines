var app = app ||{};

app.SearchView = Backbone.View.extend({
  tagName: 'li',

  events: {
    "click .flight-num": "showFlight"
  },

  showFlight: function() {
    var id = this.model.get("id");
    app.router.navigate("/flight/" + id, true);
    console.log(id);
  },

  render: function () {
    var flight = this.model;
    var templateMarkup = $("#flightListView").html();
    var actualTemplate = _.template(templateMarkup)(flight.toJSON());
    this.$el.html(actualTemplate);
    this.$el.appendTo("#search-results");
  }
});
