var active = false;
var planted = false;
var seed_name = [];
var seed_type = [];
var stage = 0;
var num = -1;

$(document).ready(function(){
	$('.bigbutton').hover(function(){
		$('#plant').css('color', '#032B16');
	}, function(){
		$('#plant').css('color', '#7BD6A8');
	});

	$('.bigbutton').click(function(){
		$(this).fadeOut(function(){
			$('.text_area').fadeIn(function(){
				$('#inst').click(function(){
					$(this).fadeOut(function(){
						$(this).replaceWith('<p id="inst" style="display:none">Double click anywhere to plant your seed of event.</p>').ready(function(){
							$('#inst').fadeIn();
							active = true;
						});
					});
				});
			});
		});
	});

	$('body').dblclick(function(mouse){
		if (active&&(!planted)){
			num+=1;
			var img = '<img type="button" class="seed" id="seed'+num+'" src="/static/img/seed.png" style="position:absolute;left:'+(mouse.pageX-14)+'px;top:'+(mouse.pageY-14)+'px;" data-html="true" alt="seed" data-toggle="popover" title="Set your Seed" data-content=\'<div class="input-group input-group-sm seed_name_area"><span class="input-group-addon">Event</span><input type="text" class="form-control" placeholder="Event name"></div><div class="btn-group btn-group-sm seed_type_area" data-toggle="buttons"> <label class="btn btn-default"><input type="radio" name="options" id="Rose">Rose</label><label class="btn btn-default"><input type="radio" name="options" id="Violet">Violet</label><label class="btn btn-default"><input type="radio" name="options" id="Sunflower">Sunflower</label></div><div><hr></div><div class="save_area"><div type="button" class="btn btn-xs btn-primary save">Save</div></div>\'/>';
			$('body').append(img);

			if(num==0){
				$('#inst').fadeOut(function(){
					$('#inst').html('Set your seed\'s name and type.').ready(function(){
						$('#inst').fadeIn();
					});
				})
			}

			$('.seed').popover('show').ready(function(){
				$('.save').click(function(){
					seed_name[num] = $('[placeholder="Event name"]').val();
					seed_type[num] = $('.active').text();
					if(num==0){
						$('#inst').fadeOut(function(){
							$('#inst').html('Seed is planted.<br>You can click the seed to view its information.').ready(function(){
								$('#inst').fadeIn();
							});
						});
					}

					$('.seed').popover('hide').ready(function(){
						$('.seed').attr('data-original-title', seed_name)
						$('.seed').attr('data-content', "This seed is a " + seed_type + ".")
						$('.seed').delay(1000).popover('show');
					});
				});
			});
		};
	});
});

	// $('#inst').click(function(){
	// 	$(this).fadeOut(function(){
	// 		$(this).html().ready(function(){
	// 			$(this).fadeIn(function(){
	// 				stage+=1;

	// 			})
	// 		})
	// 	})
	// })