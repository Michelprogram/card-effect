import "./style.scss";
import Tool from "./fct";
const container = document.querySelector<HTMLElement>(
  ".container"
) as HTMLElement;
const card = document.querySelector<HTMLElement>(".card") as HTMLElement;

container.addEventListener("mouseenter", (_) => {
  card.style.transition = "none";
  Tool.addPerspective();
});

container?.addEventListener("mousemove", (e) => {
  const [xAxis, yAxis] = [Tool.half(e.pageX, "x"), Tool.half(e.pageY, "y")];
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container?.addEventListener("mouseleave", (_) => {
  card.style.transition = "all .5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  Tool.removePerspective();
});
