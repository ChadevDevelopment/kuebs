import { z } from "zod";
import { KontaktFormSchema } from "../../lib/schema";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import { siteConfig } from "../../config/site";

type FormInputs = z.infer<typeof KontaktFormSchema>;

export default function QuotationKontaktform ({
  name,
  email,
  message
}: FormInputs) {
  return (
    <Html>
      <Head />
      <Preview>{`New message from ${siteConfig.name} site`}</Preview>
      <Tailwind>
        <Body className="bg-slate-100 text-black">
          <Container>
            <Section className="my-10 rounded-md bg-white px-10 py-4">
              <Heading className="leading-tight">
                You received the following message from the quotation form
              </Heading>
              {name && (
                <Text>
                  <b>Name: </b> {name}
                </Text>
              )}
              {email && (
                <Text style={{ marginTop: -5 }}>
                  <b>Email: </b> {email}
                </Text>
              )}
              {message && (
                <Text style={{ marginTop: -5 }}>
                  <b>Message: </b> {message}
                </Text>
              )}

              <Hr />
              <Text>
                The {`sender's`} email is: {email}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
