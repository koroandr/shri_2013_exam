/**
 * Created by koroandr on 13.10.13.
 */

define(function(){
    function Lectors(container, data) {
        this.container = $(container);

        this.body = $(yr.run("lector", data));

        this.container.append(this.body);
    }

    Lectors.prototype.show = function() {
        this.body.show();
    };

    Lectors.prototype.hide = function() {
        this.body.hide();
    };

    return Lectors;
});