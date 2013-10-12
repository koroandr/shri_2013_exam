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


        var lectors = data.lectures.lectors;
        lectors = lectors.map(function(l){l.shri2013 = []; return l});
        var getById = function(id) {
            for (var i = 0; i < lectors.length; i++) {
                if (lectors[i].id == id) {
                    return lectors[i];
                }
            }
        }
        for (var i = 0; i < data.lectures.lectures.length; i++) {
            getById(data.lectures.lectures[i].lector_id).shri2013.push(data.lectures.lectures[i]);
        }

        window.lect = lectors;

    }
);