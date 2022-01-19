import "./Message.scss";

import React from "react";

// const Message = React.forwardRef(({ message, timestamp, user, userImage }: any) => {
//   const defaultImg =
//     "https://thumbs.dreamstime.com/b/man-profile-cartoon-smiling-round-icon-vector-illustration-graphic-design-135443422.jpg";

//   return (
//     <>
//       <div className="Message__container">
//         <img src={userImage ? userImage : defaultImg} alt="" />

//         <div className="Message__messageInfo">
//           <h4>
//             {user ? user : "User"}{" "}
//             <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
//           </h4>
//           <div>{message}</div>
//         </div>
//       </div>
//     </>
//   );
// })

function Message({ message, timestamp, user, userImage }: any) {
  const defaultImg =
    "https://thumbs.dreamstime.com/b/man-profile-cartoon-smiling-round-icon-vector-illustration-graphic-design-135443422.jpg";

  return (
    <>
      <div className="Message__container">
        <img src={userImage ? userImage : defaultImg} alt="" />

        <div className="Message__messageInfo">
          <h4>
            {user ? user : "User"}{" "}
            <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
          </h4>
          <p>{message}</p>
        </div>
      </div>
    </>
  );
}

export default Message;
