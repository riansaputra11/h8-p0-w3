

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input){

        // //Changed data of the Array
        input.splice(1,2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
        input.splice(4,1, "Pria", "SMA International Metro");
        console.log(input);
        console.log('\n');

        //split date
        var tanggal = input[3].split("/")
        //console.log(tanggal);
        var bulan  = tanggal[1];
        //console.log(bulan);
        var bulanbaru = ''
        switch (bulan){
            case '01':{
                bulanbaru = "January";
                break;
            }
            case '02':{
                bulanbaru = "February";
                break;
            }
            case '03':{
                bulanbaru = "Maret";
                break;    
            }
            case '04':{
                bulanbaru = "April";
                break;
            }
            case '05':{
                bulanbaru = "Mei";
                break;
            }
            case '06' :{
                bulanbaru = "June";
                break;
            }
            case '07' :{
                bulanbaru = "July";
                break;
            }
            case '08' :{
                bulanbaru = "August";
                break;
            }
            case '09' :{
                bulanbaru = "September";
                break;
            }
            case '10' :{
                bulanbaru = "October";
                break;
            }
            case '11' :{
                bulanbaru = "November";
                break;
            }
            case '12' :{
                bulanbaru = "December";
                break;
            }
            default :{
                bulanbaru = "Invalid Month";
                break;
            }    
        }
        console.log(bulanbaru)

     //Sorting
     //console.log(tanggal);
     tanggal[0] = parseInt(tanggal[0]);
     tanggal[1] = parseInt(tanggal[1]);
     tanggal[2] = parseInt(tanggal[2]);
     //tanggal.sort();
     tanggal.sort(function(value1, value2) { return value1 < value2 });
     console.log(tanggal);
     console.log('\n');


     //Join
     var tanggalBaru = input[3].split("/")
     console.log( tanggalBaru.join("-"));
     console.log('\n');


     //Slice
     var tampung = input[1];
     var irisan1 = tampung.slice(0,15); 
     console.log(irisan1);

}

dataHandling2(input);


/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */