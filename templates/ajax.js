function ajax_get(url, callback) {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.log('responseText:' + xmlhttp.responseText);
            try {
                var data = JSON.parse(xmlhttp.responseText);
            } catch(err) {
                console.log(err.message + " in " + xmlhttp.responseText);
                return;
            }
            callback(data);
        }
    };
 
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
 
ajax_get('payoutSummary.json', function(data) {
    var pName = document.getElementById('propName').value;
    var pName = document.getElementById('propAddress').value;
    
    // document.getElementById("total_transaction").innerHTML = data["total_transaction"];
    // document.getElementById("payment_done_partner").innerHTML = data["payment_done_partner"];
    // document.getElementById("payment_done_bukitvista").innerHTML = data["payment_done_bukitvista"];

    var source   = document.getElementById('text-template').innerHTML;
    var template = Handlebars.compile(source);
    var html    = template(data);
 
    document.getElementById("result").innerHTML = html;

});
