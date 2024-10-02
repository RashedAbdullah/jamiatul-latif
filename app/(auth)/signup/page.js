import SignUpForm from "@/components/auth/signup-form";

const SignupPage = () => {
  return (
    <div className="contain py-16">
      <div className="max-w-lg mx-auto shadow px-6 py-7 overflow-hidden">
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignupPage;
