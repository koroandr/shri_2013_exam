/**
 * Created by koroandr on 12.10.13.
 */
define([
    "text!blocks/main/main.html",
    "blocks/header/header",
    "lib/radio",
    "text!blocks/main/main.css"
], function (html, Header, radio, css) {
    $('<style type="text/css"></style>')
        .html(css)
        .appendTo("head");


    function Main(container, data) {
        if (! (this instanceof Main)) {
            return new Main(container, data);
        }

        this.data = data;

        this.container = $(container);
        this.container.append(html);

        this.header = Header(this.container.find(".main__header"), data);
        this.content = this.container.find(".main__content");

        radio("show-member").subscribe(this.showMember.bind(this));
        radio("show-about").subscribe(this.showAbout.bind(this));
        radio("show-lecture").subscribe(this.showLecture.bind(this));
    }

    Main.prototype.showMember = function(id) {
        this.lect_sidebar && this.lect_sidebar.hide();
        this.lector && this.lector.hide();
        this.about && this.about.hide();

        //Если раздела нет, то подгружаем его отдельно.
        if (this.sidebar == null || this.detail == null) {
            var self = this;
            require(
                [
                    "blocks/sidebar/sidebar",
                    "blocks/detail/detail"
                ], function(Sidebar, Detail) {
                    var members = {
                        items: self.data.members
                    };
                    self.sidebar = Sidebar(self.content, members);
                    self.sidebar.setClickCallback(function(id){
                        radio("member-selected").broadcast(id);
                    });

                    self.detail = new Detail(self.content, self.data);

                    radio("show-member").broadcast(id);
                }
            );
            return;
        }

        this.sidebar.show();
        this.detail.show();

        this.sidebar.selectItem(id);

        this.header.showItem("member");
    };

    Main.prototype.showAbout = function() {
        this.lect_sidebar && this.lect_sidebar.hide();
        this.lector && this.lector.hide();
        this.sidebar && this.sidebar.hide();
        this.detail && this.detail.hide();

        if (this.about == null) {
            var self = this;
            require(
                [
                    "blocks/about/about"
                ], function(About) {
                    self.about = new About(self.content, self.data);
                    radio("show-about").broadcast();
                }
            )
            return;
        }

        this.about.show();

        this.header.showItem("about")
    };

    Main.prototype.showLecture = function(id) {
        this.about && this.about.hide();
        this.sidebar && this.sidebar.hide();
        this.detail && this.detail.hide();

        if (this.lect_sidebar == null || this.lector == null) {
            var self = this;
            require(
                [
                    "blocks/sidebar/sidebar",
                    "blocks/lector/lector"
                ], function(Sidebar, Lector) {
                    var lectors = {
                        items: self.data.lectors
                    }
                    self.lect_sidebar = new Sidebar(self.content, lectors);
                    self.lect_sidebar.setClickCallback(function(id){
                        radio("lecture-selected").broadcast(id);
                    });

                    self.lector = new Lector(self.content, self.data);

                    radio("show-lecture").broadcast(id);
                }
            )
            return;
        }

        this.lect_sidebar.show();
        this.lector.show();

        this.lect_sidebar.selectItem(id);

        this.header.showItem("lecture");
    }


    return Main;
});