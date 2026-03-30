import React, { useState } from 'react';
import { Check, Zap, Music, TrendingUp, Users, ArrowRight, Star, Play } from 'lucide-react';

export default function VoltumLanding() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-gradient-to-b from-black via-purple-900/20 to-black text-white min-h-screen overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/40 backdrop-blur border-b border-purple-500/20 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Zap className="w-8 h-8 text-purple-500" />
            <span className="text-2xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              VOLTUM
            </span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#features" className="hover:text-purple-400 transition">Features</a>
            <a href="#pricing" className="hover:text-purple-400 transition">Precios</a>
            <a href="#testimonios" className="hover:text-purple-400 transition">Testimonios</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded-full text-purple-300 text-sm font-semibold mb-4">
              ⚡ Para DJs Profesionales
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
            Tu Preskit Profesional
            <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent">
              En 5 Minutos
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Impresiona a promotores y clientes con un preskit profesional. Edita tu información sin código, comparte tu música, eventos y equipamiento. Todo en un lugar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <form onSubmit={handleSubmit} className="flex gap-2 max-w-md w-full mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 bg-gray-800 rounded-lg border border-purple-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg font-bold transition-all flex items-center gap-2"
              >
                {submitted ? '✓ Enviado' : 'Comenzar'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center text-gray-400 text-sm mb-12">
            <div>⚡ Sin código</div>
            <div>🎵 Para DJs</div>
            <div>🚀 Instant</div>
          </div>
        </div>
      </div>

      {/* Features */}
      <section id="features" className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Todo lo que un DJ necesita
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Secciones profesionales diseñadas específicamente para DJs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Music, title: 'Tracks Destacados', desc: 'Muestra tus mejores producciones' },
              { icon: Music, title: 'Próximas Presentaciones', desc: 'Eventos con link de entradas' },
              { icon: TrendingUp, title: 'Estadísticas', desc: 'Muestra tu alcance en Spotify' },
              { icon: Users, title: 'Testimonios', desc: 'Opiniones de promotores y clientes' },
              { icon: Zap, title: 'Equipamiento', desc: 'Tu gear profesional listado' },
              { icon: Star, title: 'Galería', desc: 'Fotos de eventos y performances' },
            ].map((feature, i) => (
              <div key={i} className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/50 transition">
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Planes Simples
            </h2>
            <p className="text-gray-400 text-lg">Sin sorpresas, sin compromisos a largo plazo</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Free Trial */}
            <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-2">Prueba Gratis</h3>
              <p className="text-gray-400 mb-6">30 días completos</p>
              <div className="text-4xl font-black mb-6">$0<span className="text-lg text-gray-400">/mes</span></div>
              <ul className="space-y-3 mb-8">
                {['3 secciones básicas', 'Marca de agua VOLTUM', '1 URL compartible'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-purple-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 border border-purple-500 rounded-lg font-bold hover:bg-purple-500/10 transition">
                Comenzar Gratis
              </button>
            </div>

            {/* Pro (Highlighted) */}
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 border-2 border-purple-500 rounded-2xl p-8 relative">
              <div className="absolute top-4 right-4 bg-purple-600 px-3 py-1 rounded-full text-sm font-bold">
                MÁS POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-2">Plan Pro</h3>
              <p className="text-gray-300 mb-6">Para DJs serios</p>
              <div className="text-4xl font-black mb-2">$9.990<span className="text-lg text-gray-400">/mes</span></div>
              <p className="text-sm text-gray-400 mb-6">O $99.900/año (ahorra 17%)</p>
              <ul className="space-y-3 mb-8">
                {[
                  'Todas las secciones',
                  'Sin marca de agua',
                  'URL personalizada',
                  'Analytics completo',
                  'Descargar como PDF',
                  'Soporte prioritario',
                  'Integración Spotify'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-purple-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-bold hover:opacity-90 transition">
                Activar Pro Ahora
              </button>
            </div>
          </div>

          <div className="mt-12 bg-gray-900/50 border border-gray-700 rounded-xl p-6 text-center">
            <p className="text-gray-400">
              ✅ Cancela cuando quieras • ✅ Sin contrato • ✅ Acceso inmediato
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 py-8 px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p>© 2024 VOLTUM. Todos los derechos reservados. 🎸⚡</p>
        </div>
      </footer>
    </div>
  );
}
