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

export function EmojiSelector ({ 
   onClose, 
   output, 
   darkMode=false,
   highlight="lightblue", 
   closeAfterSelect=true, 
   clickOutsideToClose=true,
   alignRight=false
}) {

   const [search, setSearch] = useState('');

   const pickerRef = useRef(null);
   const scrollRef = useRef(null);

   useOnClickOutside(clickOutsideToClose, pickerRef, onClose);

   useEffect(() => {
      pickerRef.current.parentElement.style.position = 'relative';
   },[]);

   const handleOutput = (data) => {
      if (closeAfterSelect) {
         output(data);
         onClose();
      } else {
         output(data);
      }
   }

   return (
      <div 
         style={alignRight ? {right: "0"} : {left: "0"} }
         ref={pickerRef} 
         className={darkMode ? "emoji-picker emoji-dark-mode" : "emoji-picker"}
      >
         <div ref={scrollRef} className="emoji-container">
            <div className="top-bar">
               <Input onTyping={(e) => setSearch(e.target.value)} value={search} darkMode={darkMode} />
               <div onClick={onClose}>Close</div>
            </div>
            <div className="emoji-body">
               {search == '' ? 
                  Object.keys(EmojiGroup).map((key, index) =>
                  <div id={key} key={key} className="emoji-group">
                     <div>{key}</div>
                     <div className="emoji-grid">
                        {EmojiGroup[key].map((data, index) =>
                        <div 
                           onClick={() => handleOutput(data.emoji)} 
                           key={index}
                           onMouseEnter={(e) => e.target.style.backgroundColor = highlight}
                           onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
                        >
                           {data.emoji}
                        </div>
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
                        <div 
                           onClick={() => handleOutput(key)} 
                           key={key}
                           onMouseEnter={(e) => e.target.style.backgroundColor = highlight}
                           onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
                        >
                           {key}
                        </div>
                     )}
                  </div>
               }
            </div>
         </div>
         <Footer scrollRef={scrollRef} highlight={highlight} darkMode={darkMode} />
      </div>
   )
}
