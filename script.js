// script.js
// ==========================================
// Jewel Viewer UI
// ==========================================

let allData = [];

const fileInput = document.getElementById("fileInput");
const minJewel = document.getElementById("minJewel");
const searchName = document.getElementById("searchName");
const sortBy = document.getElementById("sortBy");

const countLabel = document.getElementById("count");
const totalJewelLabel = document.getElementById("totalJewel");

const resultBody = document.getElementById("resultBody");

fileInput.addEventListener("change", loadFile);
minJewel.addEventListener("change", render);
searchName.addEventListener("input", render);
sortBy.addEventListener("change", render);

async function loadFile(event){

    const file = event.target.files[0];

    if(!file){
        return;
    }

    const text = await file.text();

    allData = parseChatFile(text);

    render();

}

function render(){

    let data = [...allData];

    //--------------------------------------
    // Filter Jewel
    //--------------------------------------

    const min = Number(minJewel.value);

    data = data.filter(item => item.jewel >= min);

    //--------------------------------------
    // Search Name
    //--------------------------------------

    const keyword =
        searchName.value
            .trim()
            .toLowerCase();

    if(keyword){

        data = data.filter(item =>
            item.author
                .toLowerCase()
                .includes(keyword)
        );

    }

    //--------------------------------------
    // Sort
    //--------------------------------------

    switch(sortBy.value){

        case "jewel":

            data.sort(
                (a,b)=>
                    b.jewel-a.jewel
            );

            break;

        case "name":

            data.sort(
                (a,b)=>
                    a.author.localeCompare(
                        b.author,
                        "ja"
                    )
            );

            break;

        default:

            data.sort(
                (a,b)=>
                    a.timestamp-b.timestamp
            );

    }

    //--------------------------------------
    // Stats
    //--------------------------------------

    const totalJewel =
        data.reduce(
            (sum,item)=>
                sum+item.jewel,
            0
        );

    countLabel.textContent =
        data.length.toLocaleString();

    totalJewelLabel.textContent =
        totalJewel.toLocaleString();

    //--------------------------------------
    // Empty
    //--------------------------------------

    if(data.length===0){

        resultBody.innerHTML=`
        <tr>
            <td
                colspan="6"
                class="empty">
                データがありません
            </td>
        </tr>
        `;

        return;

    }

    //--------------------------------------
    // Table
    //--------------------------------------

    resultBody.innerHTML="";

    data.forEach(item=>{

        const tr=document.createElement("tr");

        tr.innerHTML=`

            <td>
                ${formatTime(item.timestamp)}
            </td>

            <td>

                <img
                    src="${item.image}"
                    alt="${escapeHtml(item.giftName)}">

            </td>

            <td>

                ${escapeHtml(item.author)}

            </td>

            <td>

                ${escapeHtml(item.giftName)}

            </td>

            <td>

                ${item.jewel.toLocaleString()}

            </td>

        `;

        resultBody.appendChild(tr);

    });

}

//--------------------------------------
// Time
//--------------------------------------

function formatTime(ms){

    const sec =
        Math.floor(ms/1000);

    const h =
        Math.floor(sec/3600);

    const m =
        Math.floor((sec%3600)/60);

    const s =
        sec%60;

    if(h>0){

        return `${h}:${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;

    }

    return `${m}:${String(s).padStart(2,"0")}`;

}

//--------------------------------------
// HTML Escape
//--------------------------------------

function escapeHtml(text){

    return String(text)
        .replace(/&/g,"&amp;")
        .replace(/</g,"&lt;")
        .replace(/>/g,"&gt;")
        .replace(/"/g,"&quot;")
        .replace(/'/g,"&#039;");

}

//--------------------------------------
// CSV
//--------------------------------------

document
.getElementById("downloadCsv")
.addEventListener(
    "click",
    ()=>{

        if(allData.length===0){

            alert("データがありません");

            return;

        }

        downloadCsv(allData);

    }
);
