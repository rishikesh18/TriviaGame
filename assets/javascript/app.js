    var interval;
    
    var index=0;
    var quiz = [
        {"question":"What is the highest point in earth ?",
            "correct":"8848m" ,
            "option":["8848m", "8448m", "8488m", "8888m"], "userselected":""},
        {"question":"When was first flight took place?",
            "correct":"1903" ,
            "option":["1603","1703","1803","1903"], "userselected":""},
        {"question":"When was America founded?",
            "correct":"1776" ,
            "option":["1676","1776","1876","1576"], "userselected":""},
        {"question":"2 + 2 / 2 = ?",
            "correct":"3" ,
            "option":["1","2","3","4"], "userselected":""},
       {"question":"What is the name of highest peak of the world?",
            "correct":"Mt. Everest" ,
            "option":["Mt. Annapurn","Mt. Alaska","Mt. Everest","Mt. k2"], "userselected":""},
        {"question":"In which country does the highest peak of the world lies?",
            "correct":"Nepal" ,
            "option":["India","Nepal","China","Pakistan"], "userselected":""},
        {"question":"Gautam Buddha, known as light of Asia, was born in Lumbini. Lumbini les in:?",
            "correct":"Nepal" ,
            "option":["India","Nepal","Pakistan","China"], "userselected":""},
        {"question":"Out of 10 highest peak of the world, Nepal has ...... among them.",
            "correct":"8" ,
            "option":["2","4","6","8"], "userselected":""},
        {"question":"What is the independence day of Nepal?",
            "correct":"Never been ruled by other" ,
            "option":["July 20","August 20","September 20","Never been ruled by other"], "userselected":""},
        {"question":"The Nepali New year 'Baishak 1' lies in the month .... of AD calander?",
            "correct":"April" ,
            "option":["January","February","March","April"], "userselected":""},
        {"question":"Which of the following best describe the Hindu religion?",
            "correct":"Humanity" ,
            "option":["Humanity","Animal Sacrifice","War","Peace"], "userselected":""},
        {"question":"What is the independence day of US?",
            "correct":"July 4" ,
            "option":["Jun 4","July 4","Jun 14","July 14"],"userselected":""} ]; 


        $("#startgame").click(function() {
        
        $("#firstpage").hide();
        $("#ques").show();
        $("#timecounter").show();
        
        timer();
        showQuiz();
        
        });

        //$('<input type="radio" name="radiobtn" > Yourtext'+'</input>').appendTo('#target');
        
        $( document ).ready(function() {
       
      //  var timecount = 
            $("#ques").hide();
            $("#timecounter").hide();
            $("#resultpage").hide();
        
    
            showQuiz();



        });

        function optionCheck() {
            //alert("done");
            // console.log(this);
        }

        $("#radio1").click(function(){
            quiz[index].userselected=$("#radio1").val();
            clearInterval(interval);
            nextQuestion();
       // console.log(quiz);
        });

        $("#radio2").click(function(){        
            quiz[index].userselected=$("#radio2").val(); 
            clearInterval(interval);
            nextQuestion();
        });

        $("#radio3").click(function(){
            quiz[index].userselected=$("#radio3").val();
            clearInterval(interval);
            nextQuestion();
        });

        $("#radio4").click(function(){
            quiz[index].userselected=$("#radio4").val();   
            clearInterval(interval);    
            nextQuestion(); 
        });

        function showQuiz(){             
            $("#question").text("Q:"+ " " + quiz[index].question);
            // $("#opt1").text(quiz[index].option[0]);
            // $("#radio1").val(quiz[index].option[0]);
            //$("#radio1").selected=false;
            let opt=quiz[index].option;
            for(var i=0;i<opt.length;i++){
            let newindex=i+1;
            
            $("#radio"+newindex).css("background-color","");
            //$("#radio"+newindex).prop('selected',false);
            $(quiz.question).appendTo("target");
            $("#opt"+newindex).text(" " + quiz[index].option[i]);
            $("#radio"+newindex).val(quiz[index].option[i]);
            }    
        }

        function nextQuestion() {
            timer();
        
            // console.log(getIndex(quiz[index].userselected))
            $('[type=button]').attr("disabled","disabled"); 
            if(quiz[index].correct==quiz[index].userselected) {
                //console.log("correct");
                $("#check").text("Your answer is: Correct");
                // console.log("#radio"+quiz[index].option.indexOf(quiz[index].userselected)+1);
                let newindex=quiz[index].option.indexOf(quiz[index].userselected)+1;
                $("#radio"+newindex).css("background-color","green");

            }else{
                $("#check").text("Your are unable to give right answer.");
                
                let newindexCorrect=quiz[index].option.indexOf(quiz[index].correct)+1;
            
                let newindexWrong=quiz[index].option.indexOf(quiz[index].userselected)+1;
                $("#radio"+newindexCorrect).css("background-color","green");
                $("#radio"+newindexWrong).css("background-color","red");   
            }
            
        index++;
            if( index < quiz.length) {
           
            setTimeout(function() {
                showQuiz(); 
                $("#check").text("");
                $("[type=button]").removeAttr("disabled");

                //code to be executed after 1 second
                }, 1000);
        
            }else{
                setTimeout(function() {
                    clearInterval(interval);
                    calcResult();
                }, 1000);
            
            }
            }

        function timer(){
            var timer2 = "0:10";
            interval = setInterval(function() {
            var timer = timer2.split(":");
            //by parsing integer, I avoid all extra string processing
            var minutes = parseInt(timer[0], 10);
            var seconds = parseInt(timer[1], 10);
            --seconds;
            minutes = (seconds < 0) ? --minutes : minutes;
            if (minutes < 0) clearInterval(interval);
            seconds = (seconds < 0) ? 59 : seconds;
            seconds = (seconds < 10) ? "0" + seconds : seconds;
            //minutes = (minutes < 10) ?  minutes : minutes;
            $("#timeleft").html(minutes + ":" + seconds);
            timer2 = minutes + ":" + seconds;
            if(minutes ==0 &&seconds ==0){
            clearInterval(interval);
            nextQuestion();
            }
            }, 1000);

        }  

        function calcResult(){
            let count=0;
            for(var i=0;i<quiz.length;i++){
                if(quiz[i].correct==quiz[i].userselected){
                    count++;
                }
            } 
        
            $("#timeleft").text("");
            $("#ques").hide();
            $("#check").hide();
            $("#timecounter").hide();
            $("#correctcount").text("correct: " + count);
           //   $("#resultpage").append("correct: " + userselected.length + "</br>");
            $("#totalq").text("Total: " + quiz.length);
            $("#replay").text("Play again");
            $("#resultpage").show();
        }
        
        $("#replay").click(function() {
        
            $("#firstpage").show();
            $("#resultpage").hide();
            $("#check").text("");
            $("[type=button]").removeAttr("disabled")
            for(var i=0;i<quiz.length;i++){
                quiz[i].userselected="";
            } 
            index = 0;
            count = 0;
        });  




        
        
