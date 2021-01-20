# 發布流程

1. npm i -g angular-cli-ghpages
2. ng build --prod --base-href https://user.e7school.com/
3. ngh ngx --dir=dist/e7client/

```a.
會看到這個
🚀 Uploading via git, please wait...
🌟 Successfully published via angular-cli-ghpages! Have a nice day!
```

1. 到Github Setting(<https://github.com/5987dogking/e7client/settings>)
2. Custom domain=>user.e7school.com

## E7client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
