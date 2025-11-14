"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import {
  Video,
  Coffee,
  MessageSquare,
  Utensils,
  Users,
  Sparkles,
  Landmark,
  Clock,
  MapPin,
} from "lucide-react";

export default function Page() {
  const bgRef = useRef<HTMLDivElement>(null);

  const programa = [
    { hora: "10:30", texto: "Inicio", icono: <Clock size={18} /> },
    { hora: "11:30", texto: "Video introductorio", icono: <Video size={18} /> },
    { hora: "12:30", texto: "Coffee break", icono: <Coffee size={18} /> },
    {
      hora: "13:00",
      texto:
        "Charla: Presencia de Dios y contemplación en la vida cotidiana (testimonios)",
      icono: <MessageSquare size={18} />,
    },
    { hora: "13:30", texto: "Almuerzo y café", icono: <Utensils size={18} /> },
    {
      hora: "14:30",
      texto:
        "Dinámica: el espíritu de San Josemaría y el acompañamiento espiritual",
      icono: <Users size={18} />,
    },
    {
      hora: "15:30",
      texto: "Santo Rosario y confesiones",
      icono: <Sparkles size={18} />,
    },
    { hora: "17:00", texto: "Santa Misa de cierre", icono: <Landmark size={18} /> },
  ];

  // Fondo dinámico suave
  useEffect(() => {
    gsap.to(bgRef.current, {
      backgroundPosition: "200% center",
      duration: 25,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  return (
    <main
      ref={bgRef}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#B7EFE1] via-[#E7FAF2] to-[#B7EFE1] bg-[length:300%_300%] overflow-hidden"
    >
      {/* === TÍTULO PRINCIPAL === */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-10 text-4xl md:text-5xl font-bold text-[#0C3E33] mb-4 text-center tracking-tight"
      >
        Convivencia de Formación
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-[#146556] text-lg mb-8 text-center px-6"
      >
        “San Josemaría y tu felicidad en la vida cotidiana”
      </motion.p>

      {/* === MAPA EMBEBIDO === */}
      

      {/* === CONTENEDOR PRINCIPAL === */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl min-h-[85vh] rounded-3xl overflow-hidden shadow-2xl border border-white/30 backdrop-blur-sm">
        {/* === COLUMNA IZQUIERDA: CRONOGRAMA === */}
        <div className="bg-white/70 backdrop-blur-lg p-8 md:p-12 text-[#093D35] flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-8 text-center md:text-left">
            Programa del Día
          </h2>

          <div className="relative flex flex-col gap-6 pl-8">
            <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#0C3E33] via-[#7CE1C8] to-[#0C3E33] opacity-40"></div>

            {programa.map((item, i) => (
              <div key={i} className="relative flex items-start gap-4 pl-2">
                <div className="absolute -left-[10px] top-5 w-4 h-4 bg-[#0C3E33] rounded-full ring-4 ring-[#B7EFE1]/70 shadow-md"></div>
                <div className="flex-1 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all px-5 py-4 border border-[#0C3E33]/10">
                  <div className="flex items-center gap-2 text-[#0C3E33] font-semibold text-sm sm:text-base mb-1">
                    {item.icono}
                    {item.hora} hs
                  </div>
                  <p className="text-sm text-[#145C4A] leading-snug">
                    {item.texto}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-sm italic text-[#145C4A] text-center md:text-left">
            “Lo que se necesita para conseguir la felicidad no es una vida cómoda,
            sino un corazón enamorado.”
            <p className="text-[#0C3E33] font-semibold mt-1">
              — San Josemaría Escrivá
            </p>
          </div>
        </div>

        {/* === COLUMNA DERECHA: FORMULARIO CERRADO === */}
<div className="bg-[#0C3E33] text-white flex flex-col justify-center items-center px-8 md:px-12 py-10">
  <div className="w-full max-w-sm text-center">
    <h2 className="text-2xl font-semibold mb-4">
      Inscripciones cerradas
    </h2>
    <p className="text-white/80 text-sm leading-relaxed">
      Ya no estamos recibiendo nuevas inscripciones para la convivencia.
      <br />
      Muchas gracias por tu interés 🙏
    </p>

    <div className="mt-10 bg-white/15 border border-white/30 rounded-2xl p-4 text-center shadow-inner">
      <p className="text-lg font-bold mb-2 text-[#BFEFE2]">
        💵 Costo de la jornada:
        <span className="text-white"> $10.000</span>
      </p>
      <p className="text-sm text-[#C7EDE1]">
        Incluye material de trabajo, almuerzo y bebida.
      </p>
      <p className="mt-3 text-sm text-white">
        Alias para transferencia:
        <br />
        <span className="font-mono text-base tracking-wide text-white/90">
          CLUB.TORRENTES.YBTUC
        </span>
      </p>
    </div>
  </div>
</div>

        
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="w-[90%] md:w-[70%] lg:w-[60%] mb-13 shadow-lg rounded-2xl overflow-hidden border border-[#0C3E33]/20"
      >
        <iframe
          title="Ubicación La Providencia"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d271.42525350122747!2d-65.63064083088548!3d-29.36519154232293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa6f8aeaed2ee121e!2sPosada%20y%20Resto-Bar%20La%20Providencia!5e0!3m2!1ses!2sar!4v1730590000000!5m2!1ses!2sar"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="bg-[#0C3E33]/10 text-[#0C3E33] py-2 text-center text-sm flex items-center justify-center gap-2">
          <MapPin size={16} /> Posada “La Providencia” — Sanagasta
        </div>
      </motion.div>
    </main>
  );
}
