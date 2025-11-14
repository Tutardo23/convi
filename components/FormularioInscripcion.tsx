"use client";

export default function FormularioInscripcion() {
  // 🔒 CERRADO
  const isClosed = true;

  if (isClosed) {
    return (
      <div className="bg-slate-900/40 border border-slate-700 rounded-xl p-6 text-center">
        <h2 className="text-lg font-semibold mb-2">Inscripciones cerradas</h2>
        <p className="text-sm text-slate-300">
          Ya no se aceptan más inscripciones.
        </p>
      </div>
    );
  }

  // ⬇️⬇️⬇️ NUNCA se va a mostrar esto porque isClosed = true
  return null;
}
