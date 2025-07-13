import React from "react";
import { useFormStatus } from "react-dom";
import { CiTrash } from "react-icons/ci";
import { MdHourglassTop } from "react-icons/md";

export function ShareButton() {
  const { pending } = useFormStatus();
  return (
    <button
      className="bg-green-400 p-1 pl-5 pr-5 rounded-lg hover:cursor-pointer hover:bg-green-300"
      disabled={pending}
    >
      Share
    </button>
  );
}

export default function DelBtn() {
  const { pending } = useFormStatus();
  return (
    <button className=" align-middle" disabled={pending}>
      {pending ? (
        <MdHourglassTop size={20} color="#ed5fe1" />
      ) : (
        <CiTrash
          size={20}
          color="#ed5fe1"
          className="hover:opacity-50 hover:cursor-pointer"
        />
      )}
    </button>
  );
}
