import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { sendContactForm } from "../apiMail/index";

const initValues = { name: "", email: "", subject: "", message: "" };

const initState = { isLoading: false, error: "", values: initValues };

const MailSender = () => {
  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const { values, isLoading, error } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  return (
    <Container className="flex flex-col items-center justify-center h-full">
      <Heading className="w-[70%] text-center">Contact</Heading>
      {error && (
        <Text color="red.300" my={4} fontSize="xl">
          {error}
        </Text>
      )}

      <FormControl
        className="flex flex-col justify-center w-8/12 mx-0 my-4 mb-4"
        isRequired isInvalid={touched.name && !values.name}
      >
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          name="name"
          errorBorderColor="red.300"
          value={values.name}
          onChange={handleChange}
          onBlur={onBlur}
          className="px-0 py-4 text-center bg-gray-200 rounded-2xl dark:bg-dark-200"
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl
        className="flex flex-col justify-center w-8/12 mx-0 my-4 mb-4"
        isRequired isInvalid={touched.email && !values.email}
      >
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          errorBorderColor="red.300"
          value={values.email}
          onChange={handleChange}
          onBlur={onBlur}
          className="px-0 py-4 text-center bg-gray-200 rounded-2xl dark:bg-dark-200"
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl
        mb={5}
        isRequired
        isInvalid={touched.subject && !values.subject}
        className="flex flex-col justify-center w-8/12 mx-0 my-4 mb-4"
      >
        <FormLabel>Subject</FormLabel>
        <Input
          type="text"
          name="subject"
          errorBorderColor="red.300"
          value={values.subject}
          onChange={handleChange}
          onBlur={onBlur}
          className="px-0 py-4 text-center bg-gray-200 rounded-2xl dark:bg-dark-200"
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl
        isRequired
        isInvalid={touched.message && !values.message}
        className="flex flex-col justify-center w-8/12 mx-0 my-4 mb-4"
      >
        <FormLabel>Message</FormLabel>
        <Textarea
          type="text"
          name="message"
          rows={4}
          errorBorderColor="red.300"
          value={values.message}
          onChange={handleChange}
          onBlur={onBlur}
          className="px-4 py-0 bg-gray-200 resize-y rounded-2xl dark:bg-dark-200"
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <Button
        variant="outline"
        colorScheme="blue"
        isLoading={isLoading}
        disabled={
          !values.name || !values.email || !values.subject || !values.message
        }
        onClick={onSubmit}
        className='w-8/12 py-4 mt-3 mb-8 text-white rounded-full animate-gradient bg-400 bg-light-theme dark:bg-light-theme-v2 dark:animate-gradientV2 px2 dark:bg-600/400'
      >
        Submit
      </Button>
    </Container>
  );
}

export default MailSender;