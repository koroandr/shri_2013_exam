/**
 * Created by koroandr on 13.10.13.
 */
define(function () {
    function About(container, data) {
        if (!(this instanceof About)) {
            return new About(container, data);
        }
        this.container = $(container);
        this.body = $(yr.run("about", data.about));
        this.container.append(this.body);
    }

    About.prototype.show = function() {
        this.body.show();
    };

    About.prototype.hide = function() {
        this.body.hide();
    };
    return About;
});