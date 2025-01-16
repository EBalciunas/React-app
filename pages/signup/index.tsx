import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import SignupForm from "@/components/SignupForm/SignupForm";

const SigninPage = () => {
  return (
    <div>
      <Header />
      <SignupForm
        onSwitchToLogin={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <Footer />
    </div>
  );
};

export default SigninPage;
