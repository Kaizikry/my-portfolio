export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-linear-to-b from-blue-50 to-white px-6 scroll-mt-20"
    >
      <img
        src="/profile.jpg"
        alt="Profile"
        className="w-32 h-32 rounded-full object-cover shadow-lg mb-6"
      />
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
        Hi, I'm <span className="text-blue-600">Your Name</span>
      </h1>
      <p className="mt-4 text-lg text-gray-600 max-w-xl">
        A passionate developer building clean, functional, and modern web experiences.
      </p>
      <a
        href="#projects"
        className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
      >
        View My Work
      </a>
    </section>
  );
}