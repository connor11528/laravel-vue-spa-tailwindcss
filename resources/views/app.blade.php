<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="description" content="Find tech jobs and companies in the Bay Area.">
        <meta name="keywords" content="Talent acquisition, job hunting, startups, San Francisco Bay Area, Silicon Valley">
        <meta name="author" content="Connor Leech">


        <title>Employbl SPA</title>


        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700" rel="stylesheet">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css">
        <link rel="stylesheet" href="/css/app.css">
    </head>
    <body>

        <div id="app" class="leading-normal tracking-normal text-white gradient">
            <router-view></router-view>
        </div>

        <script src="/js/app.js"></script>
    </body>

</html>
