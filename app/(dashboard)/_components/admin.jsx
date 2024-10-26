import { getUserWithRole } from "@/utils/user-with-role";

const AdminDetails = async () => {
  const user = await getUserWithRole();
  return (
    <div>
      <p>এডমিন: {user?.name}</p>
    </div>
  );
};

export default AdminDetails;
