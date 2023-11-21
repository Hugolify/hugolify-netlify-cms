import { body } from '../fields/body.js'
import { description } from '../fields/description.js'
import { draft } from '../fields/draft.js'
import { featured_image } from '../fields/featured-image.js'
import { isNotIndex } from '../fields/is-not-index.js'
import { price_per_unit } from '../fields/price_per_unit.js'
import { services_categories } from '../fields/services_categories.js'
import { services_persons } from '../fields/services_persons.js'
import { title } from '../fields/title.js'
import { t } from '../i18n/translater.js'


const services = {
    name: 'services',
    label: t.content.services.label,
    label_singular: t.content.services.label_singular,
    folder: 'content/services',
    create: true,
    description: t.content.services.description,

    editor: { preview: false },
    i18n: true,

    nested: { depth: 2 },
    filter: { field: 'isIndex', value: false },
    
    slug: '{{slug}}',
    sortable_fields: ['title'],
    summary: '{{title}}',

    fields: [
        isNotIndex,
        draft,
        title,
        services_categories,
        services_persons,
        price_per_unit,
        description,
        body,
        featured_image
    ]
}

export default services