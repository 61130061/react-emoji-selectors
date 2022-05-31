# React Emoji Selector

Simple, ready to use, and Customable react emoji selector component for every react project.


## APIs

### onClose (default: none)
Use this attribute as a function to set useState variable to close the emoji selector.
- input function
- return nothing

### output (default: none)
Use to get selected emoji from selector.
You can pass function through this attribute as an example below.
- input function
- return string (emoji)

### closeAfterSelect (defalut: true)
The emoji selector will close after user select an emoji when this attribute is true otherwise nothing happen.
- input boolean

### clickOutsideToClose (defalut: true)
If this attribute set to true, onClose function will be called when user clicks outside the emoji selector.
- input boolean

### highlight (default: 'lightblue')
Change color of highlight color of emoji selector.
- input string (rgb or hex)

### darkMode (default: false)
Change to true, if you want it darker.
- input boolean


## TodoList
- [ ] Demo page
- [ ] Emoji name badge when hover
- [x] Category tab
- [x] Close button
- [ ] Recenly group
- [ ] Better search
- [ ] Mobile version
- [x] Light/Dark mode
- [ ] Selector position
- [ ] README.md guideline

