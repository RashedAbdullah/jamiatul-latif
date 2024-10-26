const { getSingleUserByEmail } = require("@/actions/user");
const { auth } = require("@/auth");

export const getUserWithRole = async () => {
  const session = await auth();
  const user = await getSingleUserByEmail(session?.user?.email);

  if (user) {
    return {
      name: user.name,
      email: user.email,
      role: user.role,
    };
  } else {
    return false;
  }
};
