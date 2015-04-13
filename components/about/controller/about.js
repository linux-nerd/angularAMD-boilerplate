/**
 * Created by abhishek on 12/4/15.
 */
define([
    'common/app',
    "common/service/ajax-service",
    "common/directive/dummyDirective"
    ],
    function(app, ajaxService){
        "use strict";

        app.controller('aboutController', ["ajaxService", function(ajaxService){
            ajaxService.log();
            this.say = "about";
        }]);
    }
);