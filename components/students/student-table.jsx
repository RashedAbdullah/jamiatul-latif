import { getNumberValue } from "@/utils/get-student-value";
import { getEngToBnNumber } from "@/utils/number-converter";

const StudentResultTable = ({ results }) => {
  const examnNames = [
    "১ম সাময়ীক পরীক্ষা",
    "২য় সাময়ীক পরীক্ষা",
    "বার্ষিক পরীক্ষা",
  ];

  return (
    <div className="relative overflow-x-auto border-t shadow">
      {results.map((result, ind) => (
        <table
          key={result.examName}
          className="min-w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
        >
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 text-nowrap bg-gray-200">
                পরীক্ষা
              </th>
              {result.numbers.map((book) => (
                <th
                  key={book.book}
                  scope="col"
                  className="px-6 py-3 text-nowrap bg-gray-200 border-x border-gray-400"
                >
                  {book.book}
                </th>
              ))}

              <th scope="col" className="px-6 py-3 text-nowrap bg-gray-200">
                মোট নাম্বার
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-nowrap bg-gray-200 border-x border-gray-400"
              >
                গড় নাম্বার
              </th>
              <th scope="col" className="px-6 py-3 text-nowrap bg-gray-200">
                মান
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 w-full py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white bg-gray-200 border-y border-gray-400"
              >
                {examnNames[ind]}
              </th>
              {result.numbers.map((number) => (
                <td
                  key={number.number}
                  className={`px-6 py-4 border-x border-gray-400 ${
                    number.number < 35 && "bg-red-500 text-white"
                  }`}
                >
                  {getEngToBnNumber(number.number)}
                </td>
              ))}

              <td className="px-6 py-4">
                {getEngToBnNumber(
                  result.numbers.reduce((crr, prev) => (crr += prev.number), 0)
                )}
              </td>
              <td className="px-6 py-4 border-x border-gray-400">
                {getEngToBnNumber(
                  result.numbers.reduce(
                    (crr, prev) => (crr += prev.number),
                    0
                  ) / result.numbers.length
                )}
              </td>
              <td className="px-6 py-4 text-nowrap">
                {getNumberValue(result.numbers)}
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
};

export default StudentResultTable;
