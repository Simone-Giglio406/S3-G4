for (i = 0; i < 76; i++) {
  console.log("verify numbers");
}

const createTable = function () {
  const rows = [i];
  console.log("rows", rows);

  for (let i = 0; i <= 76; i++) {
    if (i % 8 === 1) {
      rows += "<tr>";
      console.log("error");
    }

    rows += `<td>${i}</td>`;

    if (i % 8 === 0) {
      rows += "</tr>";
    }
  }

  rows.innerHTML = `<thead><tr><th>Numbers</th></tr></thead><tbody>${rows}</tbody>`;
  console.log("verify");
};

createTable("rows");
