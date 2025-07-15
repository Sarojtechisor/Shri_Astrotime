"use client";
import { useState } from "react";
import styles from "./enquiry.module.css";

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    website: "",
    services: [] as string[],
    timeline: "",
    requirements: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/enquiry/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Enquiry submitted successfully!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          website: "",
          services: [],
          timeline: "",
          requirements: "",
        });
      } else {
        setMessage(data.error || "Failed to submit enquiry.");
      }
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto bg-bl bg-opacity-50 p-5 shadow-lg rounded-lg overflow-y-auto"
      id={styles.InquiryForms}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-medium">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md mt-1"
            placeholder="Enter Full Name "
          />
        </div>
        <div>
          <label className="block font-medium">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md mt-1"
            placeholder="eg: abc@gmail.com"
          />
        </div>
        <div>
          <label className="block font-medium">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md mt-1"
            placeholder="+(91) 99999-99999"
          />
        </div>
        <div>
          <label className="block font-medium">
            Organisation <span className="text-red-500">*</span>
          </label>
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md mt-1 "
            placeholder="eg: infosys..etc"
          />
        </div>
      </div>

      <div className="mt-4">
        <label className="block font-medium">
          Which Type of wood are you looking for?{" "}
          <span className="text-red-500">*</span>
        </label>
        <div className="w-full">
          <select
            id="dropdown"
            className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm bg-transparent "
          >
            <option
              className="bg-transparent text-black "
              value=""
              disabled
              selected
            >
              Select any wood type
            </option>
            <option
              className="bg-transparent text-black hover:bg-amber-400"
              value="option1"
            >
              Rose Wood Finish
            </option>
            <option
              className="bg-transparent text-black hover:bg-amber-400"
              value="option2"
            >
              Original Teak Wood
            </option>
          </select>
        </div>
      </div>

      <div className="mt-4 flex justify-between">
        <div>
          <label className="block font-medium">
            Which colour are you looking for?{" "}
            <span className="text-red-500">*</span>
          </label>
          <div className="w-full">
            <select
              id="dropdown"
              className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm bg-transparent "
            >
              <option
                className="bg-transparent text-black "
                value=""
                disabled
                selected
              >
                Select a colour
              </option>
              <option
                className="bg-transparent text-black hover:bg-amber-400"
                value="option1"
              >
                Blue
              </option>
              <option
                className="bg-transparent text-black hover:bg-amber-400"
                value="option2"
              >
                Green
              </option>
              <option
                className="bg-transparent text-black hover:bg-amber-400"
                value="option3"
              >
                Red
              </option>
            </select>
          </div>
        </div>
        <div>
          <label className="block font-medium">
            Which language are you looking for?{" "}
            <span className="text-red-500">*</span>
          </label>
          <div className="w-full">
            <select
              id="dropdown"
              className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm bg-transparent "
            >
              <option
                className="bg-transparent text-black "
                value=""
                disabled
                selected
              >
                Select a language
              </option>
              <option
                className="bg-transparent text-black hover:bg-amber-400"
                value="option1"
              >
                English
              </option>
              <option
                className="bg-transparent text-black hover:bg-amber-400"
                value="option2"
              >
                Hindi
              </option>
              <option
                className="bg-transparent text-black hover:bg-amber-400"
                value="option3"
              >
                Kannada
              </option>
              <option
                className="bg-transparent text-black hover:bg-amber-400"
                value="option4"
              >
                Tamil
              </option>
              <option
                className="bg-transparent text-black hover:bg-amber-400"
                value="option5"
              >
                Telugu
              </option>
              <option
                className="bg-transparent text-black hover:bg-amber-400"
                value="option6"
              >
                Malayalam
              </option>
            </select>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <label className="block font-medium">
          Share any additional requirement <span className="text-red-500">*</span>
        </label>
        <textarea
          name="requirements"
          value={formData.requirements}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md mt-1"
          placeholder="You can write any additional requirements if any"
        />
      </div>

      <button
        type="submit"
        className="w-full  text-white py-2 rounded-md mt-4  disabled:bg-gray-400"
        disabled={loading}
        id={styles.PopupSubmitBtn}
      >
        {loading ? "Sending..." : "Send Enquiry"}
      </button>

      {message && <p className="mt-2 text-center text-green-600">{message}</p>}
    </form>
  );
}
