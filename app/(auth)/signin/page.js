import SigninForm from "@/components/auth/signin-form";

const SignInPage = () => {
  return (
    <div className="contain py-16">
      <div className="max-w-lg mx-auto px-6 py-20 overflow-hidden">
        <SigninForm />
      </div>
    </div>
  );
};

export default SignInPage;
