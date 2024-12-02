// import { Calendar, Home, Inbox, Search, Settings,Command } from "lucide-react"
import {
  Messages1,
  Home,
  Calendar,
  SearchNormal1,
  Settings,
  Command,
} from "iconsax-react";
import Link from 'next/link'
import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Messages1,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: SearchNormal1,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="z-20">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              asChild
              className="md:h-8 justify-center md:p-0"
            >
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 70.2618V18.8064C18 18.6563 18.007 18.5079 18.0208 18.3596C18.1875 16.6465 19.5332 7.50547 28.7841 14.7621C38.957 22.7411 40.4277 28.3501 41.2854 35.2059C41.9539 40.5499 41.841 58.7667 41.7594 66.5443C41.7351 68.7942 43.3342 70.7245 45.5202 71.0742C47.8486 71.4468 51.1788 71.4804 54.1548 70.7757C57.1377 70.0693 61.1416 68.1373 60.8343 61.0943C60.6902 57.7883 56.2991 56.2112 53.4811 58.0196C50.6631 59.828 45.0861 60.0135 44.4732 54.9025C43.8603 49.7916 45.9439 44.6807 55.5647 39.9424C65.1855 35.2041 79.7095 39.5062 82.1612 53.2195C84.6128 66.9328 81.9164 82.8272 71.0697 85.1337C60.2231 87.4401 37.4274 87.3783 31.1767 86.1933C24.9261 85.0083 19.1651 78.8589 18.4306 73.8522C18.1858 72.1798 18.0712 71.1678 18.026 70.7334C18.0104 70.5762 18.0017 70.4208 18.0017 70.2618H18Z" fill="#A6AEBF"/>
</svg>

                </div>
                <div className="flex-1 text-center text-sm hidden leading-tight">
                  <span className="truncate font-semibold">Acme Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
         
            <SidebarMenu className="gap-6">
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a
                    href="/chatview"
                    className="px-2.5 py-4 justify-center md:px-4"
                  >
                    {/* <item.icon size={32} color='#334155' /> */}
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.02 2.83992L3.63 7.03992C2.73 7.73992 2 9.22992 2 10.3599V17.7699C2 20.0899 3.89 21.9899 6.21 21.9899H17.79C20.11 21.9899 22 20.0899 22 17.7799V10.4999C22 9.28992 21.19 7.73992 20.2 7.04992L14.02 2.71992C12.62 1.73992 10.37 1.78992 9.02 2.83992Z"
                        stroke="#292D32"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 17.99V14.99"
                        stroke="#292D32"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    {/* <span>{item.title}</span> */}
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild >
                  <a href="" className="px-2.5 py-4 justify-center md:px-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.98 10.79V14.79C17.98 15.05 17.97 15.3 17.94 15.54C17.71 18.24 16.12 19.58 13.19 19.58H12.79C12.54 19.58 12.3 19.7 12.15 19.9L10.95 21.5C10.42 22.21 9.56 22.21 9.03 21.5L7.82999 19.9C7.69999 19.73 7.41 19.58 7.19 19.58H6.79001C3.60001 19.58 2 18.79 2 14.79V10.79C2 7.86001 3.35001 6.27001 6.04001 6.04001C6.28001 6.01001 6.53001 6 6.79001 6H13.19C16.38 6 17.98 7.60001 17.98 10.79Z"
                        stroke="#051036"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.98 6.79001V10.79C21.98 13.73 20.63 15.31 17.94 15.54C17.97 15.3 17.98 15.05 17.98 14.79V10.79C17.98 7.60001 16.38 6 13.19 6H6.79004C6.53004 6 6.28004 6.01001 6.04004 6.04001C6.27004 3.35001 7.86004 2 10.79 2H17.19C20.38 2 21.98 3.60001 21.98 6.79001Z"
                        stroke="#051036"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.4955 13.25H13.5045"
                        stroke="#051036"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.9955 13.25H10.0045"
                        stroke="#051036"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.4955 13.25H6.5045"
                        stroke="#051036"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a
                    href="/pipeline"
                    className="px-2.5 py-4 justify-center md:px-4"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.2969 17.822H23.0526V12.1602C23.0526 10.4446 21.6569 9.04892 19.9413 9.04892H14.2795V8.8948C14.2795 8.50648 13.9647 8.19167 13.5764 8.19167H10.4236C10.0353 8.19167 9.72047 8.50648 9.72047 8.8948V9.08488H6.8138V6.1782H7.16742C7.55573 6.1782 7.87055 5.86339 7.87055 5.47508V2.32227C7.87055 1.93395 7.55573 1.61914 7.16742 1.61914H0.703125C0.314812 1.61914 0 1.93395 0 2.32227V5.47508C0 5.86339 0.314812 6.1782 0.703125 6.1782H0.947438V11.84C0.947438 13.5555 2.34314 14.9512 4.05872 14.9512H9.72047V15.3591C9.72047 15.7474 10.0353 16.0622 10.4236 16.0622H13.5764C13.9647 16.0622 14.2795 15.7474 14.2795 15.3591V14.9152H17.1862V17.822H16.8326C16.4443 17.822 16.1295 18.1368 16.1295 18.5251V21.6779C16.1295 22.0662 16.4443 22.381 16.8326 22.381H23.2969C23.6852 22.381 24 22.0662 24 21.6779V18.5251C24 18.1368 23.6852 17.822 23.2969 17.822ZM1.40625 3.02539H6.4643V4.77195H1.40625V3.02539ZM4.05872 13.545C3.11855 13.545 2.35369 12.7801 2.35369 11.84V6.1782H5.40755V9.788C5.40755 10.1763 5.72236 10.4911 6.11067 10.4911H9.72047V13.545H4.05872ZM12.8733 14.656H11.1267V9.59792H12.8733V14.656ZM17.8893 13.509H14.2795V10.4552H19.9413C20.8815 10.4552 21.6463 11.22 21.6463 12.1602V17.822H18.5925V14.2122C18.5925 13.8238 18.2776 13.509 17.8893 13.509ZM22.5938 20.9748H17.5357V19.2282H22.5938V20.9748Z"
                        fill="black"
                      />
                    </svg>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a
                    href="/jobcard"
                    className="px-2.5 py-4 justify-center md:px-4"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.96 6.16992C18.96 7.55992 20.34 9.76992 20.62 12.3199"
                        stroke="#292D32"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.49023 12.37C3.75023 9.82997 5.11023 7.61997 7.09023 6.21997"
                        stroke="#292D32"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.18994 20.9399C9.34994 21.5299 10.6699 21.8599 12.0599 21.8599C13.3999 21.8599 14.6599 21.5599 15.7899 21.0099"
                        stroke="#292D32"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.0598 7.69989C13.5951 7.69989 14.8398 6.45524 14.8398 4.91989C14.8398 3.38454 13.5951 2.13989 12.0598 2.13989C10.5244 2.13989 9.27979 3.38454 9.27979 4.91989C9.27979 6.45524 10.5244 7.69989 12.0598 7.69989Z"
                        stroke="#292D32"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.8298 19.9201C6.36516 19.9201 7.60981 18.6755 7.60981 17.1401C7.60981 15.6048 6.36516 14.3601 4.8298 14.3601C3.29445 14.3601 2.0498 15.6048 2.0498 17.1401C2.0498 18.6755 3.29445 19.9201 4.8298 19.9201Z"
                        stroke="#292D32"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19.1701 19.9201C20.7055 19.9201 21.9501 18.6755 21.9501 17.1401C21.9501 15.6048 20.7055 14.3601 19.1701 14.3601C17.6348 14.3601 16.3901 15.6048 16.3901 17.1401C16.3901 18.6755 17.6348 19.9201 19.1701 19.9201Z"
                        stroke="#292D32"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="" className="px-2.5 py-4 justify-center md:px-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 4H5V20H19V4ZM3 2.9918C3 2.44405 3.44749 2 3.9985 2H19.9997C20.5519 2 20.9996 2.44772 20.9997 3L21 20.9925C21 21.5489 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918ZM11.2929 13.1213L15.5355 8.87868L16.9497 10.2929L11.2929 15.9497L7.40381 12.0607L8.81802 10.6464L11.2929 13.1213Z"
                        fill="black"
                      />
                    </svg>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <Separator />
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="" className="px-2.5 py-4 justify-center md:px-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 10V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H14"
                        stroke="#292D32"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19.5 7C20.8807 7 22 5.88071 22 4.5C22 3.11929 20.8807 2 19.5 2C18.1193 2 17 3.11929 17 4.5C17 5.88071 18.1193 7 19.5 7Z"
                        stroke="#292D32"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.9965 11H16.0054"
                        stroke="#292D32"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.9955 11H12.0045"
                        stroke="#292D32"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.99451 11H8.00349"
                        stroke="#292D32"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a
                    href="/settings"
                    className="px-2.5 py-4 justify-center md:px-4"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                        stroke="#292D32"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z"
                        stroke="#292D32"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
           
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
      <SidebarGroupContent>
         
        
         <SidebarMenu className="gap-6">
           <SidebarMenuItem>
             <SidebarMenuButton asChild >
               <a href="" className="px-2.5 py-4 justify-center md:px-4">
                 <svg
                   width="24"
                   height="24"
                   viewBox="0 0 24 24"
                   fill="none"
                   xmlns="http://www.w3.org/2000/svg"
                 >
                   <path
                     d="M5 15V17C5 18.0544 5.81588 18.9182 6.85074 18.9945L7 19H10V21H7C4.79086 21 3 19.2091 3 17V15H5ZM18 10L22.4 21H20.245L19.044 18H14.954L13.755 21H11.601L16 10H18ZM17 12.8852L15.753 16H18.245L17 12.8852ZM8 2V4H12V11H8V14H6V11H2V4H6V2H8ZM17 3C19.2091 3 21 4.79086 21 7V9H19V7C19 5.89543 18.1046 5 17 5H14V3H17ZM6 6H4V9H6V6ZM10 6H8V9H10V6Z"
                     fill="#051036"
                   />
                 </svg>
               </a>
             </SidebarMenuButton>
           </SidebarMenuItem>
           <SidebarMenuItem>
             <SidebarMenuButton asChild>
               <Link
                 href="/"
                 className="px-2.5 py-4 justify-center md:px-4"
               >
                 <svg
                   width="24"
                   height="24"
                   viewBox="0 0 24 24"
                   fill="none"
                   xmlns="http://www.w3.org/2000/svg"
                 >
                   <path
                     d="M4 15H6V20H18V4H6V9H4V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V15ZM10 11V8L15 12L10 16V13H2V11H10Z"
                     fill="#051036"
                   />
                 </svg>
               </Link>
             </SidebarMenuButton>
           </SidebarMenuItem>
         </SidebarMenu>
       </SidebarGroupContent>
        </SidebarFooter>
    </Sidebar>
  );
}
