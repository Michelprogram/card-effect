const items = document.querySelectorAll<HTMLElement>(".perspective");

export default class Tool {
  static half = (x: number, orientation: "x" | "y"): number => {
    const reduction = 14;
    const axis = orientation == "x" ? window.innerWidth : window.innerHeight;

    return (axis / 2 - x) / reduction;
  };

  static removePerspective = () =>
    items.forEach((e) => (e.style.transform = "translateZ(0px)"));

  static addPerspective = () =>
    items.forEach((e) => (e.style.transform = "translateZ(50px)"));
}
