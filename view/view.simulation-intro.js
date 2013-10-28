var SimulationIntroView = Backbone.View.extend({
    id: "simulationIntroView",
    
    template: Handlebars.compile(
        ''
    ),

    render: function () {
        this.$el.html(this.template(this.options));
		// var stage = new swiffy.Stage(document.getElementById("content"), swiffyobject);
		//         stage.start();
        return this;
    }
});
