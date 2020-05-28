$('[data-modal=detailFlexSpend]').each(function(){
        $(this).on('click', function(e){
          e.stopPropagation();
          var schedule_id = $(this).data('id');
          var user_id = $(this).data('user');
          var type_id = $(this).data('type_id');
          var type_no = $(this).data('type_no');
          var line_id = '<?= $line_id; ?>';

          var dialog = bootbox.dialog({
            message: '<p class="text-center mb-0 p-30"> Fetching Data...</p>',
            closeButton: false,
            size: 'large',
            className: 'bootbox-info push-top force-xtra'
          });


          $.ajax({
            type: "POST",
            url: "/route/hr-services/flexspending/flexspending-detail",
            cache: false,
            data: {schedule_id: schedule_id,user_id:user_id,line_id:line_id,type_id:type_id,type_no:type_no},
            success: function(data){
             dialog.init(function(){
              dialog.find('.bootbox-body').html(data);
            });
           }
         })
        });
      });
