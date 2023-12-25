const addBtn = document.querySelector(".content__btn");
addBtn.addEventListener("click", () => {
    let input = document.querySelector(".content__input");
    let resultBox = document.querySelector(".result");
    let modalshadow = document.querySelector(".modalshadow");
    let modalEmptyInput = document.querySelector(".modalEmptyInput");

    if (input.value == "") {
        modalshadow.classList.add("active");
        modalEmptyInput.classList.add("active");

        modalshadow.addEventListener("click", () => {
            modalshadow.classList.remove("active");
        modalEmptyInput.classList.remove("active");
        })
    } else {

        let resultInner = document.createElement("div");
        resultInner.setAttribute("class", "result__inner");
        resultInner.classList.add("active");
        let text = document.createElement("span");
        text.innerHTML = input.value;

        let deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("class", "delet__btn");
        deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;

        let successBtn = document.createElement("button");
        successBtn.setAttribute("class", "success__btn");
        successBtn.innerHTML = `<i class="fa-solid fa-square-check"></i>`;

        resultInner.appendChild(text);
        resultInner.appendChild(deleteBtn);
        resultInner.appendChild(successBtn);

        resultBox.appendChild(resultInner);

        deleteBtn.addEventListener("click", () => {
            resultInner.remove();
        })

        successBtn.addEventListener("click", () => {
            resultInner.classList.toggle("checked");
        })
        
    }
})