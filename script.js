let sortBtn = document.querySelector(".sort-icon-btn");
let sortAz = document.querySelector(".sort-a-z");
let sortZa = document.querySelector(".sort-z-a");

sortBtn.addEventListener("mouseenter", ()=>{
    sortAz.src = "./btn_icons/sort_a_z_icon.svg"
    sortBtn.style.cursor = "pointer";
})

sortBtn.addEventListener("mouseleave", ()=>{
    sortAz.src = "./btn_icons/sort_a_z_gray_icon.svg"
})

sortBtn.addEventListener("mouseenter", ()=>{
    sortZa.src = "./btn_icons/sort_z_a_icon.svg"
})

sortBtn.addEventListener("mouseleave", ()=>{
    sortZa.src = "./btn_icons/sort_z_a_gray_icon.svg"
})

let k = 0;
sortBtn.addEventListener("click", ()=>{
    if(k == 0){
        sortZa.style.display = "block";
        sortAz.style.display = "none";
        k = 1;

        sortList("az");
    }

    else if(k == 1){
        sortAz.style.display = "block";
        sortZa.style.display = "none";
        k = 0;

        sortList("za");
    }
})

let cancelBtn = document.querySelector(".cancel-btn");
let cancelImg = document.querySelector(".cancel-icon");
cancelBtn.addEventListener("mouseenter", ()=>{
    cancelImg.src = "./btn_icons/cancel_icon_purple.svg"
    cancelBtn.style.cursor = "pointer";
})

cancelBtn.addEventListener("mouseleave", ()=>{
    cancelImg.src = "./btn_icons/cancel_icon.svg"
})

let textInput = document.querySelector(".text-input");
cancelBtn.addEventListener("click", ()=>{
    textInput.value = "";
})

let arr = [];
function sortList(sorting){
    let allText = document.querySelectorAll(".list-text");

    allText.forEach((task) =>{
        arr.push(task.textContent.trim());
    })
        
    if(sorting === "az"){
        arr.sort((a, b)=> a.localeCompare(b));
    }

    else if(sorting === "za"){
        arr.sort((a, b)=> b.localeCompare(a));
    }

    allText.forEach((text, i)=>{
        text.textContent = arr[i];
    });

    arr = [];
}

let addBtn = document.querySelector(".add-btn");
let listBoxes = document.querySelector(".list-boxes");
addBtn.addEventListener("click", ()=>{
    if(textInput.value.trim() !== ""){
        listBoxes.style.display = "block"
        let inputBox = document.querySelector(".input-box");
        inputBox.style.display = "none";
        let lists = document.createElement("div");
        lists.classList.add("lists");
        listBoxes.append(lists);

        let li = document.createElement("li");
        lists.append(li);

        let listNum = document.createElement("span");
        listNum.classList.add("list-num");
        li.append(listNum);

        let listText = document.createElement("span")
        listText.classList.add("list-text");
        li.append(listText);

        listText.textContent = textInput.value.trim();

        function listedNumber(){
            let allLists = document.querySelectorAll(".lists");
            allLists.forEach((data, index)=>{
                let listNum = data.querySelector(".list-num");
                listNum.textContent = (index + 1) + ". ";
            });
        }
        listedNumber();
        textInput.value = "";

        let editIcon = document.createElement("img");
        editIcon.classList.add("edit-icon");
        editIcon.src = "./btn_icons/edit_icon.svg";
        editIcon.alt = "edit-icon";
        lists.append(editIcon);

        let plusIcon = document.createElement("img");
        plusIcon.classList.add("plus-icon");
        plusIcon.src = "./btn_icons/plus_icon.svg";
        plusIcon.alt = "plus-icon";
        lists.append(plusIcon);

        let listCancelIcon = document.createElement("img");
        listCancelIcon.classList.add("list-cancel-icon");
        listCancelIcon.src = "./btn_icons/cancel_icon.svg";
        listCancelIcon.alt = "cancel-icon";
        lists.append(listCancelIcon);

        listCancelIcon.addEventListener("mouseenter", ()=>{
            listCancelIcon.src = "./btn_icons/cancel_icon_purple.svg"
            listCancelIcon.style.cursor = "pointer";
        })

        listCancelIcon.addEventListener("mouseleave", ()=>{
            listCancelIcon.src = "./btn_icons/cancel_icon.svg"
        })

        listCancelIcon.addEventListener("click", ()=>{
            lists.remove();
            listedNumber();
            if(listBoxes.textContent.trim() == ""){
                inputBox.style.display = "block";
                listBoxes.style.display = "none"
            }
        })

        let plusBtn = document.querySelector(".plus-btn");
        plusBtn.addEventListener("click", ()=>{
            inputBox.style.display = "block";
        })

        editIcon.addEventListener("mouseenter", ()=>{
            editIcon.src = "./btn_icons/edit_icon_purple.svg"
            editIcon.style.cursor = "pointer";
        })

        editIcon.addEventListener("mouseleave", ()=>{
            editIcon.src = "./btn_icons/edit_icon.svg"
        })

        plusIcon.addEventListener("mouseenter", ()=>{
            plusIcon.src = "./btn_icons/plus_icon_purple.svg"
            plusIcon.style.cursor = "pointer";
        })

        plusIcon.addEventListener("mouseleave", ()=>{
            plusIcon.src = "./btn_icons/plus_icon.svg"
        })

        editIcon.addEventListener("click", ()=>{
            editIcon.style.display = "none"
            plusIcon.style.display = "block";

            let editInput = document.createElement("input");
            editInput.classList.add("edit-input");
            editInput.type = "text";
            editInput.value = listText.textContent;

            li.append(editInput);
            listText.style.display = "none";
            editInput.focus();
        })

        plusIcon.addEventListener("click", ()=>{
            plusIcon.style.display = "none";
            editIcon.style.display = "block";

            let editedInput = li.querySelector(".edit-input");

            if(editedInput.value.trim() !== ""){
                listText.textContent = editedInput.value.trim();
            }

            listText.style.display = "inline";
            editedInput.remove();
        })
    }
})
