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

            this.container.append(yr.run("sidebar", data));

            this.sidebar = this.container.find(".sidebar");
        }
        Sidebar.prototype.selectItem = function(id) {
            this.sidebar.find(".selected").removeClass("selected");
            var selected = this.sidebar.find('[data-id = "' + id + '"]');
            selected.addClass("selected");

        };

        return Sidebar;
});