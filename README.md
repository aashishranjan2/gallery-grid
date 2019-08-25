# gallery-grid
Angular 7 and TypeScript

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

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


## Application Structure
AppComponent
|
 --> ImageGridComponent
        
 Image Service
 ImageList Model

## Application Features
    Its an application that renders list of images with its details. There are 10000 images to be displayed. If the api returns only 20 images and copy it 500 times to make it 10000. This application multiplies total number of images to make it 10000. Spinner is attached to until business logic performs multiplication of images and renders it.
