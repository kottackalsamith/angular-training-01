System.config({
    baseURL: "/",
    defaultJSExtensions: true,
    paths: {
        // paths serve as alias
        'bower:*': 'bower_components/*'
    },
    map: {
        // our app is within the app folder
        app: 'script/app',
        // Angular Modules
        "angular": "bower:angular/angular.js",
        "angular-route": "bower:angular-route/angular-route.js"
    },
    packages: {
        app: {
            main: './app.js',
            defaultExtension: 'js'
        }
    },
    meta: {
        'angular': {
            format: 'global',
            exports: 'angular'
        },
        'angular-route': {
            "deps": [
                "angular"
            ]
        }
    }

});