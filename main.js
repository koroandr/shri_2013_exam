/**
 * Created by koroandr on 12.10.13.
 */
require(
    [
        "data",
        "lib/jquery",
        "blocks/main/main"
    ],
    function(data, $, Main) {
        Main("body", data);
    }
);