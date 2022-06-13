import React, { useState, useEffect, useRef } from 'react';
import './emoji.css';
import EmojiGroup from './data/emoji-group-data';
import EmojiList from './data/emoji-list-data';
import { useOnClickOutside } from './Core';
import Input from './components/Input';
import Footer from './components/Footer';

function EmojiSelector({
  onClose,
  output,
  darkMode = false,
  highlight = "lightblue",
  closeAfterSelect = true,
  clickOutsideToClose = true,
  alignRight = false,
  backgroundColor = "",
  cornerRadius = "10px",
  recently = true,
  recentlyData = null,
  clearRecently
}) {
  const [search, setSearch] = useState('');
  const [recentlyLocal, setRecentlyLocal] = useState([]);
  const pickerRef = useRef(null);
  const scrollRef = useRef(null);
  const arStyle = alignRight ? {
    right: '0'
  } : {
    left: '0'
  };
  useOnClickOutside(clickOutsideToClose, pickerRef, onClose);
  useEffect(() => {
    pickerRef.current.parentElement.style.position = 'relative';

    if (recently && !recentlyData) {
      const items = JSON.parse(localStorage.getItem('react-emoji-selectors'));

      if (items) {
        setRecentlyLocal(items);
      } else {
        setRecentlyLocal([]);
      }
    }
  }, []);

  const handleOutput = data => {
    if (closeAfterSelect) {
      output(data);
      onClose();
    } else {
      output(data);
    } // update recently data


    if (recently && !recentlyData) {
      const newArr = [...recentlyLocal];

      if (!newArr.includes(data)) {
        newArr.splice(0, 0, data);
      } else {
        newArr.splice(newArr.indexOf(data), 1);
        newArr.splice(0, 0, data);
      }

      if (newArr.length > 14) {
        newArr.splice(newArr.length - 1, 1);
      }

      setRecentlyLocal(newArr);
      localStorage.setItem('react-emoji-selectors', JSON.stringify(newArr));
    }
  };

  const handleClearRecently = () => {
    if (clearRecently) {
      clearRecently();
    } else {
      setRecentlyLocal([]);
      localStorage.setItem('react-emoji-selectors', JSON.stringify([]));
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    style: { ...{
        borderRadius: cornerRadius
      },
      ...{
        backgroundColor: backgroundColor
      },
      ...arStyle
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
  }, search == '' ? /*#__PURE__*/React.createElement(React.Fragment, null, recently && recentlyData ? /*#__PURE__*/React.createElement(React.Fragment, null, recentlyData.length > 0 && /*#__PURE__*/React.createElement("div", {
    id: "emoji-recently",
    className: "emoji-group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "emoji-recently-title"
  }, /*#__PURE__*/React.createElement("div", null, "Recently"), /*#__PURE__*/React.createElement("div", {
    onClick: handleClearRecently
  }, "Clear")), /*#__PURE__*/React.createElement("div", {
    className: "emoji-grid"
  }, recentlyData.map((data, index) => /*#__PURE__*/React.createElement("div", {
    onClick: () => handleOutput(data),
    key: index,
    onMouseEnter: e => e.target.style.backgroundColor = highlight,
    onMouseLeave: e => e.target.style.backgroundColor = "transparent"
  }, data))))) : /*#__PURE__*/React.createElement(React.Fragment, null, recentlyLocal.length > 0 && /*#__PURE__*/React.createElement("div", {
    id: "emoji-recently",
    className: "emoji-group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "emoji-recently-title"
  }, /*#__PURE__*/React.createElement("div", null, "Recently"), /*#__PURE__*/React.createElement("div", {
    onClick: handleClearRecently
  }, "Clear")), /*#__PURE__*/React.createElement("div", {
    className: "emoji-grid"
  }, recentlyLocal.map((data, index) => /*#__PURE__*/React.createElement("div", {
    onClick: () => handleOutput(data),
    key: index,
    onMouseEnter: e => e.target.style.backgroundColor = highlight,
    onMouseLeave: e => e.target.style.backgroundColor = "transparent"
  }, data))))), Object.keys(EmojiGroup).map((key, index) => /*#__PURE__*/React.createElement("div", {
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
  }, data.emoji)))))) : /*#__PURE__*/React.createElement("div", {
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