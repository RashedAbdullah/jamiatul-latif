import { getOpinions } from "@/actions/opinion";
import SubTitle from "@/components/sub-title";

const DashOpions = async () => {
  const opinions = await getOpinions();

  return (
    <div className="container">
      <SubTitle>মতামত সমূহ</SubTitle>
      <div className="grid grid-cols-4 gap-2 p-2">
        {opinions.map((opinion) => (
          <div key={opinion} className="bg-white shadow col-span-1 p-2">
            <div className="py-2 border-b">
              <p>{opinion.opinion}</p>
            </div>
            <div className="text-sm py-2 grid grid-cols-10">
              <h2 className="col-span-2">নাম: </h2>
              <h3 className="col-span-7">{opinion.name}</h3>
              <p className="col-span-2">ঠিকানা: </p>
              <p className="col-span-7">{opinion.address}</p>
              <p className="col-span-2">যোগাযোগ: </p>
              <p className="col-span-7">{opinion.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashOpions;
