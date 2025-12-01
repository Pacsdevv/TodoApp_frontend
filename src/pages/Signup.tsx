// src/pages/Signup.tsx
export default function Signup() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-16 text-center">
      <div className="bg-black p-10 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-4">Sign up</h1>
        <p className="text-gray-600 text-center">Sign up page</p>
        <div className="mt-8 space-y-4">
          <input className="w-full px-4 py-2 border rounded-lg" placeholder="name" />
          <input className="w-full px-4 py-2 border rounded-lg" placeholder="email" />
          <input type="password" className="w-full px-4 py-2 border rounded-lg" placeholder="password" />
          <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
            Resgister
          </button>
        </div>
      </div>
    </div>
  );
}