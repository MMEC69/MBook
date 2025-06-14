// "use client";
// import { useRouter } from "next/navigation";
// import React from "react";
// import Image from "next/image";

// export default function CommentsClientPopUp({ setOpen }: { setOpen: any }) {
//   const handleClose = () => {
//     setOpen(false);
//     // state.success && router.refresh();
//   };
//   return (
//     <div className=" absolute w-full h-screen left-0 top-0 bg-black bg-opacity-65 flex items-center justify-center z-50">
//       <div className="w-96 h-48 bg-white absolute rounded-lg">
//         <div
//           className=" hover:cursor-pointer absolute right-0 top-0"
//           onClick={() => handleClose()}
//         >
//           <Image
//             src={"/close.png"}
//             alt={"X"}
//             width={28}
//             height={28}
//             className="hover:opacity-70"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
