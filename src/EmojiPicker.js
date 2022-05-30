import { useState } from 'react';
import './emoji.css';

import EmojiGroup from './data/emoji-group-data';
import EmojiList from './data/emoji-list-data';
import Input from './components/Input';

function EmojiPicker () {
   const [search, setSearch] = useState('');

   return (
      <div>
         <div className="emoji-input">Input</div>

         <div className="emoji-picker">
            <div className="container">
               <div className="top-bar">
                  <Input onTyping={(e) => setSearch(e.target.value)} value={search} />
                  <div>
                     random
                  </div>
               </div>
               <div className="emoji-body">
                  {search == '' ? 
                     Object.keys(EmojiGroup).map((key, index) =>
                     <div key={key} className="emoji-group">
                        <div>{key}</div>
                        <div className="emoji-grid">
                           {EmojiGroup[key].map((data, index) =>
                           <div key={index}>{data.emoji}</div>
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
                           <div key={key}>{key}</div>
                        )}
                     </div>
                  }
               </div>
            </div>
            <div className="footer">
               Emoji Footer
            </div>
         </div>
      </div>
   )
}

export default EmojiPicker;
