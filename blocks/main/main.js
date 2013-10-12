/**
 * Created by koroandr on 12.10.13.
 */
define([
    "text!blocks/main/main.html",
    "blocks/header/header",
    "blocks/sidebar/sidebar",
    "blocks/detail/detail",
    "lib/radio"
], function (html, Header, Sidebar, Detail, radio) {
    function Main(container, data) {
        if (! (this instanceof Main)) {
            return new Main(container, data);
        }

        this.container = $(container);
        this.container.append(html);

        Header(this.container.find(".main__header"), data);
        var content = this.container.find(".main__content");

        var members = {
            items: data.members
        };
        this.sidebar = Sidebar(content, members);
        this.sidebar.setClickCallback(function(id){
            radio("member-selected").broadcast(id);
        });

        Detail(content, data);

        radio("show-member").subscribe(this.showMember.bind(this));
    }

    Main.prototype.showMember = function(id) {
        this.sidebar.selectItem(id);
    };

    return Main;
});