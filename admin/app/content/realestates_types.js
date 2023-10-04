import { isNotIndex } from '../fields/is-not-index.js'
import { title } from '../fields/title.js'
import {t} from "../i18n/translater.js";

const realestates_types = {
    name: 'realestates_types',
    folder: 'content/realestates_types',
    label: t.content.realestates_types.label,
    label_singular: t.content.realestates_types.label_singular,
    description: t.content.realestates_types.description,
    
    create: true,
    editor: { preview: false },
    i18n: true,

    slug: '{{slug}}',
    path: '{{slug}}/_index',

    nested: { depth: 2 },
    filter: { field: 'isIndex', value: false },

    fields: [
        isNotIndex,
        title
    ]

}

export default realestates_types