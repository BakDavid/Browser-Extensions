document.addEventListener("DOMContentLoaded", function () {
    function cleanJson() {
        try {
            var dirtyJson = document.getElementById("dirtyJson").value;

            // Step 1: Remove every \n characters that are not inside single or double quotes
            var step1 = dirtyJson.split("\\\\n").join("");
            step1 = step1.split("\\n").join("");
            step1 = step1.split("\\\\t").join("");
            step1 = step1.split("\\t").join("");

            // Step 2: Remove empty spaces
            var step2 = step1.replace(/\s\s/g, "");

            // Step 3: Remove '+' characters
            var step3 = step2.replace(/\+/g, "");
            step3 = step3.replace(/'\s+'/g, "");
            step3 = step3.replace(/\}"\s*/g, "");
            step3 = step3.replace(/{\\/g, "{");
            step3 = step3.replace(/:\\/g, ":");
            step3 = step3.replace(/,\\/g, ",");
            step3 = step3.replace(/"_/g, "");
            step3 = step3.replace(/\[Array\]/g, '"[Array]"');
            step3 = step3.replace(/\[Object\]/g, '"[Object]"');

            // Step 4: Encapsulate keys in double quotes
            var step4 = step3.replace(
                /([{,])(\s*)([A-Za-z0-9_\-]+?)\s*:/g,
                '$1"$3":'
            );

            // Step 5: Encapsulate single quotes in double quotes for string values
            var step5 = step4.replace(/'([^']*)'/g, '"$1"');

            // Step 6: Fix keys encapsulation
            var step6 = step5.replace(/"([^"]*?)":/g, function (match, p1) {
                return '"' + p1.replace(/"/g, '\\"') + '":';
            });

            document.getElementById("cleanedJson").value = step6;
        } catch (error) {
            alert("Error cleaning JSON: " + error.message);
        }
    }

    function copyJson() {
        var cleanedJson = document.getElementById("cleanedJson");
        cleanedJson.select();
        document.execCommand("copy");
        alert("JSON copied to clipboard");
    }

    function beautifyJson() {
        try {
            var cleanedJson = document.getElementById("cleanedJson").value;
            var beautifiedJson = JSON.stringify(
                JSON.parse(cleanedJson),
                null,
                2
            );
            document.getElementById("cleanedJson").value = beautifiedJson;
        } catch (error) {
            alert("Error beautifying JSON: " + error.message);
        }
    }

    function compressJson() {
        try {
            var cleanedJson = document.getElementById("cleanedJson").value;
            var compressedJson = JSON.stringify(JSON.parse(cleanedJson));
            document.getElementById("cleanedJson").value = compressedJson;
        } catch (error) {
            alert("Error compressing JSON: " + error.message);
        }
    }

    const cleanJsonButton = document.getElementById("cleanJson");
    const copyJsonButton = document.getElementById("copyJson");
    const beautifyJsonButton = document.getElementById("beautifyJson");
    const compressJsonButton = document.getElementById("compressJson");
    cleanJsonButton.addEventListener("click", cleanJson);
    copyJsonButton.addEventListener("click", copyJson);
    beautifyJsonButton.addEventListener("click", beautifyJson);
    compressJsonButton.addEventListener("click", compressJson);
});
