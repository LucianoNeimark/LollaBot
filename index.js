import { TwitterApi } from "twitter-api-v2";
import Cron from "node-cron";
const tw_client = new TwitterApi(); //Token
const nameList = [
  ["La Mona Gimenes", "F"],
  ["Luquitas Rodriguez", "M"],
  ["Lilita Carrio", "F"],
  ["Macri", "M"],
  ["Lali Esposito", "F"],
  ["Alberto Fernandez", "M"],
  ["Vicente Viloni", "M"],
  ["El negro de Whatsapp", "M"],
  ["Hasbulla", "M"],
  ["Jorge Macri", "M"],
  ["Javier Milei", "M"],
  ["Migue Granados", "M"],
  ["Miguel Abuelo", "M"],
  ["El chino darin", "M"],
  ["Ricardo Arjona", "M"],
  ["Elon Musk", "M"],
  ["German Beder", "M"],
  ["Dario Barassi", "M"],
  ["Mario Pergolini", "M"],
  ["Marito Baracus", "M"],
  ["Antony Hopkins", "M"],
  ["German Garmendia", "M"],
]; //Nombres
function getName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

Cron.schedule("*/10 * * * * *", () => {
  var name = getName();
  console.log(
    `${name[0]} confirmad${
      name[1] == "M" ? "o" : "a"
    } para el Lollapalooza 2023`
  );
});
