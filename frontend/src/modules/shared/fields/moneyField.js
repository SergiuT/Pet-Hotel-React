import DecimalField from "./decimalField";
import moneyFormatter from "view/shared/moneyFormatter";

export default class MoneyField extends DecimalField {
    forView(value) {
        if (!value) {
            return value;
        }

        return moneyFormatter(value);
    }
}   