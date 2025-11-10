"use client"
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Center } from "@repo/ui/center";
import { TextInput } from "@repo/ui/TextInput";
import { useState } from "react";
import { p2pTransfer } from "../lib/actions/p2ptransfer";

export function SendCard() {
  const [number, setNumber] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <div className="h-[90vh] flex justify-center">
      <Center>
        <Card title="Send">
          <div className="min-w-72 pt-2 space-y-4">
            <TextInput
              className="p-2"
              placeholder="Number"
              label="Number"
              onChange={(value) => setNumber(value)}
            />
            <TextInput
              className="p-2"
              placeholder="Amount"
              label="Amount"
              onChange={(value) => setAmount(value)}
            />
            <div className="pt-4 flex justify-center">
              <Button
                onClick={async () => {
                  await p2pTransfer(number, Number(amount) * 100);
                }}
                className="relative inline-flex items-center justify-center p-2 mb-2 overflow-hidden text-sm font-medium text-white rounded-lg bg-gradient-to-br from-green-400 to-blue-600 hover:from-green-500 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 w-48 cursor-pointer"
              >
                Send
              </Button>
            </div>
          </div>
        </Card>
      </Center>
    </div>
  );
}
