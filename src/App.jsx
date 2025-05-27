import { useState } from "react";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";

export default function PersonalWebsite() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  return (
    <div className="p-6 space-y-12 max-w-4xl mx-auto">
      <section className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Hi, I'm [Your Name]</h1>
        <p className="text-lg">Welcome to my personal website</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p>I am a [your profession or field].</p>
        <p>Education: [Your Degree, Institution]</p>
        <p>Interests: [Your hobbies or passions]</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="border p-4 rounded shadow">
          <h3 className="text-xl font-bold">Project Title</h3>
          <p>Description of the project.</p>
          <a href="#" className="text-blue-500 underline">GitHub Repo</a>
        </div>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Blog</h2>
        <p>Coming soon! Stay tuned for tutorials, thoughts, and more.</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Resume</h2>
        <a href="/resume.pdf" download className="text-blue-500 underline">Download My Resume (PDF)</a>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Gallery</h2>
        <p>Photos and creative works coming soon.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Contact Me</h2>
        <div className="flex space-x-4">
          <a href="mailto:you@example.com" aria-label="Email"><Mail className="w-6 h-6" /></a>
          <a href="https://github.com/yourusername" target="_blank" aria-label="GitHub"><Github className="w-6 h-6" /></a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" aria-label="LinkedIn"><Linkedin className="w-6 h-6" /></a>
          <a href="https://instagram.com/yourusername" target="_blank" aria-label="Instagram"><Instagram className="w-6 h-6" /></a>
        </div>
        <form className="space-y-2">
          <input className="w-full p-2 border rounded" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
          <input className="w-full p-2 border rounded" placeholder="Your Email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
          <textarea className="w-full p-2 border rounded" placeholder="Your Message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
          <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">Send</button>
        </form>
      </section>
    </div>
  );
}
