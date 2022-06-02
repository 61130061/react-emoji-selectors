import React from 'react';

import IconPath from '../Icon';

function Footer ({ scrollRef, highlight, darkMode }) {

   const ScrollTo = (key) => {
      //document.getElementById(key).scrollIntoView();
      scrollRef.current.scrollTop = document.getElementById(key).offsetTop-5;
   }

   return (
      <div className={darkMode ? "footer emoji-dark-mode" : "footer"}>
         <div 
            onClick={() => ScrollTo('Smileys & Emotion')}
            onMouseEnter={(e) => e.target.style.color = highlight}
            onMouseLeave={(e) => e.target.style.color = "rgb(0,0,0,0.4)"}
         >
            <svg version="1.1" x="0px" y="0px" width="17px" height="17px" viewBox="0 0 106.059 106.06">
               <path d={IconPath.smile} />
            </svg>
         </div>
         <div 
            onClick={() => ScrollTo('People & Body')}
            onMouseEnter={(e) => e.target.style.color = highlight}
            onMouseLeave={(e) => e.target.style.color = "rgb(0,0,0,0.4)"}
         >
            <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 16 16" version="1.1">
               <path d={IconPath.hand}/>
            </svg>
         </div>
         <div 
            onClick={() => ScrollTo('Animals & Nature')}
            onMouseEnter={(e) => e.target.style.color = highlight}
            onMouseLeave={(e) => e.target.style.color = "rgb(0,0,0,0.4)"}
         >
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 512.001 512.001" width="20px" height="20px">
               <path d={IconPath.dog}/>
            </svg>
         </div>
         <div 
            onClick={() => ScrollTo('Food & Drink')}
            onMouseEnter={(e) => e.target.style.color = highlight}
            onMouseLeave={(e) => e.target.style.color = "rgb(0,0,0,0.4)"}
         >
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 32 32">
               <path d={IconPath.pizza[0]}/>
               <path d={IconPath.pizza[1]}/>
               <path d={IconPath.pizza[2]}/>
               <path d={IconPath.pizza[3]}/>
            </svg>
         </div>
         <div 
            onClick={() => ScrollTo('Travel & Places')}
            onMouseEnter={(e) => e.target.style.color = highlight}
            onMouseLeave={(e) => e.target.style.color = "rgb(0,0,0,0.4)"}
         >
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
               <path d={IconPath.globe}/>
            </svg>
         </div>
         <div 
            onClick={() => ScrollTo('Activities')}
            onMouseEnter={(e) => e.target.style.color = highlight}
            onMouseLeave={(e) => e.target.style.color = "rgb(0,0,0,0.4)"}
         >
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="17px" height="17px" viewBox="0 0 390.044 390.043">
               <path d={IconPath.basketball}/>
            </svg>
         </div>
         <div 
            onClick={() => ScrollTo('Objects')}
            onMouseEnter={(e) => e.target.style.color = highlight}
            onMouseLeave={(e) => e.target.style.color = "rgb(0,0,0,0.4)"}
         >
            <svg widtd="17px" height="17px" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 512 512">
               <path d={IconPath.light}/>
            </svg>
         </div>
         <div 
            onClick={() => ScrollTo('Symbols')}
            onMouseEnter={(e) => e.target.style.color = highlight}
            onMouseLeave={(e) => e.target.style.color = "rgb(0,0,0,0.4)"}
         >
            <svg xmlns="http://www.w3.org/2000/svg" width="19px" height="19px" viewBox="0 0 20 20">
               <path d={IconPath.lang}/>
            </svg>
         </div>
         <div 
            onClick={() => ScrollTo('Flags')}
            onMouseEnter={(e) => e.target.style.color = highlight}
            onMouseLeave={(e) => e.target.style.color = "rgb(0,0,0,0.4)"}
         >
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="16px" height="16px" x="0px" y="0px" viewBox="0 0 489 489">
               <path d={IconPath.flag}/>
            </svg>
         </div>
      </div>
   )
}

export default Footer;
