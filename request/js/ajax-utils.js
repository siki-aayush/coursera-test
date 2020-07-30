(function (global) {
    // set up a namespace for utility
    var ajaxUtils = {};

    // returns http request object
    function getRequestObject() {
        if (window.XMLHttpRequest) {
            return (new XMLHttpRequest);
        } else if (window.ActiveXObject) {
            return (new ActiveXObject);
        } else {
            global.alert('Ajax is not supported')
            return null;
        }
    }

    // makes an ajax get request 
    ajaxUtils.sendGetRequest = function (requestUrl, responseHandler, isJsonResponse) {
        var request = getRequestObject();
        request.onreadystatechange = function () {
            handleResponse(request, responseHandler, isJsonResponse);
        };
        request.open('GET', requestUrl, true);
        request.send(null);
    };

    // calls user provided response handler
    function handleResponse(request, responseHandler, isJsonResponse) {
        if ((request.readyState == 4) && (request.status == 200)) {
            if (isJsonResponse == undefined) {
                isJsonResponse = true;
            }

            if (isJsonResponse) {
                responseHandler(JSON.parse(request.responseText))
            } else {
                responseHandler(request.responseText)
            }
        }
    }

    // expose utility to the global object
    global.$ajaxUtils = ajaxUtils
})(window)