// server.js
import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

// Einfacher Speicher für Termine (temporär, nur für Test)
let appointments = [];

// Endpunkt für Termin-Erstellung
app.post("/create_appointment", (req, res) => {
  const { name, date, time, service } = req.body;

  // Termin speichern
  appointments.push({ name, date, time, service });
  console.log("Neuer Termin:", name, date, time, service);

  res.json({
    success: true,
    message: `Termin für ${name} am ${date} um ${time} für ${service} erstellt!`,
  });
});

// Optional: Alle Termine abrufen
app.get("/appointments", (req, res) => {
  res.json(appointments);
});

// Server starten
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
