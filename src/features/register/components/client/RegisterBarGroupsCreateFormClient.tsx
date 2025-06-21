"use client";
import React, { useActionState, useEffect, useState } from "react";
import { createGroup } from "../../action/action";
import MultiSelect from "@/components/MultiSelect/MultiSelect";
import { groupPrivacy, groupType } from "@/meta/meta";
import SingleSelect from "@/components/SingleSelect/SingleSelect";
import { useRouter } from "next/navigation";

export default function RightBarGroupsCreateFormClient({
  type,
  userId,
  friends,
}: {
  type: string;
  userId: string;
  friends: any[];
}) {
  const router = useRouter();

  const [state, formAction] = useActionState(createGroup, {
    success: false,
    error: false,
  });

  const [groupTypeOptions, setGroupTypeOptions] = useState([]);
  const [groupPrivacyOptions, setGroupPrivacyOptions] = useState([]);
  const [invites, setInvites] = useState([]);

  useEffect(() => {
    const groupPrivacyOptions_: any = groupPrivacy.map((groupPrivacy: any) => {
      return {
        value: groupPrivacy,
        label: groupPrivacy,
      };
    });
    setGroupPrivacyOptions(groupPrivacyOptions_);

    const groupTypeOptions_: any = groupType.map((groupType: any) => {
      return {
        value: groupType,
        label: groupType,
      };
    });
    setGroupTypeOptions(groupTypeOptions_);

    const invites_: any = friends.map((friend: any) => {
      return {
        value: friend.id,
        label: friend.name,
      };
    });
    setInvites(invites_);
  }, []);

  const [selectedGroupPrivacy, setSelectedGroupPrivacy] = useState([
    {
      value: groupPrivacy[0],
      label: groupPrivacy[0],
    },
  ]);
  const [selectedGroupTypes, setSelectedGroupTypes] = useState([
    {
      value: groupType[0],
      label: groupType[0],
    },
  ]);
  const [selectedInvites, setSelectedInvites] = useState([]);

  const groupTypeSelect = (selected: any) => {
    setSelectedGroupTypes(selected);
  };
  const groupPrivacySelect = (selected: any) => {
    setSelectedGroupPrivacy(selected);
  };
  const groupInviteSelect = (selected: any) => {
    setSelectedInvites(selected);
  };

  const handleReset = () => {
    setSelectedGroupTypes([
      {
        value: groupType[0],
        label: groupType[0],
      },
    ]);
    setSelectedGroupPrivacy([
      {
        value: groupPrivacy[0],
        label: groupPrivacy[0],
      },
    ]);
    setSelectedInvites([]);
  };

  return (
    <div className="flex flex-col justify-start ">
      <span className=" text-xl">Let's Create A Group</span>
      <form
        action={(formData) => {
          formAction({
            formData,
            userId,
            selectedGroupTypes,
            selectedGroupPrivacy,
            selectedInvites,
          });
          handleReset();
        }}
        className="flex flex-col gap-4 px-4 py-10 w-full rounded-lg bg-white"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="">Group Name</label>
          <input
            type="text"
            className=" border-b-2 w-full outline-none text-2xl"
            id="groupname"
            name="groupname"
          />
          {state?.errors?.groupname && (
            <p className=" text-red-500 bg-yellow-100 pl-2 rounded-lg">
              {state.errors.groupname}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Group Description</label>
          <input
            type="text"
            className=" border-b-2  w-full outline-none text-2xl"
            id="desc"
            name="desc"
          />
          {state?.errors?.desc && (
            <p className=" text-red-500 bg-yellow-100 pl-2 rounded-lg">
              {state.errors.desc}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Group Phone</label>
          <input
            type="text"
            className=" border-b-2  w-full outline-none text-2xl"
            id="phone"
            name="phone"
          />
          {state?.errors?.phone && (
            <p className=" text-red-500 bg-yellow-100 pl-2 rounded-lg">
              {state.errors.desc}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Group Email</label>
          <input
            type="text"
            className=" border-b-2  w-full outline-none text-2xl"
            id="email"
            name="email"
          />
          {state?.errors?.email && (
            <p className=" text-red-500 bg-yellow-100 pl-2 rounded-lg">
              {state.errors.desc}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Group Type</label>
          <MultiSelect
            options={groupTypeOptions}
            selectedOptions={selectedGroupTypes}
            onChange={groupTypeSelect}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Group Privacy</label>
          <SingleSelect
            options={groupPrivacyOptions}
            selectedOptions={selectedGroupPrivacy}
            onChange={groupPrivacySelect}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Group Location</label>
          <input
            type="text"
            className=" border-b-2  w-full outline-none text-2xl"
            id="lives"
            name="lives"
          />
          {state?.errors?.lives && (
            <p className=" text-red-500 bg-yellow-100 pl-2 rounded-lg">
              {state.errors.desc}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Invite Friends (Optional)</label>
          <MultiSelect
            options={invites}
            selectedOptions={selectedInvites}
            onChange={groupInviteSelect}
          />
        </div>
        {!state.errors && state.success && (
          <span className="text-green-500 text-left">
            Group has been created
          </span>
        )}
        {!state.errors && state.error && (
          <span className="text-red-500 text-left">Something went wrong</span>
        )}

        <div className="flex flex-row gap-3 justify-end">
          <button
            className="bg-red-400 p-3 pl-5 pr-5 rounded-lg hover:cursor-pointer hover:bg-red-300"
            type="reset"
            onClick={() => handleReset()}
          >
            Cancel
          </button>
          <button
            className="bg-green-400 p-3 pl-5 pr-5 rounded-lg hover:cursor-pointer hover:bg-green-300"
            type="submit"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
