import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { isValidEmail } from '../../utils/validors';

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let newErrors = { email: '', password: '' };
    let hasErrors = false;

    if (!email) {
      newErrors.email = 'El correo electrónico es requerido';
      hasErrors = true;
    } else if (!isValidEmail(email)) {
      newErrors.email = 'Por favor ingresa un formato de correo válido';
      hasErrors = true;
    }

    if (!password) {
      newErrors.password = 'La contraseña es requerida';
      hasErrors = true;
    } else if (password.length < 4) {
      newErrors.password = 'La contraseña debe tener al menos 4 caracteres';
      hasErrors = true;
    }

    setErrors(newErrors);

    if (!hasErrors) {
      console.log('Logging in with:', { email, password });
      navigate('/Home');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2.5 ml-1">
          Correo 
        </label>
        <div className="relative group">
          <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${errors.email ? 'text-red-400' : 'text-gray-400 group-focus-within:text-[#1a0533]'}`} />
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors({ ...errors, email: '' });
            }}
            placeholder="name@company.com"
            className={`w-full pl-12 pr-4 py-4 bg-gray-50 border rounded-2xl focus:outline-none focus:ring-2 transition-all text-gray-900 placeholder:text-gray-400 ${errors.email ? 'border-red-300 focus:ring-red-500/10 focus:border-red-500 bg-red-50/50' : 'border-gray-100 focus:ring-[#1a0533]/10 focus:border-[#1a0533]'}`}
          />
        </div>
        {errors.email && <p className="text-red-500 text-xs mt-2 ml-1 font-medium">{errors.email}</p>}
      </div>

      <div>
        <div className="flex justify-between items-center mb-2.5 ml-1">
          <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-widest">
            Contraseña
          </label>
          <a href="#" className="text-xs font-bold text-[#1a0533] hover:underline">Olvidaste la contraseña?</a>
        </div>
        <div className="relative group">
          <Lock className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${errors.password ? 'text-red-400' : 'text-gray-400 group-focus-within:text-[#1a0533]'}`} />
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (errors.password) setErrors({ ...errors, password: '' });
            }}
            placeholder="••••••••"
            className={`w-full pl-12 pr-12 py-4 bg-gray-50 border rounded-2xl focus:outline-none focus:ring-2 transition-all text-gray-900 placeholder:text-gray-400 ${errors.password ? 'border-red-300 focus:ring-red-500/10 focus:border-red-500 bg-red-50/50' : 'border-gray-100 focus:ring-[#1a0533]/10 focus:border-[#1a0533]'}`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 transition-colors"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>
        {errors.password && <p className="text-red-500 text-xs mt-2 ml-1 font-medium">{errors.password}</p>}
      </div>

      {/* <div className="flex items-center gap-3 ml-1">
        <input type="checkbox" id="remember" className="w-5 h-5 rounded-lg border-gray-300 text-[#1a0533] focus:ring-[#1a0533] transition-all" />
        <label htmlFor="remember" className="text-sm text-gray-600 font-medium select-none cursor-pointer">
          Remember me for 30 days
        </label>
      </div> */}

      <button type="submit" className="w-full py-4 bg-[#1a0533] text-white font-bold rounded-2xl hover:bg-[#2a0852] transition-all shadow-lg shadow-[#1a0533]/20 active:scale-[0.98]">
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;