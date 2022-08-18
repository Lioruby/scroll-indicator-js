## Scroll Indicator JS
A simple vanilla JS scroll indicator. No dependencies, best performances.


![ezgif-4-f043ff0fe8](https://user-images.githubusercontent.com/71385272/185468248-6180ec1f-6b0f-47a3-bbaf-b35ca1ac6cb2.gif)



## Get Started
With yarn

```sh
yarn add scroll-indicator-js
```
With npm
```sh
npm i scroll-indicator-js
```

To use it in your app

```javascript

// main.js
import scrollIndicator from 'scroll-indicator-js'


scrollIndicator() // Start the scroll indicator on all .scroll-indicator classes
```


## Usage
```html
<!-- On the top of your page -->
<div class="scroll-indicator" data-height="5px" data-position="bottom"></div>

<!-- ..... -->
```

datasets | Value | Default
----- | ----- | -------
height  | px | 3px
position  | top - bottom - left - right | top
color | hex/rgba/linear | linear-gradient(225deg,#ffb938 0%,#ff5729 100%)
reverse | true - false | false
