import { useState, useEffect } from 'react';
import Prism from "prismjs";
import "prismjs/themes/prism-twilight.css";

import { EmojiSelector } from '../r-emoji-selector/index';

function Desktop () {
   const [showEmoji, setShowEmoji] = useState(true);
   const [data, setData] = useState('🦁');

   const [cas, setCas] = useState(true);
   const [cotc, setCotc] = useState(true);
   const [dark, setDark] = useState(false);
   const [highlight, setHighlight] = useState('lightblue');
   const [alignRight, setAlignRight] = useState(false);
   const [backgroundColor, setBackgroundColor] = useState('');
   const [cornerRadius, setCornerRadius] = useState('10px');

   useEffect(() => {
      Prism.highlightAll();
   }, [cas, cotc, dark, alignRight, highlight, backgroundColor]);

   return (
      <>
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
                     backgroundColor={backgroundColor}
                     cornerRadius={cornerRadius}
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
                        <input type="text" value={highlight} onChange={(e) => setHighlight(e.target.value)} placeholder="default" />
                     </label>
                  </div>
                  <div>
                     <label>Background Color
                        <input type="text" value={backgroundColor} onChange={(e) => setBackgroundColor(e.target.value)} placeholder="default" />
                     </label>
                  </div>
                  <div>
                     <label>Corner Radius
                        <input type="text" value={cornerRadius} onChange={(e) => setCornerRadius(e.target.value)} placeholder="default" />
                     </label>
                  </div>
               </div>
            </div>
         </div>

         <div className="code-container">
            <div className="Code">
               <pre>
                  <code className="language-javascript">
                     {'// yarn add react-emoji-selectors\n\n'}
                  </code>
                  <code className="language-javascript">
                     {'<EmojiSelector\n'}
                  </code>
                  <code className="language-javascript">
                     {'\tonClose={() => hideEmojiSelector()}\n'}
                  </code>
                  <code className="language-javascript">
                     {'\toutput={(emoji) => setOutputState(emoji)}\n'}
                  </code>
                  <code className="language-javascript">
                     {!cas && '\tcloseAfterSelect={false}\n'}
                  </code>
                  <code className="language-javascript">
                     {!cotc && '\tclickOutsideToClose={false}\n'}
                  </code>
                  <code className="language-javascript">
                     {alignRight && '\talignRight={true}\n'}
                  </code>
                  <code className="language-javascript">
                     {dark && '\tdarkMode={true}\n'}
                  </code>
                  <code className="language-javascript">
                     {highlight !== 'lightblue' && '\thighlight="' + highlight + '"\n'}
                  </code>
                  <code className="language-javascript">
                     {backgroundColor !== '' && '\tbackgroundColor="' + backgroundColor + '"\n'}
                  </code>
                  <code className="language-javascript">
                     {cornerRadius !== '10px' && '\tcornerRadius="' + cornerRadius + '"\n'}
                  </code>
                  <code className="language-javascript">
                     {'/>'}
                  </code>
               </pre>
            </div>
         </div>
      </>
   )
}

export default Desktop;
