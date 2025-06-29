"use client";
import MultiSelect from "@/components/MultiSelect/MultiSelect";
import React, { useState } from "react";

export default function MultiSelectInputField({
  options,
  selectedOption,
}: {
  options: any[];
  selectedOption: any;
}) {
  const [selected, setSelected] = useState<any>({ selectedOption });

  const selectOption = (selected: any) => {
    setSelected(selected);
  };
  return (
    <form action="">
      <div className="flex flex-row gap-2 w-full bg-white p-2 rounded-lg justify-between">
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="">Group Type</label>
          <MultiSelect
            options={options}
            selectedOptions={selected}
            onChange={selectOption}
          />
        </div>
        <div className="flex flex-col justify-between">
          <span></span>
          <button className="bg-green-600 hover:opacity-80 text-white px-3 py-2 text-xs">
            Change
          </button>
        </div>
      </div>
    </form>
  );
}
