import { Mail, MapPin, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-black text-3xl md:text-4xl mb-4">
            Let&apos;s <span className="text-primary">Connect</span>
          </h2>
          <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s discuss how we can work together
            to bring your ideas to life.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="space-y-8 w-full max-w-md">
            <div>
              <h3 className="font-montserrat font-bold text-2xl mb-6">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-open-sans font-medium">Email</p>
                    <p className="font-open-sans text-muted-foreground">
                      hanifcahyoprasetyo95@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-open-sans font-medium">Phone</p>
                    <p className="font-open-sans text-muted-foreground">
                      +62 8534-8311-232
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-open-sans font-medium">Location</p>
                    <p className="font-open-sans text-muted-foreground">
                      Kudus, Jawa Tengah, Indonesia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
