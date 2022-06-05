import React, { useRef, useState, useEffect } from 'react';
import EmojiGroup from './data/emoji-group-data';
import EmojiList from './data/emoji-list-data';
import Category from './components/Category';

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

function EmojiSelectorMobile({
  onClose,
  output,
  darkMode = false,
  currentSelect = '',
  closeAfterSelect = true,
  clickOutsideToClose = true,
  highlight = 'lightblue'
}) {
  const scrollRef = useRef(null);
  const pickerRef = useRef(null);
  const [search, setSearch] = useState('');
  useOnClickOutside(clickOutsideToClose, pickerRef, onClose);

  const handleOutput = data => {
    if (closeAfterSelect) {
      output(data);
      onClose();
    } else {
      output(data);
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    className: darkMode ? "emoji-mobile-picker emoji-mobile-dark" : "emoji-mobile-picker"
  }, /*#__PURE__*/React.createElement("div", {
    ref: pickerRef
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null, "Emoji Selector"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: highlight
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", null, "Close"))), /*#__PURE__*/React.createElement(Category, {
    darkMode: darkMode,
    pickerRef: pickerRef,
    scrollRef: scrollRef
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
    value: search,
    onChange: e => setSearch(e.target.value),
    type: "text",
    placeholder: "Search"
  })), /*#__PURE__*/React.createElement("div", {
    ref: scrollRef
  }, search == '' ? Object.keys(EmojiGroup).map((key, index) => /*#__PURE__*/React.createElement("div", {
    id: key,
    key: key,
    className: "emoji-group"
  }, /*#__PURE__*/React.createElement("div", null, key), /*#__PURE__*/React.createElement("div", {
    className: "emoji-grid"
  }, EmojiGroup[key].map((data, index) => /*#__PURE__*/React.createElement("div", {
    style: currentSelect !== '' && currentSelect == data.emoji ? {
      border: '1px solid ' + highlight
    } : {},
    onClick: () => handleOutput(data.emoji),
    key: index
  }, data.emoji))))) : /*#__PURE__*/React.createElement("div", {
    className: "emoji-grid"
  }, Object.keys(EmojiList).filter(key => {
    if (EmojiList[key].name.includes(search.toLowerCase())) {
      return key;
    }
  }).map((key, index) => /*#__PURE__*/React.createElement("div", {
    style: currentSelect !== '' && currentSelect == key ? {
      border: '1px solid ' + highlight
    } : {},
    onClick: () => handleOutput(key),
    key: key
  }, key))))));
}

export default EmojiSelectorMobile;