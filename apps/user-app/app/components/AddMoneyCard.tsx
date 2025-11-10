"use client"
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Select } from "@repo/ui/select";
import { useState } from "react";
import { TextInput } from "@repo/ui/TextInput";
import { createOnRampTransaction } from "../lib/actions/onRamptransaction";

const SUPPORTED_BANKS = [{
    name: "HDFC Bank",
    redirectUrl: "https://netbanking.hdfcbank.com"
}, {
    name: "Axis Bank",
    redirectUrl: "https://www.axisbank.com/"
}];

export const AddMoney = () => {
    const [redirectUrl, setRedirectUrl] = useState(SUPPORTED_BANKS[0]?.redirectUrl);
    const [provider, setProvider] = useState(SUPPORTED_BANKS[0]?.name || "");
    const [value, setValue] = useState(0)
    return <Card
  title="Add Money"
  className="border p-1  shadow-sm bg-white rounded-xl"
>
  <div className="w-full">
    <TextInput
      label={"Amount"}
      placeholder={"Amount"}
      onChange={(val) => {
        setValue(Number(val));
      }}
      className="p-2"
    />
    <div className="py-4 text-left" >Bank</div>
    <Select
      onSelect={(value) => {
        setRedirectUrl(
          SUPPORTED_BANKS.find((x) => x.name === value)?.redirectUrl || ""
        );
        setProvider(SUPPORTED_BANKS.find((x) => x.name === value)?.name || "");
      }}
      options={SUPPORTED_BANKS.map((x) => ({
        key: x.name,
        value: x.name,
      }))}
    />
    <div className="flex justify-center pt-2  rounded-lg m-3" suppressHydrationWarning>
      <Button 
        onClick={async () => {
          await createOnRampTransaction(provider, value);
          window.location.href = redirectUrl || "";
        }}
        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 w-full p-2.5 cursor-default"
      >
        Add Money
      </Button>
    </div>
  </div>
</Card>

}