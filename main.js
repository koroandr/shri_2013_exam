/**
 * Created by koroandr on 12.10.13.
 */
require(
    [
        "lib/jquery",
        "blocks/main/main",
        "lib/radio",
        "app/router"
    ],
    function($, Main, radio, router) {

        function init(data) {
            Main("body", data);
            router.init();
        }

        var data;
        if (typeof window.localStorage != 'undefined') {
            data = JSON.parse(localStorage.getItem("data"));
        }

        if (!data || data == "null") {
            require(["data"], function(data){
                if (typeof window.localStorage != 'undefined') {
                    localStorage.setItem("data", JSON.stringify(data));
                }
                init(data);
            });
        } else {
            init(data);
        }


    }
);