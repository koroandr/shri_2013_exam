/**
 * Created by koroandr on 12.10.13.
 */

define([
    "lib/radio"
],function(radio) {
    function Detail(container, data) {
        if(!(this instanceof Detail)) {
            return new Detail(container, data);
        }

        this.container = $(container);
        this.body =$(yr.run("detail", data));
        this.container.append(this.body);
        this.members = data.members;

        this.detail = this.container.find(".detail");

        radio("show-member").subscribe(this.showMember.bind(this));
    }

    Detail.prototype.showMember = function(member_id) {
        var member;
        for (var i = 0; i < this.members.length; i++) {
            if (this.members[i].id == member_id) {
                member = this.members[i];
                break;
            }
        }

        member.paragraphs = member.about.split("\n");
        this.detail.html(yr.run("detail", {data: member}));
        var about = this.body.find(".detail__about");
        about.hide();
        var image = this.body.find(".detail__photo");


        image.load(function(){
            if (about.height() + image.height() > 300) {
                about.height(500 - image.height() - 60);
            }
            about.show();
        });


    };

    Detail.prototype.show = function() {
        this.body.show();
    };

    Detail.prototype.hide = function() {
        this.body.hide();
    }

    return Detail;
});