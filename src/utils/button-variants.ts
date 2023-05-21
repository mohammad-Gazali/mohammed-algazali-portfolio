import { cva } from "class-variance-authority";



export const buttonVariants = cva(
    "relative gap-2 flex justify-center items-center uppercase transition-colors duration-500 z-0 before:absolute before:inset-0 before:-z-10 before:transition-transform before:duration-[400ms] before:-translate-x-[101%] hover:before:translate-x-0 overflow-hidden",
    {
        variants: {
            variant: {
                primary: "bg-primary text-primary-foreground hover:text-primary before:bg-primary-foreground",
                secondary: "bg-secondary text-secondary-foreground hover:text-secondary before:bg-secondary-foreground",
                "primary-light": "bg-primary-light text-primary-light-foreground hover:text-primary-light before:bg-primary-light-foreground",
                "secondary-light": "bg-secondary-light text-secondary-light-foreground hover:text-secondary-light before:bg-secondary-light-foreground",
            },
            size: {
                lg: "sm:py-3 py-2 px-6 sm:text-xl text-lg rounded-xl",
                md: "py-2 px-4 sm:text-lg text-base rounded-xl",
                sm: "py-1 px-3 text-base rounded-lg"
            }
        },
        defaultVariants: {
            variant: "secondary",
            size: "md"
        },

    }
)