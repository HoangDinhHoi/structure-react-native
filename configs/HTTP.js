/**
 * Author: HoiHD 
 * Created on June 03, 2020
 * Description: 
 *  - Dùng để lấy dữ liệu từ DOMAIN được cấu hình trong CONFIG
 *  - Hiện tại có các phương thức: post, get. Ngoài ra sẽ phát triển thêm các phương thức khác trong tương lai.
 */
import { domain as DOMAIN } from './Config';
import axios from 'axios';

var HTTP = {};

const client = axios.create({
    baseURL: DOMAIN,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    timeout: 8000,
});

function post(url, options, success, failure) {
    client
        .post(url, options['body'])
        .then(
            res => {
                if (
                    res.data['error'] != undefined &&
                    res.data['error']['message'] != undefined
                ) {
                    failure(res.data['error']['message']);
                } else {
                    success(res.data);
                }
            },
            err => {
                console.log('err root', err.message);
                failure(err.message);
            },
        )
        .catch(err => {
            failure(err.message);
        });
}

function get(url, options, success, failure) {
    client
        .get(url, {
            params: options['body'],
        })
        .then(res => {
            console.log('res', res);
            success(res);
        })
        .catch(err => {
            console.log('error', err, ' - ', err.code, ' - ', err.message);
            failure(err);
        });
}

function call(method, url, options, isjson, success, failure) {
    if (!url.match(/https?:\/\//)) {
        url = DOMAIN + url;
    }

    if (method.toLowerCase() == 'get') {
        get(url, options, success, failure);
    }

    if (method.toLowerCase() == 'post') {
        post(url, options, success, failure);
    }

    let request = fetch(url, options);

    if (isjson) {
        request = request.then(res => res.json());
    }

    request.then(success).catch(failure);
}



HTTP['post'] = post;
HTTP['get'] = get;
HTTP['call'] = call;

export default HTTP;