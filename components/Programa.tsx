// components/Programa.tsx
export default function Programa() {
  const items = [
    { hora: "10:30", titulo: "Inicio" },
    { hora: "11:30", titulo: "Video introductorio" },
    { hora: "12:30", titulo: "Coffee break" },
    {
      hora: "13:00",
      titulo: "Charla: Presencia de Dios y contemplación en la vida cotidiana (Testimonios)",
    },
    { hora: "13:30", titulo: "Almuerzo – Café" },
    {
      hora: "14:30",
      titulo: "Dinámica de trabajo: el espíritu de San Josemaría y el acompañamiento espiritual",
    },
    {
      hora: "15:30",
      titulo: "Santo Rosario – Tiempo disponible y Confesiones",
    },
    { hora: "17:00", titulo: "Santa Misa" },
  ];

  return (
    <div className="bg-slate-900/20 rounded-2xl border border-slate-800/60 p-5 lg:p-6 backdrop-blur-sm">
      <h2 className="text-xl font-semibold mb-4">Programa del día</h2>
      <p className="text-sm text-slate-300 mb-5">
        Se puede mostrar este mismo programa en la web y también enviarlo en el
        formulario de confirmación.
      </p>
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item.hora}
            className="flex gap-4 items-start bg-slate-950/20 rounded-xl p-3 border border-slate-800/50"
          >
            <div className="w-16 shrink-0 text-sm font-semibold text-slate-50">
              {item.hora} hs
            </div>
            <div className="flex-1">
              <p className="text-sm text-slate-50">{item.titulo}</p>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-5 text-xs text-slate-400">
        * El costo incluye material de trabajo y almuerzo (empanadas y bebida).
      </p>
    </div>
  );
}
