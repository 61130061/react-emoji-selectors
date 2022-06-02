import React, { useState, useEffect, useRef } from 'react';
import './emoji.css';
import EmojiGroup from './data/emoji-group-data';
import EmojiList from './data/emoji-list-data';
import Input from './components/Input';
import Footer from './components/Footer';

function useOnClickOutside(active, ref, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target) && active) {
        callback();
      }
    } // Bind the event listener


    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

function EmojiSelector({
  onClose,
  output,
  darkMode = false,
  highlight = "lightblue",
  closeAfterSelect = true,
  clickOutsideToClose = true,
  alignRight = false,
  backgroundColor = ""
}) {
  const [search, setSearch] = useState('');
  const pickerRef = useRef(null);
  const scrollRef = useRef(null);
  useOnClickOutside(clickOutsideToClose, pickerRef, onClose);
  useEffect(() => {
    pickerRef.current.parentElement.style.position = 'relative';
  }, []);

  const handleOutput = data => {
    if (closeAfterSelect) {
      output(data);
      onClose();
    } else {
      output(data);
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    style: alignRight ? {
      right: "0"
    } : {
      left: "0"
    },
    style: {
      backgroundColor: backgroundColor
    },
    ref: pickerRef,
    className: darkMode ? "emoji-picker emoji-dark-mode" : "emoji-picker"
  }, /*#__PURE__*/React.createElement("div", {
    ref: scrollRef,
    className: "emoji-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "top-bar"
  }, /*#__PURE__*/React.createElement(Input, {
    onTyping: e => setSearch(e.target.value),
    value: search,
    darkMode: darkMode
  }), /*#__PURE__*/React.createElement("div", {
    onClick: onClose
  }, "Close")), /*#__PURE__*/React.createElement("div", {
    className: "emoji-body"
  }, search == '' ? Object.keys(EmojiGroup).map((key, index) => /*#__PURE__*/React.createElement("div", {
    id: key,
    key: key,
    className: "emoji-group"
  }, /*#__PURE__*/React.createElement("div", null, key), /*#__PURE__*/React.createElement("div", {
    className: "emoji-grid"
  }, EmojiGroup[key].map((data, index) => /*#__PURE__*/React.createElement("div", {
    onClick: () => handleOutput(data.emoji),
    key: index,
    onMouseEnter: e => e.target.style.backgroundColor = highlight,
    onMouseLeave: e => e.target.style.backgroundColor = "transparent"
  }, data.emoji))))) : /*#__PURE__*/React.createElement("div", {
    className: "emoji-grid"
  }, Object.keys(EmojiList).filter(key => {
    if (EmojiList[key].name.includes(search.toLowerCase())) {
      return key;
    }
  }).map((key, index) => /*#__PURE__*/React.createElement("div", {
    onClick: () => handleOutput(key),
    key: key,
    onMouseEnter: e => e.target.style.backgroundColor = highlight,
    onMouseLeave: e => e.target.style.backgroundColor = "transparent"
  }, key))))), /*#__PURE__*/React.createElement(Footer, {
    scrollRef: scrollRef,
    highlight: highlight,
    darkMode: darkMode
  }));
}

export default EmojiSelector;