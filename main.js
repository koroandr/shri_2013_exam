/**
 * Created by koroandr on 12.10.13.
 */
require(
    [
        "data",
        "lib/jquery",
        "blocks/main/main",
        "lib/radio"
    ],
    function(data, $, Main, radio) {
        Main("body", data);

        radio("show-member").broadcast(1);
    }
);