"use client"

import * as React from "react"
import { useState } from 'react';
import { cn } from "@/lib/utils"
import { useMediaQuery } from 'usehooks-ts'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"


export function GetPdfButton() {
    const [open, setOpen] = React.useState(false)
    const isDesktop = useMediaQuery("(min-width: 768px)")

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button className="flex items-center justify-center w-full px-6 py-10 bg-[#343A40] text-white text-xl md:text-2xl rounded-2xl hover:bg-[#4a5056] dark:text-black dark:bg-white dark:hover:bg-[#D0D0D0] transition-colors duration-150 ease-in-out">
                        {/* Download Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mr-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        {/* Button Text */}
                        <span><b>Already bought?</b><br />Download the free pdf</span>
                     </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[625px]">
                    <DialogHeader>
                        <DialogTitle className="text-2xl mb-4">Request the book&apos;s pdf version</DialogTitle>
                        <DialogDescription>
                            Provide your order information and your best email. We will verify your purchase and send the pdf version. Your email will only be used for this purpose.
                        </DialogDescription>
                    </DialogHeader>
                    <ProfileForm />
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button className="flex items-center justify-center w-full  h-20 px-6 py-10 bg-[#343A40] text-white text-xl md:text-2xl rounded-2xl hover:bg-[#4a5056] dark:text-black dark:bg-white dark:hover:bg-[#D0D0D0] transition-colors duration-150 ease-in-out">
                    {/* Download Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mr-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    {/* Button Text */}
                    <span><b>Already bought?</b><br />Download the free pdf</span>
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="text-left">
                    <DrawerTitle className="text-xl mb-2" >Request the book&apos;s pdf version</DrawerTitle>
                    <DrawerDescription>
                        Provide your order information and your best email. We will verify your purchase and send the pdf version. Your email will only be used for this purpose.
                    </DrawerDescription>
                </DrawerHeader>
                <ProfileForm className="px-4" />
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [orderId, setOrderId] = useState('');
    const [orderIdError, setOrderIdError] = useState('');

    // Email validation function
    const validateEmail = (inputEmail: string) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(inputEmail);
    };

    const validateOrderId = (inputId: string) => {
        const orderIdPattern = /^\d{3}-\d{7}-\d{7}$/;
        return orderIdPattern.test(inputId);
    };

    const handleOrderIdChange = (event: { target: { value: any; }; }) => {
        const inputOrderId = event.target.value;
        setOrderId(inputOrderId);

        // Validate order ID in real-time
        if (validateOrderId(inputOrderId)) {
            setOrderIdError(''); // Clear error message
        } else {
            setOrderIdError('Please enter a valid order ID.');
        }
    };

    const handleEmailChange = (event: { target: { value: any; }; }) => {
        const inputEmail = event.target.value;
        setEmail(inputEmail);

        // Validate email in real-time
        if (validateEmail(inputEmail)) {
            setEmailError(''); // Clear error message
        } else {
            setEmailError('Please enter a valid email address.');
        }
    };

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        // Final email validation on submit
        if (validateEmail(email)) {
            setEmailError('');
        } else {
            setEmailError('Please enter a valid email address.');
        }

        if (validateOrderId(orderId)) {
            setOrderIdError('');
        } else {
            setOrderIdError('Please enter a valid order ID.');
        }

        // Proceed with form submission or further processing
    };
    return (
        <form onSubmit={handleSubmit} className={cn("grid items-start gap-4", className)}>
            <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="name@example.com" onChange={handleEmailChange}/>
            </div>
            <div className="grid gap-2">
                <Label htmlFor="orderId">Order Id</Label>
                <Input id="orderId" placeholder="123-1234567-1234567" onChange={handleOrderIdChange} />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="order-date">Order Date</Label>
                <DatePicker />
             </div>
             {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
             {orderIdError && <div style={{ color: 'red' }}>{orderIdError}</div>}
            <Button
                className="flex items-center justify-center mt-4 w-full px-6 py-6 bg-[#343A40] text-white text-xl md:text-xl rounded-xl hover:bg-[#4a5056] dark:text-black dark:bg-white dark:hover:bg-[#D0D0D0] transition-colors duration-150 ease-in-out"
                type="submit">
                    Request PDF
            </Button>
        </form>
    );
}

export function DatePicker() {
    const [date, setDate] = React.useState<Date>()

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-[280px] justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                    )}
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    )
}
