/**
 * Created by abhishek on 12/4/15.
 */
define(["common/app"], function(app){
    app.directive("dummyDirective", function(){
        return {
            restrict: "A",
            link: function(){
                alert("hi");
            }
        }
    })
})