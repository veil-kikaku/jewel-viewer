// csv.js
// ==========================================
// Jewel Viewer CSV Export
// ==========================================

function downloadCsv(data){

    const rows = [];

    //--------------------------------------
    // Header
    //--------------------------------------

    rows.push([
        "Time",
        "Author",
        "Gift",
        "Jewel",
        "Image"
    ]);

    //--------------------------------------
    // Body
    //--------------------------------------

    data.forEach(item=>{

        rows.push([

            formatTime(item.timestamp),

            item.author,

            item.giftName,

            item.jewel,

            item.imageName

        ]);

    });

    //--------------------------------------
    // CSV
    //--------------------------------------

    const csv = rows
        .map(row =>
            row
            .map(csvEscape)
            .join(",")
        )
        .join("\r\n");

    //--------------------------------------
    // UTF-8 BOM
    //--------------------------------------

    const blob = new Blob(
        [
            "\uFEFF",
            csv
        ],
        {
            type:"text/csv;charset=utf-8;"
        }
    );

    const url =
        URL.createObjectURL(blob);

    const a =
        document.createElement("a");

    const now =
        new Date();

    const fileName =
        "jewel-viewer-" +
        now.getFullYear() +
        String(now.getMonth()+1).padStart(2,"0") +
        String(now.getDate()).padStart(2,"0") +
        "-" +
        String(now.getHours()).padStart(2,"0") +
        String(now.getMinutes()).padStart(2,"0") +
        String(now.getSeconds()).padStart(2,"0") +
        ".csv";

    a.href = url;
    a.download = fileName;

    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);

    URL.revokeObjectURL(url);

}

//--------------------------------------
// CSV Escape
//--------------------------------------

function csvEscape(value){

    if(value===null || value===undefined){

        return "";

    }

    const text =
        String(value);

    return `"${text.replace(/"/g,'""')}"`;

}
