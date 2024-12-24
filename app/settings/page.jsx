import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import CommonHeader from "@/components/common/header";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import IndividualProfileTab from "@/components/common/profile/IndividualProfileTab";
import IntegrationsProfileTab from "@/components/common/profile/IntegrationsProfileTab";
import UploadProfileTab from "@/components/common/profile/uploadProfileTab";
export default function Page() {
  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "4.4rem",
      }}
    >
      <AppSidebar />
      <SidebarInset>
        <div className="w-full bg-gray-50">
          <div className="rounded-lg border-0 h-screen bg-gray-100 dark:border-gray-800 dark:bg-gray-950">
            <Tabs defaultValue="individual" orientation="vertical">
              <div className="grid grid-cols-[200px_1fr] gap-0">
                <div className="h-screen bg-white w-full border-s p-6">
                  <TabsList className="flex bg-transparent justify-start flex-col">
                    <TabsTrigger
                      value="individual"
                      className="data-[state=active]:bg-gray-900 w-full data-[state=active]:text-white  data-[state=active]:border-gray-900"
                    >
                      Individual Profile
                    </TabsTrigger>
                    <TabsTrigger
                      value="integrations"
                      className="data-[state=active]:bg-gray-900 w-full data-[state=active]:text-white  data-[state=active]:border-gray-900 "
                    >
                      Integrations
                    </TabsTrigger>
                    <TabsTrigger
                      value="upload"
                      className="data-[state=active]:bg-gray-900 w-full data-[state=active]:text-white  data-[state=active]:border-gray-900 "
                    >
                      Upload Resumes
                    </TabsTrigger>
                  </TabsList>
                </div>

                <div className="border border-t-0 border-r-0 border-b-0 shadow-sm dark:border-gray-800 dark:bg-gray-950">
                  <CommonHeader />
                  <TabsContent value="individual" className="px-6">
                    <IndividualProfileTab />
                  </TabsContent>
                  <TabsContent value="integrations" className="px-6">
                    <IntegrationsProfileTab />
                  </TabsContent>
                  <TabsContent value="upload" className="px-6">
                    <UploadProfileTab />
                  </TabsContent>
                </div>
              </div>
            </Tabs>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
