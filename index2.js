const animals = [

    'elefant',
   
       'hase',
   
       'maus',
   
       'pferd',
   
       'puma',
   
       'leguan',
   
       'schlange',
   
       'chamaeleon',
   
       'ameise',
   
       'hai',
   
       'biene',
   
       'krokodil',
   
       'adler',
   
       'kaenguru',
   
       'kuh',
   
       'esel',
   
        'wurm',
   
       'dachs',
   
       'fledermaus',
   
       'biber',
   
       'zebra',
   
       'tiger',
   
       'loewe',
   
       'chinchilla',
   
       'panther',
   
       'alligator',
   
       'delfin',
   
       'gorilla',
   
       'pottwal',
   
       'schakal',
   
       'katze',
   
       'wiesel',
   
       'schimpanse',
   
       'bueffel',
   
       'fisch',
   
       'waschbaer',
   
       'schwein',
   
       'huhn',
   
       'nashorn',
   
       'lama',
   
       'wolf',
   
       'giraffe',
   
       'fuchs',
   
       'igel',
   
       'murmeltier',
   
       'nilpferd'
   
    
   
   ];
   
    
   
   const draws = [
   
    
   
       'galgen',
   
    
   
       'kopf',
   
    
   
       'körper',
   
    
   
       'linkerArm',
   
    
   
       'rechterArm',
   
    
   
       'linkesBein',
   
    
   
       'rechtesBein',
   
    
   
       'linkerFuss',
   
    
   
       'rechterFuss',
   
   ];
   
   let galgen = true;

   let kopf = true;
   
   let koerper = true;
   
   let linkerArm = true;
   
   let rechterArm = true;
   
   let linkesBein = true;
   
   let rechtesBein = true;
    
   let livesElem = document.getElementById('lives');

   let guesses = [ ];
   
   var strhtml = '';
   
   var revealedChars = [];
   
   var animalChars = [];
   
   var lives = 7;

   let pressedChars = [];
   
   const canvas = document.getElementById('cstickman');
   
   const ctx = canvas.getContext ('2d');
   
   randomWord = () => {
   
      
   
       let index = Math.floor(Math.random() * animals.length);
   
     //  console.log('a', index);
   
       let answer = animals[index];
   
      // console.log('b', answer);
   
    
   
       animalChars = answer.split('');
   
      // console.log('c', animalChars);
   
    
   
       let animalWordLength = animalChars.length;
   
     //  console.log('d', animalWordLength);
   
   }
   
   randomWord();
   
   animalChars.forEach(function(char){
   
       strhtml += '  <input id="bchstabe" readonly class="bchstbe bchstabe-' + char.toLowerCase() + '" value="   ' + char + '    "></input>   '
   
   })
   
    
   
   console.log(strhtml);
   
   document.getElementById("chars").innerHTML = strhtml
    
   
   function appendLetter(letter) {
   
       checkKey(letter);
     //  console.log(letter);
       //console.log(lives);
   }
   
   
   
   
   
   
   
   
   document.addEventListener('keypress', (event) => { if (lives >= 1) {checkKey(event.key)}
   });
   
   
   
   
   
   
   // Eingabe kontrollieren
   
   function checkKey(key) {

        if (pressedChars.includes(key)){
            return;
        }else{
            pressedChars.push(key);
            document.getElementById(key).style['color'] = '#818589';
            document.getElementById(key).style['backround-color'] = '#818589';
            document.getElementById(key).style['border-color'] = '#818589';
            document.getElementById(key).style['pointer-events'] = 'none';
            
        }

       const idx = animalChars.findIndex((char) => char === key);
   
       function drawHangman(){

        if(galgen == true){ctx.strokeStyle = '#ffffff';

        ctx.lineWidth = 2

        ctx.beginPath();

        ctx.moveTo(115, 20);

        ctx.lineTo(115, 150);

        ctx.moveTo(80, 150);

        ctx.lineTo(200, 150);

        ctx.stroke(), galgen = false}

 

        else if(kopf == true){ctx.lineWidth = 2

            ctx.beginPath();

            ctx.moveTo(113, 20);

            ctx.lineTo(195, 20);              

            ctx.stroke(), kopf = false}

 

        else if(koerper == true){ctx.beginPath();

            ctx.lineWidth = 2

            ctx.moveTo(195, 19);

            ctx.lineTo(195, 45);              

            ctx.stroke(), koerper = false}

 

        else if(koerper == true){ctx.beginPath();

            ctx.lineWidth = 1.5

            ctx.arc(195, 56, 12, 0, 2*Math.PI);

            ctx.stroke(), koerper = false}

 

        else if(linkerArm == true){ctx.beginPath();

            ctx.lineWidth = 1.5

            ctx.arc(195, 56, 12, 0, 2*Math.PI);

            ctx.stroke(), linkerArm = false}

 

        else if(rechterArm == true){ctx.beginPath();

            ctx.moveTo(195, 67);

            ctx.lineTo(195, 90);

            ctx.stroke(), rechterArm = false}

 

        else if(linkesBein == true){ctx.beginPath();

            ctx.moveTo(195, 90);

            ctx.lineTo(180, 107);

            ctx.moveTo(195, 90);

            ctx.lineTo(210, 107);

            ctx.stroke(), linkesBein = false}

 

        else if(rechtesBein == true){ctx.beginPath();

            ctx.moveTo(195, 80);

            ctx.lineTo(175, 69);

            ctx.moveTo(195, 80);

            ctx.lineTo(215, 69);

            ctx.stroke(), rechtesBein = false}

 

            };










   
       if (idx >= 0) {

   
    
   
            // gucken wo buchstabe überall vorkommt
    
     
    
            let elems = document.getElementsByClassName('bchstabe-' + key.toLowerCase());
    
                for (let i = 0; i < elems.length; i++) {
    
                    elems[i].style['color'] = '#000000';
    
               
    
            }
    
     
    
            // buchstabe anzeigen
    
           // console.log('a1', revealedChars);
            revealedChars.push(...animalChars.filter(c => c.toLowerCase() === key.toLowerCase()));
           // console.log('newArray', revealedChars);
        

    
   if (revealedChars.length === animalChars.length) {
       modal2.style.display = "block";

   
   }
   
   
   
       } else {
           lives --;
           updateLives(); 
           drawHangman();
   
       }
   
    
   
   }
   
   
   
   updateLives = () => {
       livesElem.innerHTML = 'Noch <b>' + lives + '</b> Versuche';
       if (lives === 1) {
           livesElem.innerHTML = 'Noch <b>' + lives + '</b> Versuch';
       } else if (lives <= 0){
           livesElem.innerHTML = 'Game Over!';
           drawHangman = false;
           KeyboardEvent = false;
           modal.style.display = "block";
           word.innerHTML = '<p>Das gesuchte Wort war ' +answer+ '</p>';
           
       }
      
   }
   
   
   document.getElementById("startagain").addEventListener("click", function startagain(){
   window.location.reload();
   });
      
   
   
   
   var modal = document.getElementById("myModal");
   var modal2 = document.getElementById("myModal2");
   var key = document.getElementsByClassName("key");
   var span = document.getElementsByClassName("close")[0];
   
   
   
   document.getElementById("startagain3").addEventListener("click", function startagain2(){
       window.location.reload();
       
       
       });
       
       
   document.getElementById("startagain2").addEventListener("click", function startagain2(){
   window.location.reload();
   
   
   });
   
   
   
   let word = document.getElementById("word");
   
   
   
   
   




   