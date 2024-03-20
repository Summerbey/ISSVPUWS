document.querySelectorAll(".carousel").forEach(carousel => {

    const items = carousel.querySelectorAll(".carousel--item");
    const buttonsHtml = Array.from(items, () => {
        return`<span class="carousel--button"></span>`;
    });

    carousel.insertAdjacentHTML("beforeend", `
      <div class="carousel__nav">
      ${ buttonsHtml.join("")}
      </div>
    `);

    const button = carousel.querySelectorAll(".carousel__button");

    button.forEach((button.i) => {
     button.addEventListener("click", () => {
        //un-select all the items
        items.forEach(item => item.classList.remove("carousel__item--selected"));
        button.forEach(button => button.classList.remove("carousel__button--selected"));

        items[i].classList.add("carousel__item--selected");
        button.classList.add("carousel__button--selected");
        });
    });
    // Select the first item on page load
    items[0].classList.add("carousel__item--selected");
    button[0].classList.add("carousel__button--selected");

});