import React, { FormEvent, useState } from "react";
import Button from "../ui/Button";

const ContactForm: React.FC = () => {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [resultMessage, setResultMessage] = useState("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");

        const formData = new FormData(e.currentTarget);
        // Replace this with your actual Web3Forms Access Key
        formData.append("access_key", "d53a9e63-fdae-4f29-96fd-c50f917d4632");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus("success");
                setResultMessage("Message sent successfully! We'll be in touch soon.");
                e.currentTarget.reset();
            } else {
                setStatus("error");
                setResultMessage(data.message || "Failed to send message. Please try again.");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setStatus("error");
            setResultMessage("An error occurred. Please check your internet connection and try again.");
        }

        // Reset status after a few seconds
        setTimeout(() => {
            if (status !== "idle") setStatus("idle");
        }, 5000);
    };

    return (
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-slate-100 hover:shadow-2xl transition-all duration-300">
            <h2 className="text-3xl font-bold mb-8 text-slate-900 tracking-tight">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Your Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-5 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none font-light shadow-sm hover:border-orange-200"
                        placeholder="John Doe"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Email Address
                    </label>
                    <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-5 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all outline-none font-light shadow-sm hover:border-pink-200"
                        placeholder="john@example.com"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Subject
                    </label>
                    <input
                        type="text"
                        name="subject"
                        required
                        className="w-full px-5 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none font-light shadow-sm hover:border-purple-200"
                        placeholder="How can we help?"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Message
                    </label>
                    <textarea
                        name="message"
                        rows={5}
                        required
                        className="w-full px-5 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none resize-none font-light shadow-sm hover:border-orange-200"
                        placeholder="Your message here..."
                    />
                </div>

                <Button
                    type="submit"
                    variant="primary"
                    className="w-full rounded-xl py-4 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    disabled={status === "submitting"}
                >
                    {status === "submitting" ? "Sending Message..." : "Send Message"}
                </Button>

                {status !== "idle" && status !== "submitting" && (
                    <div className={`p-4 rounded-xl text-center text-sm font-semibold transition-all duration-300 animate-fade-in-up ${status === "success"
                            ? "bg-green-50 text-green-700 border border-green-200"
                            : "bg-red-50 text-red-700 border border-red-200"
                        }`}>
                        {resultMessage}
                    </div>
                )}
            </form>
        </div>
    );
};

export default ContactForm;
