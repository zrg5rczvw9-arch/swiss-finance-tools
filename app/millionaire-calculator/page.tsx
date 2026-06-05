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

export default function MillionaireCalculator() {
  const [kapital, setKapital] = useState(10000);
  const [monatlich, setMonatlich] = useState(500);
  const [zins, setZins] = useState(7);
  const [ziel, setZiel] = useState(1000000);
  const [currency, setCurrency] = useState("CHF");

  const monatlicherZins =
    Math.pow(1 + zins / 100, 1 / 12) - 1;

  let vermoegen = kapital;
  let monate = 0;

  while (
    vermoegen < ziel &&
    monate < 1200
  ) {
    vermoegen =
      vermoegen * (1 + monatlicherZins) +
      monatlich;

    monate++;
  }

  const jahreBisZiel = monate / 12;
  const anzeigeJahre =
  jahreBisZiel >= 100
    ? "> 100"
    : jahreBisZiel.toFixed(1);

  const eingezahlt =
    kapital + monatlich * monate;

  const gewinn =
    vermoegen - eingezahlt;

  const chartData = [];

  let portfolio = kapital;

  for (let monat = 0; monat <= monate; monat++) {
    if (monat > 0) {
      portfolio =
        portfolio * (1 + monatlicherZins) +
        monatlich;
    }

    if (monat % 12 === 0) {
      chartData.push({
        year: monat / 12,
        portfolio: Math.round(portfolio),
        goal: ziel,
      });
    }
  }

  return (
    <>
      <Navigation />

      <main className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-8 text-primary">
          Millionaire Goal Calculator
        </h1>

        <p className="mb-8 text-muted-foreground">
          Calculate how long it takes to reach your financial goal.
        </p>

        <div className="mb-8">
          <label className="block mb-3 font-medium">
            Currency
          </label>

          <div className="flex flex-wrap gap-2">
            {["CHF", "EUR", "USD", "GBP", ""].map(
              (curr) => (

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
              )
            )}
          </div>
        </div>

        <div className="grid gap-6 mb-10">
          <div>
            <label className="block mb-2 font-medium">
              Current Savings {currency && `(${currency})`}
            </label>

            <input
              type="number"
              value={kapital}
              onChange={(e) =>
                setKapital(Number(e.target.value))
              }
              className="w-full border border-border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Monthly Contribution {currency && `(${currency})`}
            </label>

            <input
              type="number"
              value={monatlich}
              onChange={(e) =>
                setMonatlich(Number(e.target.value))
              }
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
              onChange={(e) =>
                setZins(Number(e.target.value))
              }
              className="w-full border border-border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Target Amount {currency && `(${currency})`}
            </label>

            <input
              type="number"
              value={ziel}
              onChange={(e) =>
                setZiel(Number(e.target.value))
              }
              className="w-full border border-border rounded-lg p-3"
            />
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-primary">
            Goal Reached In
          </h2>

          <div className="text-5xl font-bold text-accent mb-8">
            {anzeigeJahre} Years
          </div>

          <div className="grid md:grid-cols-3 gap-6">
  <div>
    <p className="text-sm text-muted-foreground">
      Target Amount
    </p>

    <p className="text-xl font-semibold">
      {currency && `${currency} `}
      {ziel.toLocaleString("de-CH")}
    </p>
  </div>

  <div>
    <p className="text-sm text-muted-foreground">
      Total Contributions
    </p>

    <p className="text-xl font-semibold">
      {currency && `${currency} `}
      {eingezahlt.toLocaleString("de-CH")}
    </p>
  </div>

  <div>
    <p className="text-sm text-muted-foreground">
      Investment Growth
    </p>

    <p className="text-xl font-semibold text-green-600">
      {currency && `${currency} `}
      {gewinn.toLocaleString("de-CH")}
    </p>
  </div>
</div>

</div>

  

        <div className="mt-10 rounded-2xl border border-border bg-card p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-primary">
            Progress Towards Your Goal
          </h2>

          <div style={{ width: "100%", height: 400 }}>
            <ResponsiveContainer>
              <LineChart data={chartData}>
                <Legend />

                <XAxis dataKey="year" />

                <YAxis
                  tickFormatter={(value) =>
                    `${currency ? currency + " " : ""}${value.toLocaleString("de-CH")}`
                  }
                />

                <Tooltip
                  formatter={(value: number) =>
                    `${currency ? currency + " " : ""}${value.toLocaleString("de-CH")}`
                  }
                />

                <Line
                  name="Portfolio Value"
                  type="monotone"
                  dataKey="portfolio"
                  stroke="#16a34a"
                  strokeWidth={3}
                  dot={false}
                />

                <Line
                  name="Goal Amount"
                  type="monotone"
                  dataKey="goal"
                  stroke="#d4af37"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-card p-8 shadow-lg overflow-x-auto">
          <h2 className="text-2xl font-bold mb-6 text-primary">
            Yearly Progress
          </h2>

          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3">
                  Year
                </th>

                <th className="text-left py-3">
                  Portfolio Value
                </th>

                <th className="text-left py-3">
                  Goal Amount
                </th>
              </tr>
            </thead>

            <tbody>
              {chartData.map((row) => (
                <tr
                  key={row.year}
                  className="border-b border-border"
                >
                  <td className="py-2">
                    {row.year}
                  </td>

                  <td className="py-2">
                    {currency && `${currency} `}
                    {row.portfolio.toLocaleString("de-CH")}
                  </td>

                  <td className="py-2">
                    {currency && `${currency} `}
                    {row.goal.toLocaleString("de-CH")}
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