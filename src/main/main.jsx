import React from "react";
import "./main.css";

export const Main = () => {
  const url = "https://pokeapi.co/api/v2/pokemon/";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let list = data.results;

      list.forEach((pokemon) => {
        let name = pokemon.name;
        let image_src = pokemon.url;

        fetch(image_src)
          .then((response) => response.json())
          .then((pData) => {
            const image = pData.sprites.front_default;

            const img = document.createElement("img");
            img.src = image;

            const block = document.createElement("div");
            block.classList.add("card");

            block.innerHTML = `
            <img src="${image}"/>
            <span>${name}</span>
          `;

            document.body.append(block);
          });
      });
    });
};
