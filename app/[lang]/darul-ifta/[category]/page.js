import GetFatwaByCategory from "@/components/darul-ifta/get-fatwa-by-category";

const FatwaCategoryPage = ({ params: { category } }) => {

  return (
    <div>
      <GetFatwaByCategory categoryName={category} />
    </div>
  );
};

export default FatwaCategoryPage;
