"use strict";(function () {    var app = angular.module('MyApp');    app.controller('BooksController', ['$scope', '$log', 'MyFactory', function ($scope, $log, MyFactory) {        $scope.addBook = function () {            if (angular.isDefined($scope.name)){                $scope.books.push({                    title: $scope.name,                    year: 'XXXX',                    price: 'XX'                });            } else {                alert('Error!');            }            $scope.name = '';        };        $scope.books = MyFactory.books;        /*console.log('Books', $log);*/        /*$scope.books = [            /*{title: "Книга 1", year: 1990, price: 100},            {title: "Книга 2", year: 1993, price: 10},            {title: "Книга 3", year: 2002, price: 56},            {title: "Книга 4", year: 1995, price: 78}        ];*/    }]);}());