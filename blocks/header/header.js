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


        this.container = $(container);
        this.container.append($(yr.run("header", data)));
    }
    return Header;
});