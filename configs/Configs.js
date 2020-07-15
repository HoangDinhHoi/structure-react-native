// import { LocaleConfig } from 'react-native-calendars'
var CONFIG = {};

// Địa chỉ server test
var domain = "http://10.0.0.18:8255/api/v1/me";
// var domain = "http://10.0.0.18:8177/api/v1/me";
CONFIG['domain'] = domain;

export default CONFIG;
exports.DOMAIN = domain;

export const TYPE_SYSTEM = "system";
export const TYPE_GOOGLE = "google";
export const TYPE_FACEBOOK = "facebook";


// LocaleConfig.locales['vi'] = {
//     monthNames: ['Tháng Một', 'Tháng Hai', 'Tháng Ba', 'Tháng Tư', 'Tháng Năm', 'Tháng Sáu', 'Tháng Bảy', 'Tháng Tám', 'Tháng Chín', 'Tháng Mười', 'Tháng Mười Một', 'Tháng Mười Hai'],
//     monthNamesShort: ['Th.1', 'Th.2', 'Th.3', 'Th.4', 'Th.5', 'Th.6', 'Th.7', 'Th.8', 'Th.9', 'Th.10', 'Th.11', 'Th.12'],
//     dayNames: ['Thứ 2', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy', 'Chủ Nhật'],
//     dayNamesShort: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'CN'],
//     today: "Hôm nay",
// };

// LocaleConfig.defaultLocale = 'vi';