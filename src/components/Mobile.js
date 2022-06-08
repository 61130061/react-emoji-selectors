import React, { useState, useEffect } from 'react';
import Prism from "prismjs";
import "prismjs/themes/prism-twilight.css";

import { MEmojiSelector } from '../r-emoji-selector/index';

function Mobile () {
   const [showEmoji, setShowEmoji] = useState(true);
   const [output, setOutput] = useState('🦙');
   const [highlight, setHighlight] = useState('lightblue');
   const [dark, setDark] = useState(false);
   const [coto, setCoto] = useState(true);
   const [recently, setRecently] = useState(true);

   const [cas, setCas] = useState(true);
   const [curSelect, setCurSelect] = useState('😀');
 
   useEffect(() => {
      Prism.highlightAll();
   }, [cas, coto, dark, highlight]);
  
   return (
      <>
         <div className="container">
            <div>
               <div>
                  <div className="emoji-input" onClick={() => setShowEmoji(true)}>Click {output}!</div>
                  {showEmoji &&
                  <MEmojiSelector 
                     onClose={() => setShowEmoji(false)} 
                     output={(emoji) => setOutput(emoji)}
                     currentSelect={curSelect}
                     closeAfterSelect={cas}
                     clickOutsideToClose={coto}
                     highlight={highlight}
                     darkMode={dark}
                     recently={recently}
                  />
                  }
               </div>
            </div>

            <div>
               <div>
                  <h2>🔧 Setting</h2>
                  <div>
                     <label className="true-false">Click Outside To Close
                        <input type="checkbox" checked={coto} onChange={(e) => setCoto(!coto)} />
                     </label>
                  </div>
                  <div>
                     <label className="true-false">Close After Select
                        <input type="checkbox" checked={cas} onChange={(e) => setCas(!cas)} />
                     </label>
                  </div>
                  <div>
                     <label className="true-false">Dark Mode
                        <input type="checkbox" checked={dark} onChange={(e) => setDark(!dark)} />
                     </label>
                  </div>
                  <div>
                     <label className="true-false">Recently
                        <input type="checkbox" checked={recently} onChange={(e) => setRecently(!recently)} />
                     </label>
                  </div>
                  <div>
                     <label>Current Select
                        <input type="text" value={curSelect} onChange={(e) => setCurSelect(e.target.value)} placeholder="default" />
                     </label>
                  </div>
                  <div>
                     <label>highlight
                        <input type="text" value={highlight} onChange={(e) => setHighlight(e.target.value)} placeholder="default" />
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
                     {'<MEmojiSelector\n'}
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
                     {!coto && '\tclickOutsideToClose={false}\n'}
                  </code>
                  <code className="language-javascript">
                     {dark && '\tdarkMode={true}\n'}
                  </code>
                  <code className="language-javascript">
                     {highlight !== 'lightblue' && '\thighlight="' + highlight + '"\n'}
                  </code>
                  <code className="language-javascript">
                     {curSelect !== '' && '\tcurrentSelect="' + curSelect + '"\n'}
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

export default Mobile;
