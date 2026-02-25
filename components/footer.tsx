import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-[#0F2A4D] text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">

        {/* Top Section */}
        <div className="grid gap-10 md:grid-cols-3">

          {/* Left - Conference */}
          <div>

            {/* Evolusi + Title */}
            <div className="flex items-center gap-4">
              <Image
                src="/evolusi.png"
                alt="UiTM Evolusi"
                width={80}
                height={80}
                className="h-14 w-auto object-contain"
                priority
              />

              <Link
                href="/"
                className="text-xl font-semibold hover:opacity-90 transition"
              >
                IPNaCS–IPoPS 2026
              </Link>
            </div>

            <p className="mt-4 text-sm text-slate-200 leading-relaxed">
              An international academic conference bringing together scholars,
              researchers and practitioners in pharmaceutical sciences and innovation.
            </p>
          </div>

          {/* Organizer */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Organizer</h3>

            <p className="text-sm text-slate-200 leading-relaxed">
              Faculty of Pharmacy <br />
              Level 11, FF1 Building <br />
              UiTM Selangor, Puncak Alam Campus <br />
              42300 Bandar Puncak Alam <br />
              Selangor, MALAYSIA
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>

            <p className="text-sm text-slate-200 leading-relaxed">
              <a
                href="mailto:ipnacsipops26@gmail.com"
                className="hover:underline"
              >
                ipnacsipops26@gmail.com
              </a>
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-4">
              <a
                href="https://www.facebook.com/pharmacyuitm/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0F2A4D] hover:opacity-80 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.youtube.com/channel/UCHg7xn66_RfCLHztSXadMAg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0F2A4D] hover:opacity-80 transition"
              >
                <FaYoutube />
              </a>

              <a
                href="https://www.instagram.com/pharmacy_uitm/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0F2A4D] hover:opacity-80 transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Institutional Recognition */}
        <div className="mt-14 border-t border-slate-600 pt-8 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-slate-300">
            INSTITUTIONAL RECOGNITION
          </p>

          <div className="mt-6 flex justify-center">
            <Image
              src="/brand.png"
              alt="Institutional Recognition"
              width={1200}
              height={240}
              className="h-auto w-full max-w-4xl"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-slate-600 pt-6 text-center text-sm text-slate-300">
          © 2026 IPNaCS–IPoPS | Faculty of Pharmacy, Universiti Teknologi MARA
        </div>

      </div>
    </footer>
  );
}