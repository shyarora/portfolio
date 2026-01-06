"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send, MessageSquare, Github, Linkedin, Twitter, ArrowUpRight, Clock, type LucideIcon } from "lucide-react";
import { useState } from "react";
import type { ContactInfo } from "@/types/portfolio";
import { submitContactForm } from "@/lib/api";

interface ContactProps {
  data: ContactInfo;
}

const socialIconMap: Record<string, LucideIcon> = {
  Github,
  Linkedin,
  Mail,
  Twitter,
};

const Contact = ({ data }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await submitContactForm(formData);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      // Fallback to mailto if API fails
      const subject = `Contact from ${formData.name}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      window.location.href = `mailto:${data.email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      setSubmitStatus("success");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section relative overflow-hidden bg-dark-900/30">
      {/* Background decorations */}
      <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-accent-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-secondary-500/5 rounded-full blur-3xl" />

      <div className="section-padding container-max relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <span className="section-label">
            <MessageSquare size={14} />
            Get in Touch
          </span>
          <h2 className="section-title">
            Let&apos;s Work{" "}
            <span className="gradient-text">Together</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind or just want to chat? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Let&apos;s Connect
              </h3>
              <p className="text-dark-400 leading-relaxed">
                I&apos;m always excited to discuss new opportunities, interesting projects,
                or just chat about technology and development.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <a
                href={`mailto:${data.email}`}
                className="card-hover p-4 flex items-center gap-4 group"
              >
                <div className="p-3 rounded-xl bg-accent-500/10 text-accent-400 group-hover:bg-accent-500/20 transition-colors">
                  <Mail size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-dark-500 mb-0.5">Email</p>
                  <p className="text-white font-medium group-hover:text-accent-400 transition-colors">
                    {data.email}
                  </p>
                </div>
                <ArrowUpRight size={18} className="text-dark-600 group-hover:text-accent-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <div className="card p-4 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-secondary-500/10 text-secondary-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-dark-500 mb-0.5">Location</p>
                  <p className="text-white font-medium">{data.location}</p>
                </div>
              </div>

              <div className="card p-4 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-success-500/10 text-success-400">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-sm text-dark-500 mb-0.5">Availability</p>
                  <p className="text-white font-medium">{data.availability}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-dark-500 mb-4">Connect with me</p>
              <div className="flex gap-3">
                {data.socialLinks.map((link) => {
                  const Icon = socialIconMap[link.icon];
                  return (
                    <a
                      key={link.platform}
                      href={link.url}
                      target={link.platform !== "email" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="btn-icon"
                    >
                      {Icon && <Icon size={18} />}
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="card p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="label">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="textarea"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="p-4 rounded-xl bg-success-500/10 border border-success-500/20 text-success-400 text-sm">
                    Thanks for your message! I&apos;ll get back to you soon.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-4"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom Decoration */}
        <div className="mt-16 line-gradient" />
      </div>
    </section>
  );
};

export default Contact;
