import React from 'react';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import './FiveCellGrid.scss';
import {TextDisplayAnimation} from '../../../components/TextDisplay/TextDisplayAnimation';

function FiveCellGrid(props) {
  const handle = useFullScreenHandle();
  let text =` 
  //    <p>&nbsp;</p>
  <p>'הרב הגאון ר <h1><strong>  שמחה בונים&nbsp;</strong></h1>ב"ר <h1><strong>ישראל</strong></h1> זצוקלל"ה</p>
  <p>&nbsp;</p>
  <h2><strong>נלב"ע אדר התש"ס</strong></h2>
  <p>&nbsp;</p>
  <p><strong>התפילות והלימוד לעילוי נשמתו</strong></p>
  <p>&nbsp;</p>`;
    let text1 =`
    
    <p><נא לכווין בברכות לעי
    נא לכווין בברכות לעילוי נשמתו אבגדהוזחטיכלמנסעפצקשת ולברך בכוונה
    לוי נשמתו ולברך בכוונה</</p>
    <p><strong>נא לכווין בברכות לעי
    נא לכווין בברכות לעילוי נשמתו אבגדהוזחטיכלמנסעפצקשת ולברך בכוונה
    לוי נשמתו ולברך בכוונה</strong></p>
    <span> <p>a s d f g h j k l</p>&nbsp;<h1>מה קורה אחי</h1>&nbsp;<p>a s d f g h j k l</p>&nbsp;<h1>מה קורה אחי</h1>&nbsp;<p>a s d f g h j k l</p>&nbsp;<h1>מה קורה אחי</h1>&nbsp;<p>a s d f g h j k l</p>&nbsp;<h1>מה קורה אחי</h1>&nbsp;<p>a s d f g h j k l</p>&nbsp;<h1>מה קורה אחי</h1>&nbsp;<p>a s d f g h j k l</p>&nbsp;<h1>מה קורה אחי</h1>&nbsp;<p>a s d f g h j k l</p>&nbsp;<h1>מה קורה אחי</h1> &nbsp;<p>a s d f g h j k l</p></span>
    <h1>מה קורה אחי</h1>
     `;
     let text3 = `<span> <p>a s d f g h j k l</p>&nbsp;<h1>מה קורה אחי</h1>&nbsp;<p>a s d f g h j k l</p>&nbsp;<h1>מה קורה אחי</h1>&nbsp;<p>a s d f g h j k l</p>&nbsp;<h1>מה קורה אחי</h1>&nbsp;<p>a s d f g h j k l</p>&nbsp;<h1>מה קורה אחי</h1>&nbsp;<p>a s d f g h j k l</p>&nbsp;<h1>מה קורה אחי</h1>&nbsp;<p>a s d f g h j k l</p>&nbsp;<h1>מה קורה אחי</h1>&nbsp;<p>a s d f g h j k l</p>&nbsp;<h1>מה קורה אחי</h1> &nbsp;<p>a s d f g h j k l</p></span> `
  return (
    <section>
      <button onClick={handle.enter}>
         fullscreen
    </button>

      <FullScreen handle={handle}>
        <div className="five-grid-container">
          <div className="main"><TextDisplayAnimation direction ="vertical" id={Math.random() * 100} text={text1}/></div>
          <div className="header"></div>
          <div className="footer"><TextDisplayAnimation direction ="horizontal" id={Math.random() * 100} text={text3}/></div>
          <div className="right-top"><TextDisplayAnimation direction ="vertical" id={Math.random() * 100} text={text}/></div>
          <div className="right-bottom"></div>
          <div className="left-top"></div> 
          <div className="left-bottom"></div>
        </div>
      </FullScreen>
    </section>


  );
}
export default FiveCellGrid;



// import './ExmpleForAnimationComponents.css';

// import {TextDisplayAnimation} from '../../components/TextDisplay/TextDisplayAnimation';

// function ExmpleForAnimationComponents() {
//  
//   return (
//     <div className='ExmpleForAnimationComponents'>
//         <div className='item1'>
//             <TextDisplayAnimation  id={Math.random() * 100} text={text1}/>
//         </div>
//         <div className='item2'>
//             <TextDisplayAnimation  id={Math.random() * 100} text={text}/>
//         </div>

//     </div>
//   );
// }

// export default ExmpleForAnimationComponents;

