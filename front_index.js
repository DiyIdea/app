function XHR(method, url, params = {}) {
    return new Promise((resolve, reject) => {
        try {
            const request = new XMLHttpRequest ()
            request.onreadystatechange = () => {
                console.log("준비상태 : ",request.readyState)
                if (request.readyState ===4) {
                    resolve(request.response)
                }
            }
            request.open(method,url)
            request.setRequestHeader("Content-Type", "application/json")
            request.send(JSON.stringify(params))
        } catch (e) {
            reject(e)
        }
    })
}

// ----------------- ENTER YOUR CODE HERE -----------------
    // 작성한 XHR 함수를 이용하여 Listing Article API를 호출하는 코드를 작성하라
    // index.html 에 이미 적혀있는 SAMPLE처럼, section 태그 안에 게시물을 article 태그로 하나씩 작성되게 하라
    // 만들어지는 article 태그의 DOM 구조 및 내부 속성은 SAMPLE과 동일하게 하라
    // 게시물은 시간 역순으로 나타나게 하라
// --------------------------------------------------------




const run  = async () => {
    const data = await XHR("get", "http://localhost:3714/",{})
    console.log(data)
    const article = document.createElement("article")
    const titleDiv = document.createElement("div")
    titleDiv.className = "title"
    titleDiv.innerText= `${data}`
    article.append(titleDiv)
    const section = document.querySelector("section")
    const articleLatest = section.querySelector("article")
    section.insertBefore(article, articleLatest)

}







// const listingArticle = async () => {
//     const data = await XHR("get", "http://localhost:3714/")
//     const reconstructions = JSON.parse(data)
//     reconstructions.sort((a, b) => {
//         return a.timestamp - b.timestamp
//     })

//     for (const reconstruction of reconstructions) {
//         const date = new Date(reconstruction.timestamp)

//         const article = document.createElement("article")
//         article.dataset.index = `${reconstruction.index}`

//         const titleDiv = document.createElement("div")
//         titleDiv.className = "title"

//         const titleLabel = document.createElement("label")
//         titleLabel.innerText = reconstruction.title
//         titleDiv.append(titleLabel)

//         const infoDiv = document.createElement("div")
//         infoDiv.className = "info"

//         const authorLabel = document.createElement("label")
//         authorLabel.className = "author"
//         authorLabel.innerText = reconstruction.author

//         const timeLabel = document.createElement("date")
//         timeLabel.className = "write_time"
//         timeLabel.innerText = date.toLocaleString("ko-KR", {
//             timeZone: "ASIA/SEOUL",
//         })

//         const deleteA = document.createElement("a")
//         deleteA.setAttribute("onclick", `deleteArticle(${reconstruction.index})`)
//         deleteA.innerText = "삭제"

//         infoDiv.append(authorLabel, timeLabel, deleteA)

//         const contentsDiv = document.createElement("div")
//         contentsDiv.classList.add("contents")
//         contentsDiv.innerHTML = reconstruction.contents

//         article.append(titleDiv, infoDiv, contentsDiv)

//         const section = document.querySelector("section")
//         const articleLatest = section.querySelector("article")
//         section.insertBefore(article, articleLatest)
//     }
// }








// async function insertArticle() {
//     const inputTitle = document.querySelector('input[name="title"]')
//     const inputContents = document.querySelector('textarea')
//     const inputAuthor = document.querySelector('input[name="author"]')
//     const inputPassword = document.querySelector('input[name="password"]')
//     const inputSubmit = document.querySelector('input[type="button"]')


//     const title = inputTitle.value
//     const contents = inputContents.value.replace(/\n/g, '<br />')
//     const author = inputAuthor.value
//     const password = inputPassword.value
//     const timestamp = new Date().getTime()

//     if((!title)
//     || (!contents)
//     || (!author)
//     || (!password)) {
//         alert("입력되지 않은 항목이 있습니다!")
//         return
//     }

//     inputTitle.setAttribute("disabled", "disabled")
//     inputContents.setAttribute("disabled", "disabled")
//     inputAuthor.setAttribute("disabled", "disabled")
//     inputPassword.setAttribute("disabled", "disabled")
//     inputSubmit.setAttribute("disabled", "disabled")


//     // ----------------- ENTER YOUR CODE HERE -----------------
//     // 작성한 XHR 함수를 이용하여 Insert Article API를 호출하는 코드를 작성하라
//     const data = await XHR('post', 'http://localhost:3714/',{
//         title : title,
//         author: author,
//         password: password,
//         contents: contents,
//         timestamp: timestamp
//     })
//     // 호출 후 반환된 게시물 번호를 articleIndex 변수에 담게 하라
//     let articleIndex = data.index

//     // --------------------------------------------------------

//     const article = document.createElement("article")
//     article.dataset.index = articleIndex

//         const titleDiv = document.createElement("div")
//         titleDiv.className = "title"
//             const titleLabel = document.createElement("label")
//             titleLabel.innerText = title
//         titleDiv.append(titleLabel)

//         const infoDiv = document.createElement("div")
//         infoDiv.className = "info"
//             const authorLabel = document.createElement("label")
//             authorLabel.className = "author"
//             authorLabel.innerText = author
//             const timeLabel = document.createElement("label")
//             timeLabel.className = "write_time"
//             timeLabel.innerText = datetime.toLocaleString('ko-KR', { timeZone: 'ASIA/SEOUL' })
//             const deleteA = document.createElement("a")
//             deleteA.setAttribute("onclick", `deleteArticle(${articleIndex})`)
//             deleteA.innerText = "삭제"
//         infoDiv.append(authorLabel, timeLabel, deleteA)

//         const contentsDiv = document.createElement("div")
//         contentsDiv.className = "contents"
//         contentsDiv.innerHTML = contents

//     article.append(titleDiv, infoDiv, contentsDiv)

//     const section = document.querySelector('section')
//     const articleLatest = section.querySelector('article');
//     section.insertBefore(article, articleLatest)

//     inputTitle.value = ''
//     inputContents.value = ''
//     inputAuthor.value = ''
//     inputPassword.value = ''

//     inputTitle.removeAttribute("disabled")
//     inputContents.removeAttribute("disabled")
//     inputAuthor.removeAttribute("disabled")
//     inputPassword.removeAttribute("disabled")
//     inputSubmit.removeAttribute("disabled")
// }






// const deleteArticle = async (selectedIndex) => {
//     let isSuccess
//     let errorMsg
//     const password = prompt("비밀번호를 입력해주세요.")
//     const response = await XHR("delete", "http://localhost:3714/", {
//         index: selectedIndex,
//         password: password,
//     })
//     const reResponse = JSON.parse(response)
//     if (reResponse.success === true) {
//         isSuccess = true
//     } else {
//         errorMsg = reResponse.errorMsg
//     }

//     if (!isSuccess) {
//         alert(`다음과 같은 에러가 발생하여 게시물을 지우지 못했습니다:\n${errorMsg}`)
//     }
// }


;(async () => {
    await run()
})()