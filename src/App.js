import { useState, useEffect } from 'react';
import Prism from "prismjs";
import "prismjs/themes/prism-twilight.css";

import { EmojiSelector } from './r-emoji-selector/index';

function App() {
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

   useEffect(() => {
      document.title = "React Emoji Selector"
   }, []);

   return (
      <div className="App">
         <h1>React Emoji Selector</h1>

         {/*<div>Desktop | Mobile</div>*/}

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

         <div className="footer">
            <div onClick={() => window.open('https://github.com/61130061/react-emoji-selectors', '_blank')}>
               <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 32 32">
                  <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"/>
               </svg>
            </div>
            {/*<div>dark mode</div>*/}
         </div>

      </div>
   );
}

export default App;
