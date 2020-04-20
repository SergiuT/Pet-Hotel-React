import { getLanguage } from '../../i18n/index';


export default function (amount) {
    const options = {
        style: 'currency',
        currency: getLanguage().currency,
        minimumFractionDigits: 2
    }

    const formatter = new Intl.NumberFormat(getLanguage().currencyLocale, options);

    return formatter.format(amount);
}