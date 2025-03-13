document.addEventListener("DOMContentLoaded", function () {
    var list1 = [], list2 = [], list3 = [], list4 = [], list5 = [];
    var x = 0;

    document.getElementById("todo").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page refresh
        Addrow();
    });

    function Addrow() {
        document.getElementById('submit').style.backgroundColor = 'blue';

        let task = document.getElementById("task").value;
        let description = document.getElementById("task_des").value;
        let time = document.getElementById("task_time").value;
        let date = document.getElementById("date").value;

        if (!task || !description || !time || !date) {
            alert("Please fill all fields.");
            return;
        }

        var tableBody = document.getElementById('show').getElementsByTagName('tbody')[0];
        var NewRow = tableBody.insertRow();

        list1[x] = x + 1; // Serial Number
        list2[x] = task;
        list3[x] = description;
        list4[x] = time;
        list5[x] = date;

        var cel1 = NewRow.insertCell(0);
        var cel2 = NewRow.insertCell(1);
        var cel3 = NewRow.insertCell(2);
        var cel4 = NewRow.insertCell(3);
        var cel5 = NewRow.insertCell(4);

        cel1.innerHTML = list1[x];
        cel2.innerHTML = list2[x];
        cel3.innerHTML = list3[x];
        cel4.innerHTML = list4[x];
        cel5.innerHTML = list5[x];

        alert("Task added successfully!");
        console.log("Task:", task, "Description:", description, "Time:", time, "Date:", date);

        x++; // Increment index
        document.getElementById("todo").reset(); // Reset form after submission
    }
});
