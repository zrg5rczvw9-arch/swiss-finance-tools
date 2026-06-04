"use client";

import { useState } from "react";
import { Navigation } from "@/components/navigation";

export default function ETFCalculator() {
  const [kapital, setKapital] = useState(10000);
  const [zins, setZins] = useState(7);
  const [jahre, setJahre] = useState(20);
  const [monatlich, setMonatlich] = useState(500);

  const monatlicherZins =
    Math.pow(1 + zins / 100, 1 / 12) - 1;

  const monate = jahre * 12;

  const startkapitalWert =
    kapital * Math.pow(1 + monatlicherZins, monate);

  const sparplanWert =
    monatlich *
    ((Math.pow(1 + monatlicherZins, monate) - 1) /
      monatlicherZins);

  const endkapital = startkapitalWert + sparplanWert;

  const eingezahlt = kapital + monatlich * monate;
  const gewinn = endkapital - eingezahlt;

  return (
    <>
      <Navigation />

      <main className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-8 text-primary">
          ETF Sparplan Rechner
        </h1>

        <p className="mb-8 text-muted-foreground">
          Die Berechnung erfolgt mit monatlicher Verzinsung auf Basis der
          effektiven Jahresrendite.
        </p>

        <div className="grid gap-6 mb-10">
          <div>
            <label className="block mb-2 font-medium">
              Startkapital (CHF)
            </label>
            <input
              type="number"
              value={kapital}
              onChange={(e) => setKapital(Number(e.target.value))}
              className="w-full border border-border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Monatliche Einzahlung (CHF)
            </label>
            <input
              type="number"
              value={monatlich}
              onChange={(e) => setMonatlich(Number(e.target.value))}
              className="w-full border border-border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Rendite (% pro Jahr)
            </label>
            <input
              type="number"
              value={zins}
              onChange={(e) => setZins(Number(e.target.value))}
              className="w-full border border-border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Jahre
            </label>
            <input
              type="number"
              value={jahre}
              onChange={(e) => setJahre(Number(e.target.value))}
              className="w-full border border-border rounded-lg p-3"
            />
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-primary">
            Endvermögen:{" "}
            {endkapital.toLocaleString("de-CH", {
              maximumFractionDigits: 0,
            })}{" "}
            CHF
          </h2>

          <p className="text-lg mb-3">
            Eingezahlt:{" "}
            {eingezahlt.toLocaleString("de-CH", {
              maximumFractionDigits: 0,
            })}{" "}
            CHF
          </p>

          <p className="text-lg">
            Gewinn:{" "}
            {gewinn.toLocaleString("de-CH", {
              maximumFractionDigits: 0,
            })}{" "}
            CHF
          </p>
        </div>
      </main>
    </>
  );
}