function send_click_event(host, ad_name, csrf_token) {
    var formdata = new FormData();
    formdata.append("csrfmiddlewaretoken", csrf_token);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://'+host+'/api/click/'+ad_name, true);
    xhr.responseType = 'json';
    xhr.onload = function(e) {
    }
    xhr.send(formdata);
}

function block(host, csrf_token) {
    $('.adsense').click(function() {
        $('.adsense').css("display", "none");
        send_click_event(host, "adsense", csrf_token);
    });
    $('.adfit').click(function() {
        $('.adfit').css("display", "none");
        send_click_event(host, "adfit", csrf_token);
    });
}

function getExtensionOfFilename(filename) {
    return filename.substring(filename.lastIndexOf('.')+1);
}
