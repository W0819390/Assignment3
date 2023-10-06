// Method for $.getJSON request
function getJSONData() {
    $.getJSON('team.json', function(data) {
        $.each(data, function(index, member) {
            // Insert member data into the div#team
            $('#team').append('<h2>' + member.name + '</h2>');
            $('#team').append('<h5>' + member.position + '</h5>');
            $('#team').append('<p>' + member.bio + '</p>');
        });
    });
}

// Method for $.ajax request
function ajaxRequest() {
    // Display "Loading..." message
    $('#team').html('Loading...');

    $.ajax({
        url: 'team.json',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            // Remove "Loading..." message
            $('#team').empty();

            $.each(data, function(index, member) {
                // Insert member data into the div#team
                $('#team').append('<h2>' + member.name + '</h2>');
                $('#team').append('<h5>' + member.position + '</h5>');
                $('#team').append('<p>' + member.bio + '</p>');
            });
        },
        error: function() {
            // Display an error message
            $('#team').html('Error: Content could not be retrieved.');
        }
    });
}

// Call one of the methods
$(document).ready(function() {
    getJSONData(); 

    // Bonus: Delay content display for 3 seconds
    setTimeout(function() {
        $('#team').empty();
        getJSONData(); 
    }, 3000);
});
