/**
 * Created by koroandr on 12.10.13.
 */
define([
//    "lib/jquery"
],function () {
    function Header(container, data) {
        if (!(this instanceof Header)) {
            return new Header(container, data);
        }
        var menu = {
            items: data.menu
        };

        this.container = $(container);
        this.container.append($(yr.run("header", menu)));
    }
    return Header;
});