// "use client";
// import React, { useEffect, useState } from "react";

// export default function GroupReqLayout({
//   isSent,
//   isRecived,
//   isFriend,
//   profile,
//   user,
//   blocked,
// }: {
//   isSent: boolean;
//   isRecived: boolean;
//   isFriend: boolean;
//   profile: any;
//   user: string;
//   blocked: any;
// }) {
//   const [sent, setSent] = useState(isSent);
//   const [received, setReceived] = useState(isRecived);
//   const [friend, setFriend] = useState(isFriend);
//   const [block, setBlock] = useState(blocked);

//   return (
//     <>
//       {!block && (
//         <>
//           {sent && (
//             <>
//               <FriendRequestCancelButton
//                 setSent={setSent}
//                 setReceived={setReceived}
//                 setFriend={setFriend}
//                 requestor={user}
//                 receiver={profile.id}
//               />
//             </>
//           )}
//           {received && (
//             <>
//               <FriendRequestAcceptButton
//                 setSent={setSent}
//                 setReceived={setReceived}
//                 setFriend={setFriend}
//                 requestor={profile.id}
//                 receiver={user}
//               />
//               <FriendRequestCancelButton
//                 setSent={setSent}
//                 setReceived={setReceived}
//                 setFriend={setFriend}
//                 requestor={profile.id}
//                 receiver={user}
//               />
//             </>
//           )}
//           {friend && (
//             <>
//               <FriendRequestUnFriendButton
//                 setSent={setSent}
//                 setReceived={setReceived}
//                 setFriend={setFriend}
//                 requestor={user}
//                 receiver={profile.id}
//               />
//             </>
//           )}
//           {!friend && !sent && !received && (
//             <>
//               <FriendRequestSendButton
//                 setSent={setSent}
//                 setReceived={setReceived}
//                 setFriend={setFriend}
//                 requestor={user}
//                 receiver={profile.id}
//               />
//             </>
//           )}
//         </>
//       )}
//     </>
//   );
// }
