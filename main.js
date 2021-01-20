$(document).ready(function () {
    $('#form').load("templates/obavestenje.html");
});

function tmplt(template) {
    $('#embed').text("{}");
    $('#form').load(`templates/${template}.html`);
}

function embed(id) {
    let embed = null;
    let embedArr = [];
    embed = $(`#${id}`).serializeArray();
    embed.forEach(e => {
        if (e.value === "") { return; }
        else {
            embedArr.push(`${JSON.stringify(e.name)}:${JSON.stringify(e.value)}`);
        }
    });
    $('#embed').text(`{${embedArr}}`);
}
