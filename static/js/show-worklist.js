function search_by_worklist_name() {
    $('#search_by_worklist_name').removeClass('hidden');
    $('#search_by_username').addClass('hidden');
    $('#dropdownMenuButton').html('By Worklist Name');
}

function search_by_username() {
    $('#search_by_worklist_name').addClass('hidden');
    $('#search_by_username').removeClass('hidden');
    $('#dropdownMenuButton').html('By Username');
}

function refresh() {
    if($('#search_by_worklist_name').is(":visible") == true) {
        search_term = $("#search_by_worklist_name_form input[name=search_term]").val();
        search_type = $("#search_by_worklist_name_form input[name=search_type]").val();
    } else {
        search_term = $("#search_by_username_form input[name=search_term]").val();
        search_type = $("#search_by_username_form input[name=search_type]").val();
    }

    $('#worklist_table').html('');
    $('#worklist_table').addClass('loader');
    $('#worklist_table').html('').load("/worklist-tool/update-worklist-table?search_term=" +
        encodeURIComponent(search_term) + "&search_type=" + encodeURIComponent(search_type),
    function() {
      $('#worklist_table').removeClass('loader');
    }
    );
}

function worker() {
    refresh();
    setTimeout(worker, 50000);
}
