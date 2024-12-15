import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import React from 'react'
import { Link } from "react-router-dom";

const Sidebar = () => {
    const Links = [
        {
            label: "Home",
            link: "/"
        },
        {
            label: "Functional Virtual DOM ",
            link: "/function-based/virtual-dom"
        },
        {
            label: "Functional Listing",
            link: "/function-based/listing"
        },
        {
            label: "Functional Validation",
            link: "/function-based/validation"
        },
        {
            label: "Functional Props.Child",
            link: "/function-based/props.child"
        },
        {
            label: "Functional Control state from parent",
            link: "/function-based/control-state-from-parent"
        },
        {
            label: "Functional Dynamic Routing",
            link: "/function-based/dynamic-routing"
        },
        {
            label: "Add User",
            link: "/function-based/add-user"
        },
        {
            label: "All Users List",
            link: "/function-based/all-users"
        },
        {
            label: "Add User (API)",
            link: "/api-integration/add-user"
        },
        {
            label: "All Users List (API)",
            link: "/api-integration/all-users"
        },
        {
            label: "All Students",
            link: "/function-based/all-students"
        },
        {
            label: "Add Student",
            link: "/function-based/add-student"
        },
        {
            label: "Class based Virtual DOM",
            link: "/class-based/virtual-dom"
        },
        {
            label: "Class based listing",
            link: "/class-based/listing"
        },
        {
            label: "Job Application",
            link: "/job-application"
        },
        {
            label: "All Employees",
            link: "/all-employees"
        },
        {
            label: "Modal Tutorial",
            link: "/custom/modal"
        },
        {
            label: "Error Boundaries",
            link: "/error-boundaries"
        },
        {
            label: "Use Field Array",
            link: "/use-field-array"
        },
        {
            label: "Redux Toolkit",
            link: "/redux-toolkit"
        },
    ]
    return (
        <Sheet className="bg-black ">
            <SheetTrigger className="fixed top-5 right-5 text-black dark:text-white">Open Links</SheetTrigger>
            <SheetContent side="left">
                <SheetHeader className="flex flex-col gap-5">
                    <SheetTitle className="text-white text-2xl">Navigate to Pages</SheetTitle>
                    <SheetDescription className="text-lg text-white flex flex-col gap-3 font-light">
                        {
                            Links.map((link, i) => <Link key={link.id || i} to={link.link} className="text-gray-100 hover:text-white">{link.label}</Link>)
                        }
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>

    )
}

export default Sidebar
