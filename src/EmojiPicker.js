import { useState, useEffect, useRef } from 'react';
import './emoji.css';

import EmojiGroup from './data/emoji-group-data';
import EmojiList from './data/emoji-list-data';

import Input from './components/Input';
import Footer from './components/Footer';

function useOnClickOutside (active, ref, callback) {
   useEffect(() => {
      function handleClickOutside(event) {
         if (ref.current && !ref.current.contains(event.target) && active) {
               callback();
         }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
         // Unbind the event listener on clean up
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, [ref]);
}

function EmojiPicker ({ onClose, setOutput, closeAfterSelect=true, clickOutsideToClose=true }) {
   const [search, setSearch] = useState('');

   const pickerRef = useRef(null);

   useOnClickOutside(clickOutsideToClose, pickerRef, onClose);

   const ScrollTo = (key) => {
      document.getElementById(key).scrollIntoView();
   }

   const handleOutput = (output) => {
      if (closeAfterSelect) {
         setOutput(output);
         onClose();
      } else {
         setOutput(output);
      }
   }

   return (
      <div ref={pickerRef} className="emoji-picker">
         <div className="container">
            <div className="top-bar">
               <Input onTyping={(e) => setSearch(e.target.value)} value={search} />
               <div onClick={onClose}>close</div>
            </div>
            <div className="emoji-body">
               {search == '' ? 
                     Object.keys(EmojiGroup).map((key, index) =>
                     <div id={key} key={key} className="emoji-group">
                        <div>{key}</div>
                        <div className="emoji-grid">
                           {EmojiGroup[key].map((data, index) =>
                           <div onClick={() => handleOutput(data.emoji)} key={index}>{data.emoji}</div>
                           )}
                        </div>
                     </div>
                     ):
                     <div className="emoji-grid">
                        {Object.keys(EmojiList).filter(key => {
                           if (EmojiList[key].name.includes(search.toLowerCase())) {
                              return key
                           }
                        }).map((key, index) => 
                           <div onClick={() => handleOutput(key)} key={key}>{key}</div>
                        )}
                     </div>
               }
            </div>
         </div>
         <Footer ScrollTo={ScrollTo} />
      </div>
   )
}

export default EmojiPicker;
