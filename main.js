/**
 * Created by koroandr on 12.10.13.
 */
require(
    [
        "data",
        "lib/jquery",
        "blocks/main/main",
        "lib/radio",
        "app/router"
    ],
    function(data, $, Main, radio, router) {
        Main("body", data);
        router.init();
    }
);