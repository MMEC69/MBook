// "use client";
// import React, { useActionState } from "react";
// import { updateDetail } from "./action/action";
// import { useFormStatus } from "react-dom";

// export default function SimpleUserDetailForm({
//   userId,
//   labelName,
//   icon,
//   field,
// }: {
//   userId: string;
//   labelName: string;
//   icon: string;
//   field: string;
// }) {
//   const [state, updateAction] = useActionState(updateDetail, undefined);
//   const { pending } = useFormStatus();
//   return (
//     <div className="flex flex-col justify-start gap-2">
//       <form
//         action={updateAction}
//         className="flex flex-col gap-4 px-4 py-4 w-full rounded-lg bg-white"
//       >
//         {/* later change these to field */}
//         <div className="flex flex-col gap-1">
//           <label htmlFor={"field"}>{labelName}</label>
//           <input
//             type="text"
//             id="fieldValue"
//             name="fieldValue"
//             className=" border-b-2 w-full outline-none text-2xl"
//           />
//           {state?.errors?.fieldValue && (
//             <p className="text-red-500 bg-yellow-100 rounded-lg p-1 pl-3">
//               {state.errors.fieldValue}
//             </p>
//           )}
//         </div>
//         <div className=" hidden">
//           <input type="text" id="field" name="field" defaultValue={field} />
//         </div>
//         <div className=" hidden">
//           <input type="text" id="userId" name="userId" defaultValue={userId} />
//         </div>

//         <div className="flex flex-row gap-3 justify-end">
//           <button className="bg-red-400 p-1 pl-3 pr-3 rounded-lg hover:cursor-pointer hover:bg-red-300">
//             Cancel
//           </button>
//           <button
//             className="bg-green-400 p-1 pl-3 pr-3 rounded-lg hover:cursor-pointer hover:bg-green-300"
//             disabled={pending}
//           >
//             Confirm
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
