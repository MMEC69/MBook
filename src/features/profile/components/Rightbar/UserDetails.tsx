import React from "react";
import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { MdHomeRepairService } from "react-icons/md";
import { IoIosSchool } from "react-icons/io";
import { RiHeartsFill } from "react-icons/ri";
import { IoMdLink } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { fetchUserDetails } from "./action/action";

export default async function UserDetails({ userId }: { userId: string }) {
  // const userId = (await fetchSession()) as string;
  const posts: any = await fetchUserDetails(userId);
  if (!posts) return null;
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm gap-4 flex flex-col">
      {/* Top */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User details</span>
        <Link href="/" className="text-pink-600 text-xs">
          See all
        </Link>
      </div>

      {/* Bottom */}
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className=" text-xl text-black">Eronne Cooray</span>
          <span className=" text-sm">@coorayeronne2000</span>
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sunt
          vitae pariatur corporis sed recusandae unde. Pariatur, soluta quod
          eligendi similique reprehenderit magnam ab expedita porro odit
          delectus id officia.
        </p>

        <div className="flex items-center gap-2">
          <IoHome size={16} color="pink" />
          <span>
            Living in <b>Rathmalna</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <IoIosSchool size={16} color="pink" />
          <span>
            Went to <b>St.Sebastian's College Moratuwa</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <MdHomeRepairService size={16} color="pink" />
          <span>
            Works at <b>home</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <RiHeartsFill size={16} color="pink" />
          <span>
            In love with <b>________</b>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <IoMdLink size={16} color="pink" />
            <Link
              href="https://eronne.dev"
              className=" text-pink-300 font-medium"
            >
              eronne.dev
            </Link>
          </div>
          <div className="flex gap-1 items-center">
            <FaCalendarAlt size={16} color="pink" />
            <span>Joined May 2024</span>
          </div>
        </div>
        <button className="bg-pink-300 text-white text-sm rounded-md p-2">
          Add Friend
        </button>
      </div>
    </div>
  );
}
