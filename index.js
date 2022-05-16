import { TwitterApi } from "twitter-api-v2";
import Cron from "node-cron";
const tw_client = new TwitterApi(); //Token
const nameList = [
  "La Mona Gimenes",
  "Luquitas Rodriguez",
  "Lilita Carrio",
  "Macri",
  "Lali Esposito",
  "Alberto Fernandez",
  "Vicente Viloni",
  "El negro de Whatsapp",
  "Hasbulla",
  "Jorge Macri",
  "Javier Milei",
  "Migue Granados",
  "Miguel Abuelo",
  "El chino darin",
  "Ricardo Arjona",
  "Elon Musk",
  "German Beder",
  "Dario Barassi",
  "Mario Pergolini",
  "Marito Baracus",
  "Antony Hopkins",
  "German Garmendia",
]; //Nombres
function getName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

Cron.schedule("*/10 * * * * *", () => {
  console.log(`${getName()} confirmado para el Lolla Palooza 2023`);
});
