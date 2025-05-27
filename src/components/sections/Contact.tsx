import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const nameRegex = /^[a-zA-Z\s]{2,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(formData.name)) {
      toast.error('❗ Name must be at least 2 characters and only contain letters.');
      return false;
    }

    if (!emailRegex.test(formData.email)) {
      toast.error('❗ Please enter a valid email address.');
      return false;
    }

    if (!formData.message.trim()) {
      toast.error('❗ Message cannot be empty.');
      return false;
    }

    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    emailjs
      .send(
        'service_k0x4ag6',
        'template_84z4424',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'bfsQq-MeNtQYT0-wE'
      )
      .then(() => {
        toast.success('✅ Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        setLoading(false);
      })
      .catch(error => {
        console.error('EmailJS error:', error);
        toast.error('❌ Failed to send message. Please try again.');
        setLoading(false);
      });
  };

  return (
    <section  id="contact" className="section overflow-x-hidden bg-gray-950 py-20">
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />

      <div className="container-custom max-w-2xl mx-auto">
        <h2 className="section-title text-center">Get In Touch</h2>
        <p className="section-subtitle text-center max-w-xl mx-auto text-gray-400">
          Feel free to reach out by filling out the form below.
        </p>

        <div className="bg-gray-800 rounded-2xl p-6 md:p-8 shadow-md mt-12">
          

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={loading}
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={loading}
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                disabled={loading}
                required
                rows={5}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full px-6 py-3 rounded-lg flex items-center justify-center font-semibold transition-all ${
                loading
                  ? 'bg-green-700 cursor-not-allowed'
                  : 'bg-green-600 hover:bg-green-700 text-white'
              }`}
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin mr-2" />
                  Sending...
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="ml-2 transition-transform group-hover:translate-x-1" size={16} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};




