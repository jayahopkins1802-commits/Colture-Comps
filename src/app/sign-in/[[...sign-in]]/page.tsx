import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-slate-950 py-12">
      <SignIn routing="path" path="/sign-in" />
    </div>
  );
}
