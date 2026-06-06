import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="border p-4 w-50 bg-light shadow rounded">
        <h2 className="text-center text-primary">Contact Us</h2>

        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
          />

          <br />

          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />

          <br />

          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            className="form-control"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
          />

          <br />

          <label>Subject</label>
          <input
            type="text"
            name="subject"
            className="form-control"
            placeholder="What is this about?"
            value={formData.subject}
            onChange={handleChange}
          />

          <br />

          <label>Message</label>
          <textarea
            name="message"
            rows="4"
            className="form-control"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <br />

          <div className="text-end">
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;