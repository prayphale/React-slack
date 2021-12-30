import "./ChatInput.scss";
import 'firebase/compat/firestore';

import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore';

import React from "react";
import { db } from "src/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { useRef } from "react";

function ChatInput(ChannelId: any) {
  const [channels, loading, error] = useCollection(collection(db, "rooms"));
  const inputRef = useRef(null);

  const sendMessage = (e: any) => {
    e.preventDefault();

    if (!ChannelId) {
      return false;
    }

    const rooms = async () => {
      const q = query(collection(db, "cities"), where("capital", "==", true));

      // const rooms = doc(collection(db, "rooms"));
      //   await setDoc(rooms, {
      //     message: inputRef.current,
      //   });
    };
    rooms();
    // db.collection("rooms").doc(ChanelId).collection("messages").add({
    //     message: inputRef.current,
    // })
  };

  return (
    <div className="ChatInput__container">
      <form>
        <input ref={inputRef} placeholder={`Message #ROOM`} />
        <button hidden type="submit" onClick={sendMessage}>
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
