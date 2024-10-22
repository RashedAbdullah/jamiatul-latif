import { getFatwas } from "@/actions/fatwa";
import FatwaCategories from "./_components/fatwa-categories";
import FatwaCard from "./_components/fatwa-catd";
import PageTitle from "@/components/page-title";

const DarulIftaPage = async () => {
  const fatwas = await getFatwas();

  return (
    <>
      {/* Page Title */}
      <head>
        <title>দারুল ইফতা | আপনার প্রশ্নের উত্তর</title>
        <meta
          name="description"
          content="ফতোয়া কেন্দ্র - আপনার প্রশ্নের উত্তর এবং তথ্যের জন্য একটি উত্স"
        />
      </head>

      <div className="container mx-auto px-4 py-8">
        <PageTitle>দারুল ইফতা</PageTitle>
        <h2 className="text-xl pb-4 text-center font-semibold">
          আপনার প্রশ্নের উত্তর
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Fatwa List */}
          <div className="md:col-span-8 space-y-6">
            {fatwas.length > 0 ? (
              fatwas.map((fatwa) => (
                <article
                  key={fatwa.id}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200"
                >
                  <FatwaCard fatwa={fatwa} />
                </article>
              ))
            ) : (
              <div className="text-center py-36 text-gray-400">
                <p>এই ক্যাটাগরির কোন ফতোয়া পাওয়া যায় নি।</p>
              </div>
            )}
          </div>

          {/* Sidebar with Categories */}
          <aside className="md:col-span-4 bg-gray-50 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-700">
              ফতোয়া ক্যাটাগরিসমূহ
            </h2>
            <FatwaCategories />
          </aside>
        </div>
      </div>
    </>
  );
};

export default DarulIftaPage;
