"use client";
import React from "react";
import Select from "react-select";
import dynamic from "next/dynamic";

const DynamicSelect = dynamic(() => import("react-select"), {
  ssr: false, // This is the crucial part
});

export default function MultiSelect({
  options,
  selectedOptions,
  onChange,
}: {
  options: any[];
  selectedOptions: any[];
  onChange: any;
}) {
  return (
    <>
      <DynamicSelect
        isMulti
        value={selectedOptions}
        onChange={onChange}
        options={options}
        className="w-full"
        classNamePrefix="react-select"
      />
    </>
  );
}
