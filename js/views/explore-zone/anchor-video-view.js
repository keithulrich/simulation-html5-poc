var AnchorVideoView = Backbone.View.extend({
	id: "anchorVideoView",
	
	initialize: function () {
		//setupButton( "#goOnButton", "GO_ON_BUTTON", "explore-zone.html#simulation/1" );
	},
	
    template: Handlebars.compile(
        '<div>' +
            '<div id="title">{{name}}</div>' +
            '<div>' + 
                '<video id="videoPlayer" class="video-js vjs-default-skin" poster="video/m180_anchor_block_1_block.png" controls>' +
                    '<source src="video/m180_anchor_block_1_high.mp4" type="video/mp4">' +
                    '<source src="video/m180_anchor_block_1_high.ogv" type="video/ogg">' +
                    'Your browser does not support the video tag.' +
                '</video> ' +
            '</div>' + 
            '<img id="goOnButton" src="{{initialState}}"/>' + 
        '</div>'
    ),

    render: function () {
        this.$el.html(this.template(this.options));
        return this;
    }
});