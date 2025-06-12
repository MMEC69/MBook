import React from "react";
import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { MdBlock, MdHomeRepairService } from "react-icons/md";
import { IoIosMail, IoIosSchool, IoMdFemale, IoMdMale } from "react-icons/io";
import { RiHeartsFill } from "react-icons/ri";
import { IoMdLink } from "react-icons/io";
import { FaBirthdayCake, FaCalendarAlt, FaPhoneAlt } from "react-icons/fa";
import { fullDateConverter } from "@/utility/utility";
import BlockBtn from "./client/BlockBtn";
import { isBlocked } from "./action/action";

export default async function UserDetails({
  profile,
  user,
  blocked,
}: {
  profile: any;
  user: any;
  blocked: any;
}) {
  if (!profile) return null;
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm gap-4 flex flex-col">
      {/* Top */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User details</span>
        {user.id === profile.id && (
          <Link
            href="/settings/profile"
            className="text-pink-600 text-xs hover:underline"
          >
            See all
          </Link>
        )}
      </div>

      {/* Bottom */}
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className=" text-xl text-black">{`${profile.firstName} ${profile.lastName}`}</span>
          <span className=" text-sm">@{profile.userName}</span>
        </div>
        {profile.desc && <p>{profile.desc}</p>}

        {profile.email && (
          <div className="flex items-center gap-2">
            <IoIosMail size={16} color="pink" />
            <span>
              Contact <b>{profile.email}</b>
            </span>
          </div>
        )}

        {profile.phone && (
          <div className="flex items-center gap-2">
            <FaPhoneAlt size={16} color="pink" />
            <span>
              Call <b>{profile.phone}</b>
            </span>
          </div>
        )}

        {profile.birthday && (
          <div className="flex items-center gap-2">
            <FaBirthdayCake size={16} color="pink" />
            <span>
              Birthday <b>{fullDateConverter(profile.birthday)}</b>
            </span>
          </div>
        )}

        {profile.gender && (
          <div className="flex items-center gap-2">
            {profile.gender === "Female" ? (
              <IoMdFemale size={16} color="pink" />
            ) : (
              <IoMdMale size={16} color="pink" />
            )}
            <span>
              Gender <b>{profile.gender}</b>
            </span>
          </div>
        )}

        {profile.lives && (
          <div className="flex items-center gap-2">
            <IoHome size={16} color="pink" />
            <span>
              Living in <b>{profile.lives}</b>
            </span>
          </div>
        )}

        {profile.education &&
          profile.education.map((x: any) => {
            return (
              <div
                className="flex items-center gap-2"
                key={crypto.randomUUID()}
              >
                <IoIosSchool size={16} color="pink" />
                <span>
                  Went to <b>{x}</b>
                </span>
              </div>
            );
          })}

        {profile.works &&
          profile.works.map((x: any) => {
            return (
              <div
                className="flex items-center gap-2"
                key={crypto.randomUUID()}
              >
                <MdHomeRepairService size={16} color="pink" />
                <span>
                  Went to <b>{x}</b>
                </span>
              </div>
            );
          })}

        {profile.love && (
          <div className="flex items-center gap-2">
            <RiHeartsFill size={16} color="pink" />
            <span>
              In love with <b>{profile.love}</b>
            </span>
          </div>
        )}

        <div className="flex items-center justify-between">
          {profile.links ? (
            <div className="flex gap-1 items-center">
              <IoMdLink size={16} color="pink" />
              <Link
                href="https://eronne.dev"
                className=" text-pink-300 font-medium"
              >
                eronne.dev
              </Link>
            </div>
          ) : (
            <div></div>
          )}
          <div className="flex gap-1 items-center">
            <FaCalendarAlt size={16} color="pink" />
            <span>Joined {fullDateConverter(profile.createdAt)}</span>
          </div>
        </div>
        {user.id != profile.id && (
          <BlockBtn userId={user.id} profileId={profile.id} blocked={blocked} />
        )}

        {/* <button className="bg-pink-300 text-white text-sm rounded-md p-2">
          Add Friend
        </button> */}
      </div>
    </div>
  );
}
