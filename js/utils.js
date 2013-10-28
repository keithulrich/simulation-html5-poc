function setupButton( id, assetIdRoot, destination ) {
	
    $(id).bind( "mouseenter mousedown mouseup mouseleave click", function (event) {
	
        var evtType = event.type;

        var images = {
            "mouseenter": Assets[assetIdRoot + "_OVER"],
            "mousedown" : Assets[assetIdRoot + "_DOWN"],
            "mouseup"   : Assets[assetIdRoot + "_UP"],
            "mouseleave": Assets[assetIdRoot + "_UP"]
        };

        if (evtType in images) {
            this.src = images[evtType];
		}

        if (evtType == "click") {
			document.location.href = destination;
		}
    });
}

tpl = {
    // Hash of preloaded templates for the app
    templates: {},

    // Recursively pre-load all the templates for the app.
    // This implementation should be changed in a production environment. All 
    // the template files should be concatenated in a single file.
    loadTemplates: function (names, callback) {

        var that = this;

        var loadTemplate = function (index) {
            var name = names[index];
            console.log("Loading template: " + name);
            $.get("templates/" + name + ".html", function (data) {
                that.templates[name] = data;
                index++;
                if (index < names.length) {
                    loadTemplate(index);
                } else {
                    callback();
                }
            });
        }

        loadTemplate(0);
    },

    // Get template by name from hash of preloaded templates
    get: function (name) {
        return this.templates[name];
    }
};

