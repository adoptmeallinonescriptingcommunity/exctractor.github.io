function generateLink() {
    let input = document.getElementById("scriptInput").value;
    let match = input.match(/TeleportToPlaceInstance\((\d+),\s*"([\w-]+)"/);

    if (match) {
        let placeId = match[1];
        let serverId = match[2];
        let joinLink = `roblox://placeId=${placeId}&gameInstanceId=${serverId}`;

        document.getElementById("result").innerText = joinLink;
        document.getElementById("copyBtn").style.display = "inline-block";
        document.getElementById("openBtn").style.display = "inline-block";
    } else {
        document.getElementById("result").innerText = "Invalid script format!";
    }
}

function copyLink() {
    let linkText = document.getElementById("result").innerText;
    navigator.clipboard.writeText(linkText).then(() => {
        alert("Link copied to clipboard!");
    });
}

function openLink() {
    let linkText = document.getElementById("result").innerText;
    window.location.href = linkText;
}
