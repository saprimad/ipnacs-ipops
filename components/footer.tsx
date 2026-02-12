export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10 text-sm text-gray-600">

          {/* Conference Info */}
          <div>
            <h3 className="font-semibold text-[#0F2A4D] mb-4">
              IPNACS–IPOPS 2026
            </h3>
            <p>
              An international academic conference bringing together scholars,
              researchers and practitioners in pharmaceutical sciences and innovation.
            </p>
          </div>

          {/* Organizer */}
          <div>
            <h3 className="font-semibold text-[#0F2A4D] mb-4">
              Organizer
            </h3>
            <p>Faculty of Pharmacy</p>
            <p>Universiti Teknologi MARA (UiTM)</p>
            <p>Shah Alam, Malaysia</p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-[#0F2A4D] mb-4">
              Contact
            </h3>
            <p>secretariat@ipnacs-ipops.com</p>
            <p>DoubleTree by Hilton</p>
          </div>

        </div>
      </div>

      {/* Institutional Recognition / Branding */}
      <div className="border-t border-gray-200 py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <p className="text-xs uppercase tracking-widest text-gray-500 mb-6">
            Institutional Recognition
          </p>

          <img
            src="/brand.png"
            alt="Institutional Branding"
            className="w-full max-w-5xl mx-auto object-contain"
          />

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-6 text-center text-xs text-gray-500">
        © 2026 IPNACS–IPOPS | Faculty of Pharmacy, Universiti Teknologi MARA
      </div>

    </footer>
  );
}
