document.addEventListener('DOMContentLoaded', () => {
    const months = ['Eylül', 'Ekim', 'Kasım', 'Aralık', 'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran'];
    const monthlySections = document.getElementById('monthlySections');
    months.forEach(month => {
        monthlySections.innerHTML += createMonthlyInputs(month);
    });
});

function createMonthlyInputs(month) {
    return `
        <h3>${month}</h3>
        <div class="form-group">
            <label for="cognitiveDevelopment${month}">Bilişsel Gelişim (${month}):</label>
            <textarea id="cognitiveDevelopment${month}" name="cognitiveDevelopment${month}" required></textarea>
        </div>
        <div class="form-group">
            <label for="languageDevelopment${month}">Dil Gelişimi (${month}):</label>
            <textarea id="languageDevelopment${month}" name="languageDevelopment${month}" required></textarea>
        </div>
        <div class="form-group">
            <label for="physicalDevelopment${month}">Fiziksel Gelişim (${month}):</label>
            <textarea id="physicalDevelopment${month}" name="physicalDevelopment${month}" required></textarea>
        </div>
        <div class="form-group">
            <label for="socialEmotionalDevelopment${month}">Sosyal-Duygusal Gelişim (${month}):</label>
            <textarea id="socialEmotionalDevelopment${month}" name="socialEmotionalDevelopment${month}" required></textarea>
        </div>`;
}

function createSemesterInputs(semester) {
    return `
        <div class="form-group">
            <label for="cognitiveDevelopment${semester}">Bilişsel Gelişim (${semester}):</label>
            <textarea id="cognitiveDevelopment${semester}" name="cognitiveDevelopment${semester}" required></textarea>
        </div>
        <div class="form-group">
            <label for="languageDevelopment${semester}">Dil Gelişimi (${semester}):</label>
            <textarea id="languageDevelopment${semester}" name="languageDevelopment${semester}" required></textarea>
        </div>
        <div class="form-group">
            <label for="physicalDevelopment${semester}">Fiziksel Gelişim (${semester}):</label>
            <textarea id="physicalDevelopment${semester}" name="physicalDevelopment${semester}" required></textarea>
        </div>
        <div class="form-group">
            <label for="socialEmotionalDevelopment${semester}">Sosyal-Duygusal Gelişim (${semester}):</label>
            <textarea id="socialEmotionalDevelopment${semester}" name="socialEmotionalDevelopment${semester}" required></textarea>
        </div>`;
}

function generateReport() {
    const form = document.getElementById('reportForm');
    const data = new FormData(form);
    const reportData = {};
    data.forEach((value, key) => {
        reportData[key] = value;
    });
    createWordDocument(reportData);
}

function createWordDocument(data) {
    const doc = new Docxtemplater();
    const zip = new JSZip();
    const templatePath = 'docx/template.docx';
    fetch(templatePath)
        .then(response => response.arrayBuffer())
        .then(content => {
            zip.loadAsync(content)
                .then(() => {
                    doc.loadZip(zip);
                    doc.setData(data);
                    try {
                        doc.render();
                    } catch (error) {
                        console.error(error);
                        throw error;
                    }
                    const out = doc.getZip().generate({
                        type: "blob",
                        mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                    });
                    saveAs(out, "Gelişim_Raporu.docx");
                });
        });
}
