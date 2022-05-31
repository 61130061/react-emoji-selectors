import { useState } from 'react';

import EmojiPicker from './EmojiPicker';

function App() {
   const [showEmoji, setShowEmoji] = useState(true);
   const [data, setData] = useState('🦁');

   return (
      <div className="App">
         <h1>Emoji Picker React</h1>
         <div>
            <div className="emoji-input" onClick={() => setShowEmoji(true)}>{data}</div>
            {showEmoji &&
            <EmojiPicker 
               onClose={() => setShowEmoji(false)} 
               setOutput={setData} 
               closeAfterSelect={false}
               clickOutsideToClose={false}
            />
            }
         </div>
      </div>
   );
}

export default App;
