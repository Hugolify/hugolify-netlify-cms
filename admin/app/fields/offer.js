import { sold } from './sold.js'
import { price } from './price.js'
import {t} from "../i18n/translater.js";

export const offer = {
    name: 'offer',
    label: t.fields.offer,
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: false,
    fields: [
        sold,
        price
    ]
}