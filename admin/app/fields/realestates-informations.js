import { sold } from './sold.js'
import { price } from './price.js'
import {t} from "../i18n/translater.js";

export const informations = {
    name: 'informations',
    label: t.fields.informations.label,
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: false,
    fields: [
        { name: 'year', label: t.fields.informations.fields.year, widget: 'datetime', required: false, date_format: "YYYY", time_format: false },
        { name: 'area', label: t.fields.informations.fields.area.label, hint: t.fields.informations.fields.area.hint, widget: 'number', required: false, min: 0 },
        { name: 'field', label: t.fields.informations.fields.field.label, hint: t.fields.informations.fields.field.hint, widget: 'number', required: false, min: 0 },
        { name: 'levels', label: t.fields.informations.fields.levels, widget: 'number', required: false, min: 0 },
        { name: 'floor', label: t.fields.informations.fields.floor, widget: 'number', required: false },
        { name: 'rooms', label: t.fields.informations.fields.rooms, widget: 'number', required: false, min: 0 },
        { name: 'bedrooms', label: t.fields.informations.fields.bedrooms, widget: 'number', required: false, min: 0 },
        { name: 'bathrooms', label: t.fields.informations.fields.bathrooms, widget: 'number', required: false, min: 0 },
        { name: 'showerrooms', label: t.fields.informations.fields.showerrooms, widget: 'number', required: false, min: 0 },
    ]
}