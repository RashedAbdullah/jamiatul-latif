import PageTitle from "@/components/page-title";
import BlogCard from "./_components/blog-card";

const BlogsPage = () => {
  return (
    <div className="container">
      <PageTitle>প্রবন্ধ সমূহ</PageTitle>
      <div className="mb-10 grid lg:grid-cols-3 md:grid-cols-2 justify-center gap-5">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default BlogsPage;
