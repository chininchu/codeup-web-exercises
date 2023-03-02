(function() {
    "use strict";


    // create a circle object
    let circle = {
        radius: 5,
        pi: Math.PI,

        getArea: function () {
            // TODO: complete this method
            let Area = this.pi * this.radius^2
            return Area;
        },
        logInfo: function (doRounding) {
            // TODO: complete this method.
            if (doRounding) {
                return Math.round(this.getArea());
            }
            else{
                console.log("Area of a circle with radius: " + this.radius + ", is: ");
            }


            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
