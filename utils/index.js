RegExp.quote = function (str) {
    return str.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
};
import { PermissionsAndroid } from 'react-native';
import moment from 'moment';
import PropTypes from 'prop-types';
import RNFetchBlob from 'rn-fetch-blob';

const { config, fs } = RNFetchBlob;
const PictureDir = fs.dirs.PictureDir;

export function downloadImage({ linkImage }) {
    /**
     * Dùng để download ảnh.
     */
    let newLink = linkImage.slice(0, linkImage.lastIndexOf('/'));
    let newImage = newLink.lastIndexOf('/');
    let newName = newLink.substring(newImage);

    let options = {
        fileCache: true,
        addAndroidDownloads: {
            useDownloadManager: true,
            notification: false,
            appendExt: 'png',
            path: PictureDir + "/tc_motor" + newName + "/" + Math.floor(new Date().getTime()),
            description: "Download image contact from TC Motor App."
        },
        IOSBackgroundTask: true,
    }

    return config(options).fetch('GET', linkImage).then(res => {
        return res;
    }).catch(err => {
        return err;
    })
}

downloadImage.propTypes = {
    linkImage: PropTypes.string.isRequired,
}

export async function hasAndroidPermission({ permission, title }) {
    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
        return true;
    }
    const status = await PermissionsAndroid.request(permission, title);
    return status === "granted";
}

var Utils = {};

export function num2numDong(num, currency, currencyLabel) {
    /**
     * Tự động phân cách 3 số sau dấu chấm
     */
    if (isNaN(num)) { num = 0; }
    let positive_num = Math.abs(num);
    let num_string = "";

    let cumulative_revenue = Array.from(parseFloat(positive_num).toFixed(0)).reverse();
    let beauti_cumulative_revenue = "";
    cumulative_revenue.forEach((number, index) => {
        beauti_cumulative_revenue += number;

        if (index && !((index + 1) % 3)) {
            beauti_cumulative_revenue += ".";
        }
    });
    beauti_cumulative_revenue = beauti_cumulative_revenue.replace(/[.]$/, "");
    num_string = Array.from(beauti_cumulative_revenue).reverse().join("");
    if (currency !== false) {
        num_string += currencyLabel ? (" " + currencyLabel) : " đ";
    }
    if ((num != 0) && num < 0) {
        return "-" + num_string;
    }
    return num_string;
}

num2numDong.propTypes = {
    num: PropTypes.number.isRequired,
    currency: PropTypes.bool,
    currencyLabel: PropTypes.string,
}

export function onchangeNumber(text) {
    /**
     * Tự động phân cách khi nhập giá trị. dùng kết hợp với hàm bên trên(num2numDong)
     */
    text = text.substr(0, 1000000);
    if (text.length > 1) {
        if (text.startsWith("0")) {
            text = text.replace(/^0{1,}/, "");
        }
        text = text.replace(new RegExp(/[.]/gi), "");
    }
    if (text == "") { text = "0" }

    return text;

}

export function convertFloatToTimeString(floatTime) {
    /**
     * chuyển đổi dạng số sang dạng HH:mm (thời gian)
     */
    if (typeof (floatTime) == "number") {
        if (floatTime < 0) { floatTime = 0 }
        let minute = Math.floor((floatTime - Math.floor(floatTime)) * 60);
        let timeNotFormatted = Math.floor(floatTime).toString() + ":" + minute.toString();
        let timeFormatted = moment(timeNotFormatted, "HH:mm").format("HH:mm");
        return timeFormatted;
    }
    return floatTime;
};

export function convertTimeStringToFloat(timeString) {
    /**
     * Chuyển đổi dạng string sang dạng số.
     */
    if (typeof (timeString) == "string") {
        let timeArray = timeString.split(":");
        let hour = Number(timeArray[0]);
        let minute = Number(timeArray[1]) / 60;
        return (hour + minute);
    }
    return timeString;
};

Utils["num2numDong"] = num2numDong;
Utils["onchangeNumber"] = onchangeNumber;
Utils["convertFloatToTimeString"] = convertFloatToTimeString;
Utils["convertTimeStringToFloat"] = convertTimeStringToFloat;
export default Utils;