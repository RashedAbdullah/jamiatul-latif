import SignoutComp from "@/components/headers/signout";
import React from "react";

const UserById = ({ params: { userbyid } }) => {
  return <div>{userbyid.replaceAll("_", " ")}<SignoutComp/></div>;
};

export default UserById;
