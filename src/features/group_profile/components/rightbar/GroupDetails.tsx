import React from "react";
import Link from "next/link";
import { Group, User } from "@prisma/client";
import { IoIosMail, IoMdLink } from "react-icons/io";
import { FaBirthdayCake, FaPhoneAlt } from "react-icons/fa";
import { fullDateConverter } from "@/utility/utility";
import { IoHome } from "react-icons/io5";
import GrpJoinReqBtn from "./client/GrpJoinReqBtn";

export default async function GroupDetails({
  groupProfile,
  requestUser,
}: {
  groupProfile: Group;
  requestUser: User;
}) {
  if (!groupProfile) return null;
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm gap-4 flex flex-col">
      {/* Top */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User details</span>
        {requestUser.id === groupProfile.id && (
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
          <span className=" text-xl text-black">{`${groupProfile.groupname}`}</span>
          {/* <span className=" text-sm">@{groupProfile.userName}</span> */}
        </div>
        {groupProfile.desc && <p>{groupProfile.desc}</p>}

        {groupProfile.email && (
          <div className="flex items-center gap-2">
            <IoIosMail size={16} color="pink" />
            <span>
              Contact <b>{groupProfile.email}</b>
            </span>
          </div>
        )}

        {groupProfile.phone && (
          <div className="flex items-center gap-2">
            <FaPhoneAlt size={16} color="pink" />
            <span>
              Call <b>{groupProfile.phone}</b>
            </span>
          </div>
        )}

        {groupProfile.createdAt && (
          <div className="flex items-center gap-2">
            <FaBirthdayCake size={16} color="pink" />
            <span>
              Created At <b>{fullDateConverter(groupProfile.createdAt)}</b>
            </span>
          </div>
        )}

        {/* {profile.gender && (
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
        )} */}

        {groupProfile.lives && (
          <div className="flex items-center gap-2">
            <IoHome size={16} color="pink" />
            <span>
              Living in <b>{groupProfile.lives}</b>
            </span>
          </div>
        )}

        {/* {profile.education &&
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
          })} */}

        {/* {profile.works &&
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
          })} */}

        {/* {profile.love && (
          <div className="flex items-center gap-2">
            <RiHeartsFill size={16} color="pink" />
            <span>
              In love with <b>{profile.love}</b>
            </span>
          </div>
        )} */}

        <div className="flex items-center justify-between">
          {groupProfile.links.length > 0 ? (
            groupProfile.links.map((link: string) => {
              return (
                <div className="flex gap-1 items-center">
                  <IoMdLink size={16} color="pink" />
                  <Link
                    href={`https://${link}`}
                    className=" text-pink-300 font-medium"
                  >
                    {link}
                  </Link>
                </div>
              );
            })
          ) : (
            <div></div>
          )}
          {/* <div className="flex gap-1 items-center">
            <FaCalendarAlt size={16} color="pink" />
            <span>Joined {fullDateConverter(profile.createdAt)}</span>
          </div> */}
        </div>
        {/* {user.id != profile.id && (
          <BlockBtn userId={user.id} profileId={profile.id} blocked={blocked} />
        )} */}

        {/* <button className="bg-pink-300 text-white text-sm rounded-md p-2">
          Join Group
        </button> */}
        {/* <button className="bg-red-300 text-white text-sm rounded-md p-2">
          Leave Group
        </button> */}
        {groupProfile.owner !== requestUser.id && (
          <GrpJoinReqBtn
            isMember={groupProfile.members.includes(requestUser.id)}
            groupId={groupProfile.id}
            userId={requestUser.id}
          />
        )}
      </div>
    </div>
  );
}
