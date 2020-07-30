$(function () { // same as document.addEventListener("DOMContentLoaded")
    // same as document.querySelector("#navbarToggle").addEventListener("blur")
    $("#navbarToggle").blur(function (event) {
        var screenWidth = window.innerWidth;
        (screenWidth < 768) && $("#collapsable-nav").collapse('hide')
    })
});

(function (global) {
    var dc = {}

    var homeHtml = "snippets/home-snippet.html";
    var dc = {}

    var insertHtml = function (selector, html) {
        document.querySelector(selector).innerHTML = html;
    };

    var showLoading = function (selector) {
        var htmlText = "<div class='text-center'>";
        htmlText += "<img id='loading' src='../images/ajax-loader.gif'></div>"
        insertHtml("#main-content", htmlText)
    }

    showLoading("#main-content");
    document.addEventListener("DOMContentLoaded", function () {
        $ajaxUtils.sendGetRequest(homeHtml, function (respText) {
            insertHtml("#main-content", respText);
        }, false)
    });

    global.$dc = dc;
})(window);