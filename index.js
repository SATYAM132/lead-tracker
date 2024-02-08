let myLead = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEL = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLead"))



if (leadsFromLocalStorage) {
    myLead = leadsFromLocalStorage
    random(myLead)
}

tabBtn.addEventListener("click", function () {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLead.push(tabs[0].url)
        localStorage.setItem("myLead", JSON.stringify(myLead))
        render(myLead)
    })
})

function random(leads) {
    let listItem = ""
    for (let i = 0; i < leads.length; i++) {
        //listItem += "<li>" + myLead[i] + "</li>"
        listItem += `<li>
                        <a target='_black' href='${leads[i]}'>
                            ${leads[i]}
                         </a>
                     </li>`
        // const li = document.createElement("li")
        // li.textContent = myLead[i]
        // ulEL.append(li)
    }
    ulEL.innerHTML = listItem
}

deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLead = []
    render(myLead)
})

inputBtn.addEventListener("click", function () {
    myLead.push(inputEl.value)
    inputEl.value = " "
    localStorage.setItem("myLead", JSON.stringify(myLead))
    random(myLead)
})



// const recipient = "james"

// const email = `hey ${recipient} how is it going? cheers per`
// console.log(email)
