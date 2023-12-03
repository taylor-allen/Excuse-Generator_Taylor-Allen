/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });

  let generateExcuse = () => {
    let pronoun = ["A", "The"];
    let subject = ["leopard", "baby", "CEO", "madman", "notebook", "superhero"];
    let action = ["took my", "bought my", "yelled at my", "stole my", "bit my"];
    let possession = ["homework", "toe", "car", "shoe"];
    let where = [
      "on the street",
      "in my house",
      "in living room",
      "at the gym"
    ];

    let proIndex = Math.floor(Math.random() * pronoun.length);
    let subjIndex = Math.floor(Math.random() * subject.length);
    let actionIndex = Math.floor(Math.random() * action.length);
    let possessionIndex = Math.floor(Math.random() * possession.length);
    let whereIndex = Math.floor(Math.random() * where.length);

    return (
      pronoun[proIndex] +
      " " +
      subject[subjIndex] +
      " " +
      action[actionIndex] +
      " " +
      possession[possessionIndex] +
      " " +
      where[whereIndex]
    );
  };
};
