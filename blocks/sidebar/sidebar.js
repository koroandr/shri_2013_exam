/**
 * Created by koroandr on 12.10.13.
 */

define(
    [
    ],
    function() {
        function Sidebar(container, data) {
            if (!(this instanceof Sidebar)) {
                return new Sidebar(container, data)
            }

            this.container = $(container);

            this.body = $(yr.run("sidebar", data));

            this.container.append(this.body);


            var self = this;
            this.body.find(".sidebar__item").click(function(){
                if (self.clickCallback) {
                    self.clickCallback($(this).data("id"));
                }
            });

            this.filter_input = $(this.body.find(".sidebar__filter-input"));

            this.filter_input.keyup(this.filter.bind(this));
        }
        Sidebar.prototype.selectItem = function(id) {
            this.body.find(".selected").removeClass("selected");
            var selected = this.body.find('[data-id = "' + id + '"]');
            selected.addClass("selected");

        };

        Sidebar.prototype.setClickCallback = function(callback) {
            if (typeof callback != "function") {
                console.error("Trying to add not a function callback", callback);
                return;
            }
            this.clickCallback = callback;
        };

        Sidebar.prototype.show = function() {
            this.body.show();
        };

        Sidebar.prototype.hide = function() {
            this.body.hide();
            this.filter_input.val("");
            this.filter();
        };

        Sidebar.prototype.filter = function() {
            var matchName = function(input, text) {
                input = input.toLowerCase();
                text = text.toLowerCase();
                if (text.indexOf(input) == 0) {
                    return true;
                }
                var strings = text.split(" ");
                for (var i = strings.length - 1; i >= 0; i--) {
                    if (strings[i].indexOf(input) == 0) {
                        return true;
                    }
                }
                return false;
            };

            var text = this.filter_input.val();

            if (text.trim() == "") {
                this.body.find(".sidebar__item").show();
            } else {
                var items = this.body.find(".sidebar__item");
                for (var i = items.length - 1; i >= 0; i--) {
                    var item = items[i];
                    if (matchName(text, $($(item).find(".sidebar__name")).text())) {
                        $(item).show();
                    } else {
                        $(item).hide();
                    }
                }
            }


        };


        return Sidebar;
});