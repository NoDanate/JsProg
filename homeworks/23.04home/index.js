document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById("phonebookForm");
    const photoInput = document.getElementById("photo");
    const preview = document.getElementById("preview");
    const formData = document.getElementById("formData");

    const formDataContainer = document.getElementById("formData");
    const datesContainer = document.getElementById("datesContainer");
    const filesContainer = document.getElementById("filesContainer");
    const addDateBtn = document.getElementById("addDateBtn");
    const addFileBtn = document.getElementById("addFileBtn");

    let additionalDates = [];
    let additionalFiles = [];

    addDateBtn.addEventListener('click', function() {
        const dateType = document.getElementById("dateType").value;
        const dateValue = document.getElementById("dateValue");
        const dateError = document.getElementById('dateError');

        if(dateValue.value){
            const today = new Date();
            const birthDate = new Date(dateValue.value);

            if(birthDate > today){
                dateValue.classList.add('invalid');
                dateError.classList.add('show');
                isValid = false;
            }
            else{
                dateValue.classList.remove('invalid');
                dateError.classList.remove('show');
                
                const dateId = Date.now();
                additionalDates.push({
                    id: dateId,
                    type: dateType,
                    value: dateValue.value
                });
                renderDates();
                document.getElementById("dateValue").value = "";
            }
        }
        else {
            alert("Пожалуйста, выберите дату");
            return;
        }
    });

    addFileBtn.addEventListener('click', function() {
        const fileInput = document.getElementById("fileUpload");
        const fileCaption = document.getElementById("fileCaption").value;
        
        if (fileInput.files.length === 0) {
            alert("Пожалуйста, выберите файл");
            return;
        }
        
        Array.from(fileInput.files).forEach(file => {
            const fileId = Date.now();
            additionalFiles.push({
                id: fileId,
                file: file,
                caption: fileCaption
            });
        });
        
        renderFiles();
        fileInput.value = "";
        document.getElementById("fileCaption").value = "";
    });

    function deleteDate(id) {
        additionalDates = additionalDates.filter(date => date.id !== id);
        renderDates();
    }

    function deleteFile(id) {
        additionalFiles = additionalFiles.filter(file => file.id !== id);
        renderFiles();
    }

    function renderDates() {
        datesContainer.innerHTML = "";
        
        additionalDates.forEach(date => {
            const dateElement = document.createElement("div");
            dateElement.className = "date-item";
            dateElement.dataset.id = date.id;
            
            const typeNames = {
                'birthday': 'День рождения',
                'profession': 'День профессии',
                'meeting': 'День первой встречи',
                'anniversary': 'Годовщина'
            };
            
            dateElement.innerHTML = `
                <div class="item-info">
                    <strong>${typeNames[date.type] || date.type}</strong>: ${formatDate(date.value)}
                </div>
                <button type="button" class="delete-btn" onclick="deleteDate(${date.id})">Удалить</button>
            `;
            
            datesContainer.appendChild(dateElement);
        });
    }

    function renderFiles() {
        filesContainer.innerHTML = "";
        
        additionalFiles.forEach(file => {
            const fileElement = document.createElement("div");
            fileElement.className = "file-item";
            fileElement.dataset.id = file.id;
            
            fileElement.innerHTML = `
                <div class="item-info">
                    <strong>${file.file.name}</strong>
                    ${file.caption ? `<p>${file.caption}</p>` : ''}
                </div>
                <button type="button" class="delete-btn" onclick="deleteFile(${file.id})">Удалить</button>
            `;
            
            filesContainer.appendChild(fileElement);
        });
    }

    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('ru-RU', options);
    }

    window.deleteDate = deleteDate;
    window.deleteFile = deleteFile;

    //

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