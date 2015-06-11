$(document).ready(function () {
$.fn.hasAttr = function(name) {  
   return this.attr(name) !== undefined;
};



	$('body').label_radio_check();

    $(".moreCategoriesSelect").selectbox();
	
	$(".progressBar").fadeIn();
		 setTimeout(function () {
				   $(".progressBar").fadeOut();
	}, 2000);
		
	
	$('.tooltip').tipsy({gravity: 's'}); // South
	$('.tooltipN').tipsy({gravity: 'n'}); // North
    //$('.form-input').tipsy({gravity: 'e'}); // East
	//$('.form-input').tooltip({'trigger':'focus'});
	
//	$(document).on('hover', '[rel=tooltip]', function () { $(this).tooltip('remove'); });
	


	$(".moreCategoriesSelect.select-placeholder").each(function(){
		$tv = $(this).val();														
		if($tv){
			$(this).next(".sbHolder").find(".sbSelector").addClass("selected-option");
		}else{
			$(this).next(".sbHolder").find(".sbSelector").removeClass("selected-option");
			}														
																
	});
	
	$(".edit-user-role .info-icon").mouseenter( function() { $(this).closest("h5").next().show(); 	}).mouseout(function(){
		$(this).closest("h5").next().hide();
		});
	
	
	$(".form-group .add-user-help").mouseenter( function() { $(this).next(".custom-tooltip").show();  }).mouseout(function(){
  $(this).next(".custom-tooltip").hide();
  });
	 
    $(".moreCategoriesSelect.select-placeholder").on("change",function(){
		$tv = $(this).val();
		if($tv.length){
			$(this).next(".sbHolder").find(".sbSelector").addClass("selected-option");
		}else{
			$(this).next(".sbHolder").find(".sbSelector").removeClass("selected-option");
		}
		
	})
    
	 $(".card-list-box").click(function(e){
		  if($(e.target).hasClass("delete-icon"))
		 return;
		 /*--show message --*/
		 if(!$(this).hasClass("active")){
			 
			 if($(this).hasClass("sub-admin"))
			 	return;

			 $(".card-update-alert").fadeIn();
			 
			 setTimeout(function(){
				 	$(".card-update-alert").fadeOut();
				 },1000);
				  $(".card-list-box:not(this)").removeClass("active");
				$(this).addClass("active");	 
			 }
		 
		 
		 
		 /*--show flyout--*/
		 var offset = $(this).offset();
		 var top    = offset.top + $(this).outerHeight();
		 var left   = offset.left - $(this).closest(".card-list-area-outer").offset().left;
	


		 if($(this).hasClass("add-new-card")){
			 $(".edit-cc").slideUp();
			 $(".add-new-cc").css({
				'top':top,
				'left':0
				}).slideDown();
			 }else{
				  $(".edit-cc .top-edge").css("left",left);
				 $(".add-new-cc").slideUp();
				  $(".edit-cc").css({
					'top':top,
					'left':0
					}).slideDown();
				 
				 }
       
    });
	
	

	$(".cloud-user-select-inner input[type=radio]").change(function(){
			if($(this).val()=="creditCard"){
					$(".add-card-panel").show();
					$(".billing-address-box").hide();
				}else if($(this).val()=="purchaseOrder"){
					$(".add-card-panel").hide();
					$(".billing-address-box").show();
				}
		});
	
	$(".close-icon, .close-flyout, .cancel-card, .save-info").click(function(){
		$(this).closest(".add-card-outr-panel").slideUp();
	});
	
    $(".sbHolder").click(function(){
		setTimeout(function(){
		  $('.sbHolder').each(function () {              
			  $(this).find('ul').outerWidth($(this).outerWidth());
			$(this).outerWidth($(this).outerWidth());
			});     
		});
                                 
	 });
	 
	$(document).on("click",".no-cco-footer .sign-up-btn",function(){
	 if($(this).is(":disabled"))
	  return;
	
	 window.open('request-submission-merged.html','_blank');
	 //window.location="request-submission.html";
	});
	 
	 
	 $(".sbOptions").niceScroll({
        cursorcolor: "#878484",
        cursorwidth: "7px",
        zindex: "99999",
        autohidemode: false
    });
	 
	 
	/** Change Password Function **/ 
	$(".change-pass").click(function(){
		$(".cancel-pass, .change-passoword").show();
		$(".change-pass").hide();
	});
	
	$(".cancel-pass").click(function(){
		$(".change-passoword, .cancel-pass").hide();
		$(".change-pass").show();
	});

	/** Sign Up Validation **/

	var validateFields = function(){
		$conc = $(".validate-field");
		$conc.each(function(){
			$tv = $.trim($(this).val());
				if($tv.length){
					 $(this).removeClass("red-border");   
				}else{
					 $(this).addClass("red-border");   
				}
		});
	}
	
	
	$(".sign-up-btn").on("click",function(){
		validateFields();
		if($(".red-border").length){
			$(".address-mismatch-content").slideDown();
			$("html, body").animate({ scrollTop: 100 }, "slow");
		}else{
			$(".address-mismatch-content").slideUp();
		}
	
	});
		 
	/** User List & Edit a record **/ 
	$(".acc-search-icon").click(function(){
	  $(this).closest(".acc-user-search").toggleClass("open");
	  $(this).toggleClass("open");
	});
	
	$(".edit-role").click(function(){
		$(this).closest(".user-role-box").find(".user-panel-view").hide();
		$(this).closest(".user-role-box").find(".user-role-area").show();
	});


	$("#inputEmailUser").click(function(){
		$(this).addClass("error-input-email-user");
		$(this).next().show();
	 });
 
	$(".add-btn").click(function(){
		$(".add-user-panel").toggle();
	});
	
	$(".cancel-updates, .update-record").click(function(){
		$(".add-user-panel").hide();
		$(this).closest(".user-role-box").find(".user-role-area").hide();
		$(this).closest(".user-role-box").find(".user-panel-view").show();
		
	});
	
	
	$(".users-list-wrapper .check-option .checkInfoBox").change(function(){
		if($(".users-list-wrapper .check-option .checkInfoBox:checked").length){
			$(".remove-records").removeClass("disable-btn");
			}else{
			$(".remove-records").addClass("disable-btn");	
				}
		});
	
	
	$(".remove-btn").on("click",function(){
		if($(this).hasClass("disable-btn"))
		return;
		$.fancybox({
			'titlePosition': 'inside',
			'transitionIn': 'none',
			'transitionOut': 'none',
			'href': '#remove-popup'
		});
	})


$(document).mouseup(function (e) {
			var container = $(".add-user-panel, .add-btn");
	
			if (!container.is(e.target) // if the target of the click isn't the container...
					&& container.has(e.target).length === 0) // ... nor a descendant of the container
			{
					$(".add-user-panel").hide();
					
			}
    
});



/* Forgot ID */

    $("input:radio[name=optionsRadios]").change(function () {
        var value = $(this).val();
        console.log(value);

        if (value == "option1") {
            $(".forgot-id").show();
            $(".forgot-password").hide();
        } else if (value == "option2") {
            $(".forgot-id").hide();
            $(".forgot-password").show();
        }
    });
	 
   $(".checkInfoBox").on("click",function(){
	  if($(this).is(":checked")){
	  $(".sign-up-btn").addClass("blue-btn").removeClass("disable-btn").removeAttr("disabled");
	  }else{
	  $(".sign-up-btn").removeClass("blue-btn").addClass("disable-btn").attr("disabled","disabled");
    }
 });
 
  $(".update-record").on("click",function(){ 
											$(".add-user-panel").hide();
  $(".update-record").fancybox({
            'titlePosition': 'inside',
            'transitionIn': 'none',
            'transitionOut': 'none',
            'href': '#add-user-popup',
            afterShow: function () {
              $(".fancybox-wrap").addClass("fancy-remove-outerbg");
            }
        });
  });
  

  $(".remove-records").on("click",function(){

	if($(this).hasClass("disable-btn"))
		return;
	
	$.fancybox({
                'titlePosition': 'inside',
                'transitionIn': 'none',
                'transitionOut': 'none',
                'href': '#remove-popup'
            });
})
  
 $(".edit-text").on("click",function(){
	$(".edit-mode-active").show();
	$(".no-cco-detail-info-data").hide();	
	$(this).hide();
 });
 

 
 
$(".delete-action").on("click",function(){
						   
	 $.fancybox({
                'titlePosition': 'inside',
                'transitionIn': 'none',
                'transitionOut': 'none',
                'href': '#delete-popup'
            });					   
}) 
 
 
$(".save-edited-form").on("click",function(){
	$(".edit-mode-active").hide();
	$(".edit-details").show();	
	$(".no-cco-detail-info-data").show();
}); 
	 
	 /* apply-credit */

$(".apply-credit").on("click",function(){
    $(this).closest(".form-btn").find(".pay-info").hide();
    $(this).closest(".form-btn").find(".applyCredit-popup").fadeIn();
});

$(".pay-btn").on("click",function(){
    $(this).closest(".form-btn").find(".applyCredit-popup").hide();
    $(this).closest(".form-btn").find(".pay-info").fadeIn();
});


 $(".time-slot").click(function(){
    //$(".filter-panel").show();
    $(".filter-option-panel").show();
 });

$(document).mouseup(function (e)
{
    var container = $(".applyCredit-popup,.apply-credit,.pay-btn,.pay-info");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
       $(".applyCredit-popup,.pay-info").hide();
    }
});
	 
	 
});

$(function () {
        $("a, input, select, button").on("keydown", function (e ) {
            if (e.keyCode !== 9)
                return;

            var t = $(':tabbable');
            var i = t.index($(':focus'));

            if (e.shiftKey) {
                i--;
                if (!t.eq(i).length)
                    i = t.length - 1;
            }
            else {
                i++;
                if (!t.eq(i).length)
                    i = 0;
            }

            if (t.eq(i).is('a')) {
                e.preventDefault();
                e.stopPropagation();
                t.eq(i).focus();
            }
        });
		
		
		$(document).on("focus",".form-input",function(){
			if($(this).hasAttr('title')){
				$tt = $.trim($(this).attr("title"));
				if($tt.length){
					if(!$(this).closest("div").find(".toolCont").length)
					$(this).closest("div").append("<div class='toolCont'><div class='custom-tooltip initial-project-detail label-tooltip' style='display:block;'>"+$tt+"<span class='arrow label-tooltip-arrow'></span></div></div>")
				}				
			}
		});
		
		$(document).on("blur",".form-input",function(){
			if($(this).hasAttr('title')){
				if($tt.length){
					$(this).closest("div").find(".toolCont").remove();
				}				
			}
		});
    });
