import { useState } from 'react';

import EmojiPicker from './EmojiPicker';

function App() {
   const [showEmoji, setShowEmoji] = useState(true);
   const [data, setData] = useState('🦁');

   const [cas, setCas] = useState(true);
   const [cotc, setCotc] = useState(true);
   const [dark, setDark] = useState(false);
   const [highlight, setHighlight] = useState('lightblue');

   return (
      <div className="App">
         <h1>React Emoji Selector</h1>
         <div className="container">
            <div>
               <div>
                  <div className="emoji-input" onClick={() => setShowEmoji(true)}>Click {data}!</div>
                  {showEmoji &&
                  <EmojiPicker 
                     onClose={() => setShowEmoji(false)} 
                     output={setData} 
                     closeAfterSelect={cas}
                     clickOutsideToClose={cotc}
                     highlight={highlight}
                     darkMode={dark}
                  />
                  }
               </div>
            </div>
            <div>
               <h2>🔧 Setting</h2>
               <div>
                  <label>closeAfterSelect
                     <input type="checkbox" checked={cas} onChange={(e) => setCas(!cas)} />
                  </label>
               </div>
               <div>
                  <label>clickOutsideToClose
                     <input type="checkbox" checked={cotc} onChange={(e) => setCotc(!cotc)} />
                  </label>
               </div>
               <div>
                  <label>highlight
                     <input type="text" value={highlight} onChange={(e) => setHighlight(e.target.value)} />
                  </label>
               </div>
               <div>
                  <label>darkMode
                     <input type="checkbox" checked={dark} onChange={(e) => setDark(!dark)} />
                  </label>
               </div>
            </div>
         </div>
      </div>
   );
}

export default App;
