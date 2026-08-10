function startStory() {
    const music = document.getElementById("bgMusic");
music.volume = 0.4;
music.play();
    

    document.getElementById("startPage").innerHTML = `
        <h1 id="loadingText" style="color:black;font-size:45px;">
            ❤️ Connecting to your surprise...
        </h1>
    `;

    const messages = [
        "🔍 Searching for birthday girl...",
        "😊 Matching smile...",
        "💖 Identity Verified...",
        "🎁 Loading secret memories...",
        "✅ Done!"
    ];

    let i = 0;

    const interval = setInterval(() => {

        if (i < messages.length) {
            document.getElementById("loadingText").innerHTML = messages[i];
            i++;
        } else {
            clearInterval(interval);
            showWelcome();
        }

    }, 1200);

}

function showWelcome() {

    document.getElementById("app").innerHTML = `

    <div id="welcomePage">

        <h1>✨ Hey Beautiful Chhuchundar ❤️ ✨</h1>

        <p>
            I have something very special for you...
            <br><br>
            to start kre...?
        </p>

        <br>

        <button onclick="yesClicked()">YES ❤️</button>

        <button id="noBtn"
        onmouseover="moveButton()">
        NO 🙈
        </button>

    </div>

    `;

}

function yesClicked(){

    document.getElementById("app").innerHTML = `

    <div id="questionPage">

        <h1>🤔 Before entering...</h1>

        <h2>Answer one small question!</h2>

        <br><br>

        <h3>Who is the cutest sister in the whole universe? 🌍</h3>

        <br><br>

        <button onclick="correctAnswer()">ME 😎</button>

        <button id="wrongBtn" onmouseover="moveWrongButton()">Someone Else 🤣</button>

    </div>

    `;

}

function moveButton(){

    let button=document.getElementById("noBtn");

    let x=Math.random()*(window.innerWidth-150);

    let y=Math.random()*(window.innerHeight-80);

    button.style.position="absolute";

    button.style.left=x+"px";

    button.style.top=y+"px";

}

function correctAnswer(){

    document.getElementById("app").innerHTML = `

    <div id="correctPage">

        <h1>🎉 Correct Answer!</h1>

        <h2>ye to sabko hi pta h ... 😂❤️</h2>

        <p>Now let's begin your birthday journey...</p>

        <br>

        <button onclick="showBirthday()">Continue ❤️</button>

    </div>

    `;

}

function moveWrongButton(){

    let btn=document.getElementById("wrongBtn");

    let x=Math.random()*(window.innerWidth-250);

    let y=Math.random()*(window.innerHeight-100);

    btn.style.position="absolute";
    btn.style.left=x+"px";
    btn.style.top=y+"px";

}

function showBirthday(){

    document.getElementById("app").innerHTML=`

    <div id="birthdayPage">

        <h1>🎂 Happy Birthday 🎂</h1>

        <h2>11 August 2007 ❤️</h2>

        <br>

        <img src="images/family.jpg" class="familyPic">

        <br><br>

        <p>

        The day our family became even more beautiful ❤️

        </p>

        <br>

        <button onclick="showFunnyGallery()">Next ➜</button>

    </div>

    `;

}

let funnyPhotos = [
    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg",
    "images/photo4.jpg",
    "images/photo5.jpg",
    "images/photo6.jpg",
    "images/photo7.jpg",
    "images/photo8.jpg"
];

let funnyCaptions = [
    "Ye photo delete karne ki bahut koshish ki thi... lekin destiny ko kuch aur hi manzoor tha. 🤣",

    "Madam attitude to aisa de rahi hain jaise poori duniya inhi ke bharose chal rahi ho. 😎😂",

    "Pushpa jhukega nhi sala. 😂💇‍♀️",

    "Bachpan se hi nautanki level 100 tha... aur abhi bhi same hi hai. 😂❤️",

    "Ye expression dekh ke camera bhi confuse ho gaya hoga. 🤭📸",

    "Warning ⚠️ Zyada cute banne ki koshish health ke liye hanikarak ho sakti hai. 🤣💕",

    "Is photo ko dekh ke hasi rokna almost impossible hai. 😭😂",

    "Theek hai... bas bas 😂 Ab gussa mat hona... asli sundar photos ab aane wale hain. ❤️"
];

let currentFunny = 0;

function showFunnyGallery(){

    document.getElementById("app").innerHTML = `

    <div id="galleryPage">

        <h1>😂 Memory Time 😂</h1>

        <img id="galleryImage" src="${funnyPhotos[0]}">

        <p id="galleryCaption">

            ${funnyCaptions[0]}

        </p>

        <button onclick="nextFunnyPhoto()">

            Next ➜

        </button>

    </div>

    `;

}

function nextFunnyPhoto(){

    currentFunny++;

    if(currentFunny >= funnyPhotos.length){
        showSorryPage();
        return;
    }

    const image = document.getElementById("galleryImage");

    image.style.opacity = "0";

    image.onload = function() {
        image.style.opacity = "1";
    };

    image.src = funnyPhotos[currentFunny];

    document.getElementById("galleryCaption").innerHTML =
        funnyCaptions[currentFunny];

    // Preload the next image
    if (currentFunny + 1 < funnyPhotos.length) {
        const nextImage = new Image();
        nextImage.src = funnyPhotos[currentFunny + 1];
    }
}

function showSorryPage(){

    document.getElementById("app").innerHTML = `

    <div id="sorryPage">

        <h1>😂 Areyyyyyy...</h1>

        <h2>Gussa ho gayi kya?</h2>

        <p>

        Sach bataye to ...

        Ye photos sirf tumko hasaane ke liye dikhaye the,, but hai to kamaal ka pic. ❤️

        </p>

        <p>

        Ab promise...

        chalo thoda pyara pyara photo dekh lete h . 🥹

        </p>

        <button onclick="showGoodGallery()">

            to shuru krte h  ❤️

        </button>

    </div>

    `;

}

let goodPhotos = [
    "images/good1.jpg",
    "images/good2.jpg",
    "images/good3.jpg",
    "images/good4.jpg",
    "images/good5.jpg",
    "images/good6.jpg"
];

let goodCaptions = [
    "Ab aaya na chehre pr pyaara wala smile. ❤️🥹",

    "Har saal tum aur bhi sundar nhi nhi... aur chhuchundar jarur hoti ja rahi hai. 🌸",

    "Teri smile dekhkar sach mein dil khush ho jaata hai. 😊💖",

    "Chahe hum kitna bhi ladein, tu hamesha meri favourite rahegi. ❤️",

    "Thank you har shaam sabse chehre pe hasi lane k liye. 🫶✨",

    "Kabhi mat badalna... aisi hi pagal, cute aur pyari rehna. ❤️"
];

let currentGood = 0;

function showGoodGallery(){

    document.getElementById("app").innerHTML = `

    <div id="goodGallery">

        <h1>❤️ My Beautiful Sister ❤️</h1>

        <img id="goodImage" src="${goodPhotos[0]}">

        <p id="goodCaption">

            ${goodCaptions[0]}

        </p>

        <button onclick="nextGoodPhoto()">

            Next ❤️

        </button>

    </div>

    `;

}

function nextGoodPhoto(){

    currentGood++;

    if(currentGood >= goodPhotos.length){
        showLetter();
        return;
    }

    const image = document.getElementById("goodImage");

    image.style.opacity = "0";

    image.onload = function() {
        image.style.opacity = "1";
    };

    image.src = goodPhotos[currentGood];

    document.getElementById("goodCaption").innerHTML =
        goodCaptions[currentGood];

    // Preload the next image
    if (currentGood + 1 < goodPhotos.length) {
        const nextImage = new Image();
        nextImage.src = goodPhotos[currentGood + 1];
    }
}

function showLetter(){

    document.getElementById("app").innerHTML = `

    <div id="letterPage">

        <h1>💌 A Letter From Your Didi</h1>

        <div class="letter">

            <p>

            Happy Birthday khebdi ❤️

            <br><br>

            Tu sirf meri chhoti behen nahi hai...

            Tu meri best friend hai,

            meri partner in crime hai,

            aur meri life ka sabse pyara hissa hai.

            ❤️

            <br><br>

            chalo kuchh achcha achcha sa tere liye soch rhe the ki likhe,

            but man hi nhi kr rha , ab b'day h to chalo thoda badhai kr hi dete h,

            janmadin ki bahut sari shubhkamnayen , bhusan
            
            bhagwan tumhe duniya ki sari khushiyan de, 

            kuchh v ho , hm hmesha tere sath h.

            you are not only my friend but also a friend to
            
            whom i can share anything without thinking much.

            <br><br>

            Happy Birthday once again ❤️🎂

            <br><br>

            Love You Forever ❤️

            <br><br>

            ~ Tumhari Didi

            </p>

        </div>

        <br>

        <button onclick="showFinalPage()">

            One Last Surprise 🎁

        </button>

    </div>

    `;

}

function showFinalPage(){

    document.getElementById("app").innerHTML = `

    <div id="finalPage">

        <h1>🎉 HAPPY BIRTHDAY 🎉</h1>

        <h2>11 August 2007 ❤️</h2>

        <h3>

        You are the Best Sister in the World 🌎❤️

        </h3>

        <p>

        Thank you for being you.

        Never stop smiling.

        Never stop dreaming.

        I Love You ❤️

        </p>

        <br>

        <button onclick="celebrate()">
    🎉 Click Here For Your Surprise 🎉
</button>

<div id="balloons">
    🎈 🎈 🎈 🎈 🎈 ❤️ 💖 🎂 🎈 🎈
</div>

    </div>

    `;

}

function celebrate() {

    // Confetti Burst
    confetti({
        particleCount: 250,
        spread: 180,
        origin: { y: 0.6 }
    });

    // Fire every second for 5 seconds
    let duration = 5 * 1000;
    let end = Date.now() + duration;

    (function frame() {

        confetti({
            particleCount: 8,
            angle: 60,
            spread: 70,
            origin: { x: 0 }
        });

        confetti({
            particleCount: 8,
            angle: 120,
            spread: 70,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }

    })();

}