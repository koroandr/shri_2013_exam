/**
 * Created by koroandr on 12.10.13.
 */

define([
],function() {
    function Detail(container, data) {
        if(!(this instanceof Detail)) {
            return new Detail(container, data);
        }

        this.container = $(container);
        this.container.append($(yr.run("detail", data)));
    }

    return Detail;
});