const article1 = document.querySelector("#firstArticle")
const article2 = document.querySelector("#secondArticle")




const eventHandler = () => {
    const messageContent = document.querySelector("#message")

    article1.innerHTML = `${messageContent.value}`
    article2.innerHTML = `${messageContent.value}`

    /* messageContent.value = ""; */
    
}

document.getElementById("message").addEventListener("keyup", eventHandler)
