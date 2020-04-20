const en = require('./en');
const _get = require('lodash/get');
const ro = require('./ro');
const it = require('./it');

const languages = {
  en: en,
  'ro': ro,
  'it': it
};

function format(message, args) {
  if (!message) {
    return null;
  }

  return message.replace(/{(\d+)}/g, function (
    match,
    number,
  ) {
    return typeof args[number] != 'undefined'
      ? args[number]
      : match;
  });
}

const i18nExists = (languageCode, key) => {
  const message = _get(languages[languageCode], key);
  return !!message;
};

const i18n = (languageCode, key, ...args) => {
  const message = _get(languages[languageCode], key);

  if (!message) {
    return key;
  }

  return format(message, args);
};

exports.i18n = i18n;
exports.i18nExists = i18nExists;
