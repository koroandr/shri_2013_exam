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
        this.container.append($(yr.run("detail", data)));
        this.members = data.members;

        this.detail = this.container.find(".detail");

        radio("show-member").subscribe(this.showMember.bind(this));
    }

    Detail.prototype.showMember = function(member_id) {
        var member;
        for (var i = 0; i < this.members.length; i++) {
            if (this.members[i].id === member_id) {
                member = this.members[i];
                break;
            }
        }
        this.detail.html(yr.run("detail", {data: member}));
    };

    return Detail;
});