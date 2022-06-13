import React from 'react';
import IconPath from '../Icon';

function Input({
  onTyping,
  value,
  darkMode
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: darkMode ? "emoji-search emoji-dark-mode" : "emoji-search"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "17px",
    height: "17px",
    version: "1.1",
    x: "0px",
    y: "0px",
    viewBox: "0 0 487.95 487.95"
  }, /*#__PURE__*/React.createElement("path", {
    d: IconPath.search
  })), /*#__PURE__*/React.createElement("input", {
    value: value,
    onChange: onTyping,
    autoFocus: true,
    placeholder: "Search"
  }));
}

export default Input;