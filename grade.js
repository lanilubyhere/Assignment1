function markToGrade() {

    let mark = parseInt(
        document.getElementById("markInput").value
    );

    let result = document.getElementById("result");

    if(isNaN(mark)) {
        result.innerHTML = "Please enter a number";
    }

    else if(mark < 0) {
        result.innerHTML = "Your mark can't be negative";
    }

    else if(mark > 100) {
        result.innerHTML = "Your mark can't be more than 100";
    }

    else if(mark >= 90) {
        result.innerHTML = "Grade A";
    }

    else if(mark >= 80) {
        result.innerHTML = "Grade B";
    }

    else if(mark >= 70) {
        result.innerHTML = "Grade C";
    }

    else if(mark >= 60) {
        result.innerHTML = "Grade D";
    }

    else if(mark >= 50) {
        result.innerHTML = "Grade E";
    }

    else {
        result.innerHTML = "Grade F";
    }
}