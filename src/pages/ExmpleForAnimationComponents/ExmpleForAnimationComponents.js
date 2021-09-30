
import './ExmpleForAnimationComponents.css';

import {TextDisplayAnimation} from '../../components/TextDisplay/TextDisplayAnimation';

function ExmpleForAnimationComponents() {
  let text =` 
  נא לכווין בברכות לעילוי נשמתו אבגדהוזחטיכלמנסעפצקשת ולברך בכוונה`;
  let text1 =`
  
  <p><נא לכווין בברכות לעי
  נא לכווין בברכות לעילוי נשמתו אבגדהוזחטיכלמנסעפצקשת ולברך בכוונה
  לוי נשמתו ולברך בכוונה</</p>
  
  <p><strong>נא לכווין בברכות לעי
  נא לכווין בברכות לעילוי נשמתו אבגדהוזחטיכלמנסעפצקשת ולברך בכוונה
  לוי נשמתו ולברך בכוונה</strong></p>

  <h1>מה קורה אחי</h1>
  <p><נא לכווין בברכות לעי
  נא לכווין בברכות לעילוי נשמתו אבגדהוזחטיכלמנסעפצקשת ולברך בכוונה
  לוי נשמתו ולברך בכוונה</</p>
  
  <p><strong>נא לכווין בברכות לעי
  נא לכווין בברכות לעילוי נשמתו אבגדהוזחטיכלמנסעפצקשת ולברך בכוונה
  לוי נשמתו ולברך בכוונה</strong></p>

  <h1>מה קורה אחי</h1>
  <p><נא לכווין בברכות לעי
  נא לכווין בברכות לעילוי נשמתו אבגדהוזחטיכלמנסעפצקשת ולברך בכוונה
  לוי נשמתו ולברך בכוונה</</p>
  
  <p><strong>נא לכווין בברכות לעי
  נא לכווין בברכות לעילוי נשמתו אבגדהוזחטיכלמנסעפצקשת ולברך בכוונה
  לוי נשמתו ולברך בכוונה</strong></p>

  <h1>מה קורה אחי</h1>
  <p><נא לכווין בברכות לעי
  נא לכווין בברכות לעילוי נשמתו אבגדהוזחטיכלמנסעפצקשת ולברך בכוונה
  לוי נשמתו ולברך בכוונה</</p>
  
  <p><strong>נא לכווין בברכות לעי
  נא לכווין בברכות לעילוי נשמתו אבגדהוזחטיכלמנסעפצקשת ולברך בכוונה
  לוי נשמתו ולברך בכוונה</strong></p>

  <h1>מה קורהי אחי</h1>
  <h1> ס </h1>
  <h1> ו </h1>
  <h1> ף </h1>
   `;
  return (
    <div className='ExmpleForAnimationComponents'>
        <div className='item1'>
            <TextDisplayAnimation direction={'vertical'} id={Math.random() * 100} text={text1}/>
        </div>
        <div className='item2'>
            <TextDisplayAnimation direction={'horizontal'} id={Math.random() * 100} text={text}/>
        </div>
    </div>
  );
}

export default ExmpleForAnimationComponents;
