student_array = [];
function submit() {
    var display_array = [];
    for (var name = 1; name <= 4; name++) {
        var display_array = document.getElementById("name_of_the_student_" + name).value;
        console.log(display_array);
        student_array.push(display_array);
    }
    console.log(student_array);

    var length_of_names = student_array.length;
    console.log(length_of_names);

    for (var manynames = 0; manynames < length_of_names; manynames++) {
        display_array.push("<h4> Name-" + student_array[manynames] + "<h4>");
        console.log(display_array);
    }
    console.log(display_array);
    document.getElementById("display_name_with_commas").innerHTML = display_array;
    var remove_comma = display_array.join(" ");
    console.log(remove_comma);
    document.getElementById("display_name_without_commas").innerHTML = remove_comma;


    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}



function sorting() {
    student_array.sort();
    console.log(student_array);

    var display_array_sort = [];
    var length_of_names = student_array.length;
    console.log(length_of_names);
    for (var manynames = 0; manynames < length_of_names; manynames++) {
        display_array_sort.push("<h4> Name-" + student_array[manynames] + "<h4>");
        console.log(display_array_sort);
    }

    var remove_comma = display_array_sort.join(" ");
    console.log(remove_comma);
    document.getElementById("display_name_without_commas").innerHTML = remove_comma;
}