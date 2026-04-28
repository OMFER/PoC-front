import React from 'react';
import { LayoutGrid } from 'lucide-react';
import LoginForm from '../components/logIn/Form';

const LoginScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FB] flex flex-col items-center justify-center p-6 font-sans">
      <div className="w-full max-w-[480px] bg-white rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden p-10 md:p-14 animate-in fade-in zoom-in duration-300">
        
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-[#1a0533] rounded-2xl flex items-center justify-center shadow-lg shadow-[#1a0533]/20">
              <LayoutGrid className="w-7 h-7 text-white" />
            </div>
            <span className="text-3xl font-black text-[#1a0533] tracking-tight">Agnostiko</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome back</h1>
        </div>

        <LoginForm />
      </div>
    </div>
  );
};

export default LoginScreen;