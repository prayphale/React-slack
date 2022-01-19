import "./HeaderAvatar.scss";

import React from "react";
import { auth } from "src/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function HeaderAvatar() {
  const [user] = useAuthState(auth);
  const defaultImg =
    "https://thumbs.dreamstime.com/b/man-profile-cartoon-smiling-round-icon-vector-illustration-graphic-design-135443422.jpg";

  return (
    <>
      <div className="HeaderAvatar__container">
        <img
          className="HeaderAvatar__avatar"
          onClick={() => auth.signOut()}
          src={user ? user.photoURL! : defaultImg}
          alt={user?.displayName!}
        />

        <div className="HeaderAvatar__clockIcon">
          <i className="far fa-clock"></i>
        </div>
      </div>
    </>
  );
}

export default HeaderAvatar;
