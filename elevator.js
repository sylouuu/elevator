var Elevator = (function () {
    this.current_floor = 0;

    this.highlight = function (old_floor, new_floor) {
        var buttons, i = 0;

        document.querySelector('.floor_'+ old_floor +' > td:first-child').style.background = 'transparent';
        buttons = document.querySelectorAll('.floor_action');

        for (i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
        }

        document.querySelector('.floor_'+ new_floor +' > td:first-child').style.background = 'yellow';
        buttons = document.querySelectorAll('.floor_'+ new_floor +' .floor_action');

        for (i = 0; i < buttons.length; i++) {
            buttons[i].disabled = false;
        }
    };

    this.getFloor = function () {
        return this.current_floor;
    };

    this.setFloor = function (floor) {
        var self = this;

        if (this.current_floor !== floor) {
            var delay = Math.abs((floor - this.current_floor) * 100);

            setTimeout(function () {
                self.highlight(self.current_floor, floor);
                self.current_floor = floor;
            }, delay);
        }
    };

    return this;
});
