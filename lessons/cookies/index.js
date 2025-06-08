document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById("phonebookForm");
    const photoInput = document.getElementById("photo");
    const preview = document.getElementById("preview");
    const formData = document.getElementById("formData");


    form.addEventListener('submit', function(e){
        e.preventDefault();
        let isValid = true;

        const name = document.getElementById('name');
        const nameError = document.getElementById('nameError');

        if(!name.value.trim()){
            name.classList.add('invalid');
            nameError.classList.add('show');
            isValid = false;
        } else{
            name.classList.remove('invalid');
            nameError.classList.remove('show');
        }

        const phone = document.getElementById('phone');
        const phoneError = document.getElementById('phoneError');
        const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;

        if(!phoneRegex.test(phone.value)){
            phone.classList.add('invalid');
            phoneError.classList.add('show');
            isValid = false;
        } else{
            phone.classList.remove('invalid');
            phoneError.classList.remove('show');
        }

        const birthday = document.getElementById('birthday');
        const birthdayError = document.getElementById('birthdayError');
        if(birthday.value){
            const today = new Date();
            const birthDate = new Date(birthday.value);
            if(birthDate > today){
                birthday.classList.add('invalid');
                birthdayError.classList.add('show');
                isValid = false;
            }
            else{
                birthday.classList.remove('invalid');
                birthdayError.classList.remove('show');
            }
        }

        const email = document.getElementById('email');
        const emailError = document.getElementById('emailError');
        if(email.value && !/^\S+@\S+\.\S+$/.test(email.value)){
                email.classList.add('invalid');
                emailError.classList.add('show');
                isValid = false;
        } else{
                email.classList.remove('invalid');
                emailError.classList.remove('show');
        }

        const website = document.getElementById('website');
        const websiteError = document.getElementById('websiteError');
        if(website.value && !/^https?:\/\/.+\..+/.test(website.value)){
                website.classList.add('invalid');
                websiteError.classList.add('show');
                isValid = false;
        }else{
                website.classList.remove('invalid');
                websiteError.classList.remove('show');
        }


        const secret = document.getElementById('secret');
        const secretError = document.getElementById('secretError');
        if(secret.value && secret.value.length < 6){
                secret.classList.add('invalid');
                secret.classList.add('show');
                isValid = false;
        }else{
                secret.classList.remove('invalid');
                secretError.classList.remove('show');
        }


        if(isValid){
            showFormData();
        }
    });

    document.getElementById('name').addEventListener('input', function(){
        if(this.value.trim()){
            this.classList.remove('invalid');
            document.getElementById('nameError').classList.remove('show');
        }
    })

    document.getElementById('phone').addEventListener('input', function(){
        const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
        if(phoneRegex.test(this.value)){
            this.classList.remove('invalid');
            document.getElementById('phoneError').classList.remove('show');
        }
    })


    function showFormData() {
        const formData = new FormData(form);
        let output = '<h3>Введенные данные:</h3><ul>';
        
        for (const [key, value] of formData.entries()) {
            if (key === 'photo') continue; // Пропускаем файл
            
            let displayValue = value;
            
            if (key === 'birthdate' && value) {
                displayValue = new Date(value).toLocaleDateString('ru-RU');
            }
            
            if (key === 'secret' && value) {
                displayValue = '*'.repeat(value.length);
            }
            
            if (key === 'color' && value) {
                displayValue = `<span style="color:${value}">${value}</span>`;
            }
            
            output += `<li><strong>${key}:</strong> ${displayValue || 'не указано'}</li>`;
        }
        
        output += '</ul>';

        if (photoInput.files[0]) {
            output += `<p><strong>Фото:</strong> ${photoInput.files[0].name} (${(photoInput.files[0].size / 1024).toFixed(2)} KB)</p>`;
        }
        
        formDataContainer.innerHTML = output;
        formDataContainer.style.display = 'block';
    }


})


let person = {
    firstName: "Andrey",
    lastName: "Petrov",
    birthDate : "23.04.1980"
}

let newPerson = JSON.stringify(person, null, 2);
console.log(newPerson);

JSON.parse