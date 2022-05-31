import IconPath from '../Icon';

function Input ({ onTyping, value, darkMode }) {
   return (
      <div className={darkMode ? "emoji-search emoji-dark-mode" : "emoji-search"}>
         <svg xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" version="1.1" x="0px" y="0px" viewBox="0 0 487.95 487.95">
            <path d={IconPath.search}/>
         </svg>
         <input value={value} onChange={onTyping} autoFocus placeholder="Search" />
      </div>
   )
}

export default Input;
