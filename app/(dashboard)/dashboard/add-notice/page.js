import React from "react";
import { redirect } from "next/navigation";
import { createNotice } from "@/actions/notice";
import { getUserWithRole } from "@/utils/user-with-role";
import AddNoticeForm from "../../_components/add-notice-form";

const AddNoticePage = async () => {
  const user = await getUserWithRole();
  if (!user || user.role !== "teacher") {
    redirect("/dashboard");
  }
  const handleSubmitForm = async (formData) => {
    "use server";

    try {
      await createNotice(formData);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          নতুন নোটিশ যোগ করুন
        </h1>

        <AddNoticeForm onSubmitNotice={handleSubmitForm} />
      </div>
    </div>
  );
};

export default AddNoticePage;
