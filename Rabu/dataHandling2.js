var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input){

input.splice(1, 1, "Roman Alamsyah Elsharawy")
input.splice(2, 1, "Provinsi Bandar Lampung")
input.splice(4,1, "Pria", "SMA Internasional Metro")
console.log(input)

var tanggal= input[3].split("/")
switch (tanggal[1]){
      case '01':
        var bulan='Januari';
      break;

      case '02':
        var bulan='Februari';
      break;

      case '03':
        var bulan='Maret';
      break;

      case '04':
        var bulan='April';
      break;

      case '05':
        var bulan='Mei';
      break;

      case '06':
        var bulan='Juni';
      break;

      case '07':
        var bulan='Juli';
      break;

      case '08':
        var bulan='Agustus';
      break;

      case '09':
        var bulan='September';
      break;

      case '10':
        var bulan='Oktober';
      break;

      case '11':
        var bulan='November';
      break;

      case '12':
        var bulan='Desember';
      break;

      default:
      break;
}
  console.log(bulan)
  var tanggaljoin= tanggal.join('-')
  var tanggalsort= tanggal.sort(function(a, b){return b-a})
  console.log(tanggalsort)
   
  console.log(tanggaljoin)

  var nama= input[1].toString()
  var namaslice= nama.slice(0,14)
  console.log(namaslice)

}

dataHandling2(input);