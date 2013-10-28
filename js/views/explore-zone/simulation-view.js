var SimulationView = Backbone.View.extend({
    id: "simulationView",
    
    template: Handlebars.compile(
        '<div>' +
        '    <img class="img-rounded img-polaroid" src="images/explore-zone/block6-title-bg.png">' +
        '    <div id="title">{{name}}</div>' +
        '</div>' +
        '<img id="goOnButton" src="images/explore-zone/buttons/go-on-up.png"/>' 
    ),
    
    render: function () {
        this.$el.html(this.template(this.options));
        return this;
    }
});