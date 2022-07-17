function getData() {

    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value

    if (!name) {
        return;
    }


    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(message);

    let emailReceiver = "kurniawanerick123@gmail.com"

    let a = document.createElement('a')

    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello nama saya ${name}, ${message}, Silahkan menghubungi saya melalui email ${email} atau nomor telepon ${phone} ini. Terimakasih`

    a.click()


}