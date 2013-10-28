Backbone.View.prototype.close = function () {
	
    console.log('Closing view ' + this);

    if (this.beforeClose) {
        this.beforeClose();
    }
    this.remove();
    this.unbind();
};

var AppRouter = Backbone.Router.extend({

    // initialize:function () {
    //     $('#header').html(new HeaderView().render().el);
    // },

    routes: {
        "anchor/:block":            "anchorVideo",
        "simulation/:block":        "simulation",
        "simulation/intro/:block":  "simulationIntro"
    },
    
    anchorVideo: function (block) {
        var view = new AnchorVideoView({
			name: '"Social Climbers"',
			block: 'Block ' + block,
			initialState: Assets["GO_ON_BUTTON_UP"]
		});
        
	//	$("#content").html(view.render().el);
       
		$("#videoPlayer").bind("ended", function () {
			setupButton("#goOnButton", "GO_ON_BUTTON", "explore-zone.html#simulation/1");
		});
     },
    
    simulation: function (block) {
        var view = new SimulationView({
			name: "Crash Test a Car",
			block: "Block " + block
		});

	//	$("#content").html(view.render().el);
        
        setupButton( "#goOnButton", "GO_ON_BUTTON", "#simulation/intro/"+block );
    },
    
    simulationIntro: function (block) {
        var view = new SimulationIntroView({
			name: "Crash Test a Car",
			block: "Block " + block
		});
        
	//	$("#content").html(view.render().el);
    }
});

var appRouter = new AppRouter();
    
$(document).ready( function() {
	
    $("body").css("display", "none");
    $("body").fadeIn(500);
            
    Backbone.history.start();

    setupButton( "#homeButton", "HOME_BUTTON", "index.html" );
});

// function setupVideoPlayer() {
// 	
//     $("#videoPlayer").bind("ended", function () {
//         setupButton("#goOnButton", "GO_ON_BUTTON", "explore-zone.html#simulation/1");
//     });
// }
