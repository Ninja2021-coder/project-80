std_array=[];

function submit(){
    var display_std_array=[];
    var name=document.getElementById("name_of_the_student_1").value;
    console.log(name);
    std_array.push(name);
    
    console.log(std_array);
    var len=std_array.length;
    console.log(len);

    for(k=0;k<len;k++){
        display_std_array.push("<h4>NAME - "+std_array[k]+"</h4>");
        console.log(display_std_array);
    }


    var remove_comma=display_std_array.join(" ");
    console.log(remove_comma);

    document.getElementById("display_name_without_commas").innerHTML=remove_comma;
    
    document.getElementById("sort_button").style.display="inline-block";

}

function sort(){
    std_array.sort();
    console.log(std_array);

    std_sort_array=[];
    len1=std_array.length;
    console.log(len1);

    for(i=0;i<len1;i++){
        std_sort_array.push("<h4>NAME - "+std_array[i]+"</h4>");
        console.log(std_sort_array);
    }
    var remove_comma=std_sort_array.join(" ");
    console.log(remove_comma);

    document.getElementById("display_name_without_commas").innerHTML=remove_comma;
    
}

function searching(){
    var s=document.getElementById("s1").value;
    var found=0;
    var j;
    for(j=0;j<std_array.length;j++){
        if(s==std_array[j]){
            found=found+1;
        }
    }
    document.getElementById("p2").innerHTML="name found " +found+ " time/s";
    console.log("found name" +found+ " time/s");
}