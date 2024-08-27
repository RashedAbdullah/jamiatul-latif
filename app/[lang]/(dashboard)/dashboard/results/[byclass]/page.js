import DashboardResultTable from "../_components/dashboard-result-table";

const DashboardResultPageByClass = async ({ params: { byclass } }) => {
  return (
    <div>
      <DashboardResultTable id={byclass} />
    </div>
  );
};

export default DashboardResultPageByClass;
