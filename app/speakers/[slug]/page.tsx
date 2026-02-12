type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function SpeakerPage({ params }: PageProps) {
  const { slug } = await params;

  return (
    <main className="bg-[#F7F8FA] text-[#0F2A4D]">
      <section className="bg-white py-20 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold">Speaker</h1>
          <p className="mt-2 text-gray-600">
            Profile: <span className="font-semibold text-[#0F2A4D]">{slug}</span>
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <p className="text-gray-600">
              Replace this placeholder with your speaker details.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
