import { auth } from "@/auth";
import SignoutComp from "@/components/headers/signout";

const DashboardPage = async () => {
  const session = await auth();

  if (!session) {
    redirect("/signin");
  }

  return (
    <div>
      <div>
        <div>
        
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
