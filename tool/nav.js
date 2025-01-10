document.getElementById("messageDiv").
innerHTML = `
<style>
.sticky-header {
            position: fixed; /* ثابت در صفحه */
            top: 0;
            left: 0;
            width: 100%;
            background-color: white; /* رنگ پس‌زمینه سفید */
            z-index: 1000; /* اطمینان از قرارگیری روی سایر عناصر */
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* سایه ملایم */
            padding: 10px;
        }

        /* استایل برای آیکون ها */
        .header-icons {
            font-size: 1.5rem; /* اندازه آیکون‌ها */
            margin: 0 10px; /* فاصله بین آیکون‌ها */
            color: #333; /* رنگ آیکون‌ها */
        }

        /* استایل برای لوگو */
        .logo {
            font-size: 2rem;
            color: #00bcd4; /* رنگ لوگو (می‌توانید تغییر دهید) */
            font-weight: bold;
        }
        body{
            margin-top: 80px; /*برای جلوگیری از افتادن محتوای صفحه زیر هدر*/
        }
    </style>
</head>
<body>

    <header class="sticky-header">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-auto" id="i1">
                    <i class="bi bi-list header-icons" onclick="list()"></i>
                </div>
                <div class="col-auto" id="i2">
                    <i class="bi bi-bell header-icons" onclick="showNotification()"></i>
                </div>
                <div class="col-auto" id="i3">
                    <i class="bi bi-handbag header-icons" data-bs-toggle="modal" data-bs-target="#cartModal"></i>
                </div>
                <div class="col text-center">
                   <span class="logo" id="hh">بنی عسکری</span>
                </div>
                <div class="col-auto" id="i4">
                    <i class="bi bi-search header-icons"></i>
                </div>
                <div class="col-auto" id="i5">
                    <i class="bi bi-person-circle header-icons" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"></i>
                </div>
            </div>
        </div>
    </header>
<div class="modal fade" id="cartModal" tabindex="-1" aria-labelledby="cartModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="cartModalLabel">سبد خرید</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" id="cart-items">
                        </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">بستن</button>
                        <button type="button" class="btn btn-primary" id="purchase-btn">خرید</button>
                    </div>
                </div>
            </div>
        </div>

  
  <style>
        /* استایل‌های سفارشی */
        .start-menu {
            position: fixed; /* ثابت در پایین صفحه */
            bottom: 0;
            left: 0;
            background-color: #333; /* رنگ پس‌زمینه تیره */
            color: #fff;
            width: 300px; /* عرض منو */
            height: 400px;
            overflow-y: auto; /* اسکرول در صورت نیاز */
            padding: 10px;
            border-top-right-radius: 10px;
            display: none; /* مخفی به صورت پیش فرض */
        }
        .start-menu.show {
            display: block;
        }
        .start-menu ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        .start-menu li a {
            display: flex;
            align-items: center;
            padding: 5px 10px;
            color: #eee;
            text-decoration: none;
            transition: background-color 0.2s ease;
            border-radius: 5px;
        }
        .start-menu li a:hover {
            background-color: rgba(255, 255, 255, 0.1);
        }
        .start-menu li a i {
            margin-left: 10px;
        }
        .start-button {
            position: fixed;
            bottom: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.5);
            color: #fff;
            padding: 5px 10px;
            cursor: pointer;
            border: none;
            border-top-right-radius: 5px;
        }
    </style>
</head>
<body>

    

    <div class="start-menu" id="start-menu">
        <ul>
            <li><a href="#"><i class="bi bi-gear-fill"></i> تنظیمات</a></li>
            <li><a href="Gallery.html"><i class="bi bi-image-fill"></i>کالری</a></li>
            <li onclick="m1()"><a href="#"><i class="bi bi-music-note-beamed"></i> موسیقی</a></li>
            <li><a href="Movie.html"><i class="bi bi-film"></i> ویدیوها</a></li>
            <li onclick="xnn()"><a href="#"><i class="bi bi-power"></i>بستن منو</a></li>
            <hr style="border-top:1px solid #eee;">
            <li><a href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">حساب کاربری</a></li>
            <li><a href="abnus2025.html">کانال سایت</a></li>
            <li><a href="bolg.html">وبلاگ</a></li>
            <li><a href="Store.html">فروشگاه</a></li>
            <li><a href="password.html">رمز ساز</a></li>
            <li><a href="#">رادیو</a></li>
        </ul>
    </div>



<div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  
  </div>
</div> 
`;
//تنظیمات مخصوص کاربر
const fontSelect = document.getElementById('fontSelect');
const textElement = document.getElementById('text','h1','h2','p');

fontSelect.addEventListener('change', function() {
    const selectedFont = fontSelect.value;
    if (selectedFont) {
        textElement.style.fontFamily = selectedFont;
    }
});

//نت کاربر
function showOfflineMessage() {
 
 window.location.href = "../";
}

// رویداد offline
window.addEventListener('offline', showOfflineMessage);

// رویداد online (به دلخواه می‌توانید واکنش نشان دهید)
window.addEventListener('online', () => {
    alert("شما دوباره به اینترنت وصل شدید!");
});


function list(){
    document.getElementById('start-menu').style.display = 'block';
 
}
function xnn(){
    document.getElementById('start-menu').style.display = 'none';
 
}
function m1() {
    document.getElementById('start-menu').style.display = 'none';
    document.getElementById('body').style.display = 'none';
    document.getElementById('m1').style.display = 'block';
    document.body.style.overflow = 'hidden';



}
