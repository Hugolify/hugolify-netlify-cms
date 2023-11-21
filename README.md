**This is a old module, now get https://github.com/Hugolify/hugolify-decap-cms**

---

# Hugo Netlify CMS

## Table of contents

- [Settings](#settings)
- [Features](#features)
- [Extras features](#extras-features)
- [Screenshot](#screenshot)
- [Linked repository](#linked-repository)
- [Live demo](#live-demo)
- [Install](#install)
- [Documentations](#documentations)
- [License](#license)


## Settings
https://github.com/Hugolify/hugolify-netlify-cms/tree/main/admin/app/settings
- Available blocks
- Available collections
- Available languages
- Available sections
- media-library

## Features
- rubrics `create false`
- pages
- projects
  - types (projects taxonomy)
  - tags (projects taxonomy)
- posts
  - categories (posts taxonomy)
  - tags (posts taxonomy)
- persons
- config
  - menu `create false`
    - primary
    - secondary
    - legal
    - social
  - top banner
  - seo
 
## Extras features
- casestudies
- expertises
- place
- publications
  - categories (publications taxonomy)
- realestates
  - categories (realestates taxonomy)
- services
  - categories (services taxonomy)
  - persons (services taxonomy)

## Screenshot
![Home](https://user-images.githubusercontent.com/4457294/207929597-f0d02e09-d2ee-44ca-8c65-efad0293356b.png)

## Linked repository
* Template Hugolify : [Hugolify template](https://github.com/hugolify/hugolify-template)

## Live demo
- Front: https://demo.hugolify.com

## Install

### Modules
Edit `config/_default/module.yaml` to install the `hugolify-netlify-cms` module:
```yml
imports:
  - path: github.com/hugolify/hugolify-netlify-cms
```
### Submodules
Add this repository as a subdomain in your hugo project:
```
git submodule add git@github.com:hugolify/hugolify-netlify-cms static
```

## Documentations
https://github.com/hugolify/hugolify-template/wiki

## License
Hugolify is free for personal or commercial projects (MIT license)
