/* import { Button } from "@/components/ui/button";
import { CirclePlus, CircleX } from "lucide-react";
import Link from "next/link";
import JobCard from "./jobcard";
import UserImg from "@/app/assets/img/sam.png";
import Image from "next/image";
export default function ChatView() {
  return (
    <>
      <div className="flex items-center gap-4 p-4">
        <div className="h-10  bg-white w-10 text-center flex-none rounded-full">
          <Image src={UserImg} alt="" />
        </div>
        <div>
          <h5>Som</h5>
          <p className="text-gray-500">
            {" "}
            Create a job description for AI Engineer with 3+ Years Exp, Tokyo
            Location:
          </p>
        </div>
      </div>
      <div className="flex items-start gap-4 p-4">
        <div className="h-10 border bg-white w-10 p-2 text-center flex-none rounded-full">
          <svg
            width="30"
            height="30"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.05423 38.5953C2.26285 38.5953 0 36.3324 0 33.541V9.60377C0 4.32224 4.28153 0.0408398 9.56306 0.0407116V0.0407116C12.9477 0.0406295 14.7126 0.0406295 18.1784 0.0406295C22.9046 0.0406295 27.8605 -0.337168 30.4861 1.21132C33.1118 2.70986 33.7436 3.7027 34.7938 6.40007C35.3794 7.9039 35.6127 9.70323 35.7046 11.6244C35.8028 13.6795 35.8519 14.7071 35.5869 15.9643C35.3218 17.2214 34.7653 18.3352 33.6524 20.5628L33.5631 20.7415L31.7169 23.6684L29.5631 26.8879L26.7938 30.4001V30.4001C26.027 31.7075 24.0246 31.1636 24.0246 29.6479V17.6907C24.0246 15.293 23.8146 13.3699 23.3945 11.9213C22.9744 10.4727 22.2392 9.42374 21.1889 8.77437C20.1912 8.12501 18.7733 7.80032 16.9354 7.80032C16.0952 7.80032 15.1237 7.84313 14.1784 7.94303C13.2332 8.04293 12.64 7.94303 12.64 8.77437V23.1625V29.8359C12.64 31.7446 12.0072 33.5994 10.8406 35.1101V35.1101C10.3847 35.7005 9.85414 36.2293 9.26222 36.6833L8.13009 37.5516C7.24756 38.2284 6.16642 38.5953 5.05423 38.5953V38.5953Z"
              fill="url(#paint0_radial_1133_3600)"
            />
            <defs>
              <radialGradient
                id="paint0_radial_1133_3600"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(2.15385 2.38205) rotate(30.6064) scale(47.2182 40.6679)"
              >
                <stop stopColor="#1B4FF9" />
                <stop offset="0.299737" stopColor="#1845D9" />
                <stop offset="0.777945" stopColor="#0A1D5C" />
                <stop offset="1" stopColor="#2393FA" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div>
          <h5>Brytt</h5>
          <p className="text-gray-500">
            Please provide the job title for the role you want to open.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-4 p-4">
        <div className="h-10  bg-white w-10 text-center flex-none rounded-full">
          <Image src={UserImg} alt="" />
        </div>
        <div>
          <h5>Som</h5>
          <p className="text-gray-500">
            {" "}
            Great! I will ask you a few quetions to gather context about the AI
            Engineer role you are hiring for. The information will help me
            answer candidate questions and get the them excited about the role.
          </p>
          <p className="text-gray-500">
            Feel Free to provide as much information as your like and skip any
            questions you do not want to answer.
          </p>
          <ol className="text-gray-500">
            <li>
              1. Are there any work location policy? Is it a Full time remote or
              Hybrid or work from office position?
            </li>
          </ol>
        </div>
      </div>
      <div className="flex items-start gap-4 p-4">
        <div className="h-10  bg-white w-10 text-center flex-none rounded-full">
          <Image src={UserImg} alt="" />
        </div>
        <div>
          <h5>Som</h5>
          <p className="text-gray-500">Full time remote position</p>
        </div>
      </div>
      <div className="flex items-start gap-4 p-4">
        <div className="h-10  bg-white w-10 text-center flex-none rounded-full">
          <Image src={UserImg} alt="" />
        </div>
        <div>
          <h5>Som</h5>
          <p className="text-gray-500">
            No, To be good at ML/ DL with tools and techniques.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-4 p-4">
        <div className="h-10 border bg-white w-10 p-2 text-center flex-none rounded-full">
          <svg
            width="30"
            height="30"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.05423 38.5953C2.26285 38.5953 0 36.3324 0 33.541V9.60377C0 4.32224 4.28153 0.0408398 9.56306 0.0407116V0.0407116C12.9477 0.0406295 14.7126 0.0406295 18.1784 0.0406295C22.9046 0.0406295 27.8605 -0.337168 30.4861 1.21132C33.1118 2.70986 33.7436 3.7027 34.7938 6.40007C35.3794 7.9039 35.6127 9.70323 35.7046 11.6244C35.8028 13.6795 35.8519 14.7071 35.5869 15.9643C35.3218 17.2214 34.7653 18.3352 33.6524 20.5628L33.5631 20.7415L31.7169 23.6684L29.5631 26.8879L26.7938 30.4001V30.4001C26.027 31.7075 24.0246 31.1636 24.0246 29.6479V17.6907C24.0246 15.293 23.8146 13.3699 23.3945 11.9213C22.9744 10.4727 22.2392 9.42374 21.1889 8.77437C20.1912 8.12501 18.7733 7.80032 16.9354 7.80032C16.0952 7.80032 15.1237 7.84313 14.1784 7.94303C13.2332 8.04293 12.64 7.94303 12.64 8.77437V23.1625V29.8359C12.64 31.7446 12.0072 33.5994 10.8406 35.1101V35.1101C10.3847 35.7005 9.85414 36.2293 9.26222 36.6833L8.13009 37.5516C7.24756 38.2284 6.16642 38.5953 5.05423 38.5953V38.5953Z"
              fill="url(#paint0_radial_1133_3600)"
            />
            <defs>
              <radialGradient
                id="paint0_radial_1133_3600"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(2.15385 2.38205) rotate(30.6064) scale(47.2182 40.6679)"
              >
                <stop stopColor="#1B4FF9" />
                <stop offset="0.299737" stopColor="#1845D9" />
                <stop offset="0.777945" stopColor="#0A1D5C" />
                <stop offset="1" stopColor="#2393FA" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div>
          <h5>Brytt</h5>
          <p className="text-gray-500">
            Thank you, Please review this draft and let me know if there any
            changes you would like to make
          </p>
          <div className="py-4">
            <JobCard />
          </div>
          <div className="flex items-center gap-4">
            <Button
              asChild
              variant="secondary"
              className="rounded-3xl text-gray-500 border"
            >
              <Link
                href="https://www.linkedin.com/feed/"
                target="_blank"
                className=" flex items-center"
              >
                {" "}
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path>
                  </svg>
                </div>
                Publish
              </Link>
            </Button>
            <Button
              asChild
              variant="secondary"
              className="rounded-3xl border  text-gray-500 flex items-center"
            >
              <Link href="/chat" className=" flex items-center">
                {" "}
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path>
                  </svg>
                </div>
                Start to source profiles
              </Link>
            </Button>
            <Button
              variant="secondary"
              className="rounded-3xl border   text-gray-500 flex items-center"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path>
                </svg>
              </div>
              Create a new Job description?
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
 */

/* import { Button } from "@/components/ui/button";
import { CirclePlus, CircleX } from "lucide-react";
import Link from "next/link";
import JobCard from "./jobcard";
import UserImg from "@/app/assets/img/sam.png";
import Image from "next/image";

export default function ChatView({ messages }) {
  return (
    <>
      {messages.map((message, index) => (
        <div key={index} className="flex items-start gap-4 p-4">
          <div className="h-10 bg-white w-10 text-center flex-none rounded-full">
            {message.isUser ? (
              <Image src={UserImg} alt="" />
            ) : (
              <svg
                width="30"
                height="30"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.05423 38.5953C2.26285 38.5953 0 36.3324 0 33.541V9.60377C0 4.32224 4.28153 0.0408398 9.56306 0.0407116V0.0407116C12.9477 0.0406295 14.7126 0.0406295 18.1784 0.0406295C22.9046 0.0406295 27.8605 -0.337168 30.4861 1.21132C33.1118 2.70986 33.7436 3.7027 34.7938 6.40007C35.3794 7.9039 35.6127 9.70323 35.7046 11.6244C35.8028 13.6795 35.8519 14.7071 35.5869 15.9643C35.3218 17.2214 34.7653 18.3352 33.6524 20.5628L33.5631 20.7415L31.7169 23.6684L29.5631 26.8879L26.7938 30.4001V30.4001C26.027 31.7075 24.0246 31.1636 24.0246 29.6479V17.6907C24.0246 15.293 23.8146 13.3699 23.3945 11.9213C22.9744 10.4727 22.2392 9.42374 21.1889 8.77437C20.1912 8.12501 18.7733 7.80032 16.9354 7.80032C16.0952 7.80032 15.1237 7.84313 14.1784 7.94303C13.2332 8.04293 12.64 7.94303 12.64 8.77437V23.1625V29.8359C12.64 31.7446 12.0072 33.5994 10.8406 35.1101V35.1101C10.3847 35.7005 9.85414 36.2293 9.26222 36.6833L8.13009 37.5516C7.24756 38.2284 6.16642 38.5953 5.05423 38.5953V38.5953Z"
                  fill="url(#paint0_radial_1133_3600)"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_1133_3600"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(2.15385 2.38205) rotate(30.6064) scale(47.2182 40.6679)"
                  >
                    <stop stopColor="#1B4FF9" />
                    <stop offset="0.299737" stopColor="#1845D9" />
                    <stop offset="0.777945" stopColor="#0A1D5C" />
                    <stop offset="1" stopColor="#2393FA" />
                  </radialGradient>
                </defs>
              </svg>
            )}
          </div>
          <div>
            <h5>{message.isUser ? "Som" : "Brytt"}</h5>
            <p className="text-gray-500">{message.text}</p>
          </div>
        </div>
      ))}
    </>
  );
} */

/* import { Button } from "@/components/ui/button";
import { CirclePlus, CircleX } from "lucide-react";
import Link from "next/link";
import JobCard from "./jobcard";
import UserImg from "@/app/assets/img/sam.png";
import Image from "next/image";
import Markdown from 'react-markdown';

export default function ChatView({ messages })  {
  return (
  <>
    {messages.map((message, index) => (
      <div key={index} className="flex items-start gap-4 p-4">
        <div className="h-10 bg-white w-10 text-center flex-none rounded-full">
          {message.isUser ? (
            <Image src={UserImg} alt="User" />
          ) : (
            <svg
              width="30"
              height="30"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.05423 38.5953C2.26285 38.5953 0 36.3324 0 33.541V9.60377C0 4.32224 4.28153 0.0408398 9.56306 0.0407116V0.0407116C12.9477 0.0406295 14.7126 0.0406295 18.1784 0.0406295C22.9046 0.0406295 27.8605 -0.337168 30.4861 1.21132C33.1118 2.70986 33.7436 3.7027 34.7938 6.40007C35.3794 7.9039 35.6127 9.70323 35.7046 11.6244C35.8028 13.6795 35.8519 14.7071 35.5869 15.9643C35.3218 17.2214 34.7653 18.3352 33.6524 20.5628L33.5631 20.7415L31.7169 23.6684L29.5631 26.8879L26.7938 30.4001V30.4001C26.027 31.7075 24.0246 31.1636 24.0246 29.6479V17.6907C24.0246 15.293 23.8146 13.3699 23.3945 11.9213C22.9744 10.4727 22.2392 9.42374 21.1889 8.77437C20.1912 8.12501 18.7733 7.80032 16.9354 7.80032C16.0952 7.80032 15.1237 7.84313 14.1784 7.94303C13.2332 8.04293 12.64 7.94303 12.64 8.77437V23.1625V29.8359C12.64 31.7446 12.0072 33.5994 10.8406 35.1101V35.1101C10.3847 35.7005 9.85414 36.2293 9.26222 36.6833L8.13009 37.5516C7.24756 38.2284 6.16642 38.5953 5.05423 38.5953V38.5953Z"
                fill="url(#paint0_radial_1133_3600)"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_1133_3600"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(2.15385 2.38205) rotate(30.6064) scale(47.2182 40.6679)"
                >
                  <stop stopColor="#1B4FF9" />
                  <stop offset="0.299737" stopColor="#1845D9" />
                  <stop offset="0.777945" stopColor="#0A1D5C" />
                  <stop offset="1" stopColor="#2393FA" />
                </radialGradient>
              </defs>
            </svg>
          )}
        </div>
        <div>
          <h5>{message.isUser ? "Som" : "Brytt"}</h5>
          <p className="text-gray-500 white-space-pre-line"><Markdown>{message.text}</Markdown></p>
         
          
        </div>
      </div>
    ))}
  </>
);
} */

"use client"
import Image from "next/image";
import UserImg from "@/app/assets/img/sam.png";
import Markdown from 'react-markdown';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";


export default function ChatView({ messages, onPublish, onHandleSource, isLoading, setIsLoading }) {
  const lastMessage = messages[messages.length - 1];
  const showButtons = lastMessage && lastMessage.text.includes('職務記述書:');
  const showButtons2 = lastMessage && lastMessage.text.includes('仕事は無事に公開された！');
  const handlePublishClick = () => {
    // Ensure that onPublish is a function before calling it
    if (typeof onPublish === "function") {
      onPublish(lastMessage);
    } else {
      console.error('onPublish is not a function');
    }
  };

  


  return (
    <div className="chat-view-container">
      <div className="flex items-start gap-4 p-4">
      <div className="h-10 bg-white w-10 text-center flex-none rounded-full">
            
              <svg
                width="30"
                height="30"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.05423 38.5953C2.26285 38.5953 0 36.3324 0 33.541V9.60377C0 4.32224 4.28153 0.0408398 9.56306 0.0407116V0.0407116C12.9477 0.0406295 14.7126 0.0406295 18.1784 0.0406295C22.9046 0.0406295 27.8605 -0.337168 30.4861 1.21132C33.1118 2.70986 33.7436 3.7027 34.7938 6.40007C35.3794 7.9039 35.6127 9.70323 35.7046 11.6244C35.8028 13.6795 35.8519 14.7071 35.5869 15.9643C35.3218 17.2214 34.7653 18.3352 33.6524 20.5628L33.5631 20.7415L31.7169 23.6684L29.5631 26.8879L26.7938 30.4001V30.4001C26.027 31.7075 24.0246 31.1636 24.0246 29.6479V17.6907C24.0246 15.293 23.8146 13.3699 23.3945 11.9213C22.9744 10.4727 22.2392 9.42374 21.1889 8.77437C20.1912 8.12501 18.7733 7.80032 16.9354 7.80032C16.0952 7.80032 15.1237 7.84313 14.1784 7.94303C13.2332 8.04293 12.64 7.94303 12.64 8.77437V23.1625V29.8359C12.64 31.7446 12.0072 33.5994 10.8406 35.1101V35.1101C10.3847 35.7005 9.85414 36.2293 9.26222 36.6833L8.13009 37.5516C7.24756 38.2284 6.16642 38.5953 5.05423 38.5953V38.5953Z"
                  fill="url(#paint0_radial_1133_3600)"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_1133_3600"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(2.15385 2.38205) rotate(30.6064) scale(47.2182 40.6679)"
                  >
                    <stop stopColor="#1B4FF9" />
                    <stop offset="0.299737" stopColor="#1845D9" />
                    <stop offset="0.777945" stopColor="#0A1D5C" />
                    <stop offset="1" stopColor="#2393FA" />
                  </radialGradient>
                </defs>
              </svg>
          </div>
          <div className="w-full">
            <h5>Brytt</h5>
            <Markdown className="prose prose-lg max-w-none whitespace-pre-line"
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}>こんにちは、私はブレットです。</Markdown >
          </div>
          </div>
      {messages.map((message, index) => (
        <div key={index} className="flex items-start gap-4 p-4">
          <div className="h-10 bg-white w-10 text-center flex-none rounded-full">
            {message.isUser ? (
              <Image src={UserImg} alt="User" />
            ) : (
              <svg
                width="30"
                height="30"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.05423 38.5953C2.26285 38.5953 0 36.3324 0 33.541V9.60377C0 4.32224 4.28153 0.0408398 9.56306 0.0407116V0.0407116C12.9477 0.0406295 14.7126 0.0406295 18.1784 0.0406295C22.9046 0.0406295 27.8605 -0.337168 30.4861 1.21132C33.1118 2.70986 33.7436 3.7027 34.7938 6.40007C35.3794 7.9039 35.6127 9.70323 35.7046 11.6244C35.8028 13.6795 35.8519 14.7071 35.5869 15.9643C35.3218 17.2214 34.7653 18.3352 33.6524 20.5628L33.5631 20.7415L31.7169 23.6684L29.5631 26.8879L26.7938 30.4001V30.4001C26.027 31.7075 24.0246 31.1636 24.0246 29.6479V17.6907C24.0246 15.293 23.8146 13.3699 23.3945 11.9213C22.9744 10.4727 22.2392 9.42374 21.1889 8.77437C20.1912 8.12501 18.7733 7.80032 16.9354 7.80032C16.0952 7.80032 15.1237 7.84313 14.1784 7.94303C13.2332 8.04293 12.64 7.94303 12.64 8.77437V23.1625V29.8359C12.64 31.7446 12.0072 33.5994 10.8406 35.1101V35.1101C10.3847 35.7005 9.85414 36.2293 9.26222 36.6833L8.13009 37.5516C7.24756 38.2284 6.16642 38.5953 5.05423 38.5953V38.5953Z"
                  fill="url(#paint0_radial_1133_3600)"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_1133_3600"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(2.15385 2.38205) rotate(30.6064) scale(47.2182 40.6679)"
                  >
                    <stop stopColor="#1B4FF9" />
                    <stop offset="0.299737" stopColor="#1845D9" />
                    <stop offset="0.777945" stopColor="#0A1D5C" />
                    <stop offset="1" stopColor="#2393FA" />
                  </radialGradient>
                </defs>
              </svg>
            )}
          </div>
          <div className="w-full">
            <h5>{message.isUser ? "Som" : "Brytt"}</h5>
            <Markdown className="prose prose-lg max-w-none whitespace-pre-line"
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}>{message.text}</Markdown >
          </div>
        </div>

      ))}
      {/* Show buttons only if the last message has type 'description' */}
      <div className="flex items-center gap-4 mt-4">
        {showButtons && (
          <Button
            onClick={handlePublishClick}
            variant="secondary"
            className="rounded-3xl text-gray-500 border"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path>
              </svg>
            </div>
            出版
            {/* </Link> */}
          </Button>
        )}
        {(showButtons || showButtons2) && (
          <Button
            onClick={onHandleSource}
            variant="secondary"
            className="rounded-3xl text-gray-500 border"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path>
              </svg>
            </div>
            プロフィールの調達開始
          </Button>
        )}

        {/* <Button
          variant="secondary"
          className="rounded-3xl border text-gray-500 flex items-center"
          onClick={onGenerateJobDescription}
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path>
            </svg>
          </div>
          Create a new Job description?
        </Button> */}
      </div>


    </div>
  );
}