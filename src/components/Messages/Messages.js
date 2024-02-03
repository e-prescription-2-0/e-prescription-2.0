import { useSelector } from "react-redux";
import styles from "./Messages.module.css";
import { useReduxAction } from "../../hooks/useReduxAction";
import { clearMessages } from "../../reducers/messageDispatcher";
import { useEffect } from "react";

export const Messages = () => {
  const dispatchClearMessageAction = useReduxAction(clearMessages);
  const { isMessage, messages } = useSelector((state) => state.messages);

  useEffect(() => {
    if (isMessage) {
      const timeoutId = setTimeout(() => {
        dispatchClearMessageAction();
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [isMessage, dispatchClearMessageAction]);

  if (isMessage) {
    return (
      <div className={styles["message-banner"] + " " + styles[messages.type]}>
        <p>{messages.text}</p>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Messages;
