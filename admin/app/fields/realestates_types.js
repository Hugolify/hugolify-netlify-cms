import {t} from "../i18n/translater.js";

export const realestates_types = {
    name: 'realestates_types',
    label: t.fields.realestates_types,
    widget: 'relation',
    collection: 'realestates_types',
    search_fields: ['title'],
    value_field: 'title',
    display_fields: ['title'],
    multiple: false,
    required: false,
    i18n: 'duplicate'
}