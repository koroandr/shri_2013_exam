/**
 * Created by koroandr on 12.10.13.
 */
define([
    "text!blocks/main/main.html",
    "blocks/header/header",
    "blocks/sidebar/sidebar",
    "blocks/detail/detail",
    "blocks/about/about",
    "blocks/lector/lector",
    "lib/radio"
], function (html, Header, Sidebar, Detail, About, Lector, radio) {
    function Main(container, data) {
        if (! (this instanceof Main)) {
            return new Main(container, data);
        }

        this.container = $(container);
        this.container.append(html);

        this.header = Header(this.container.find(".main__header"), data);
        var content = this.container.find(".main__content");

        var members = {
            items: data.members
        };

        this.about = new About(content, data);

        this.sidebar = Sidebar(content, members);
        this.sidebar.setClickCallback(function(id){
            radio("member-selected").broadcast(id);
        });

        this.detail = new Detail(content, data);

        var lectors = {
            items: data.lectors
        }
        this.lect_sidebar = new Sidebar(content, lectors);

        this.lector = new Lector(content, lectors.items[0]);

        radio("show-member").subscribe(this.showMember.bind(this));
        radio("show-about").subscribe(this.showAbout.bind(this));
        radio("show-lecture").subscribe(this.showLecture.bind(this));
    }

    Main.prototype.showMember = function(id) {
        this.lect_sidebar.hide();
        this.lector.hide();
        this.about.hide();
        this.sidebar.show();
        this.detail.show();
        this.sidebar.selectItem(id);

        this.header.showItem("member");
    };

    Main.prototype.showAbout = function() {
        this.lect_sidebar.hide();
        this.lector.hide();
        this.sidebar.hide();
        this.detail.hide();
        this.about.show();

        this.header.showItem("about")
    };

    Main.prototype.showLecture = function(id) {
        this.about.hide();
        this.sidebar.hide();
        this.detail.hide();

        this.lect_sidebar.show();
        this.lector.show();

        this.header.showItem("lecture");
    }


    return Main;
});