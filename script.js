// script.js

let allData = [];

const fileInput = document.getElementById("fileInput");
const minJewel = document.getElementById("minJewel");
const searchName = document.getElementById("searchName");
const sortBy = document.getElementById("sortBy");

fileInput.addEventListener("change", loadFile);
minJewel.addEventListener("change", render);
searchName.addEventListener("input", render);
sortBy.addEventListener("change", render);

async function loadFile(e) {

    const file = e.target.files[0];

    if (!file) return;

    const text = await file.text();

    allData = parseChatFile(text);

    render();

}

function render() {

    const tbody = document.getElementById("resultBody");

    tbody.innerHTML = "";

    const min = Number(minJewel.value);

    const keyword = searchName.value
        .toLowerCase()
        .trim();

    let list = allData.filter(item => {

        if (item.jewel < min) return false;

        if (
            keyword &&
            !item.author.toLowerCase().includes(keyword)
        ) {
            return false;
        }

        return true;

    });

    switch (sortBy.value) {

        case "jewel":
            list.sort((a,b)=>b.jewel-a.jewel);
            break;

        case "amount":
            list.sort((a,b)=>b.amount-a.amount);
            break;

        case "name":
            list.sort((a,b)=>a.author.localeCompare(b.author));
            break;

        default:
            // 時間順（元の並び）
            break;
    }

    let totalJewel = 0;
    let totalAmount = 0;

    for (const item of list) {

        totalJewel += item.jewel;
        totalAmount += item.amount;

        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${item.timestamp}</td>
            <td>${item.author}</td>
            <td>${item.jewel.toLocaleString()}</td>
            <td>¥${item.amount.toLocaleString()}</td>
            <td>
                ${
                    item.image
                    ? `<img src="${item.image}" width="48">`
                    : ""
                }
            </td>
        `;

        tbody.appendChild(tr);

    }

    if (list.length === 0) {

        tbody.innerHTML =
            "<tr><td colspan='5'>該当データがありません</td></tr>";

    }

    document.getElementById("count").textContent =
        list.length.toLocaleString();

    document.getElementById("totalJewel").textContent =
        totalJewel.toLocaleString();

    document.getElementById("totalAmount").textContent =
        "¥" + totalAmount.toLocaleString();

}
