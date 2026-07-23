// csv.js

document
    .getElementById("downloadCsv")
    .addEventListener("click", downloadCSV);

function downloadCSV() {

    if (!allData.length) {
        alert("データがありません");
        return;
    }

    const rows = [];

    rows.push([
        "時間",
        "ユーザー",
        "ジュエル",
        "金額"
    ]);

    const min = Number(
        document.getElementById("minJewel").value
    );

    const keyword =
        document
        .getElementById("searchName")
        .value
        .toLowerCase();

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

    list.forEach(item => {

        rows.push([
            item.timestamp,
            item.author,
            item.jewel,
            item.amount
        ]);

    });

    const csv = rows
        .map(r => r.join(","))
        .join("\n");

    // Excel文字化け対策
    const bom = "\uFEFF";

    const blob = new Blob(
        [bom + csv],
        {
            type:"text/csv;charset=utf-8;"
        }
    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = "jewel-viewer.csv";

    document.body.appendChild(a);

    a.click();

    a.remove();

    URL.revokeObjectURL(url);

}
