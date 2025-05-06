import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import Button from "../../components/ui/button";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  let toastId: string;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      return;
    }

    setIsLoading(true);

    toastId = toast.loading("Sending the email", {
      id: toastId,
      className:
        "bg-primary-light-foreground text-primary-light w-72 text-center",
    });

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("The email has been sended successully.", {
        id: toastId,
        className:
          "bg-primary-light-foreground text-primary-light w-72 text-center",
      });

      form.current?.reset();
    } catch (error) {
      toast.error("Something went wrong, please try again.", {
        id: toastId,
        className:
          "bg-primary-light-foreground text-primary-light w-72 text-center",
      });

      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      ref={form}
      className="border-primary-foreground/10 sm:w-1/2 w-full"
    >
      <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-full">
          <label
            htmlFor="user_name"
            className="block text-sm font-medium leading-6"
          >
            Full name
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="user_name"
              id="user_name"
              placeholder="Ali Foad..."
              className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-background-foreground/30 placeholder:text-background-foreground/40 focus:ring-2 focus:ring-inset focus:ring-primary-500 bg-background-foreground/5 sm:text-sm sm:leading-6"
              required
            />
          </div>
        </div>
        <div className="sm:col-span-full">
          <label
            htmlFor="user_email"
            className="block text-sm font-medium leading-6"
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              id="user_email"
              name="user_email"
              type="email"
              placeholder="ali@test.com"
              className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-background-foreground/30 placeholder:text-background-foreground/40 focus:ring-2 focus:ring-inset focus:ring-primary-500 bg-background-foreground/5 sm:text-sm sm:leading-6"
              required
            />
          </div>
        </div>
        <div className="col-span-full">
          <label
            htmlFor="user_message"
            className="block text-sm font-medium leading-6"
          >
            Message
          </label>
          <div className="mt-2">
            <textarea
              id="user_message"
              name="user_message"
              rows={4}
              className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-background-foreground/30 placeholder:text-background-foreground/40 focus:ring-2 focus:ring-inset focus:ring-primary-500 bg-background-foreground/5 sm:text-sm sm:leading-6"
              placeholder="Hello, I would like to have a blog website..."
              required
            ></textarea>
          </div>
        </div>
      </div>
      <Button
        className={`${
          isLoading ? "opacity-40 pointer-events-none cursor-not-allowed" : ""
        } sm:w-fit w-full mt-10 px-10`}
      >
        {isLoading ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-spin w-6 h-6"
          >
            <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        )}{" "}
        Send
      </Button>
    </form>
  );
};

export default ContactForm;
