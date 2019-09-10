$("document").ready(function() {
  $('.button-collapse').sideNav({
    closeOnClick:true
  });
  // console.log($('.slider'))
});

// Add event listener for clearAll
let clearAll = document.querySelector(".clearAll");
clearAll.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("clicked");
  location.reload();
});

// Add event listener for AddSampleData
let addSampleData = document.querySelector(".addSampleData");
addSampleData.addEventListener("click", function(event) {
  console.log("clicked");
  event.preventDefault();
  createSampleData();
});

// Add event listener for ShowResults
let showResults = document.querySelector(".showResults");
showResults.addEventListener("click", function(event) {
  event.preventDefault();
  fnShowResults();
});

// FUNCTIONS

function createSampleData() {
  let i = 1;
  allWords.forEach(function(group) {
    console.log("group", group);
    let list = "";
    console.log("group.length", group.length);
    group.forEach(function(keyword) {
      // console.log('keyword', list+=keyword+'\r\n');
      list += keyword + "\r\n";
    });
    $("#textarea" + i).text(list);
    i++;
  });
}

function fnShowResults() {
  let arrAllResults = [];
  const group1 = $("#textarea1").text();
  const group2 = $("#textarea2").text();
  const group3 = $("#textarea3").text();
  array1 = group1.split("\r\n");
  array2 = group2.split("\r\n");
  array3 = group3.split("\r\n");
  console.log(group1);
  console.log(array1);
  array1.forEach(function(grp1keyWord) {
    array2.forEach(function(grp2keyWord) {
      array3.forEach(function(grp3keyWord) {
        arrAllResults.push(`${grp1keyWord} ${grp2keyWord} ${grp3keyWord}`);
      });
    });
  });
  console.log(arrAllResults);
  let count = arrAllResults.length;
  let txtAllResults = "";
  arrAllResults.forEach(function(mergedKeyword) {
    txtAllResults += mergedKeyword + "\r\n";
  });
  console.log(txtAllResults);
  console.log("count", count);
  $("#resultsArea").text(txtAllResults);
  $("#resultsCount").text("Results Count Total: " + count);
}
