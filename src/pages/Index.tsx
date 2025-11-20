import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Cursor Glow */}
      <div
        className="fixed w-5 h-5 rounded-full pointer-events-none z-[9999] transition-transform duration-100"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          background: "radial-gradient(circle, hsl(var(--primary)), transparent)",
          filter: "blur(15px)",
          opacity: 0.6,
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-card/80 backdrop-blur-xl px-[6%] py-6 flex justify-between items-center z-[1000] border-b border-border/50">
        <div className="text-3xl font-extrabold gradient-text tracking-tight">AASHIK</div>
        <ul className="flex gap-12 items-center">
          {["home", "skills", "projects", "contact"].map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                className="text-foreground font-medium text-sm uppercase tracking-wide hover:text-primary transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen grid md:grid-cols-2 items-center px-[6%] pt-32 pb-16 gap-16 relative overflow-hidden">
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-30 animate-float"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary)), transparent)",
            top: "20%",
            right: "-10%",
            filter: "blur(100px)",
          }}
        />

        <div className="z-10 space-y-8">
          <div className="inline-block px-5 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-semibold animate-fade-in-up">
            👋 Welcome to my portfolio
          </div>
          
          <h1 className="text-7xl font-extrabold leading-tight gradient-text" style={{ animationDelay: "0.2s" }}>
            Aashik
          </h1>
          
          <h2 className="text-3xl font-semibold text-muted-foreground" style={{ animationDelay: "0.4s" }}>
            Full Stack Developer
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed max-w-[550px]" style={{ animationDelay: "0.6s" }}>
            Crafting exceptional digital experiences with cutting-edge technologies. Specialized in building scalable web applications that merge aesthetic design with powerful functionality.
          </p>
          
          <div className="flex gap-6" style={{ animationDelay: "0.8s" }}>
            <Button
              onClick={() => scrollToSection("projects")}
              className="px-10 py-6 rounded-full text-base font-semibold gradient-primary hover:scale-105 transition-transform shadow-[0_10px_30px_hsl(var(--primary)/0.3)] hover:shadow-[0_15px_40px_hsl(var(--primary)/0.5)]"
            >
              View Projects
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="px-10 py-6 rounded-full text-base font-semibold border-primary text-primary hover:bg-primary hover:text-white"
            >
              Let's Talk
            </Button>
          </div>
        </div>

        <div className="z-10">
          <div className="bg-white/[0.03] backdrop-blur-lg border border-white/10 rounded-3xl p-12 shadow-2xl">
            <div className="font-mono text-sm leading-relaxed text-[#64ffda] space-y-2">
              <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "1.2s" }}>
                <span className="text-primary">const</span> developer = &#123;
              </div>
              <div className="opacity-0 animate-fade-in-up pl-4" style={{ animationDelay: "1.4s" }}>
                name: <span className="text-secondary">"Aashik"</span>,
              </div>
              <div className="opacity-0 animate-fade-in-up pl-4" style={{ animationDelay: "1.6s" }}>
                skills: [<span className="text-secondary">"React"</span>, <span className="text-secondary">"Next.js"</span>, <span className="text-secondary">"SQL"</span>],
              </div>
              <div className="opacity-0 animate-fade-in-up pl-4" style={{ animationDelay: "1.8s" }}>
                passion: <span className="text-secondary">"Building innovative solutions"</span>
              </div>
              <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "2s" }}>
                &#125;;
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="grid md:grid-cols-3 gap-8 px-[6%] py-16 max-w-[1400px] mx-auto">
        {[
          { number: "3+", label: "Technologies" },
          { number: "5+", label: "Projects Completed" },
          { number: "4 months", label: "Experience" },
        ].map((stat, i) => (
          <div
            key={i}
            className="text-center p-8 bg-white/[0.03] border border-white/10 rounded-2xl transition-all hover:bg-primary/5 hover:border-primary hover:-translate-y-2"
          >
            <div className="text-5xl font-extrabold gradient-text mb-2">{stat.number}</div>
            <div className="text-muted-foreground text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <section id="skills" className="px-[6%] py-24 bg-card">
        <div className="text-center mb-16">
          <div className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">What I Do</div>
          <h2 className="text-5xl font-extrabold mb-4">My Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-[600px] mx-auto">
            Mastering modern technologies to build scalable and performant applications
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          {[
            { icon: "🌐", name: "HTML5 & CSS3", desc: "Building semantic, accessible, and responsive web interfaces with modern CSS techniques" },
            { icon: "⚡", name: "JavaScript", desc: "Creating dynamic and interactive experiences with vanilla JS and ES6+ features" },
            { icon: "⚛️", name: "React.js", desc: "Developing component-based UIs with hooks, context, and state management" },
            { icon: "▲", name: "Next.js", desc: "Building SEO-friendly, server-rendered applications with optimal performance" },
            { icon: "🗄️", name: "SQL", desc: "Designing efficient database schemas and writing optimized queries" },
            { icon: "🚀", name: "Performance", desc: "Optimizing applications for speed, scalability, and best user experience" },
          ].map((skill, i) => (
            <div
              key={i}
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-10 transition-all hover:bg-primary/5 hover:border-primary hover:-translate-y-3 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />
              <div className="text-5xl mb-6 grayscale group-hover:grayscale-0 transition-all">{skill.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{skill.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-[6%] py-24">
        <div className="text-center mb-16">
          <div className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">Portfolio</div>
          <h2 className="text-5xl font-extrabold mb-4">Featured Work</h2>
          <p className="text-muted-foreground text-lg max-w-[600px] mx-auto">
            A selection of projects that showcase my skills and passion
          </p>
        </div>

        <div className="max-w-[1400px] mx-auto space-y-24">
          {[
            {
              number: "01",
              emoji: "🛍️",
              title: "E-Commerce Platform",
              desc: "A full-stack e-commerce solution featuring real-time inventory management, secure payment processing, and an intuitive admin dashboard. Built with modern technologies for optimal performance.",
              tags: ["React", "Next.js", "SQL", "Stripe"],
            },
            {
              number: "02",
              emoji: "📊",
              title: "Analytics Dashboard",
              desc: "Interactive data visualization platform with real-time metrics, custom reporting, and AI-powered insights. Features responsive charts and seamless data integration.",
              tags: ["React", "JavaScript", "CSS", "D3.js"],
            },
            {
              number: "03",
              emoji: "✅",
              title: "Task Management App",
              desc: "Collaborative project management tool with drag-and-drop interface, real-time updates, team collaboration features, and automated workflow management.",
              tags: ["Next.js", "SQL", "WebSocket", "Auth"],
            },
          ].map((project, i) => (
            <div
              key={i}
              className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:grid-flow-dense" : ""}`}
            >
              <div className={`relative rounded-2xl overflow-hidden aspect-video bg-gradient-to-br from-accent to-card border border-white/10 flex items-center justify-center text-8xl transition-all hover:scale-105 hover:border-primary ${i % 2 === 1 ? "md:col-start-2" : ""}`}>
                {project.emoji}
              </div>

              <div className="z-10 space-y-6">
                <div className="text-primary text-sm font-semibold tracking-widest">PROJECT {project.number}</div>
                <h3 className="text-4xl font-extrabold">{project.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{project.desc}</p>
                
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-5 py-2 bg-primary/10 border border-primary/30 rounded-full text-xs text-primary font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6 pt-4">
                  <Button className="gradient-primary hover:scale-105 transition-transform rounded-full px-8">
                    Live Demo
                  </Button>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-full px-8">
                    View Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-[6%] py-24 bg-card">
        <div className="max-w-[800px] mx-auto text-center">
          <div className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">Get In Touch</div>
          <h2 className="text-5xl font-extrabold mb-4">Let's Create Something Amazing</h2>
          <p className="text-muted-foreground text-lg mb-12">
            Have a project in mind? Let's discuss how we can work together
          </p>

          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-16 space-y-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-white/[0.03] rounded-2xl border border-white/10 transition-all hover:bg-primary/5 hover:border-primary">
                <div className="text-4xl mb-4">📧</div>
                <div className="text-muted-foreground text-xs mb-2">Email</div>
                <div className="text-lg font-semibold">aashik.dev@gmail.com</div>
              </div>
              <div className="p-8 bg-white/[0.03] rounded-2xl border border-white/10 transition-all hover:bg-primary/5 hover:border-primary">
                <div className="text-4xl mb-4">📱</div>
                <div className="text-muted-foreground text-xs mb-2">Phone</div>
                <div className="text-lg font-semibold">+91 98765 43210</div>
              </div>
            </div>

            <div className="flex justify-center gap-6">
              {["💼", "🐙", "🐦", "📷"].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-16 h-16 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-2xl transition-all hover:bg-primary hover:border-primary hover:-translate-y-2"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-[6%] py-12 text-center border-t border-border">
        <p className="text-muted-foreground text-sm">
          Designed & Built with <span className="text-pink inline-block animate-pulse">❤️</span> by Aashik • © 2025
        </p>
      </footer>
    </div>
  );
};

export default Index;
