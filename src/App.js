import { useState } from 'react';

import { EmojiSelector } from './r-emoji-selector/index';

function App() {
   const [showEmoji, setShowEmoji] = useState(true);
   const [data, setData] = useState('🦁');

   const [cas, setCas] = useState(true);
   const [cotc, setCotc] = useState(true);
   const [dark, setDark] = useState(false);
   const [highlight, setHighlight] = useState('lightblue');
   const [alignRight, setAlignRight] = useState(false);

   return (
      <div className="App">
         <h1>React Emoji Selector</h1>
         <div className="container">
            <div>
               <div>
                  <div className="emoji-input" onClick={() => setShowEmoji(true)}>Click {data}!</div>
                  {showEmoji &&
                  <EmojiSelector 
                     onClose={() => setShowEmoji(false)} 
                     output={setData} 
                     closeAfterSelect={cas}
                     clickOutsideToClose={cotc}
                     highlight={highlight}
                     darkMode={dark}
                     alignRight={alignRight}
                  />
                  }
               </div>
            </div>
            <div>
               <div>
                  <h2>🔧 Setting</h2>
                  <div>
                     <label className="true-false">Close After Select
                        <input type="checkbox" checked={cas} onChange={(e) => setCas(!cas)} />
                     </label>
                  </div>
                  <div>
                     <label className="true-false">Click Outside To Close
                        <input type="checkbox" checked={cotc} onChange={(e) => setCotc(!cotc)} />
                     </label>
                  </div>
                  <div>
                     <label className="true-false">Align Right
                        <input type="checkbox" checked={alignRight} onChange={(e) => setAlignRight(!alignRight)} />
                     </label>
                  </div>
                  <div>
                     <label className="true-false">Dark Mode
                        <input type="checkbox" checked={dark} onChange={(e) => setDark(!dark)} />
                     </label>
                  </div>
                  <div>
                     <label>Highlight Color
                        <input type="text" value={highlight} onChange={(e) => setHighlight(e.target.value)} />
                     </label>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default App;
