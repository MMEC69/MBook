import React from "react";
import Link from "next/link";
import ContactClient from "./ContactClient";
import { User } from "@prisma/client";

export default function ContactsClient({
  userId,
  contacts,
}: {
  userId: string;
  contacts: any;
}) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm gap-4 flex flex-col">
      {/* Top */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Contacts</span>
        <Link href="/" className="text-pink-600 text-xs hover:underline">
          See all
        </Link>
      </div>

      {/* Bottom */}
      {contacts.map((contact: User) => {
        const defaultAvatar =
          contact.gender === "Male" ? "/man.png" : "/woman.png";
        return (
          <ContactClient
            key={contact.id}
            firstName={contact.firstName}
            lastName={contact.lastName}
            avatar={contact.avatar || defaultAvatar}
          />
        );
      })}
      {contacts.length < 1 && (
        <>
          <button className="bg-pink-100 text-pink-800 text-xs rounded-lg p-2">
            Add New Contacts
          </button>
        </>
      )}
    </div>
  );
}
