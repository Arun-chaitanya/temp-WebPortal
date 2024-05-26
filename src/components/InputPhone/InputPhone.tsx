import React, { useEffect } from "react";
import PhoneInput, { isPossiblePhoneNumber, isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

type E164Number = string & { __tag: "E164Number" };

const InputPhone: React.FC<InputPhoneProps> = ({ mobileNumber, setMobileNumber, setIsGetOTPButtonDisabled }) => {
  useEffect(() => {
    if (mobileNumber) {
      if (isValidPhoneNumber(mobileNumber)) {
        setIsGetOTPButtonDisabled(false);
      } else {
        setIsGetOTPButtonDisabled(true);
      }
    }
  }, [mobileNumber]);

  function toE164Number(phone: string): E164Number {
    // Add validation logic here to ensure the phone number is in E.164 format.
    if (isValidE164(phone)) {
      return phone as E164Number;
    }
    throw new Error("Invalid E.164 phone number format");
  }
  
  function isValidE164(phone: string): boolean {
    const e164Regex = /^\+?[1-9]\d{1,14}$/;
    return e164Regex.test(phone);
  }

  return (
    <div className="relative">
      <PhoneInput
        placeholder="Enter phone number"
        value={toE164Number(mobileNumber)}
        onChange={(number) => setMobileNumber(number as string)}
        defaultCountry="IN"
        className="border bg-white rounded-xl py-8 px-6 text-2xl font-bold"
        error={
          mobileNumber
            ? isPossiblePhoneNumber(mobileNumber)
              ? undefined
              : "Invalid phone number"
            : "Phone number required"
        }
      />
    </div>
  );
};

export default InputPhone;

export interface InputPhoneProps {
  mobileNumber: string;
  setMobileNumber: React.Dispatch<React.SetStateAction<string>>;
  setIsGetOTPButtonDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}
