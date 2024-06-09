function generateReport() {
    var reportContent = "<strong>Çocuğun Adı:</strong> " + document.getElementById('studentName').value + " " +
                        document.getElementById('studentSurname').value + "<br>" +
                        "<strong>Öğretmen:</strong> " + document.getElementById('teacherName').value + "<br>" +
                        "<strong>Yaş Grubu:</strong> " + document.getElementById('ageGroup').value + "<br><br>";

    var months = ['Eylül', 'Ekim', 'Kasım', 'Aralık', 'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran'];
    months.forEach(function(month) {
        reportContent += `<h3>${month} Ayı</h3>` +
            "<strong>Bilişsel Gelişim:</strong><br>" + document.getElementById('cognitiveDevelopment' + month).value + "<br><br>" +
            "<strong>Dil Gelişimi:</strong><br>" + document.getElementById('languageDevelopment' + month).value + "<br><br>" +
            "<strong>Fiziksel Gelişim:</strong><br>" + document.getElementById('physicalDevelopment' + month).value + "<br><br>" +
            "<strong>Sosyal-Duygusal Gelişim:</strong><br>" + document.getElementById('socialEmotionalDevelopment' + month).value + "<br><br>";
    });

    var semesters = ['Dönem Sonu', 'Sene Sonu'];
    semesters.forEach(function(semester) {
        reportContent += `<h3>${semester}</h3>` +
            "<strong>Bilişsel Gelişim:</strong><br>" + document.getElementById('cognitiveDevelopment' + semester).value + "<br><br>" +
            "<strong>Dil Gelişimi:</strong><br>" + document.getElementById('languageDevelopment' + semester).value + "<br><br>" +
            "<strong>Fiziksel Gelişim:</strong><br>" + document.getElementById('physicalDevelopment' + semester).value + "<br><br>" +
            "<strong>Sosyal-Duygusal Gelişim:</strong><br>" + document.getElementById('socialEmotionalDevelopment' + semester).value + "<br><br>";
    });

    document.getElementById('reportContent').innerHTML = reportContent;
    document.getElementById('report-container').style.display = 'block';
}
