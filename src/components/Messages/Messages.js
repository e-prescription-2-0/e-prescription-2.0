

import styles from './Messages.module.css'




export const Messages = ({messages}) => {
    
    
 

return (
   
   <div className={styles['message-banner'] +' ' + styles[messages.type]}>
      <p>{messages.text}</p>
    </div>
 
)



}

export default Messages