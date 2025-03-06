document.getElementById("scanGroups").addEventListener("click", function() {
    alert("Scanning Facebook Groups...");

    // Fake results (Unaweza kuiboresha kwa Facebook API)
    let fakeGroups = [
        "https://www.facebook.com/groups/123456789/",
        "https://www.facebook.com/groups/987654321/"
    ];

    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "<h3>Groups Without Admin:</h3>";

    fakeGroups.forEach(link => {
        let a = document.createElement("a");
        a.href = link;
        a.innerText = link;
        a.target = "_blank";
        resultDiv.appendChild(a);
        resultDiv.appendChild(document.createElement("br"));
    });
})
