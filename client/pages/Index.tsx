import { ArrowRight, Camera, Printer, Image as ImageIcon, Heart, MapPin, Phone, Zap, Frame, CheckCircle, MailIcon } from "lucide-react";
import { useState } from "react";

export default function Index() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const services = [
    {
      id: 1,
      title: "Passport Photography",
      category: "Official Documents",
      description: "Professional passport photos meeting international standards for all document types",
      icon: Camera,
    },
    {
      id: 2,
      title: "Modern Laminations",
      category: "Heat Press Technology",
      description: "Durable protection with advanced heat press lamination for long-lasting quality",
      icon: Zap,
    },
    {
      id: 3,
      title: "Photo Frames",
      category: "Display Solutions",
      description: "Premium frames in various styles to beautifully display your favorite moments",
      icon: Frame,
    },
    {
      id: 4,
      title: "Wedding Photography",
      category: "Special Events",
      description: "Capture love and joy with professional wedding photography expertise and artistry",
      icon: Heart,
    },
    {
      id: 5,
      title: "Digital to Print",
      category: "Any Size Available",
      description: "Transform any device photo into stunning prints in custom sizes you desire",
      icon: Printer,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-primary">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-md">
                <Camera className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <span className="font-display text-lg sm:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Studio Preeti
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-primary hover:text-secondary transition font-medium">
                Services
              </a>
              <a href="#about" className="text-primary hover:text-secondary transition font-medium">
                About
              </a>
              <a href="#contact" className="text-primary hover:text-secondary transition font-medium">
                Contact
              </a>
            </div>

            {/* CTA Button */}
            <a href="#contact" className="hidden md:block px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg transition">
              Visit Us
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="md:hidden p-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isNavOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isNavOpen && (
            <div className="md:hidden pb-4 space-y-3 border-t border-border pt-4">
              <a
                href="#services"
                className="block text-primary hover:text-secondary transition py-2 font-medium"
              >
                Services
              </a>
              <a
                href="#about"
                className="block text-primary hover:text-secondary transition py-2 font-medium"
              >
                About
              </a>
              <a
                href="#contact"
                className="block text-primary hover:text-secondary transition py-2 font-medium"
              >
                Contact
              </a>
              <a href="#contact" className="w-full block px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg transition text-center">
                Visit Us
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 sm:pt-28 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20">
              <span className="text-sm font-semibold text-secondary">Professional Photography Studio</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 sm:mb-8 leading-tight">
              Your Moments,{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Perfectly Captured
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-primary/70 mb-8 sm:mb-12 max-w-2xl leading-relaxed font-light">
              Professional photography services with modern lamination technology,
              beautiful frames, and prints in any size. Everything you need, all in one place.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-10 sm:mb-14">
              <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-xl hover:-translate-y-1 transition duration-300 inline-flex items-center gap-2 justify-center sm:justify-start rounded-lg group">
                Visit Studio
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </a>
              <a href="#services" className="px-8 py-4 border-2 border-primary text-primary font-semibold hover:bg-primary/5 hover:shadow-lg transition duration-300 text-center rounded-lg">
                Explore Services
              </a>
            </div>

            {/* Location Badge */}
            <a
              href="https://maps.app.goo.gl/G5cb9KxHnRM47Sg68"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <div className="p-5 sm:p-6 bg-white rounded-xl border border-border shadow-md hover:shadow-lg hover:border-secondary/40 transition duration-300 inline-flex items-start gap-3 cursor-pointer group">
                <div className="p-2 bg-secondary/10 rounded-lg flex-shrink-0 group-hover:bg-secondary/20 transition">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-primary group-hover:text-secondary transition">
                    Visit Us In Store
                  </p>
                  <p className="text-primary/70 text-sm sm:text-base">
                    Shitla Asthan Road, Tilkamanjhi, Bhagalpur, Bihar
                  </p>
                </div>
              </div>
            </a>
          </div>

          {/* Hero Image */}
          <div className="mt-16 sm:mt-20">
            <div className="w-full h-96 sm:h-[500px] rounded-2xl relative overflow-hidden group shadow-2xl border border-secondary/10">
              <img
                src="/images/Banner_image.png"
                alt="Professional photographer capturing a portrait in studio"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent group-hover:from-primary/10 transition duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20">
              <span className="text-sm font-semibold text-secondary">Our Services</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Our Services
            </h2>
            <p className="text-primary/70 text-lg max-w-2xl mx-auto font-light">
              Professional passport photography, lamination, and printing services — all under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
                  <div className="relative p-6 sm:p-8 bg-white border border-border/50 hover:border-secondary/30 hover:shadow-xl transition duration-300 rounded-2xl">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition duration-300">
                        <Icon className="w-8 h-8 text-secondary" />
                      </div>
                      {/* {index === 3 && <Heart className="w-5 h-5 text-secondary/50" />} */}
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-primary mb-2">
                      {service.title}
                    </h3>
                    <p className="text-secondary text-xs sm:text-sm font-bold uppercase tracking-wide mb-3 opacity-70">
                      {service.category}
                    </p>
                    <p className="text-primary/70 leading-relaxed text-sm sm:text-base">
                      {service.description}
                    </p>
                    <div className="mt-6 pt-6 border-t border-border/30 flex items-center gap-2 text-secondary opacity-0 group-hover:opacity-100 transition duration-300">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-xs sm:text-sm font-semibold">In-store available</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="h-96 sm:h-[500px] rounded-2xl relative overflow-hidden shadow-xl border border-secondary/10 group">
              <img
                src="https://images.pexels.com/photos/1391786/pexels-photo-1391786.jpeg"
                alt="Professional photography studio setup with lighting and camera equipment"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20">
                <span className="text-sm font-semibold text-secondary">About Us</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary mb-6">
                About Studio Preeti
              </h2>
              <p className="text-primary/80 text-base sm:text-lg leading-relaxed mb-6 font-light">
                Studio Preeti is your trusted destination for professional passport photos and high-quality printing services.
                We provide accurate, government-compliant passport and ID photos with proper lighting, precise sizing,
                and quick turnaround to ensure perfect results every time.
              </p>
              <p className="text-primary/80 text-base sm:text-lg leading-relaxed mb-8 font-light">
                With advanced heat-press lamination technology and premium finishing equipment, we protect your important
                documents, certificates, and photographs with durable, long-lasting lamination.
                Available in any size you need - all completed conveniently in a single visit to our studio.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-primary/5 hover:bg-primary/8 transition duration-300">
                  <div className="p-2 bg-secondary rounded-lg flex-shrink-0 mt-1">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Modern Equipment</h4>
                    <p className="text-primary/70 text-sm">
                      Latest technology and heat press lamination
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-primary/5 hover:bg-primary/8 transition duration-300">
                  <div className="p-2 bg-secondary rounded-lg flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">
                      Complete Services
                    </h4>
                    <p className="text-primary/70 text-sm">
                      Passport photos to media prints
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-primary/5 hover:bg-primary/8 transition duration-300">
                  <div className="p-2 bg-secondary rounded-lg flex-shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">
                      In-Store Experience
                    </h4>
                    <p className="text-primary/70 text-sm">
                      Visit us for the best experience and fastest turnaround
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-white to-secondary/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20">
              <span className="text-sm font-semibold text-secondary">Get in Touch</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Visit Us Today
            </h2>
            <p className="text-primary/70 text-lg font-light max-w-2xl mx-auto">
              In-store visits only. Please call us for any enquiries or simply visit our studio to explore our services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">

            <a
              href="mailto:studiopreeti@gmail.com"
              className="group p-8 bg-white border border-border/50 rounded-2xl text-center shadow-md hover:shadow-xl hover:border-secondary/30 transition duration-300"
            >
              <div className="inline-block p-4 bg-secondary/10 rounded-xl mb-5 group-hover:bg-secondary/20 transition duration-300">
                <MailIcon className="w-8 h-8 text-secondary" />
              </div>
              <p className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                studiopreeti@gmail.com
              </p>
            </a>

            <a
              href="https://maps.app.goo.gl/G5cb9KxHnRM47Sg68"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-white border border-border/50 rounded-2xl text-center shadow-md hover:shadow-xl hover:border-secondary/30 transition duration-300 cursor-pointer"
            >
              <div className="inline-block p-4 bg-secondary/10 rounded-xl mb-5 group-hover:bg-secondary/20 transition duration-300">
                <MapPin className="w-8 h-8 text-secondary" />
              </div>
              <p className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                Shitla Asthan Road, Tilkamanjhi, Bhagalpur
              </p>
              <p className="text-primary/70 text-sm">Bihar, India</p>
            </a>

          </div>

          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-primary/20 p-8 sm:p-12 backdrop-blur-sm">
            <div className="max-w-2xl">
              <h3 className="font-display text-2xl font-bold text-primary mb-6">
                Have an Enquiry?
              </h3>
              <p className="text-primary/80 mb-8 leading-relaxed font-light">
                Studio Preeti operates through in-store visits. For passport photography, lamination services, photo frames, wedding photography, or prints in any size, simply give us a call for any enquiries or availability details. You can also visit us directly at our studio in Bhagalpur - we are happy to assist you.
              </p>

              <a
                href="tel:9931852979"
                className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-xl hover:-translate-y-1 transition duration-300 rounded-lg group"
              >
                <span className="flex items-center gap-2">
                  Call Now: 9931852979
                  <Phone className="w-5 h-5 group-hover:scale-110 transition duration-300" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-primary via-primary to-primary/95 text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-0 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8 sm:mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center shadow-lg">
                  <Camera className="w-5 h-5 text-primary" />
                </div>
                <span className="font-display font-bold text-2xl">Studio Preeti</span>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Professional passport photos, expert lamination, custom frames, and high-quality prints in any size.              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-display font-semibold text-lg">Get in Touch</h4>

              {/* Phone */}
              <a
                href="tel:9931852979"
                className="text-white/90 hover:text-secondary transition text-sm flex items-center gap-3 group"
              >
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-secondary group-hover:text-primary transition">
                  <Phone className="w-4 h-4" />
                </div>
                <span>9931852979</span>
              </a>

              {/* Location */}
              <a
                href="https://maps.app.goo.gl/G5cb9KxHnRM47Sg68"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 hover:text-secondary transition text-sm flex items-start gap-3 group"
              >
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-secondary group-hover:text-primary transition">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>
                  Shitla Asthan Road, Tilkamanjhi, Bhagalpur, Bihar - 812001
                  <br />
                  In-store visits only
                </span>
              </a>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-white/70 text-sm">
            <p>&copy; {new Date().getFullYear()} Studio Preeti. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
