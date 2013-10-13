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
        radio("add-member").broadcast();
    };

    AddMember.prototype.show = function() {
        this.body.show();
    };

    AddMember.prototype.hide = function() {
        this.body.hide();
    };

    return AddMember;
});