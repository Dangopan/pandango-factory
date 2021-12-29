//ボタンを押すごとに画面が切り替わる関数
$(function () {

    $(".btn").on("click", function () {
        $(this).closest("div").css("display", "none");
        id = $(this).attr("href");
        $(id).addClass("fit").fadeIn("slow").show();
    });



    //選択ボタンデータを配列に入れてカウントする関数
    // var countKAME = 0; [0]
    // var countKAKAO = 0; [1]
    // var countSELF = 0; [2]
    // var countHARO = 0; [3]
    // var countBIKE = 0; [4]
    var count = [0,0,0,0,0]

    var box = [];
    $(".btn").each(function () {
        $(this).on('click', function () {
            if ($(this).data("value") == "novel"){
                // countKAME += 1;
                // countKAKAO += 1;
                // countSELF += 1;
                // countBIKE += 1;
                count[0] += 1;
                count[1] += 1;
                count[2] += 1;
                count[4] += 1;

            };
            if ($(this).data("value") == "adventure"){
                // countHARO += 1;
                count[3] += 1;
            };
            if ($(this).data("value") == "smooth"){
                // countKAME += 1;
                // countKAKAO += 1;
                // countSELF += 1;
                count[0] += 1;
                count[1] += 1;
                count[2] += 1;
            };
            if ($(this).data("value") == "slow"){
                // countHARO += 1;
                // countBIKE += 1;
                count[3] += 1;
                count[4] += 1;
            };
            if ($(this).data("value") == "illust"){
                // countKAME += 1;
                count[0] += 1;
            };
            if ($(this).data("value") == "story"){
                // countKAKAO += 1;
                // countSELF += 1;
                // countHARO += 1;
                // countBIKE += 1;
                count[4] += 1;
                count[3] += 1;
                count[1] += 1;
                count[2] += 1;
            };
            if ($(this).data("value") == "one"){
                // countKAME += 1;
                // countSELF += 1;
                count[0] += 1;
                count[2] += 1;
            };
            if ($(this).data("value") == "multi"){
                // countKAKAO += 1;
                // countHARO += 1;
                // countBIKE += 1;
                count[4] += 1;
                count[3] += 1;
                count[1] += 1;
            };
            if ($(this).data("value") == "yes"){
                // countKAME += 1;
                count[0] += 1;
            };
            if ($(this).data("value") == "no"){
                // countKAKAO += 1;
                // countSELF += 1;
                // countHARO += 1;
                // countBIKE += 1;
                count[4] += 1;
                count[3] += 1;
                count[1] += 1;
                count[2] += 1;
           };
            console.log(count);
            // console.log(countKAKAO);
            // console.log(countSELF);
            // console.log(countHARO);
            // console.log(countBIKE);
        });
    });


        //結果を出力する関数

        
        $('.end').on('click', function () {


            $(function () {

            // maxindex = 5
            var maxindex = count.indexOf(Math.max.apply(null,count));
            
            console.log(maxindex);
            if (maxindex == 0) {
                $('#answer_01').css("display", ""); //回答1
            } else if (maxindex == 1){
                $('#answer_02').css("display", ""); //回答2
            } else if (maxindex == 2){
                $('#answer_03').css("display", ""); //回答3
            } else if (maxindex == 3){
                $('#answer_04').css("display", ""); //回答4
            } else if (maxindex == 4){
                $('#answer_05').css("display", ""); //回答5
            }
            });

        });

    });




  