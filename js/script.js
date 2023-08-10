var toggleMode = () => {
  const html = document.documentElement;
  html.classList.toggle("light");

  const isLight = html.classList.contains("light");
  const srcValue = isLight ? "../img/SUS2.jpg" : "../img/SUS.jpg";
  const altValue = isLight
    ? "Avatar da Neeko, personagem de League of Legends com traços de camaleão na cor azul de inverno"
    : "Avatar da Neeko, personagem de League of Legends com traços de camaleão na cor roxa e laranja, com roupa de bruxinha";

  document.querySelector("#profile img").setAttribute("src", srcValue);
  document.querySelector("#profile img").setAttribute("alt", altValue);
};
