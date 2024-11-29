import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import LoginLogo from "@/app/assets/img/loginlogo.svg";
import { CircleCheckIcon} from "lucide-react";
import IpadDispaly from "@/app/assets/img/ipad.png";
export default function ForgotPassword() {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] items-center lg:grid-cols-12 xl:min-h-svh">
      <div className="hidden  lg:block col-span-7  items-center justify-items-center ">
      <div className="items-center justify-items-center max-w-[1000px]">
          <Image
            src={IpadDispaly}
            className="py-4 px-4"
            alt="Picture of the author"

          />
        </div>
        
        <div className="absolute bottom-0 w-full ">
          <div className="space-y-3 text-center py-4">
            <p className="text-xs text-gray-400">
              2024 Somhako © All Rights Reserved.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center col-span-5 justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center justify-items-center">
            <CircleCheckIcon size={48}  className="text-gray-500"/>
            <h1 className="text-3xl font-bold">Email Sent</h1>
            <p className="text-gray-500">We sent an email to <Link  href="#" className="text-gray-800 underline">somhako@gmail.com!</Link>  If this email is connected to a Novus account, you&apos;ll be able to reset your password.</p>
          </div>
          <div className="grid gap-4">
          
        
           
            <Button type="submit" className="w-full">
            Resend password reset email
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
          
            <Link href="/" className="underline">
            Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
