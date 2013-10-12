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
        }


        return Sidebar;
});