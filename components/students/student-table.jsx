import { getEngToBnNumber } from "@/utils/number-converter";

const StudentResultTable = ({ results }) => {
  return (
    <div className="relative overflow-x-auto shadow">
      <table className="min-w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 text-nowrap bg-gray-200">
              পরীক্ষা
            </th>
            {results[0].numbers.map((book) => (
              <th
                key={book.book}
                scope="col"
                className="px-6 py-3 text-nowrap bg-gray-200"
              >
                {book.book}
              </th>
            ))}

            <th scope="col" className="px-6 py-3 text-nowrap bg-gray-200">
              মোট নাম্বার
            </th>
            <th scope="col" className="px-6 py-3 text-nowrap bg-gray-200">
              গড় নাম্বার
            </th>
            <th scope="col" className="px-6 py-3 text-nowrap bg-gray-200">
              মান
            </th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => (
            <tr
              key={result.examName}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white bg-gray-200 border-t border-gray-400"
              >
                {result.examName}
              </th>
              {result.numbers.map((number) => (
                <td
                  key={number.book}
                  className={`px-6 py-4 ${
                    number.number < 35 && "text-red-500"
                  }`}
                >
                  {getEngToBnNumber(number.number)}
                </td>
              ))}

              <td className="px-6 py-4">৫৭৮</td>
              <td className="px-6 py-4">৭৬.৭</td>
              <td className="px-6 py-4">মুমতাজ</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentResultTable;
