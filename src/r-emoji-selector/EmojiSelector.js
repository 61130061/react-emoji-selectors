import React, { useState, useEffect, useRef } from 'react';
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


function EmojiSelector ({ 
   onClose, 
   output, 
   darkMode=false,
   highlight="lightblue", 
   closeAfterSelect=true, 
   clickOutsideToClose=true,
   alignRight=false,
   backgroundColor="",
   cornerRadius="10px",
   recently=true,
   recentlyData=null,
   clearRecently,
}) {
   const [search, setSearch] = useState('');
   const [recentlyLocal, setRecentlyLocal] = useState([]);

   const pickerRef = useRef(null);
   const scrollRef = useRef(null);

   const arStyle = alignRight ? {right: '0'} : {left: '0'};

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
   },[]);

   const handleOutput = (data) => {
      if (closeAfterSelect) {
         output(data);
         onClose();
      } else {
         output(data);
      }
      // update recently data
      if (recently && !recentlyData) {
         const newArr = [...recentlyLocal];
         if (!newArr.includes(data)) {
            newArr.splice(0, 0, data);
         } else {
            newArr.splice(newArr.indexOf(data), 1);
            newArr.splice(0, 0, data);
         }
         if (newArr.length > 14) {
            newArr.splice(newArr.length-1, 1);
         }
         setRecentlyLocal(newArr);
         localStorage.setItem('react-emoji-selectors', JSON.stringify(newArr));
      }
   }

   return (
      <div 
         style={{ 
            ...{borderRadius: cornerRadius}, 
            ...{backgroundColor: backgroundColor}, 
            ...arStyle 
         }}
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
                  <>
                     {recently && recentlyData ?
                        <>
                           {recentlyData.length > 0 &&
                           <div id="emoji-recently" className="emoji-group">
                              <div>Recently</div>
                              <div className="emoji-grid">
                                 {recentlyData.map((data, index) => 
                                 <div 
                                    onClick={() => handleOutput(data)} 
                                    key={index}
                                    onMouseEnter={(e) => e.target.style.backgroundColor = highlight}
                                    onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
                                 >
                                    {data}
                                 </div>
                                 )}
                              </div>
                           </div>
                           }
                        </>:
                        <>
                           {recentlyLocal.length > 0 &&
                           <div id="emoji-recently" className="emoji-group">
                              <div>Recently</div>
                              <div className="emoji-grid">
                                 {recentlyLocal.map((data, index) => 
                                 <div 
                                    onClick={() => handleOutput(data)} 
                                    key={index}
                                    onMouseEnter={(e) => e.target.style.backgroundColor = highlight}
                                    onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
                                 >
                                    {data}
                                 </div>
                                 )}
                              </div>
                           </div>
                           }
                        </>                     
                     }
                     {Object.keys(EmojiGroup).map((key, index) =>
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
                     )}
                  </>:
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

export default EmojiSelector;

