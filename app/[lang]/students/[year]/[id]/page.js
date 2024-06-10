import StudentsCard from "@/components/students/students-card";
import SubTitle from "@/components/sub-title";

const SingleStudentPage = () => {
  return (
    <div className="container my-5">
      <div className="grid lg:grid-cols-12 gap-4">
        <div className="col-span-3">
          <StudentsCard />
        </div>
        <div id="tableOfResult" className="col-span-9">
          <SubTitle>নাম্বারপত্র</SubTitle>
          <div class="relative overflow-x-auto shadow">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3 text-nowrap">
                    পরীক্ষা
                  </th>
                  <th scope="col" class="px-6 py-3 text-nowrap">
                    শরহে বেকায়া ১ম
                  </th>
                  <th scope="col" class="px-6 py-3 text-nowrap">
                    শরহে বেকায়া ২য়
                  </th>
                  <th scope="col" class="px-6 py-3 text-nowrap">
                    নুরুল আনওয়ার
                  </th>
                  <th scope="col" class="px-6 py-3 text-nowrap">
                    মুখতাসারুল মাআনী
                  </th>
                  <th scope="col" class="px-6 py-3 text-nowrap">
                    শরহে বেকায়া ১ম
                  </th>
                  <th scope="col" class="px-6 py-3 text-nowrap">
                    শরহে বেকায়া ২য়
                  </th>
                  <th scope="col" class="px-6 py-3 text-nowrap">
                    নুরুল আনওয়ার
                  </th>
                  <th scope="col" class="px-6 py-3 text-nowrap">
                    মুখতাসারুল মাআনী
                  </th>
                  <th scope="col" class="px-6 py-3 text-nowrap">
                    গড় নাম্বার
                  </th>
                  <th scope="col" class="px-6 py-3 text-nowrap">
                    মোট নাম্বার
                  </th>
                  <th scope="col" class="px-6 py-3 text-nowrap">
                    মান
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    প্রথম সাময়ীক পরীক্ষা
                  </th>
                  <td class="px-6 py-4">৭৬</td>
                  <td class="px-6 py-4">৭৬</td>
                  <td class="px-6 py-4 text-red-500">23</td>
                  <td class="px-6 py-4">৮৯</td>
                  <td class="px-6 py-4">৭৬</td>
                  <td class="px-6 py-4">৭৬</td>
                  <td class="px-6 py-4">৭৮</td>
                  <td class="px-6 py-4">৮৯</td>
                  <td class="px-6 py-4">৭৬.৭</td>
                  <td class="px-6 py-4">৫৭৮</td>
                  <td class="px-6 py-4">মুমতাজ</td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    ২য় সাময়ীক পরীক্ষা
                  </th>
                  <td class="px-6 py-4">৪৫</td>
                  <td class="px-6 py-4">৬৭</td>
                  <td class="px-6 py-4">৬৮</td>
                  <td class="px-6 py-4">৮৬</td>
                  <td class="px-6 py-4">৪৫</td>
                  <td class="px-6 py-4">৬৭</td>
                  <td class="px-6 py-4">৬৮</td>
                  <td class="px-6 py-4">৮৬</td>
                  <td class="px-6 py-4">৭৬.৭</td>
                  <td class="px-6 py-4">৫৭৮</td>
                  <td class="px-6 py-4">মুমতাজ</td>
                </tr>
                <tr class="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    ৩য় সাময়ীক পরীক্ষা
                  </th>
                  <td class="px-6 py-4">৮৭</td>
                  <td class="px-6 py-4">৭৮</td>
                  <td class="px-6 py-4">৭৮</td>
                  <td class="px-6 py-4">৬৭</td>
                  <td class="px-6 py-4">৪৫</td>
                  <td class="px-6 py-4">৬৭</td>
                  <td class="px-6 py-4">৬৮</td>
                  <td class="px-6 py-4">৮৬</td>
                  <td class="px-6 py-4">৭৬.৭</td>
                  <td class="px-6 py-4">৫৭৮</td>
                  <td class="px-6 py-4">মুমতাজ</td>
                </tr>
              </tbody>
            </table>
          </div>
          <SubTitle>সামগ্রিক মতামত</SubTitle>
          <div>
            আলতাফ সাহেব জামিয়াতুল লতিফের একজন সিনিয়র শিক্ষক। আরবি সাহিত্যে যার
            রয়েছে অগাধ পাণ্ডিত্য। আলতাফ সাহেব জামিয়াতুল লতিফের একজন সিনিয়র
            শিক্ষক। আরবি সাহিত্যে যার রয়েছে অগাধ পাণ্ডিত্য। আলতাফ সাহেব
            জামিয়াতুল লতিফের একজন সিনিয়র শিক্ষক। আরবি সাহিত্যে যার রয়েছে অগাধ
            সিনিয়র শিক্ষক। আলতাফ সাহেব জামিয়াতুল লতিফের একজন সিনিয়র শিক্ষক। আরবি
            সাহিত্যে যার রয়েছে অগাধ পাণ্ডিত্য। আলতাফ সাহেব জামিয়াতুল লতিফের একজন
            সিনিয়র শিক্ষক। আরবি সাহিত্যে যার রয়েছে অগাধ পাণ্ডিত্য। আলতাফ সাহেব
            জামিয়াতুল লতিফের একজন সিনিয়র শিক্ষক। আরবি সাহিত্যে যার রয়েছে অগাধ
            সিনিয়র শিক্ষক।
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleStudentPage;
