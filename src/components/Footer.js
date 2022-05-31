import IconPath from '../Icon';

function Footer ({ ScrollTo}) {
   return (
      <div className="footer">
         <div onClick={() => ScrollTo('Smileys & Emotion')}>
            <svg version="1.1" x="0px" y="0px" width="17px" height="17px" viewBox="0 0 106.059 106.06">
               <path d={IconPath.smile} />
            </svg>
         </div>
         <div onClick={() => ScrollTo('People & Body')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 16 16" version="1.1">
               <path d={IconPath.hand}/>
            </svg>
         </div>
         <div onClick={() => ScrollTo('Animals & Nature')}>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 512.001 512.001" width="20px" height="20px">
               <path d={IconPath.dog}/>
            </svg>
         </div>
         <div onClick={() => ScrollTo('Food & Drink')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 32 32">
               <path d={IconPath.pizza[0]}/>
               <path d={IconPath.pizza[1]}/>
               <path d={IconPath.pizza[2]}/>
               <path d={IconPath.pizza[3]}/>
            </svg>
         </div>
         <div onClick={() => ScrollTo('Travel & Places')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
               <path d={IconPath.globe}/>
            </svg>
         </div>
         <div onClick={() => ScrollTo('Activities')}>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="17px" height="17px" viewBox="0 0 390.044 390.043">
               <path d={IconPath.basketball}/>
            </svg>
         </div>
         <div onClick={() => ScrollTo('Objects')}>
            <svg widtd="17px" height="17px" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 512 512">
               <path d={IconPath.light}/>
            </svg>
         </div>
         <div onClick={() => ScrollTo('Symbols')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="19px" height="19px" viewBox="0 0 20 20">
               <path d={IconPath.lang}/>
            </svg>
         </div>
         <div onClick={() => ScrollTo('Flags')}>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="16px" height="16px" x="0px" y="0px" viewBox="0 0 489 489">
               <path d={IconPath.flag}/>
            </svg>
         </div>
      </div>
   )
}

export default Footer;
