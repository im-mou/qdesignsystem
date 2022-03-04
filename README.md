<p align="center" style="margin:60px">
    <!-- <img src="https://github.com/im-mou/qDesign/blob/master/resources/js/static/images/logo-xl-hollow.png" alt="qDesign Design System" width="500"/> -->
    <img src=".github/assets/qdesign-logo.png" alt="qDesign Design System" width="350"/>
</p>

<p align="center" style="margin:60px">
    CSS and Javascript Library based on <a href="https://material-ui.com/">Material-ui</a>
</p>

<hr />

## Overview

qDesign is a CSS library that provides a minimal setup of
styles for a fast and clean starting point. This library can
either be used as a React components library or it can be
used in plain good 'ol HTML by importing the precompiled
javascript and CSS files.

In case of opting for the use of React components, all the components work in isolation just like Material-ui. For further information and reference you can checkout [Material-ui documentation](https://material-ui.com/) which offers a very complete and in-depth resources about the components used in qDesign.

## Installation

As mentiotined before, qDesign can be used in HTML with CSS and javascript files or as React Components.

### Dependencies

Apart from downloading qdesign css file, you will need to install the following libraries.

```bash
npm install @material-ui/core
npm install @material-ui/icons
npm install @material-ui/lab
```

### qDesign as Git Submodule

To have more design customization flexibility in your laravel app you can add qDesign repository as a submodule and use the source \*.sass file in laravel mix to compile it with you app bundle.

### Setup qDesign into laravel project

```bash
cd laravel_app/resources/

git submodule add https://github.com/im-mou/qDesign
git submodule init
git submodule update
```

## Theme configuration

If you decide to use qDesign in a react project make sure to add our custom theme rules to your root/App compoenent
Filename: resources/js/App.js

```jsx
import React from 'react';
import Qdesign from './qDesign';
...

// Usage in react main component
export default function App(props) {
    return (
        <Qdesign>
            ...
        </Qdesign>
    );
}
```

### Import styles in HTML

In order to use qDesign in HTML you must first download source files and include the following lines into your HTML document.

```html
<!-- Include qDesign css file in the <head> of your html document -->
<link rel="stylesheet" href="qdesign.min.css" />
```

### Use SASS in Laravel app

Alternatively, if you decide to use .sass source files in your app yoou can use the following code.

app.sass

```scss
// laravel_app/resources/sass/app.sass

// qDesign Design System Library
@import '../qDesign/sass/qdesign';

// Your app sass entry file
@import './my_app/main';
```

webpack.mix.js

```javascript
// laravel_app/webpack.mix.js

// example code
mix.sass('resources/sass/app.sass', 'public/css');
```

# Styles Customization and Compilation

To complile your own overrides you have 3 compilation options, by default the complied css files will be stored in ./dist/ folder

```bash
# Full compilation (*.css, *.min.css)
npm run compile

# Compressed compilation (*.min.css)
npm run compressed

# Un-Compressed compilation (*.css)
npm run uncompressed
```

## What's included

Project structure (comming soon)

```txt
qdesign/
├── src/
├── dist/
│   ├── qdesign.css
│   └── qdesign.min.css
├── components/
├── sass/
│   ├── qdesign.sass
│   ├── _Button.sass
│   ├── _Checkbox.sass
│   ├── _Color.sass
│   ├── _Fonts.sass
│   ├── _Input.sass
│   ├── _Labels.sass
│   ├── _Lists.sass
│   ├── _Menu.sass
│   ├── _Navegation.sass
│   ├── _Radio.sass
│   ├── _Switch.sass
│   ├── _Typography.sass
│   └── _Table.sass
├── Theme.js
├── compile.js
├── index.js
├── package.json
└── readme.md
```
