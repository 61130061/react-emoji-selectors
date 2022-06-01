# React Emoji Selectors

Simple, ready to use, and customable react emoji selector component for every react project.

<p float="left">
   <img src="doc/light_mode.png" width="300" />
   <img src="doc/dark_mode.png" width="300" /> 
</p>

## 📒 Guideline 

### Install 💾
```sh
yarn add react-emoji-selectors
```

### Usage 📠
To use `EmojiSelector`, we recommend you to wrap your triggle element and `EmojiSelector` under the same tag as an example below.
This is just a simple example of EmojiSelector.
You can customize it by using component props from [next section](#emojiselector-props).

```js
import React, { useState } from 'react';
import { EmojiSelector } from 'react-emoji-selectors';

function App () {
   const [output, setOutput] = useState('🦁');
   const [showSelector, setShowSelector] = useState(true);

   return (
      <div className="App">
         <div>

            <div onClick={() => setShowSelector(true)}>
               Click {data}!
            </div>

            {showEmoji &&
               <EmojiSelector 
                  onClose={() => setShowSelector(false)} 
                  output={setOutput} 
               />
            }

         </div>
      </div>
   )
}
```


## 🐼 EmojiSelector Props

### onClose (default: none)
Use this attribute as a function to set useState variable to close the emoji selector.
- input `function`
- return nothing

### output (default: none)
Use to get selected emoji from selector.
You can pass function through this attribute as an example below.
- input `function`
- return string (emoji)

### closeAfterSelect (default: true)
The emoji selector will close after user select an emoji when this attribute is true otherwise nothing happen.
- input `boolean`

### clickOutsideToClose (default: true)
If this attribute set to true, onClose function will be called when user clicks outside the emoji selector.
- input `boolean`

### highlight (default: 'lightblue')
Change color of highlight color of emoji selector.
- input `string (rgb or hex)`

### darkMode (default: false)
Change to true, if you want it darker.
- input `boolean`


## 📝 TodoList
- [ ] Demo page
- [ ] Emoji name badge when hover
- [x] Category tab
- [x] Close button
- [ ] Recenly group
- [ ] Better search
- [ ] Mobile version
- [x] Light/Dark mode
- [x] Selector position
- [x] README.md guideline

## Contributing
I'm a newbiew developer so feel free to pull requiests or log issues.

