const AUTH_ERRORS = Object.freeze({
    INVALID_CREDENTIAL: {
        code: 500,
        message: 'User credentials are incorrect!!!'
    },
    NO_EMAIL: {
        code: 500,
        message: 'No Email Found!!!'
    },
    INVALID_DETAIL: {
        code: 500,
        message: 'Information is missing!!!'
    },
});
const ADS_ERRORS = Object.freeze();
const EXCEPTIONS = Object.freeze({
    SOME_ERROR: {
        code: 500,
        message: 'Some error occured!!!'
    },
});
const HTTP_STATUS_CODES = Object.freeze({
    SUCCESS: 200,
    INSERT: 201,
    ERROR: 500,
    NOT_FOUND: 404,
});
module.exports = {
    AUTH_ERRORS,
    ADS_ERRORS,
    EXCEPTIONS,
    HTTP_STATUS_CODES,
};