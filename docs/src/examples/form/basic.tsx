import { Button, Field, Form, Input } from "@runitbk/react";

export default function () {
  return (
    <Form className="w-64">
      <Field.Root>
        <Field.Label>Email</Field.Label>
        <Input type="email" placeholder="you@runitback.dev" />
      </Field.Root>
      <Button type="submit">Subscribe</Button>
    </Form>
  );
}
