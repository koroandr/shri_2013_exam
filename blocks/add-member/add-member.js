/**
 * Created by koroandr on 14.10.13.
 */
define([
    "text!blocks/add-member/add-member.html",
    "text!blocks/add-member/add-member.css",
    "lib/radio"
], function (html, css, radio) {
    $('<style type="text/css"></style>')
        .html(css)
        .appendTo("head");

    function AddMember(container, data) {
        this.data = data;
        this.container = $(container);

        this.body = $(html);

        this.container.append(this.body);

        this.body.find(".add-member__add").click(this.doAdd.bind(this));

        this.body.find(".add-member__cancel").click(function(){
            radio("add-member").broadcast();
        });
    }

    AddMember.prototype.doAdd = function() {
        var last_id = this.data.members[this.data.members.length - 1].id;

        var new_member = {
            id: last_id + 1
        };

        var inputs = this.body.find("input");

        for (var i = inputs.length - 1; i >= 0; i--) {
            var input = $(inputs[i]);
            new_member[input.attr("name")] = input.val();
        }

        console.log(new_member);

        this.data.members.push(new_member);

        if (localStorage) {
            localStorage.setItem("data", JSON.stringify(this.data));
        }

        radio("add-member").broadcast(new_member.id);
    };

    AddMember.prototype.show = function() {
        this.body.show();
    };

    AddMember.prototype.hide = function() {
        this.body.find("input").val("");
        this.body.hide();
    };

    return AddMember;
});