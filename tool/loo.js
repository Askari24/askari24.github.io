document.getElementById("looDiv").
innerHTML = `
<section id="loo">
    <div id="loading-container">
        <img id="logo" src="./favicon.ico" alt="Samsung Galaxy A51">
        <div id="powered-by">بنی عسکری</div>

    </div>

<style>
    #loo {
           background-color: black; /* پس‌زمینه مشکی */
           display: flex;
           justify-content: center;
           align-items: center;
           min-height: 100vh;
           margin: 0;
           overflow: hidden; /* جلوگیری از اسکرول */
       }
   
       #loading-container {
           text-align: center;
           color: white; /* رنگ متن سفید */
       }
   
       #logo {
           width: 200px; /* اندازه لوگو */
           margin-bottom: 20px;
           animation: fadeIn 1s ease-in-out forwards; /* انیمیشن fade-in */
       }
       #powered-by{
           font-size: 0.8rem;
           opacity: 0.7;
           animation: fadeIn 1.5s ease-in-out forwards; /* انیمیشن fade-in */
       }
       #android-logo{
           width: 50px;
           margin-top: 20px;
           animation: fadeInUp 2s ease-in-out forwards; /* انیمیشن fade-in */
       }
       @keyframes fadeIn {
           from {
               opacity: 0;
           }
           to {
               opacity: 1;
           }
       }
       @keyframes fadeInUp {
           from {
               opacity: 0;
               transform: translateY(20px);
           }
           to {
               opacity: 1;
               transform: translateY(0);
           }
       }
   </style>
</section>
`
setTimeout(function() {
    document.getElementById('loo').style.display = 'none';
    document.getElementById('body').style.display = 'block';
    document.body.style.overflow = 'auto'; 
}, 3000);