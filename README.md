##  create a custom cartridge
1.	Make optional step of here: https://shoshkey.atlassian.net/wiki/spaces/SE/pages/4128769/Start+a+basic+SFRA+project, create a custom cartridge
2.	Créate a folder: sfcc-example-site


3.	Inside running the next comand sgmf-scripts --createCartridge app_custom_example

4.	Make sure that have this structure: app_custom_example->cartridge->cliente->default
5.	In you package Json add this lines e install: "dependencies": {
    "bootstrap": "^4.4.1",
    "flag-icon-css": "^3.4.5"
  },
6.	In the package.json paths key write the relative path of  app_storefront_base cartridge in your project: "paths": {
    "base": "../storefront-reference-architecture/cartridges/app_storefront_base"
