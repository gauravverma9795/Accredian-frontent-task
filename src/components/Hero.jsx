export default function Hero({ onOpen }) {
    return (
      <section className="text-center py-20 px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 bg-orange-400">
          Earn Rewards by Referring Friends!
        </h1>
        <button
          onClick={onOpen}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Refer Now
        </button>
      </section>
    );
  }