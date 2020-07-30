document.addEventListener("DOMContentLoaded", function (event) {
    // unostrusive event binding

    //  json request
    document.querySelector("button").addEventListener("click", function () {
        // Call server to get name
        $ajaxUtils.sendGetRequest("data/name.json", function (resp) {
            var message = resp.first + ' ' + resp.second;
            if (resp.likesToEat) {
                message += ' likes to eat'
            } else {
                message += ' does not like to eat'
            }

            document.querySelector("#json-content").innerHTML = "<h2> Json message -> " + message + "</h2>"
        }, true)
    })


    // simple text request
    document.querySelector("button").addEventListener("click", function () {
        // Call server to get name
        $ajaxUtils.sendGetRequest("data/test.txt", function (resp) {
            var message = resp;
            document.querySelector("#normal-content").innerHTML = "<h2> Text message -> " + message + "</h2>";
        }, false);
    });

});