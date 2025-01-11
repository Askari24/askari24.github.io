document.getElementById("footer").
innerHTML = `
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <style>
        footer {
            background-color: #f8f9fa; /* پس‌زمینه روشن */
            color: #333; /* رنگ متن تیره */
            padding: 2rem 0;
            margin-top: 2rem;
        }
        .footer-col {
            margin-bottom: 2rem; /* فاصله بین ستون‌ها در موبایل */
        }
        .footer-heading {
            font-weight: bold;
            margin-bottom: 1rem;
        }
        .social-icons a {
            font-size: 2rem;
            margin: 0 0.5rem;
            color: white; /* رنگ آیکون‌ها */
            width: 50px;
            height: 50px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
        }
        .telegram{
            background-color: #2CA5E0;
        }
        .instagram{
            background: radial-gradient(circle farthest-corner at 32% 106%, #ffe17d 0%, #ffc800 11%, #fb9a00 28%, #ff6400 42%, #bb0000 70%);
        }
        .youtube{
            background-color: #FF0000;
        }
        .copyright {
            text-align: center;
            padding-top: 1rem;
            border-top: 1px solid #ddd;
            margin-top: 2rem;
        }
        @media (min-width: 768px) { /* برای صفحه‌های بزرگتر از تبلت */
            .footer-col {
                margin-bottom: 0; /* حذف فاصله بین ستون‌ها */
            }
        }
    </style>
</head>
<body>

    <footer class="mt-auto">
        <div class="container">
            <div class="row">
                <div class="col-md-3 footer-col">
                    <h5 class="footer-heading">داستان ما</h5>
                    <p>اقای عسکری تصمیم داشت قوم بنی عسکری را به وجود بیاره تا کاربران را متحد کنه و بتواند اموزشات و خدمات به صورت رایگانه<a href="#">داستان ما را بشنوید...</a></p>
                </div>
                <div class="col-md-3 footer-col">
                    <h5 class="footer-heading">مدیریت سازمان </h5>
                    <p>اقای عسکری هیچ ادعایی نداره و داره خدماتش را به صورت رایگان منتشر میکنه</p>
                    <!-- Statistics by www.1abzar.com --->
<script type="text/javascript" src="https://1abzar.ir/abzar/tools/stat/amar-v3-ramz.php?mod=4&amar=uw0el9qd5tkzf0adlki71iok09tigs&p=74a1bbef1d007a9c1fcb8a29c6675bef"></script><div style="display:none"><h3><a href="https://www.1abzar.com/abzar/stat.php">&#1570;&#1605;&#1575;&#1585;&#1711;&#1740;&#1585; &#1608;&#1576;&#1604;&#1575;&#1711;</a></h3></div>
<!-- Statistics by www.1abzar.com --->
                </div>
                <div class="col-md-3 footer-col">
                    <h5 class="footer-heading">شبکه‌های اجتماعی</h5>
                    <div class="social-icons">
                        <a href="https://t.me/ABNUS2025" class="telegram"><i class="fa-brands fa-telegram"></i></a>
                        <a href="https://www.instagram.com/abnus2025/" class="instagram"><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://www.youtube.com/@BaniAskariTV" class="youtube"><i class="fa-brands fa-youtube"></i></a>
                    </div>
                </div>
            </div>
            <div class="copyright">
                <p>تمامی حقوق محفوظ است.</p>
            </div>
        </div>
    </footer>

`
