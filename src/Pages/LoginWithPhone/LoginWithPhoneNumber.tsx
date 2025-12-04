import { Button } from "@/components/ui/button";
import { auth } from "@/config/firebase.config";
import { useLoginWithPhoneMutation } from "@/Redux/features/user/user.api";
import { RecaptchaVerifier, signInWithPhoneNumber, type ConfirmationResult } from "firebase/auth";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router";
import { toast } from "sonner";

const LoginWithPhoneNumber = () => {
  const [loginWithPhone] = useLoginWithPhoneMutation();
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [user, setUser] = useState<ConfirmationResult | null>(null);
  const handleSendOtp = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!phone) return toast.error("Enter a valid phone number");

      const formattedPhone = phone.startsWith("+") ? phone : `+${phone}`;

      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", { size: "invisible" });

      const confirmation = await signInWithPhoneNumber(auth, formattedPhone, recaptcha);
      setUser(confirmation);
      console.log("OTP sent:", confirmation);
      setOtpSent(true);
      toast.success("OTP sent successfully!");
    } catch (error: any) {
      console.error(error);
      toast.error(error.message || "Failed to send OTP");
    }
  };
  console.log("Phonnnn", phone);
  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp) return toast.error("Enter OTP");

    if (!user) return toast.error("No OTP session found");

    try {
      // Confirm the OTP
      const result = await user.confirm(otp);

      const firebaseUser = result.user;

      console.log("Phone verified, user:", firebaseUser);

      // You can get Firebase ID token if needed
      // const idToken = await firebaseUser.getIdToken();
      // console.log("Firebase ID token:", idToken);
      if (firebaseUser) {
        const userInfo = { phone };
        const response = await loginWithPhone(userInfo).unwrap();
        console.log("Final Response",response)
        if (response.success) {
          toast.success("Phone number verified successfully!");
          navigate("/profile");
        }
      }

      // Reset form or redirect user
      setOtpSent(false);
      setOtp("");
      setPhone("");
      setUser(null);
    } catch (error: any) {
      console.error(error);
      toast.error(error.message || "OTP verification failed");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-sm bg-gray-50">
      <h1 className="text-2xl font-bold mb-6 text-center">Login with Phone</h1>

      <form onSubmit={otpSent ? handleVerifyOtp : handleSendOtp} className="space-y-4">
        <div>
          <label className="font-medium mb-1 block">Phone Number</label>
          <PhoneInput country={"bd"} value={phone} onChange={(value) => setPhone(value)} inputClass="w-full p-2 border rounded" />
          <div id="recaptcha"></div>
        </div>

        {otpSent && (
          <div>
            <label className="font-medium mb-1 block">Enter OTP</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className="w-full p-2 border rounded"
            />
          </div>
        )}

        <Button type="submit" className="w-full mt-2">
          {otpSent ? "Verify OTP" : "Send OTP"}
        </Button>
      </form>
    </div>
  );
};

export default LoginWithPhoneNumber;
