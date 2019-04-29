$(document).ready(function() {
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').animate({
            'scrollTop': $target.offset().top 
        }, 1000, 'swing', function () {

        window.location.hash = target;
        });
});
   
    





    /* $('#container-4').click(function() {
      $("smc").show();
    });

 $('#picture-2').click(function() {
      $("cal").show();
    });

$(document).ready(function() {
    
    $("#s1").click(function() { 

        $('.outfit').hide();
        $('#o1').toggle();

        });

    $("#s2").click(function() { 
        $('.outfit').hide();
        $('#o2').toggle();
        });

    $("#s3").click(function() { 
        $('.outfit').hide();
        $('#o3').toggle();
        });

    $("#s4").click(function() { 
        $('.outfit').hide();
        $('#o4').toggle();
        });

    $("#s5").click(function() { 
        $('.outfit').hide();
        $('#o5').toggle();
        });
});