/**
 * Created by koroandr on 13.10.13.
 */
define([
    "lib/radio"
],
function (radio) {


    function init() {
        var anchor = location.hash;
        var route = anchor.split("_");
        switch (route[0]) {
            case "#member":
                radio("show-member").broadcast(route[1]);
                break;
            case "#lecture":
                radio("show-lecture").broadcast(route[1]);
                break;
            case "#about":
                radio("show-about").broadcast();
                break;
            default:
//                location.href = "";
                radio("show-about").broadcast();
        }
    }

    radio("member-selected").subscribe(function(member_id){
        history.pushState(null, null, "#member_" + member_id);
        radio("show-member").broadcast(member_id);
    });

    radio("lecture-selected").subscribe(function(lecture_id) {
        history.pushState(null, null, "#lecture" + lecture_id);
        radio("show-lecture").broadcast(lecture_id);
    });

    radio("about-selected").subscribe(function() {
        history.pushState(null, null, "#about");
        radio("show-about").broadcast();
    });

    window.addEventListener('popstate', function(event) {
        init();
    });

    return {
        init: init
    };
});