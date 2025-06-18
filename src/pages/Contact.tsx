import { Github, Linkedin, Mail } from 'lucide-react'

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add form submission logic here
  }

  return (
    <div className="mx-auto max-w-xl space-y-10 pt-10 bg-background text-foreground">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold tracking-tight">Get in Touch</h1>
        <p className="text-muted-foreground">
          Have a question or want to work together? Feel free to reach out!
        </p>
      </div>
      <div className="rounded-2xl bg-card text-card-foreground border border-border shadow-xl p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              placeholder="Your name"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              placeholder="your.email@example.com"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              placeholder="Your message"
              rows={5}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-primary px-4 py-2 text-base font-semibold text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Send Message
          </button>
        </form>
        <div className="flex justify-center gap-6 pt-8">
          <a
            href="https://github.com/SifatAli008"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-3 bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-primary-foreground transition-colors shadow-lg"
          >
            <Github className="h-7 w-7" />
          </a>
          <a
            href="https://www.linkedin.com/in/sifat-ali/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-3 bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-primary-foreground transition-colors shadow-lg"
          >
            <Linkedin className="h-7 w-7" />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="rounded-full p-3 bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-primary-foreground transition-colors shadow-lg"
          >
            <Mail className="h-7 w-7" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact 