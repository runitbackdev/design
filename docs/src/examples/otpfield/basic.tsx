import { OTPField } from "@runitback/react";

export default function () {
  return (
    <OTPField.Root length={6}>
      <OTPField.Input />
      <OTPField.Input />
      <OTPField.Input />
      <OTPField.Separator>·</OTPField.Separator>
      <OTPField.Input />
      <OTPField.Input />
      <OTPField.Input />
    </OTPField.Root>
  );
}
