import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().email().required("Email is required"),
    address: yup.string().required("Address is required"),
    dob: yup.string().required("DOB is required"),
    bio: yup.string().required("Bio is required"),
    image: yup
        .mixed()
        .test("is-image", "File must be an image", (value) => {
            if (!value) return true;
            return value && value[0].type.startsWith("image/");
        }),
    banner_image: yup.mixed().test("is-image", "File must be an image", (value) => {
        if (!value) return true;
        return value && value[0].type.startsWith("image/");
    }),
});


export const ContactUs = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        alert(data);
    };

    return (


        <section className="bg-white">
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
              
                <main
                    className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                >
                    <div className="max-w-xl lg:max-w-3xl">
                        
                        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                                    Name {errors.name && <p className={"px-5 text-red"}>{errors.name.message}</p>}
                                </label>

                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
                                    Email {errors.email && <p className={"px-5 text-red"}>{errors.email.message}</p>}
                                </label>

                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>

                            <div className="col-span-6">
                                <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> 
                                    Address {errors.address && <p className={"px-5 text-red"}>{errors.address.message}</p>}
                                </label>

                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> 
                                    DOB {errors.dob && <p className={"px-5 text-red"}>{errors.dob.message}</p>}
                                </label>

                                <input
                                    type="date"
                                    id="dob"
                                    name="dob"
                                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="PasswordConfirmation" className="block text-sm font-medium text-gray-700">
                                    Bio {errors.bio && <p className={"px-5 text-red"}>{errors.bio.message}</p>}
                                </label>

                                <input
                                    type="text"
                                    id="bio"
                                    name="bio"
                                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="PasswordConfirmation" className="block text-sm font-medium text-gray-700">
                                    Image {errors.image && <p className={"px-5 text-red"}>{errors.image.message}</p>}
                                </label>

                                <input
                                    type="file"
                                    id="image"
                                    name="image"
                                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="PasswordConfirmation" className="block text-sm font-medium text-gray-700">
                                    Banner Image {errors.banner_image && <p className={"px-5 text-red"}>{errors.banner_image.message}</p>}
                                </label>

                                <input
                                    type="file"
                                    id="banner_image"
                                    name="banner_image"
                                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>

                            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                <button
                                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                                >
                                    Contact Us
                                </button>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </section>


    );
}