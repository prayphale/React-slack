import "./SidebarOption.scss";

import { collection, doc, setDoc } from "firebase/firestore";

import React from "react";
import { db } from "src/firebase";
import { enterRoom } from "src/features/appSlice";
import { enterScope } from "immer/dist/internal";
import { useCollection } from "react-firebase-hooks/firestore";
import { useDispatch } from "react-redux";

function SidebarOption() {
  const [channels, loading, error] = useCollection(collection(db, "rooms"));
  const dispatch = useDispatch();

  const handleAddChannel = async () => {
    console.log("here");
    const channelName = prompt("Please enter the channel name");

    if (channelName) {
      const newCityRef = doc(collection(db, "rooms"));

      await setDoc(newCityRef, {
        name: channelName,
      });
    }
  };

  const handleSelectChannel = (channelId: string) => {
    if (channelId) {
      dispatch(
        enterRoom({
          roomId: channelId,
        })
      );
    }
  };

  return (
    <div className="SidebarOption__container">
      <div>
        <i className="fas fa-comment-alt-lines" /> Threads
      </div>
      <div>
        <i className="fas fa-inbox " /> Mentions & reactions
      </div>
      <div>
        <i className="fas fa-envelope-open" /> Saved items
      </div>
      <div>
        <i className="far fa-bookmark" /> Channel browser
      </div>
      <div>
        <i className="fas fa-user-friends" /> People & user groups
      </div>
      <div>
        <i className="fas fa-bars" /> Apps
      </div>
      <div>
        <i className="fas fa-copy" /> File browser
      </div>
      <div>
        <i className="fas fa-chevron-up" /> Show less
      </div>
      <hr />
      <div>
        <i className="fas fa-chevron-down" /> Channels
      </div>
      <hr />
      <div onClick={handleAddChannel}>
        <i className="fal fa-plus" /> Add Channel
      </div>

      {channels?.docs.map((doc) => (
        <h6 key={doc.id} id={doc.id} title={doc.data().name} onClick={() => handleSelectChannel(doc.id)}>
          # {doc.data().name}
        </h6>
      ))}
    </div>
  );
}

export default SidebarOption;