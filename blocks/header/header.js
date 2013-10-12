/**
 * Created by koroandr on 12.10.13.
 */
define([
    "lib/radio"
],function (radio) {
    function Header(container, data) {
        if (!(this instanceof Header)) {
            return new Header(container, data);
        }


        this.container = $(container);
        this.body = $(yr.run("header", data));
        this.container.append(this.body);
        this.menu = this.container.find(".header__menu");
        this.body.find(".header__menu-link").click(function(){
            radio($(this).data("link") + "-selected").broadcast();
        });
    }

    Header.prototype.showItem = function(link) {
        this.menu.find(".selected").removeClass("selected");
        this.menu.find('[data-link="' + link + '"]').addClass("selected");
    };

    Header.prototype.show = function() {
        this.body.show();
    };

    Header.prototype.hide = function() {
        this.body.hide();
    }
    return Header;
});