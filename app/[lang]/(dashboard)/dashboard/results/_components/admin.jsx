import { auth } from "@/auth";

const AdminDetails = async () => {
  const session = await auth();
  console.log(session);
  return (
    <div>
      <p>এডমিন: {session.user.name}</p>
    </div>
  );
};

export default AdminDetails;
