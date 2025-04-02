document.getElementById("calculate-btn").addEventListener("click", calculateHashes);

function calculateHashes() {
    const inputText = document.getElementById("input-text").value.trim();
    console.log("Input text:", inputText);

    if (inputText === "") {
        alert("Please enter some text.");
        return;
    }

    try {
        const sha1Hash = CryptoJS.SHA1(inputText).toString(CryptoJS.enc.Hex);
        console.log("SHA-1 Hash:", sha1Hash);
        document.getElementById("sha1-hash").textContent = sha1Hash;

        const sha256Hash = CryptoJS.SHA256(inputText).toString(CryptoJS.enc.Hex);
        console.log("SHA-256 Hash:", sha256Hash);
        document.getElementById("sha256-hash").textContent = sha256Hash;

    } catch (error) {
        console.error("Error calculating hashes:", error);
        alert("There was an error calculating the hashes. Please try again.");
    }
}
