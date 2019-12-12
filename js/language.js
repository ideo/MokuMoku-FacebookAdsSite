var language; 
function getLanguage() {
// (localStorage.getItem('language') == null) ? setLanguage('ja') : false;
// $.ajax({ 
// url:  '/language/' +  localStorage.getItem('language') + '.json', 
// dataType: 'json', async: false, dataType: 'json', 
// success: function (lang) { language = lang;         console.log(language);
// } });
// console.log("Hello");

}

var en = {    
    "hero": "Find nearby spaces and people that match your workstyle then reserve a spot to join them.",
    "findingTitle": "Find cafe seats that are open now",
    "findingParagraph": "See which seats are open at cafes near you and review details to find the ones that match your needs.",
    "bookingTitle": "Reserve a seat for now or later",
    "bookingParagraph": "Whether you’re planning ahead or need a seat in a pinch, we have you covered.",
    "modalTitle": "We want to hear from you!",
    "modalText": "Thank you for your interest in Get Seated! We are still fine-tuning the details, but when it’s ready for launch, you’ll be the first to know. <br><br>Until then, we would love to get your feedback. If you’re willing to speak with us about your cafe-working needs, please provide your email address. <br><br>We promise not to spam or share your email with anyone else.",
    "signUpButton": "BOOK NOW - STARTING AT ¥500"

};

var ja = {    
    "hero": "あなたの働き方に合った近くのカフェやコミュニティーを見つけて、今すぐ予約しよう。",
    "findingTitle": "<span class=\"jaTitle\">カフェの空席を<br/><span class=\"jaTitleLarge\">見つける</span></span>",
    "findingParagraph": "近くのカフェの空席を確認できるほか、自分のニーズに合った席の詳細を確認することができます。",
    "bookingTitle": "<span class=\"jaTitle\">カフェの空席を<br/><span class=\"jaTitleLarge\">予約する</span></span>",
    "bookingParagraph": "事前に予約しておきたい時や、今すぐ予約したい時に、いつでも空席を予約できます。",
    "modalTitle": "あなたの意見をお寄せください！",
    "modalText": "Get Seatedにご興味をお持ち頂きありがうございます！Get Seatedはまだ開発段階のアプリですが、ローンチの際には、いち早くお知らせさせて頂きます。<br/><br/>それまでの間、皆様からフィードバックを頂戴し、アプリの開発に活かしたいと考えています。もし、意見をご提供頂けるようでしたら、下記フォームより、メールアドレスをお送りください。<br/><br/>お送り頂きましたいただいたメールアドレスは、あなたからフィードバックを頂戴する目的でのみ利用し、スパム行為や第三者への共有は一切致しません。",
    "signUpButton": "今すぐ予約 (500円~)"
};

function setLanguage(lang) {

    // var json = require("js/language/" + lang + ".json");
    console.log("Hello");
    // getLanguage();
    console.log(lang);
    // $.getJSON("js/language/" + lang + ".json", function(json) {
    //     console.log(json); // this will show the info it in firebug console
    // });
    // localStorage.setItem('language', lang);

    $(document).ready(function(){
        var langauge;
        switch (lang) {
            case "en":
            language = en;
            $('#ja').addClass("languagelink");
            $('#en').removeClass("languagelink");
            // console.log($('#ja').classList);
                break;
            case "ja":
            language = ja;
            $('#en').addClass("languagelink");
            $('#ja').removeClass("languagelink")
                break;
            default:
                break;
        }
        $('#hero').text(language.hero);
        $('#findingTitle').html(language.findingTitle);
        $('#bookingTitle').html(language.bookingTitle);
        $('#findingParagraph').html(language.findingParagraph);
        $('#bookingParagraph').html(language.bookingParagraph);
        $('#modalTitle').html(language.modalTitle);
        $('#modalText').html(language.modalText);
        $('#signUpButton').html(language.signUpButton);
        $('#signUpButton2').html(language.signUpButton);
        // console.log($("#find"));
        // console.log(language);
        // $('#find').text(ja.hero);
    });
}
