const fname=["Thomas","David","Paul","Henry","john"];
const lname=["Peter","Tom","Smith","Rick","James"];
function randomname()
{
    var limit=document.getElementById("limit").value;
    if(limit<25){
        for(var i=0;i<limit;i++)
        {
        var rname=fname[Math.floor(Math.random()*fname.length)]+""+lname[Math.floor(Math.random()*lname.length)];
        var phnum=Math.floor(Math.random()*900000000)+9000000000;
        var tab=document.getElementById("table");
        var row=document.createElement("tr");
        var cell1=document.createElement("td");
        var cell2=document.createElement("td");
        var cell3=document.createElement("td");
        var rdata1=document.createTextNode(rname);
        var rdata2=document.createTextNode(phnum);
        var rdata3=document.createTextNode(rname+"@gmail.com");
        cell1.appendChild(rdata1);
        cell2.appendChild(rdata2);
        cell3.appendChild(rdata3);
        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        tab.appendChild(row);
        }
    document.getElementById("limit").value=""

    }
    else{
    alert("only 25 names can be printed")
    }
}
document.getElementById("add").addEventListener("click",randomname);
   
function tableToCSV() {
    var csv_data = [];
    var rows = document.getElementsByTagName('tr');
    for (var i = 0; i < rows.length; i++) {
        var cols = rows[i].querySelectorAll('td,th');
        var csvrow = [];
        for (var j = 0; j < cols.length; j++) {
            csvrow.push(cols[j].innerHTML);
        }
        csv_data.push(csvrow.join(","));
    }
    csv_data = csv_data.join('\n');
    downloadCSVFile(csv_data);
}
function downloadCSVFile(csv_data) {
			CSVFile = new Blob([csv_data], {
				type: "text/csv"
			});
			var temp_link = document.createElement('a');
			temp_link.download = "dummy.csv";
			var url = window.URL.createObjectURL(CSVFile);
			temp_link.href = url;
			temp_link.style.display = "none";
			document.body.appendChild(temp_link);
			temp_link.click();
			document.body.removeChild(temp_link);
		}
