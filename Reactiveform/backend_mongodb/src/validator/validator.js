const mongoose = require('mongoose')

const isValidField = function (value) {
    if (typeof value === 'undefined' || value === null) return false;
    if (typeof value === 'string' && value.trim().length === 0) return false;
    return true
}

const isValidFieldNumber = function(value){
    if (typeof value === 'undefined' || value === null) return false;
    if (typeof value === 'string' ) return false;
    return true
}

const isValidRequestBody = function (requestBody) {
    return Object.keys(requestBody).length > 0
}

const isValidMobile = function (mobile) {
    return (/^[6-9]{1}[0-9]{9}$/.test(mobile.trim()))
}

const isValidEmail = function (email) {
    return (/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email.trim()))
}


module.exports = { isValidField, isValidRequestBody, isValidFieldNumber ,isValidMobile,  isValidEmail }