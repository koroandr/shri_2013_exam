/**
 * Created by koroandr on 13.10.13.
 */

define([
    "lib/radio",
    "text!blocks/lector/lector.css"
],function(radio, css){
    $('<style type="text/css"></style>')
        .html(css)
        .appendTo("head");

    function Lectors(container, data) {
        this.container = $(container);

        this.body = $(yr.run("lector", data));

        this.container.append(this.body);
        this.lectors = data.lectors;

        radio("show-lecture").subscribe(this.showLector.bind(this));
    }

    Lectors.prototype.show = function() {
        this.body.show();
    };

    Lectors.prototype.hide = function() {
        this.body.hide();
    };

    Lectors.prototype.showLector = function(lector_id) {
        var lector;
        for (var i = 0; i < this.lectors.length; i++) {
            if (this.lectors[i].id == lector_id) {
                lector = this.lectors[i];
                break;
            }
        }
        this.body.html(yr.run("lector", {data: lector}));
    };

    return Lectors;
});