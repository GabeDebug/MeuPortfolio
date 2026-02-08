import ProfileSidebar from "@/components/ProfileSidebar";
import MainContent from "@/components/MainContent";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-4 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <ProfileSidebar />
          <MainContent />
        </div>
      </div>
    </div>
  );
};

export default Index;
