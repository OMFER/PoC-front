import React from 'react';

const Auth: React.FC = () => {
  return (
    <>
      {/* Divisor */}
      <div className="relative my-10">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-100"></div>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-4 text-gray-400 font-bold tracking-widest">Or continue with</span>
        </div>
      </div>

      {/* Social Login */}
      <div className="grid grid-cols-2 gap-4">
        <button className="flex items-center justify-center gap-3 py-3.5 px-4 bg-white border border-gray-200 rounded-2xl hover:bg-gray-50 transition-all font-semibold text-gray-700 shadow-sm active:scale-[0.98]">
          <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
          Google
        </button>
        <button className="flex items-center justify-center gap-3 py-3.5 px-4 bg-white border border-gray-200 rounded-2xl hover:bg-gray-50 transition-all font-semibold text-gray-700 shadow-sm active:scale-[0.98]">
          <img src="https://github.githubassets.com/favicons/favicon.svg" alt="GitHub" className="w-5 h-5" />
          GitHub
        </button>
      </div>
    </>
  );
};

export default Auth;