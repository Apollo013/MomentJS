var app = angular.module('app', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.

    when('/dateformats', {
        templateUrl: 'views/dateformats.html',
        controller: 'dateformatsController'
    }).

    when('/relativetimes', {
        templateUrl: 'views/relativetimes.html',
        controller: 'relativetimesController'
    }).

    when('/calendartimes', {
        templateUrl: 'views/calendartimes.html',
        controller: 'calendartimesController'
    }).

    when('/localetimes', {
        templateUrl: 'views/localetimes.html',
        controller: 'localetimesController'
    }).

    when('/validatedates', {
        templateUrl: 'views/validatedates.html',
        controller: 'validatedatesController'
    }).

    when('/humanize', {
        templateUrl: 'views/humanize.html',
        controller: 'humanizeController'
    }).

    when('/twitter', {
        templateUrl: 'views/twitter.html',
        controller: 'twitterController'
    }).

    when('/preciserange', {
        templateUrl: 'views/preciserange.html',
        controller: 'preciseController'
    }).            

    otherwise({
        redirectTo: '/dateformats'
    });

}])

.controller('dateformatsController', ['$scope', '$rootScope', '$interval', function ($scope, $rootScope, $interval) {

    $rootScope.Title = 'MomentJS - Date Formats';

    $scope.momentNow1 = moment();
    $scope.momentNow2 = moment().format();
    $scope.momentNow3 = moment().format('MMMM Do YYYY, h:mm:ss a');   
    $scope.momentNow4 = moment().format('dddd');
    $scope.momentNow5 = moment().format('MMMM');
    $scope.momentNow6 = moment().format('YYYY');
    $scope.momentNow7 = moment().format('MM Do YY');


    var showCurrentDateAndTimeInSeconds = $interval(function(){
        $scope.momentNow1 = moment();
        $scope.momentNow2 = moment().format();
        $scope.momentNow3 = moment().format('MMMM Do YYYY, h:mm:ss a');
    }, 1000);

}])

.controller('relativetimesController', ['$scope', '$rootScope', '$interval', function ($scope, $rootScope, $interval) {

    $rootScope.Title = 'MomentJS - Relative Times';

    $scope.momentRel1 = moment('20111031', 'YYYYMMDD').fromNow();
    $scope.momentRel2 = moment('20120621', 'YYYYMMDD').fromNow();
    $scope.momentRel3 = moment().startOf('day').fromNow();
    $scope.momentRel4 = moment().startOf('hour').fromNow();
    $scope.momentRel5 = moment().endOf('hour').fromNow();


    var showTimeFromNow = $interval(function () {
        $scope.momentRel4 = moment().startOf('hour').fromNow();
        $scope.momentRel5 = moment().endOf('hour').fromNow();
    }, 60000);

}])

.controller('calendartimesController', ['$scope', '$rootScope', '$interval', function ($scope, $rootScope, $interval) {

    $rootScope.Title = 'MomentJS - Calendar Times';

    $scope.momentCal1 = moment().calendar();

    $scope.momentCal2 = moment().subtract(10, 'days').calendar();
    $scope.momentCal3 = moment().subtract(6, 'days').calendar();
    $scope.momentCal4 = moment().subtract(1, 'days').calendar();

    $scope.momentCal5 = moment().add(1, 'days').calendar();
    $scope.momentCal6 = moment().add(6, 'days').calendar();
    $scope.momentCal7 = moment().add(10, 'days').calendar();


    var showTimeFromNow = $interval(function () {
        $scope.momentCal1 = moment().calendar();
        $scope.momentCal3 = moment().subtract(6, 'days').calendar();
        $scope.momentCal4 = moment().subtract(1, 'days').calendar();
        $scope.momentCal5 = moment().add(1, 'days').calendar();
        $scope.momentCal6 = moment().add(6, 'days').calendar();
    }, 60000);

}])

.controller('localetimesController', ['$scope', '$rootScope', '$interval', function ($scope, $rootScope, $interval) {

    $rootScope.Title = 'MomentJS - Locale Dates';

    var refreshTimes = function () {
        $scope.momentLoc1 = moment().format('L');
        $scope.momentLoc2 = moment().format('l');
        $scope.momentLoc3 = moment().format('LL');
        $scope.momentLoc4 = moment().format('ll');
        $scope.momentLoc5 = moment().format('LLL');
        $scope.momentLoc6 = moment().format('lll');
        $scope.momentLoc7 = moment().format('LLLL');
        $scope.momentLoc8 = moment().format('llll');
    };

    refreshTimes();

    var showTimeFromNow = $interval(function () {
        $scope.momentLoc5 = moment().format('LLL');
        $scope.momentLoc6 = moment().format('lll');
        $scope.momentLoc7 = moment().format('LLLL');
        $scope.momentLoc8 = moment().format('llll');
    }, 60000);

    $scope.changeLocale = function (localName) {
        moment.locale(localName);
        refreshTimes();
    };

}])

.controller('validatedatesController', ['$scope', '$rootScope', function ($scope, $rootScope) {

    $rootScope.Title = 'MomentJS - Validation';

    $scope.date1 = '21/06/2015';
    var Date1 = moment($scope.date1, 'D/M/YYYY');
    $scope.date1msg = Date1.format('MMMM D, YYYY');

    $scope.date2 = '1/14/2014';
    var Date2 = moment($scope.date2, 'D/M/YYYY');
    $scope.date2msg = Date2.format('MMMM D, YYYY'); // will throw error here


    $scope.date1_isvalid_msg = moment($scope.date1, 'YYYY-MM-DD').isValid();
    $scope.date2_isvalid_msg = moment($scope.date2, 'YYYY-MM-DD').isValid();
}])

.controller('humanizeController', ['$scope', '$rootScope', function ($scope, $rootScope) {

    $rootScope.Title = 'MomentJS - Humanized Times';

    $scope.momentHum1 = moment.duration(1, "minutes").humanize();
    $scope.momentHum2 = moment.duration(2, "minutes").humanize();
    $scope.momentHum3 = moment.duration(24, "hours").humanize();
    $scope.momentHum4 = moment.duration(7, "days").humanize();
    $scope.momentHum5 = moment.duration(1, "minutes").humanize(true);
    $scope.momentHum6 = moment.duration(-1, "minutes").humanize(true);

}])

.controller('twitterController', ['$scope', '$rootScope', function ($scope, $rootScope) {

    $rootScope.Title = 'MomentJS - Twitter Times Plugin';

    $scope.momentTwi1 = moment().subtract(5, 'hours').twitterLong();
    $scope.momentTwi2 = moment().subtract(5, 'minutes').twitterLong();
    $scope.momentTwi3 = moment().subtract(5, 'seconds').twitterLong();
    $scope.momentTwi4 = moment().subtract(1, 'hours').twitterLong();
    $scope.momentTwi5 = moment().subtract(5, 'hours').twitterShort();
    $scope.momentTwi6 = moment().subtract(3, 'days').twitterShort();

}])

.controller('preciseController', ['$scope', '$rootScope', function ($scope, $rootScope) {

    $rootScope.Title = 'MomentJS - Precise Range Plugin';

    $scope.momentPre1 = moment("2014-01-01 12:00:00").preciseDiff("2015-03-04 16:05:06");
    $scope.momentPre2 = moment.preciseDiff("2014-01-01 12:00:00", "2014-04-20 12:00:00");

}])

;


