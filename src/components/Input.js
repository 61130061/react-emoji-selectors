function Input ({ onTyping, value }) {
   return (
      <div className="emoji-search">
         <input value={value} onChange={onTyping} autoFocus placeholder="Search" />
      </div>
   )
}

export default Input;
