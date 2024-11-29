import Image from "next/image";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import LoginLogo from "@/app/assets/img/loginlogo.svg";
import { Sms} from 'iconsax-react';
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
          <div className="grid gap-2 text-start">
            <h1 className="text-3xl font-bold">Forgot Password</h1>
            <p className="text-start text-gray-500 text-xs">Enter your user account&apos;s verified email address and we will send you a password reset link.</p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email" className="pt-2 ps-10 text-gray-500  uppercase pb-1 text-xs absolute">Email</Label>

              <div className="">
                <div className="absolute p-2 py-3">
                <Sms size="24" color="#6b7280" />
                </div>

                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  className="ps-10 pt-5 h-auto"
                />
              </div>
            </div>
        
            <Button asChild>
      <Link href="/send-password"> Send password reset email</Link>
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
