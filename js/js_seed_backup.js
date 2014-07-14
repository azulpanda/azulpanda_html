var active = false;
var planted = false;
var seed_name = "";
var seed_type = "";

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
						$(this).replaceWith('<p id="inst" style="display:none">Click anywhere to plant your seed of event.</p>').ready(function(){
							$('#inst').fadeIn();
							active = true;
						});
					});
				});
			});
		});
	});

	$('body').click(function(mouse) {
		if (active&&(!planted)){
			var img = '<img type="button" class="seed" src="img/seed.png" style="position:absolute;left:'+(mouse.pageX-14)+'px;top:'+(mouse.pageY-14)+'px;" data-html="true" alt="seed" data-toggle="popover" title="Set your Seed" data-content=\'<div class="input-group input-group-sm seed_name_area"><span class="input-group-addon">Event</span><input type="text" class="form-control" placeholder="Event name"></div><div class="btn-group btn-group-sm seed_type_area" data-toggle="buttons"> <label class="btn btn-default"><input type="radio" name="options" id="Rose">Rose</label><label class="btn btn-default"><input type="radio" name="options" id="Violet">Violet</label><label class="btn btn-default"><input type="radio" name="options" id="Sunflower">Sunflower</label></div><div><hr></div><div class="save_area"><div type="button" class="btn btn-xs btn-primary save">Save</div></div>\'/>';
			$(this).append(img);
			planted = true;
			$('#inst').fadeOut(function(){
				$(this).html('Set your seed\'s name and type.').ready(function(){
					$('#inst').fadeIn();
					$('.seed').popover('show').ready(function(){
						$('.save').click(function(){
							seed_name = $('[placeholder="Event name"]').val();
							seed_type = $('.active').text();
							$('.seed').popover('hide').ready(function(){
								$('#inst').fadeOut(function(){
									$(this).html('Seed is planted.<br>You can click the seed to view its information.').ready(function(){
										$('.seed').attr('title', seed_name);
										$('.seed').attr('data-original-title', seed_name);
										$('.seed').attr('data-content', "This seed is a " + seed_type + ".");
										$('.seed').popover('show').ready();
										$('#inst').fadeIn().ready(function(){
											$('#inst').click(function(){
												$('#inst').fadeOut(function(){
													$('#inst').html('Now this seed will grow as the event get closer.').ready(function(){
														$('#inst').fadeIn(function(){
															$('#inst').click(function(){
																$('#inst').fadeOut(function(){
																	$('#inst').html('More functions will be announced shortly.').ready(function(){
																		$('#inst').fadeIn();
																	});
																});
															});
														});
													});
												});
											});
										});
									});
								});
});
});
});
});
});
};
});
});