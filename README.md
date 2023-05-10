## Intro

Starter Drupal 9 theme with components structure.

Two types of components - Drupal and static.
Drupal components are in the `templates` folder. Static components are in a separate `components` folder.

**All files related to a certain component are in the same folder.** Each component has its own library entry in `ffw_theme.libraries.yml`. The library is attached to the component either in the twig file with `{{ attach_library('ffw_theme/NAME') }}` or in the `ffw_theme.theme` file in a preprocess function with `$variables['#attached']['library'][] = 'ffw_theme/NAME';`.

Theme uses latest SASS version with its [modules system](https://sass-lang.com/blog/the-module-system-is-launched) allowing better optimization of CSS files per component.

## Getting Started

- Install the [Components](https://www.drupal.org/project/components) module
	-  `composer require drupal/components`
- Optional - Install [`twig_tweak`](https://www.drupal.org/project/twig_tweak) and [`twig_field_value`](https://www.drupal.org/project/twig_field_value) modules, very helpful with theme development


### Browser Support
Autoprefixer & Babel is set to support:
* Market share larger than .5%,
* Last 2 versions of modern browsers.
* "not dead"

These can be updated at any time within the `babel.config.json`.

### Run the following commands from the theme directory
If you haven't yet, install [nvm](https://github.com/creationix/nvm):

#### Use the right version of node with:
`nvm use`

_This command will look at your `.nvmrc` file and use the version node.js specified in it. This ensures all developers use the same version of node for consistency._


#### If that version of node isn't installed, install it with:
`nvm install`

#### Install npm dependencies with
`npm install`


_This command looks at `package.json` and installs all the npm dependencies specified in it - SASS, linters, svg-sprite, etc.



#### Lint files
`npm run lint` is the global lint script which runs all scripts below.

`lint:scss:components`
`lint:scss:theme`
`lint:js:components`
`lint:js:theme`
`lint:scss`
`lint:js`

#### Build CSS, JS files from source and create sprite
`npm run build`

_This will run `build:css:components, build:css:theme, build:js:components, build:js:theme, build:sprite` scripts and will generate the corresponding files._


#### Compiles Sass
`npm run build:css`
_This will perform a one-time Sass compilation in `templates` and `components` folders._


Separate scripts are available for components and theme components:
`build:css:components`
`build:css:theme`

#### Watch JS files
`npm run watch:js` - is the global watch script which runs all scripts below.

`watch:js:components`
`watch:js:theme`

_This is ideal when you are doing a lot of ES6 file changes and you want to make sure every time a change is saved it automatically gets compiled to JS._

#### Watch SCSS files
`npm run watch:scss`

_This is ideal when you are doing a lot of Sass changes and you want to make sure every time a change is saved it automatically gets compiled to CSS_

Separate scripts for are available for components and theme components:

`watch:scss:components`
`watch:scss:theme`

#### Cleans compiled files

`npm run clean:components`
`npm run clean:theme`
`npm run clean`

_This will perform a one-time deletion of CSS and JS compiled files within the `templates` and `components` directories._
