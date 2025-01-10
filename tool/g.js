document.getElementById("footer").
innerHTML = `
<div class="modal" id="authModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">ورود یا ثبت نام</h5>
                    <button type="button" class="btn-close" id="closeModal"></button>
                </div>
                <div class="modal-body">
                    <form id="authForm">
                        <div class="mb-3">
                            <label for="username" class="form-label">نام کاربری</label>
                            <input type="text" class="form-control" id="username" required>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">رمز عبور</label>
                            <input type="password" class="form-control" id="password" required>
                        </div>
                        <button type="submit" class="btn btn-primary">ورود</button>
                        <button type="button" class="btn btn-secondary" id="registerBtn">ثبت نام</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

<style>
   body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f8f9fa;
        }
        .modal {
            display: none;
        }
</style>
`