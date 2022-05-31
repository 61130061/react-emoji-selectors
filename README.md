# Unicode Emoji Selector React

Simple, ready to use, and Customable react emoji picker component for every react project.


## Feature
- Emoji random picker
- Return emoji
- Callback function
- Theme customable including Light/Dark mode
- Responsive container


## APIs

### onClose (default: none)
Use this attribute as a function to set useState variable to close the emoji picker.
- input function
- return nothing

### setOutput (default: none)
Use to get selected emoji from selector.
You can pass function through this attribute as an example below.
- input function
- return string (emoji)

### closeAfterSelect (defalut: true)
The emoji picker will close after user select an emoji when this attribute is true otherwise nothing happen.
- input boolean
- return nothing

### clickOutsideToClose (defalut: true)
If this attribute set to true, onClose function will be called when user clicks outside the emoji picker.
- input boolean
- return nothing


## TodoList
- [ ] Emoji name badge when hover
- [x] Category tab
- [x] Close button
- [ ] Recenly group
- [ ] Better search
- [ ] Mobile version
- [ ] Light/Dark mode

