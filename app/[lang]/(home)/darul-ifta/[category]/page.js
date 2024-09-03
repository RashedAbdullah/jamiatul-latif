import GetFatwaByCategory from "@/components/darul-ifta/get-fatwa-by-category";

const FatwaCategoryPage = ({ params: { category } }) => {

  return (
    <div className="container">
      <GetFatwaByCategory categoryName={category} />
    </div>
  );
};

export default FatwaCategoryPage;
