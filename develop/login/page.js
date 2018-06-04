
require.config({
    paths: config.getPaths(1)
})

define(function (require) {
     
    var tj = require('tj'); 
 
    tj.addLoadEvent(function () {

        var savepsw = document.getElementById('savepsw');

        tj.addHandler(savepsw, 'click', function () {

            tj.toggleClass(savepsw, 'active');

        })

        var btn = document.getElementById('btn');

        tj.addHandler(btn, 'click', function () {

            window.document.location.href = 'index.html';

        })

    })

})
