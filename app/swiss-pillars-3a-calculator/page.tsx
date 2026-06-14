"use client";

import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Navigation } from "@/components/navigation";

export default function Pillar3aCalculator() {
  const [kapital, setKapital] = useState(10000);
  const [zins, setZins] = useState(7);
  const [currentAge, setCurrentAge] = useState(25);
  const [retirementAge, setRetirementAge] = useState(65);
  const [jaehrlich, setJaehrlich] = useState(7258);
  const [currency, setCurrency] = useState("CHF");

  const monatlich = jaehrlich / 12;

  const jahre = Math.max(
    0,
    retirementAge - currentAge
  );

  const monatlicherZins =
    zins > 0
      ? Math.pow(1 + zins / 100, 1 / 12) - 1
      : 0;

  const monate = jahre * 12;

  const startkapitalWert =
    kapital * Math.pow(1 + monatlicherZins, monate);

  const sparplanWert =
    monatlicherZins === 0
      ? monatlich * monate
      : monatlich *
          (
            (
              Math.pow(
                1 + monatlicherZins,
                monate
              ) - 1
            ) /
            monatlicherZins
          );

  const endkapital =
    startkapitalWert + sparplanWert;

  const eingezahlt =
    kapital + jaehrlich * jahre;

  const gewinn =
    endkapital - eingezahlt;

  const chartData = [];

  for (let jahr = 0; jahr <= jahre; jahr++) {
    const monateBisJetzt = jahr * 12;

    const startkapitalBisJetzt =
      kapital *
      Math.pow(
        1 + monatlicherZins,
        monateBisJetzt
      );

    const sparplanBisJetzt =
      monatlicherZins === 0
        ? monatlich * monateBisJetzt
        : monatlich *
            (
              (
                Math.pow(
                  1 + monatlicherZins,
                  monateBisJetzt
                ) - 1
              ) /
              monatlicherZins
            );

    const vermoegen =
      startkapitalBisJetzt +
      sparplanBisJetzt;

    chartData.push({
      jahr,
      age: currentAge + jahr,
      vermoegen: Math.round(vermoegen),
      eingezahlt:
        kapital +
        jaehrlich * jahr,
    });
  }

  return (
    <>
      <Navigation />

      <main className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-8 text-primary">
          Swiss Pillar 3a Calculator
        </h1>

        <p className="mb-8 text-muted-foreground">
          Estimate how your Swiss Pillar 3a retirement savings could grow through annual contributions and long-term investing.
        </p>
        <div className="mb-8">
  <label className="block mb-3 font-medium">
    Currency
  </label>

  <div className="flex flex-wrap gap-2">
    {["CHF", "EUR", "USD", "GBP", ""].map((curr) => (
      <button
        key={curr}
        onClick={() => setCurrency(curr)}
        className={`px-4 py-2 rounded-lg border transition ${
          currency === curr
            ? "bg-primary text-white"
            : "bg-background"
        }`}
      >
        {curr || "None"}
      </button>
    ))}
  </div>
</div>

        <div className="grid gap-6 mb-10">
          <div>
            <label className="block mb-2 font-medium">
              Initial Capital {currency && `(${currency})`}
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
              Annual 3a Contribution {currency && `(${currency})`}
            </label>

            <input
              type="number"
              value={jaehrlich}
onChange={(e) => setJaehrlich(Number(e.target.value))}
              className="w-full border border-border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Annual Return (%)
            </label>

            <input
              type="number"
              value={zins}
              onChange={(e) => setZins(Number(e.target.value) || 0)}
              className="w-full border border-border rounded-lg p-3"
            />
          </div>

          <div>
  <label className="block mb-2 font-medium">
    Current Age
  </label>

  <input
  type="number"
  min="0"
  max="100"
  value={currentAge}
  onChange={(e) =>
    setCurrentAge(
      Math.min(
        100,
        Math.max(0, Number(e.target.value))
      )
    )
  }
  className="w-full border border-border rounded-lg p-3"
/>
  
</div>

<div>
  <label className="block mb-2 font-medium">
    Retirement Age
  </label>

  <input
  
  type="number"
  min="1"
  max="100"
  value={retirementAge}
  onChange={(e) => {
    const value = Number(e.target.value);

    if (value <= 100) {
      setRetirementAge(value);
    }
  }}
  className="w-full border border-border rounded-lg p-3"
/>
</div>
</div>

                <div className="rounded-2xl border border-border bg-card p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-primary">
            Estimated 3a Capital {" "}
            {currency && `${currency} `}
{endkapital.toLocaleString("de-CH", {
  maximumFractionDigits: 0,
})}
          </h2>

          <p className="text-lg mb-3">
            Total Contributions:{" "}
            {currency && `${currency} `}
{eingezahlt.toLocaleString("de-CH", {
  maximumFractionDigits: 0,
})}
          </p>

          <p className="text-lg">
  Investment Growth:{" "}
  {currency && `${currency} `}
  {gewinn.toLocaleString("de-CH", {
    maximumFractionDigits: 0,
  })}
</p>

<p className="text-lg mt-3">
  Years Until Retirement: {jahre}
</p>
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-card p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-primary">
            Pillar 3a Growth Projection
          </h2>

          <div style={{ width: "100%", height: 400 }}>
            <ResponsiveContainer>
              <LineChart data={chartData}>
                <Legend />

                <XAxis dataKey="age" />


                <YAxis
                  tickFormatter={(value) =>
                    `${currency ? currency + " " : ""}${value.toLocaleString("de-CH")}`
                  }
                />

                <Tooltip
  formatter={(value) =>
    `${currency ? currency + " " : ""}${Number(value).toLocaleString("de-CH")}`
  }
/>

                <Line
                  name="Portfolio Value"
                  type="monotone"
                  dataKey="vermoegen"
                  stroke="#16a34a"
                  strokeWidth={3}
                  dot={false}
                />

                <Line
                  name="Contributions"
                  type="monotone"
                  dataKey="eingezahlt"
                  stroke="#2563eb"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-card p-8 shadow-lg overflow-x-auto">
          <h2 className="text-2xl font-bold mb-6 text-primary">
            Pillar 3a Timeline
          </h2>

          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3">Age</th>
                <th className="text-left py-3">Contributions</th>
                <th className="text-left py-3">Portfolio Value</th>
              </tr>
            </thead>

            <tbody>
              {chartData.map((row) => (
                <tr
                  key={currentAge + row.jahr}
                  className="border-b border-border"
                >
                  <td className="py-2">
                    {currentAge + row.jahr}
                  </td>

                  <td className="py-2">
                    {currency && `${currency} `}
{row.eingezahlt.toLocaleString("de-CH")}
                  </td>

                  <td className="py-2">
                    {currency && `${currency} `}
{row.vermoegen.toLocaleString("de-CH")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}