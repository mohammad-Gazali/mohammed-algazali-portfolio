import { Button } from "../common";

const ContactForm = () => {
	return (
		<form className="border-primary-foreground/10 sm:w-1/2 w-full">
			<div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
				<div className="sm:col-span-full">
					<label
						htmlFor="first-name"
						className="block text-sm font-medium leading-6"
					>
						Full name
					</label>
					<div className="mt-2">
						<input
							type="text"
							name="first-name"
							id="first-name"
							autoComplete="given-name"
                            placeholder="Ali Foad..."
							className="block w-full  rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-primary-light-foreground/30 placeholder:text-primary-light-foreground/40 focus:ring-2 focus:ring-inset focus:ring-secondary bg-primary-light sm:text-sm sm:leading-6"
						/>
					</div>
				</div>
				<div className="sm:col-span-full">
					<label
						htmlFor="email"
						className="block text-sm font-medium leading-6"
					>
						Email address
					</label>
					<div className="mt-2">
						<input
							id="email"
							name="email"
							type="email"
							autoComplete="email"
                            placeholder="ali@test.com"
							className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-primary-light-foreground/30 placeholder:text-primary-light-foreground/40 focus:ring-2 focus:ring-inset focus:ring-secondary bg-primary-light sm:text-sm sm:leading-6"
						/>
					</div>
				</div>
				<div className="col-span-full">
					<label
						htmlFor="message"
						className="block text-sm font-medium leading-6"
					>
						Message
					</label>
					<div className="mt-2">
						<textarea
							id="message"
							name="message"
							rows={4}
							className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-primary-light-foreground/30 placeholder:text-primary-light-foreground/40 focus:ring-2 focus:ring-inset focus:ring-secondary bg-primary-light sm:text-sm sm:leading-6"
                            placeholder="Hello, I would like to have a blog website..."
						></textarea>
					</div>
				</div>
			</div>
			<Button className="sm:w-fit w-full mt-10 px-10">
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
				</svg>{" "}
				Send
			</Button>
		</form>
	);
};

export default ContactForm;
