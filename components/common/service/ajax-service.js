/**
 * Created by abhishek on 12/4/15.
 */
define(["common/app"], function(app){
    app.service("ajaxService", function(){
        this.log = function(){
            console.log("service");
        };

    });
})