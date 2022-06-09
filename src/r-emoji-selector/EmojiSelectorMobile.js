import React, { useRef, useState, useEffect } from 'react';

import EmojiGroup from './data/emoji-group-data';
import EmojiList from './data/emoji-list-data';

import Category from './components/Category';

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

function EmojiSelectorMobile ({ 
   onClose, 
   output, 
   darkMode=false,
   currentSelect='',
   closeAfterSelect=true,
   clickOutsideToClose=true,
   highlight='lightblue',
   recently=true,
   recentlyData=null,
   clearRecently,
}) {

   const scrollRef = useRef(null);
   const pickerRef = useRef(null);
   const [search, setSearch] = useState('');
   const [recentlyLocal, setRecentlyLocal] = useState([]);

   useOnClickOutside(clickOutsideToClose, pickerRef, onClose);

   useEffect(() => {
      if (recently && !recentlyData) {
         const items = JSON.parse(localStorage.getItem('react-emoji-selectors'));
         if (items) {
            setRecentlyLocal(items);
         } else {
            setRecentlyLocal([]);
         }
      }
   }, []);

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

   const handleClearRecently = () => {
      if (clearRecently) {
         clearRecently()
      } else {
         setRecentlyLocal([]);
         localStorage.setItem('react-emoji-selectors', JSON.stringify([]));
      }
   }

   return (
      <div className={darkMode ? "emoji-mobile-picker emoji-mobile-dark" : "emoji-mobile-picker"}>
         <div ref={pickerRef}>
            <div>
               <div></div>
               <div>Emoji Selector</div>
               <div style={{color: highlight}} onClick={onClose}><div>Close</div></div>
            </div>
            <Category highlight={highlight} darkMode={darkMode} pickerRef={pickerRef} scrollRef={scrollRef} />
            <div>
               <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search" />
            </div>
            <div ref={scrollRef}>
               {search == '' ? 
                  <>
                     {recently && recentlyData ?
                        <>
                           {recentlyData.length > 0 &&
                           <div id="emoji-recently" className="emoji-group">
                              <div className="emoji-recently-title">
                                 <div>Recently</div>
                                 <div onClick={handleClearRecently}>Clear</div>
                              </div>
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
                                 <div className="emoji-recently-title">
                                    <div>Recently</div>
                                    <div onClick={handleClearRecently}>Clear</div>
                                 </div>
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
                              style={currentSelect !== '' && currentSelect == data.emoji ? {border: '1px solid '+highlight} : {}}
                              onClick={() => handleOutput(data.emoji)} 
                              key={index}
                           >
                              {data.emoji}
                           </div>
                           )}
                        </div>
                     </div>
                     )}
                  </>
                  :
                  <div className="emoji-grid">
                     {Object.keys(EmojiList).filter(key => {
                        if (EmojiList[key].name.includes(search.toLowerCase())) {
                           return key
                        }
                     }).map((key, index) => 
                        <div 
                           style={currentSelect !== '' && currentSelect == key ? {border: '1px solid '+highlight} : {}}
                           onClick={() => handleOutput(key)} 
                           key={key}
                        >
                           {key}
                        </div>
                     )}
                  </div>
               }
            </div>
         </div>
      </div>
   )
}

export default EmojiSelectorMobile;
