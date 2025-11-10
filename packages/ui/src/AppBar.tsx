import { Button } from "./button";
import clsx from "clsx";
import Image from "next/image"

interface AppbarProps {
  user?: {
    name?: string | null;
  };
  onSignin: () => void;
  onSignout: () => void;
  name?: string | null;
  className?: string; // make optional
}

export const Appbar = ({
  user,
  onSignin,
  onSignout,
  name,
  className,
}: AppbarProps) => {
  return (
    <nav
      className={clsx(
        " border border-gray-200 rounded-lg", // default styles
        className // external override/extension
      )}
      suppressHydrationWarning
    >
      <div className="rounded-lg flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-2.5">
        <div
          className="flex items-center space-x-3  pl-px"
        >
      
          <span className="self-center text-2xl font-bold whitespace-nowrap ">
            PayEase
          </span>
        </div>
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          <div
            
            className={clsx(
              "text-sm hover:underline",
              user ? "text-gray-900 font-medium" : "text-gray-500 "
            )}
          >
           Hello! {(name ?? "User").toUpperCase()}
          </div>

          <Button
            onClick={user ? onSignout : onSignin}
            className={clsx(
              "m-3 rounded",
              user
                ? "bg-red-100 hover:bg-red-200"
                : "bg-green-100 hover:bg-green-200"
            )}
          >
            {user ? "Logout" : "Login"}
          </Button>
        </div>
      </div>
    </nav>
  );
};
