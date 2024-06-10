const StudentResultTable = () => {
  return (
    <div className="relative overflow-x-auto shadow">
      <table className="min-w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 text-nowrap">
              পরীক্ষা
            </th>
            <th scope="col" className="px-6 py-3 text-nowrap">
              শরহে বেকায়া ১ম
            </th>
            <th scope="col" className="px-6 py-3 text-nowrap">
              শরহে বেকায়া ২য়
            </th>
            <th scope="col" className="px-6 py-3 text-nowrap">
              নুরুল আনওয়ার
            </th>
            <th scope="col" className="px-6 py-3 text-nowrap">
              মুখতাসারুল মাআনী
            </th>
            <th scope="col" className="px-6 py-3 text-nowrap">
              শরহে বেকায়া ১ম
            </th>
            <th scope="col" className="px-6 py-3 text-nowrap">
              শরহে বেকায়া ২য়
            </th>
            <th scope="col" className="px-6 py-3 text-nowrap">
              নুরুল আনওয়ার
            </th>
            <th scope="col" className="px-6 py-3 text-nowrap">
              মুখতাসারুল মাআনী
            </th>
            <th scope="col" className="px-6 py-3 text-nowrap">
              গড় নাম্বার
            </th>
            <th scope="col" className="px-6 py-3 text-nowrap">
              মোট নাম্বার
            </th>
            <th scope="col" className="px-6 py-3 text-nowrap">
              মান
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              প্রথম সাময়ীক পরীক্ষা
            </th>
            <td className="px-6 py-4">৭৬</td>
            <td className="px-6 py-4">৭৬</td>
            <td className="px-6 py-4 bg-red-500 text-white">23</td>
            <td className="px-6 py-4">৮৯</td>
            <td className="px-6 py-4">৭৬</td>
            <td className="px-6 py-4">৭৬</td>
            <td className="px-6 py-4">৭৮</td>
            <td className="px-6 py-4">৮৯</td>
            <td className="px-6 py-4">৭৬.৭</td>
            <td className="px-6 py-4">৫৭৮</td>
            <td className="px-6 py-4">মুমতাজ</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              ২য় সাময়ীক পরীক্ষা
            </th>
            <td className="px-6 py-4">৪৫</td>
            <td className="px-6 py-4">৬৭</td>
            <td className="px-6 py-4">৬৮</td>
            <td className="px-6 py-4">৮৬</td>
            <td className="px-6 py-4">৪৫</td>
            <td className="px-6 py-4">৬৭</td>
            <td className="px-6 py-4">৬৮</td>
            <td className="px-6 py-4">৮৬</td>
            <td className="px-6 py-4">৭৬.৭</td>
            <td className="px-6 py-4">৫৭৮</td>
            <td className="px-6 py-4">মুমতাজ</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              ৩য় সাময়ীক পরীক্ষা
            </th>
            <td className="px-6 py-4">৮৭</td>
            <td className="px-6 py-4">৭৮</td>
            <td className="px-6 py-4">৭৮</td>
            <td className="px-6 py-4">৬৭</td>
            <td className="px-6 py-4">৪৫</td>
            <td className="px-6 py-4">৬৭</td>
            <td className="px-6 py-4">৬৮</td>
            <td className="px-6 py-4">৮৬</td>
            <td className="px-6 py-4">৭৬.৭</td>
            <td className="px-6 py-4">৫৭৮</td>
            <td className="px-6 py-4">মুমতাজ</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StudentResultTable;
