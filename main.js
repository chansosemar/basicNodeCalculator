const prompt = require('prompt-sync')();

function calculator(){
console.log('>>>>>>>>>>>>>     Hey, welcome to simple Calculator !!     <<<<<<<<<<<<<<<<<');
console.log('>>>>>>>>>>>>>     There are some operation we can count    <<<<<<<<<<<<<<<<<');
console.log('>>>>>>>>>>>>>         + , - , / , *, ^ , max , min         <<<<<<<<<<<<<<<<<');
console.log(' ');console.log(' ');console.log(' ');

function tanya(){
  console.log('>>>>>>>>> Yuk Mulai !! <<<<<<<<<')
  let angkaPertama = parseInt(prompt("Angka Pertama ? : "));
  let angkaKedua = parseInt(prompt('Angka Kedua ? : '));
  let operasi = prompt('Operasi yg di jalankan ? :  ');
  
    switch(operasi){
      case '+' :
        hasil = angkaPertama+angkaKedua;
        break;
      case '-' :
        hasil = angkaPertama-angkaKedua;
        break;
      case '/' :
        hasil = angkaPertama/angkaKedua;
        break;
      case '*' :
        hasil = angkaPertama*angkaKedua;
        break;
      case '^' :
        hasil = Math.pow(angkaPertama,angkaKedua);
        break;
      case 'min' :
        hasil = Math.min(angkaPertama,angkaKedua);
        break;
      case 'max' :
        hasil = Math.max(angkaPertama,angkaKedua);
        break;
      default:
        hasil = 'Coba periksa lagi';
    }
    return hasil;   
}
tanya();
console.log(`Hasilnya adalah ${hasil}`);
console.log(' ');console.log(' ');console.log(' ');
console.log('>>>>>>>>> Terima Kasih !! <<<<<<<<<');
}

calculator();



