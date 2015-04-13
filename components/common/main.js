"use strict";
require.config({
    baseUrl: "components/",
    paths: {
        "jquery": "vendors/jquery/jquery-2.1.3",
        "bootstrap": "vendors/bootstrap/js/bootstrap",
        "angular": "vendors/angular/angular",
        "angular-route": "vendors/angular-ui-route/angular-ui-router",
        "angularAMD": 'vendors/angularAMD/angularAMD',
        "ui-bootstrap": "vendors/ui-bootstrap/ui-bootstrap-tpls-0.12.1"
    },
    shim: {
        "angular": ["jquery"],
        "angularAMD": ["angular"],
        "angular-route": ["angular"],
        "bootstrap": ["jquery"],
        "ui-bootstrap": ["angular", "bootstrap"]
    },
    deps: ["common/app"]
});