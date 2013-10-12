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
        }

        return Sidebar;
});