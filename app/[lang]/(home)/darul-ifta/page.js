import IftaThumbnail from "@/components/darul-ifta/fatwa-header";
import GetFatwaByCategory from "@/components/darul-ifta/get-fatwa-by-category";

const DarulIftaPage = () => {
  return (
    <div className="container">
      {/* <IftaThumbnail /> */}
      <GetFatwaByCategory />
    </div>
  );
};

export default DarulIftaPage;
