export default function Home() {
  return (
    <div className="px-24 py-6 mx-auto">
      {/* lecture 1 */}
      <div>
        <h2 className="text-red-500 text-xl font-bold">TailwindCSS</h2>

        <div className="bg-orange-500 w-20 h-20 rounded-lg"></div>
      </div>

      {/* lecture 2 / 3 */}
      <div className="my-20">
        <button className="border-2 px-4 py-2 border-green-500 rounded-lg hover:border-orange-500 transition-all duration-300">
          <span>Button</span>
        </button>
      </div>

      {/* lecture 4 */}
      <div className="grid grid-cols-4 gap-y-4">
        <div className="w-20 h-20 bg-blue-500"></div>
        <div className="w-20 h-20 bg-orange-500"></div>
        <div className="w-20 h-20 bg-red-500"></div>
        <div className="w-20 h-20 bg-green-500"></div>
        <div className="w-20 h-20 bg-slate-500"></div>
        <div className="w-20 h-20 bg-pink-500"></div>
      </div>

      {/* lecture 5 */}
      <div className="my-20">
        <div className="w-full h-20 bg-red-500 sm:bg-sky-500 md:bg-orange-500 lg:bg-slate-500"></div>
      </div>
    </div>
  );
}
