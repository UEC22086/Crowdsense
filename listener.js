import { Client, Databases } from "node-appwrite";
import twilio from "twilio";
import dotenv from "dotenv";

dotenv.config();

/* ---------- Appwrite Setup ---------- */
const client = new Client()
  .setEndpoint(process.env.APPWRITE_ENDPOINT)
  .setProject(process.env.APPWRITE_PROJECT_ID)
  .setKey(process.env.APPWRITE_API_KEY);

const databases = new Databases(client);

/* ---------- Twilio Setup ---------- */
const twilioClient = twilio(
  process.env.TWILIO_SID,
  process.env.TWILIO_AUTH
);

/* ---------- In-memory alert tracker ---------- */
const alertedZones = new Set();

/* ---------- Listen to Appwrite Changes ---------- */
client.subscribe(
  `databases.${process.env.APPWRITE_DATABASE_ID}.collections.${process.env.APPWRITE_COLLECTION_ID}.documents`,
  async (response) => {
    if (!response.payload) return;

    const zone = response.payload;

    // Auto compute status if needed
    let computedStatus = "NORMAL";
    if (zone.Density >= 50 && zone.Density <= 70) computedStatus = "MEDIUM";
    if (zone.Density > 70) computedStatus = "HIGH";

    // Trigger only on HIGH and once
    if (computedStatus === "HIGH" && !alertedZones.has(zone.$id)) {
      try {
        await twilioClient.messages.create({
          from: process.env.TWILIO_FROM,
          to: process.env.TWILIO_TO,
          body: `
🚨 HIGH CROWD ALERT 🚨
Zone: ${zone.Zone_Name}
Area: ${zone.area}
Density: ${zone.Density}
Time: ${new Date().toLocaleString()}
`
        });

        alertedZones.add(zone.$id);
        console.log(`✅ WhatsApp alert sent for ${zone.Zone_Name}`);
      } catch (error) {
        console.error("❌ WhatsApp send failed:", error.message);
      }
    }

    // Reset alert if density drops
    if (computedStatus !== "HIGH") {
      alertedZones.delete(zone.$id);
    }
  }
);

console.log("👂 Listening for crowd density changes...");
