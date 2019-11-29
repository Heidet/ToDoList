  window.onbeforeunload = function (e) {
    return confirm("Etes vous sur de vouloir quitter ?");
}
  $('#Supprimer').click(function () {
	  if ( confirm( "Voulez vous vraiment tout supprimer ? " ) )
   $('li').remove();
   $('button').remove();

  });
  
  $(function() {

  var $list, $newItemForm;
  $list = $('ul');
  $newItemForm = $('#newItemForm');

  $newItemForm.on('submit', function(e) {
    e.preventDefault();
    var text = $('input:text').val();
    $list.append('<li>' + text + '<button>supprimer</button>' +'</li>');
    $('input:text').val('');
    $('li').show();
    sessionStorage.setItem("li", $newItemForm);
    localStorage.setItem("li", $newItemForm);
  });
 
  $list.on('click', 'button', function() {
    var $this = $(this);
    if ( confirm( "Voulez vous vraiment supprimer cette tâche ? " ) ) {
    $this.parent().remove();
    //$('li').remove();
  }
  });

});