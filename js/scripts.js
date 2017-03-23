$(document).ready(function(){
  $('#submit').click(function(){
    var s1 = parseFloat($('#side1').val());
    var s2 = parseFloat($('#side2').val());
    var s3 = parseFloat($('#side3').val());

    if((s1===s2) && (s2===s3)){
      $('#answer').text('Your triangle is equilateral.')
    }
    else if((s1+s2<=s3) || (s2+s3<=s1) || (s3+s1<=s2)){
      $('#answer').text('Not a valid triangle.')
    }
    else if((s1===s2 && s3!=s1) || (s2===s3 && s1!=s3) || (s1===s3 && s2!=s3)){
      $('#answer').text('Your triangle is isosceles.')
    }
    else{
      $('#answer').text('Your triangle is scalene.')
    }
  });
});
