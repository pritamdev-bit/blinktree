// app/contact/page.tsx

"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted:", form);
        // You can replace this with API call (e.g. send email)
        const res = await fetch("/api/feedback", {
            method: "POST",
            body: JSON.stringify(form),
        })

        const response = await res.json()
        if (!response.success) {
            toast.error(response.message)
        }
        if (response.success) {
            toast.success(response.message)
        }
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <main className="min-h-screen bg-gray-200 flex flex-col items-center justify-center px-6 pt-40 pb-5">
            <Toaster
                position="top-center"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toasterId="default"
                toastOptions={{
                    // Define default options
                    className: '',
                    duration: 3000,
                    removeDelay: 1000,
                    style: {
                        background: '#363636',
                        color: '#fff',
                    },

                    // Default options for specific types
                    success: {
                        duration: 2000,
                        iconTheme: {
                            primary: 'green',
                            secondary: 'black',
                        },
                    },
                }}
            />
            <div className="max-w-2xl w-full bg-[#bebebe] shadow-sm rounded-2xl p-8">
                <h1 className="text-3xl font-bold text-black text-center mb-4">
                    Contact <span className="text-indigo-600">BlinkTree</span>
                </h1>
                <p className="text-center text-black mb-8">
                    Have questions, feedback, or just want to say hi? Fill out the form
                    below and we&apos;ll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-black">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="mt-2 block w-full rounded-lg bg-gray-200 border border-gray-600 p-3 focus:ring-2 focus:ring-gray-800 outline-none"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-black">
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="mt-2 block w-full rounded-lg bg-gray-200 border border-gray-600 p-3 focus:ring-2 focus:ring-gray-800 outline-none"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-black">
                            Your Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={3}
                            value={form.message}
                            onChange={handleChange}
                            required
                            className="mt-2 block w-full rounded-lg bg-gray-200 border border-gray-600 p-3 focus:ring-2 focus:ring-gray-800 outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full cursor-pointer bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium shadow hover:bg-indigo-700 transition"
                    >
                        Send Message
                    </button>
                </form>

                <div className="mt-8 text-center text-black">
                    <p>Or reach us directly at:</p>
                    <a href="mailto:mandalpritam8617@gmail.com"><p className="font-medium text-indigo-600">mandalpritam8617@gmail.com</p></a>
                </div>
            </div>
        </main>
    );
}
