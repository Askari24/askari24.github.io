fetch('https://ipapi.co/json/') // استفاده از API رایگان برای دریافت اطلاعات IP
.then(response => response.json())
.then(data => {
    if (data.country !== "IR","US") { // بررسی کشور
        document.body.innerHTML = "<h1>دسترسی شما مسدود شده است!</h1>";
    }
})
.catch(error => console.error('Error:', error));