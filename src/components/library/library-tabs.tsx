import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Button } from "../ui/button";
import { MyUploads } from "../uploads/my-uploads";
import { MySaved } from "../saved/my-saved";

export function LibraryTabs() {
  return (
    <div className="flex flex-col mx-auto container  items-start  justify-center">
      <Tabs className="flex w-full items-center ">
        <TabsList className="grid grid-cols-2 mb-6">
          <TabsTrigger value="tab1">Uploads</TabsTrigger>
          <TabsTrigger value="tab2">Saved</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <MyUploads />
        </TabsContent>
        <TabsContent value="tab2">
          <MySaved />
        </TabsContent>
      </Tabs>
    </div>
  );
}
