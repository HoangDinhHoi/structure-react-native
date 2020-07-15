/**
 * Author: HoiHD 
 * Created on June 03, 2020
 * Description: 
 *  - Dùng để lấy dữ liệu từ DOMAIN được cấu hình trong CONFIG
 *  - Hiện tại có các phương thức: post, get. Ngoài ra sẽ phát triển thêm các phương thức khác trong tương lai.
 */
import CONFIG from './Config';

var HTTP = {};
var DOMAIN = CONFIG['domain'];

function post(url, options, success, failure) {
    if (!url.match(/https?:\/\//)) {
        url = DOMAIN + url;
    };

    options['method'] = "POST";

    var isContentTypeInHeader = false;
    if (options['headers']) {
        Object.keys(options['headers']).forEach(key => {
            if (key.match(new RegExp("content-type", "i"))) {
                isContentTypeInHeader = true;
            };
        });
    };

    if (!options['headers'] | !isContentTypeInHeader) {
        options['headers'] = {};
        options['headers']['Content-Type'] = "application/json";
    };

    let request = fetch(url, options);

    request.then(res => res.json()).then(success).catch(failure);
};

function get(url, options, success, failure) {
    if (!url.match(/https?:\/\//)) {
        url = DOMAIN + url;
    };

    options['method'] = "GET";

    var isContentTypeInHeader = false;
    if (options['headers']) {
        Object.keys(options['headers']).forEach(key => {
            if (key.match(new RegExp('Content-Type', 'i'))) {
                isContentTypeInHeader = true;
            };
        });
    };

    if (!options['headers'] | !isContentTypeInHeader) {
        options['headers'] = {};
        options['headers']['Content-Type'] = "application/json";
    };

    let request = fetch(url, options);

    request.then(res => res.json()).then(success).catch(failure);
};

function call(method, url, options, isjson, success, failure) {
    if (!url.match(/https?:\/\//)) {
        url = DOMAIN + url;
    };

    if (method.toLowerCase() == "get") {
        get(url, options, success, failure);
    }

    if (method.toLowerCase() == "post") {
        post(url, options, success, failure);
    }

    let request = fetch(url, options);

    if (isjson) {
        request = request.then(res => res.json());
    };

    request.then(success).catch(failure);
};


HTTP['post'] = post;
HTTP['get'] = get;
HTTP['call'] = call;

export default HTTP;