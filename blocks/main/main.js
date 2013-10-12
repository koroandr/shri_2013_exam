/**
 * Created by koroandr on 12.10.13.
 */
define([
    "text!blocks/main/main.html",
    "blocks/header/header",
    "blocks/sidebar/sidebar",
    "blocks/detail/detail"
], function (html, Header, Sidebar, Detail) {
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
        Sidebar(content, members);
        Detail(content, data);
    }

    return Main;
});