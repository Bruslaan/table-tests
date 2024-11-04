import React from "react";

type Status =
  | "Offen"
  | "Entwurf"
  | "Abgelehnt"
  | "Stellungnahme"
  | "Zugestimmt"
  | "Zugestimmt autom.";
const ProcessTable = () => {
  const data = [
    {
      id: "10733",
      type: "GPE",
      status: "Offen",
      days: "12",
      kundennr: "D3015",
      region: ["N", "SO", "W"],
      date: "03.03.25",
      selected: false,
    },
    {
      id: "10733",
      type: "GPE",
      status: "Entwurf",
      days: "21",
      kundennr: "D3015",
      region: ["S"],
      date: "03.03.25",
      selected: false,
    },
    {
      id: "10133",
      type: "GPE",
      status: "Abgelehnt",
      days: "16",
      kundennr: "D3015",
      region: ["N", "O", "W"],
      date: "03.03.25",
      selected: true,
    },
    {
      id: "10730",
      type: "GPE",
      status: "Stellungnahme",
      days: "3",
      kundennr: "D3015",
      region: ["SO", "SW", "W"],
      date: "10.03.25",
      selected: true,
    },
    {
      id: "10730",
      type: "GPE",
      status: "Zugestimmt autom.",
      days: "abgelaufen",
      kundennr: "D3015",
      region: ["N", "O", "SW"],
      date: "07.04.25",
      selected: false,
    },
  ];

  const getStatusColor = (status: Status) => {
    switch (status) {
      case "Offen":
        return "bg-yellow-100";
      case "Entwurf":
        return "bg-blue-100";
      case "Abgelehnt":
        return "bg-red-100";
      case "Stellungnahme":
        return "bg-green-50";
      case "Zugestimmt autom.":
        return "bg-green-100";
      default:
        return "";
    }
  };

  const getStatusIcon = (status: Status) => {
    switch (status) {
      case "Entwurf":
        return "✏️";
      case "Abgelehnt":
        return "❌";
      case "Stellungnahme":
        return "📋";
      case "Zugestimmt autom.":
        return "✓";
      default:
        return "";
    }
  };

  return (
    <div className="p-4">
      <table className="w-full border-collapse bg-white">
        <thead>
          <tr className="border-b">
            <th className="p-2 text-start text-start">
              <input type="checkbox" className="rounded" />
            </th>
            <th className="p-2 text-start">Zugn. (OTN)</th>
            <th className="p-2 text-start">Prozess</th>
            <th className="p-2 text-start">Status</th>
            <th className="p-2 text-start">Frist (Tage)</th>
            <th className="p-2 text-start">Kundennr.</th>
            <th className="p-2 text-start">Region</th>
            <th className="p-2 text-start">Woche</th>
            <th className="p-2 text-start">Wochentag</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b hover:bg-gray-50 text-start">
              <td className="p-2">
                <input
                  type="checkbox"
                  checked={row.selected}
                  className="rounded"
                  readOnly
                />
              </td>
              <td className="p-2">{row.id}</td>
              <td className="p-2">{row.type}</td>
              <td className="p-2">
                <span
                  className={`px-2 py-1 rounded ${getStatusColor(
                    row.status as Status
                  )}`}
                >
                  {getStatusIcon(row.status as Status)} {row.status}
                </span>
              </td>
              <td className="p-2">{row.days}</td>
              <td className="p-2">{row.kundennr}</td>
              <td className="p-2">
                <div className="flex gap-1">
                  {row.region.map((r, i) => (
                    <span key={i} className="px-1 bg-gray-100 rounded text-sm">
                      {r}
                    </span>
                  ))}
                </div>
              </td>
              <td className="p-2">{row.date}</td>
              <td className="p-2">
                <div className="flex gap-1">
                  <span className="px-2 bg-gray-100 rounded">Mo</span>
                  <span className="px-2 rounded">Di</span>
                  <span className="px-2 rounded">Mi</span>
                  <span className="px-2 rounded">Do</span>
                  <span className="px-2 rounded">Fr</span>
                  <span className="px-2 rounded">Sa</span>
                  <span className="px-2 rounded">So</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProcessTable;
