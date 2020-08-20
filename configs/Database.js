// ============================================================
// Author: HoiHD
// Created on July 27, 2020
// Description: Database for storage data of project as: user information, access_token and some measures to access them.
// ============================================================
import AsyncStorage from '@react-native-community/async-storage';
import PropTypes from 'prop-types';

const USER_KEY = '@USER_KEY';
const ACCESS_TOKEN = '@ACCESS_TOKEN';

var Database = {};

export const setAccessToken = async ({ value }) => {
    let accessToken = null;
    try {
        accessToken = await AsyncStorage.setItem(ACCESS_TOKEN, value);
    } catch (error) {
        console.log('setAccessToken: ', error);
    }
};

setAccessToken.propTypes = {
    value: PropTypes.string.isRequired,
};

export const getAccessToken = async () => {
    let accessToken = null;
    try {
        accessToken = await AsyncStorage.getItem(ACCESS_TOKEN);
    } catch (err) {
        console.log('getAccessToken: ', err);
    }
    return accessToken;
};

export const setUserLogin = async ({ value }) => {
    let user = null;
    try {
        const jsonValue = JSON.stringify(value);
        user = await AsyncStorage.setItem(USER_KEY, jsonValue);
    } catch (error) {
        console.log('setUserLogin: ', error);
    }
};

setUserLogin.propTypes = {
    value: PropTypes.string.isRequired,
};

export const getUserLogin = async () => {
    let user = null;
    try {
        user = await AsyncStorage.getItem(USER_KEY);
    } catch (error) {
        console.log('getUserLogin: ', error);
    }
    return JSON.parse(user);
};

export const removeUserLogin = async () => {
    await AsyncStorage.multiRemove([USER_KEY, ACCESS_TOKEN]);
};

Database['setAccessToken'] = setAccessToken;
Database['getAccessToken'] = getAccessToken;
Database['setUserLogin'] = setUserLogin;
Database['getUserLogin'] = getUserLogin;
Database['removeUserLogin'] = removeUserLogin;

export default Database;
