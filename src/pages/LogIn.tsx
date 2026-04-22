import React from 'react';
import { LayoutGrid } from 'lucide-react';
import LoginForm from '../components/logIn/Form';
import Auth from '../components/logIn/auth';

const LoginScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FB] flex flex-col items-center justify-center p-6 font-sans">
      <div className="w-full max-w-[480px] bg-white rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden p-10 md:p-14 animate-in fade-in zoom-in duration-300">
        
        {/* Logo y Encabezado */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-[#1a0533] rounded-2xl flex items-center justify-center shadow-lg shadow-[#1a0533]/20">
              <LayoutGrid className="w-7 h-7 text-white" />
            </div>
            <span className="text-3xl font-black text-[#1a0533] tracking-tight">Agnostiko</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome back</h1>
          <p className="text-gray-500 font-medium">Sign in to your development console</p>
        </div>

        {/* Componente del formulario con validaciones */}
        <LoginForm />

        {/* Componente de botones de redes sociales */}
        <Auth />

        <p className="mt-10 text-center text-sm text-gray-500 font-medium">
          Don't have an account?{' '}
          <a href="#" className="text-[#1a0533] font-bold hover:underline">
            Sign up
          </a>
        </p>
      </div>

      {/* Footer Links */}
      <div className="mt-8 flex gap-8 text-xs font-bold text-gray-400 uppercase tracking-widest">
        <a href="#" className="hover:text-gray-600 transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-gray-600 transition-colors">Terms of Service</a>
        <a href="#" className="hover:text-gray-600 transition-colors">System Status</a>
      </div>
    </div>
  );
};

export default LoginScreen;