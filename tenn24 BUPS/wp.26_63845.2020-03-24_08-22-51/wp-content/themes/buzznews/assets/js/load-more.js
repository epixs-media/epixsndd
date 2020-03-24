jQuery(function ($) {
	$('.buzznews-infinite-scrolling-post').append('<span class="load-more"></span>');
	var button = $('.buzznews-infinite-scrolling-post .load-more');
	var page = 2;
	var buzz_ness_home_page_no = $('.buzznews-infinite-scrolling-post').attr('number_of_pagination');

	var loading = false;
	var scrollHandling = {
		allow: true,
		reallow: function () {
			scrollHandling.allow = true;

		},
		delay: 400 //(milliseconds) adjust to the highest acceptable value
	};

	$(window).scroll(function () {
		if (!loading && scrollHandling.allow) {
			scrollHandling.allow = false;
			setTimeout(scrollHandling.reallow, scrollHandling.delay);
			var offset = $(button).offset().top - $(window).scrollTop();
			if (2000 > offset) {
				loading = true;
				var data = {
					action: 'buzznews_ajax_load_more',
					nonce: buzznewsLoadMore.nonce,
					page: page,
					query: buzznewsLoadMore.query,
				};
				//debugger;
				//if ( page <= buzz_ness_home_page_no ) {
				$.post(buzznewsLoadMore.url, data, function (res) {
					if (res.success) {
						$('.buzznews-infinite-scrolling-post').append(res.data.data);
						$('.buzznews-infinite-scrolling-post').append(button);
						loading = false;
						page = page + 1;
					} else {
						// console.log(res);
					}
				}).fail(function (xhr, textStatus, e) {
					// console.log(xhr.responseText);
				});
				//}

			}
		}
	});
});

localStorage.setItem('buzz_ness_home_page', 2);