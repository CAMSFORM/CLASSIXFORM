const firebaseConfig = {
    apiKey: "AIzaSyB46Q51KpJCbCZeaeFDdS7FKTWc1HKN5bI",
    authDomain: "studentdetailsclassix.firebaseapp.com",
    databaseURL: "https://studentdetailsclassix-default-rtdb.firebaseio.com",
    projectId: "studentdetailsclassix",
    storageBucket: "studentdetailsclassix.appspot.com",
    messagingSenderId: "557336749433",
    appId: "1:557336749433:web:ff47f5705b086702827ba8"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function Warning(correct,msg){
    console.log(correct , msg);
if(correct == 'success'){
  let toast = document.createElement('div');
toast.classList.add('toastgreen');
toast.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>' + msg;
document.getElementById('toastBox').appendChild(toast);
setTimeout(function(){
toast.remove();
console.log('it worked');
},6000);
}else{
  let toast = document.createElement('div');
toast.classList.add('toast');
toast.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i>' + msg;
document.getElementById('toastBox').appendChild(toast);
setTimeout(function(){
toast.remove();
},6000);
}
}

function SubmitForm(){
if(document.getElementById('SName').value != '' && document.getElementById('roll_number').value != '' && document.getElementById('Semail').value != ''&& document.getElementById('Sgender').value != ''&& document.getElementById('Sbirthdate').value != ''&& document.getElementById('Smother_name').value != ''&& document.getElementById('Sfather_name').value != ''&& document.getElementById('Scast').value != ''&& document.getElementById('Saadhar_number').value != '' && document.getElementById('Slanguage').value != '' && document.getElementById('ShouseColor').value != '' && document.getElementById('Ssingle').value != ''){
    if(confirm('You have entered all the information correctly') == true){
      var  get_verify;
      document.getElementById('loader').click();
        var ref = firebase.database().ref('AlreadySubmitted/').child(document.getElementById('SName').value);
        ref.once('value',function(get_data){
        var data = get_data.val();
        get_verify = data.AlreadySubmitted;
        });
        setTimeout(function(){
        if(get_verify == undefined){
            document.getElementById('SName').setAttribute('readonly', true)
            document.getElementById('roll_number').setAttribute('readonly', true)
            document.getElementById('Semail').setAttribute('readonly', true)
            document.getElementById('Sgender').setAttribute('readonly', true)
            document.getElementById('Sbirthdate').setAttribute('readonly', true)
            document.getElementById('Smother_name').setAttribute('readonly', true)
            document.getElementById('Sfather_name').setAttribute('readonly', true)
            document.getElementById('Scast').setAttribute('readonly', true)
            document.getElementById('Saadhar_number').setAttribute('readonly', true)
            document.getElementById('Slanguage').setAttribute('readonly', true);
            document.getElementById('ShouseColor').setAttribute('readonly', true);
            document.getElementById('Ssingle').setAttribute('readonly', true);
    
            firebase.database().ref('Details/').push({
            Name : document.getElementById('SName').value,
            Roll_Number : document.getElementById('roll_number').value,
            Email : document.getElementById('Semail').value,
            Gender : document.getElementById('Sgender').value,
            BirthDate : document.getElementById('Sbirthdate').value,
            Mother_Name : document.getElementById('Smother_name').value,
            Father_Name : document.getElementById('Sfather_name').value,
            Cast : document.getElementById('Scast').value,
            Aadhar_Number : document.getElementById('Saadhar_number').value,
            Language : document.getElementById('Slanguage').value,
            HouseColour : document.getElementById('ShouseColor').value,
            Single : document.getElementById('Ssingle').value,
            },function(error){
                if(error == true){
            alert('Failed !')
            window.location = 'index.html'
                }

            });
            firebase.database().ref('AlreadySubmitted/').child(document.getElementById('SName').value).update({
                AlreadySubmitted : 'Yes'
            });
            setTimeout(function(){
                document.getElementById('loaderc').click();
                Warning('success','Your Form Was Succesfully Submited !');
                localStorage.setItem('AlreadyResponded','Yes');
                setTimeout(function(){
                document.getElementById('formreal').style.display = 'none';
                document.getElementById('SSUBMIT').style.display = '';
                },6000);
            },3000);
        }else{
            alert('You have already Responded. No need to respond again.')
            document.getElementById('loaderc').click();
            localStorage.setItem('AlreadyResponded','Yes');
            document.getElementById('formreal').style.display = 'none';
            document.getElementById('SSUBMIT').style.display = 'flex';
        }
        },2000)
       
    }

}else{
  
}
}
function checkfunction(){
    if(localStorage.getItem('AlreadyResponded') == 'Yes'){
        document.getElementById('formreal').style.display = 'none';
        document.getElementById('SSUBMIT').style.display = 'flex';
    }else{
        document.getElementById('formreal').style.display = '';
        document.getElementById('SSUBMIT').style.display = 'none';
    }
}

