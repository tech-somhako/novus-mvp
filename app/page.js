import Image from "next/image";
import Link from "next/link";
import LoginImg from "@/app/assets/img/placeholder.svg";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import LoginLogo from "@/app/assets/img/loginlogo.svg";
import IpadDispaly from "@/app/assets/img/ipad.png";
import {  Mail } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox"
import { Sms, Lock} from 'iconsax-react';

export default function Main() {
  
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
        {/* <div className="items-center justify-items-center w-2/5 d-flex border-b border-b-neutral-900">
          <Image
            src={LoginLogo}
            className="py-4 px-4"
            alt="Picture of the author"
          />
        </div>
        <h4 className="text-2xl py-4">“Connecting Talents”</h4> */}
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
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login in to your account</h1>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email" className="pt-2 ps-10 text-gray-500 uppercase pb-1 text-xs absolute">Email</Label>

              <div className="">
                <div className="absolute p-2 py-3 text-gray-500">
                <Sms size="24" color="#6b7280" />
                  {/* <Home className="text-gray-500" /> */}
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
            <div className="grid gap-2">
            <Label htmlFor="password" className="pt-2 ps-10 text-gray-500 uppercase pb-1 text-xs absolute">Password</Label>

            <div className="">
                <div className="absolute p-2 py-3">
                 
                  <Lock  size="24" color="#6b7280"  />
                </div>

                <Input
                  id="email"
                  type="password"
                  placeholder=""
                  required
                  value="password"
                  className="ps-10 pt-5 h-auto"
                />
              </div>

            </div>
            <div className="flex items-center space-x-2 justify-between">
              <div  className="flex items-center space-x-2">
              <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Remember me
      </label>
              </div>
              <Link
              href="/forgot-password"
              className="ml-auto inline-block text-sm underline"
            >
              Forgot your password?
            </Link>
    </div>
   
    <Button asChild>
      <Link href="/chatview">Login</Link>
    </Button>
            {/* <Button type="submit" className="w-full">
              Login
            </Button> */}
          </div>
          {/* <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="#" className="underline">
              Sign up
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}
