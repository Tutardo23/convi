// components/FormularioInscripcion.tsx
"use client";

import { useState } from "react";

export default function FormularioInscripcion() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) throw new Error("Error en el servidor");

      setStatus("ok");
      e.currentTarget.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium" htmlFor="nombre">
          Nombre *
        </label>
        <input
          required
          id="nombre"
          name="nombre"
          type="text"
          className="bg-slate-950/40 border border-slate-700/60 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400/60"
          placeholder="María, Juan..."
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium" htmlFor="apellido">
          Apellido *
        </label>
        <input
          required
          id="apellido"
          name="apellido"
          type="text"
          className="bg-slate-950/40 border border-slate-700/60 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400/60"
          placeholder="Pérez, López..."
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium" htmlFor="celular">
          Celular (WhatsApp) *
        </label>
        <input
          required
          id="celular"
          name="celular"
          type="tel"
          className="bg-slate-950/40 border border-slate-700/60 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400/60"
          placeholder="+54 381 ..."
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium" htmlFor="email">
          Email *
        </label>
        <input
          required
          id="email"
          name="email"
          type="email"
          className="bg-slate-950/40 border border-slate-700/60 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400/60"
          placeholder="tu@email.com"
        />
      </div>

      {/* Alias solo visible */}
      <div className="bg-slate-950/30 border border-slate-800 rounded-lg p-3 text-xs">
        <p className="text-slate-200 mb-1">Alias para transferir:</p>
        <p className="font-mono text-sm text-slate-50">
          CLUB.TORRENTES.YBTUC
        </p>
        <p className="text-slate-400 mt-1">
          En el asunto de la transferencia poné tu nombre y apellido.
        </p>
      </div>

      <button
        disabled={status === "sending"}
        type="submit"
        className="w-full inline-flex justify-center items-center gap-2 bg-slate-100 text-slate-900 rounded-lg py-2.5 text-sm font-medium hover:bg-white transition"
      >
        {status === "sending" ? "Enviando..." : "Inscribirme"}
      </button>

      {status === "ok" && (
        <p className="text-xs text-green-400">
          ¡Gracias! Te vamos a escribir al WhatsApp con la confirmación.
        </p>
      )}
      {status === "error" && (
        <p className="text-xs text-red-400">
          Hubo un problema. Probá de nuevo o escribinos directo.
        </p>
      )}
    </form>
  );
}
