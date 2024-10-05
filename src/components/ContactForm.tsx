import { Button, Heading, VStack, Text, useToast } from "@chakra-ui/react";
import { z } from "zod";
import useZodForm from "../hooks/useZodForm";
import FormInput, { FormTextArea } from "./FormInput";
import { RiMailSendLine } from "react-icons/ri";
import emailjs from "@emailjs/browser";

const registerFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email({ message: "Please enter a valid email address." }),
  subject: z.string().min(1, { message: "Subject is required." }),
  emailBody: z
    .string()
    .min(1, {
      message: "Message is required.",
    })
    .max(8000, "Please limit your message to 8000 characters or less."),
});

// Define the shape of our form by creating a typescript type called "FormData"
// This is to provide type safety and intellisense
// In this example, z.infer returns a typescript type based on the shape of our schema
type FormData = z.infer<typeof registerFormSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useZodForm({ schema: registerFormSchema });

  const toast = useToast();

  const sendEmail = (data: FormData) => {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      subject: data.subject,
      message: data.emailBody,
    };

    emailjs
      .send(
        "service_zdz1uxe",
        "template_hjrx15d",
        templateParams,
        "yxTtH-YYw9wCHLCbC"
      )
      .then(
        (result) => {
          console.log(result);
          toast({
            title: "Message sent.",
            description:
              "I have received your message and will get back to you shortly.",
            status: "success",
            duration: 10000,
            isClosable: true,
          });
        },
        (error) => {
          console.log(error);
          toast({
            title: "Oops! Something went wrong.",
            description:
              "We were unable to send message. Please call me at (970) 556-1314 or try again later.",
            status: "error",
            duration: 10000,
            isClosable: true,
          });
        }
      );
  };

  return (
    <>
      <Heading textAlign="center" my={4} size="lg">
        Email Me
      </Heading>
      <VStack
        as="form"
        onSubmit={handleSubmit(sendEmail)}
        spacing={4}
        align="stretch"
      >
        <FormInput
          label="Name"
          id={"name"}
          type={"text"}
          isInvalid={errors.name ? true : false}
          register={{ ...register("name") }}
          errorMessage={errors.name?.message}
        />
        <FormInput
          label="Your Email Address"
          id={"email"}
          type={"text"}
          isInvalid={errors.email ? true : false}
          register={{ ...register("email") }}
          errorMessage={errors.email?.message}
        />
        <FormInput
          label={"Subject"}
          id={"subject"}
          type={"text"}
          isInvalid={errors.subject ? true : false}
          register={{ ...register("subject") }}
          errorMessage={errors.subject?.message}
        />
        <FormTextArea
          label={"Message"}
          id={"emailBody"}
          isInvalid={errors.emailBody ? true : false}
          register={{ ...register("emailBody") }}
          errorMessage={errors.emailBody?.message}
        />
        <Button
          type="submit"
          mt={4}
          rightIcon={<RiMailSendLine fontSize="18px" />}
        >
          Submit
        </Button>
      </VStack>
    </>
  );
};

export default ContactForm;
