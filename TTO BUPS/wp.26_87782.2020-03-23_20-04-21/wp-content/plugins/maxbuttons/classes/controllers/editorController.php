<?php
namespace MaxButtons;

// main thing for the button editor
class editorController extends MaxController
{
    protected $view_template = 'maxbuttons-button';

  public function __construct()
  {
      parent::__construct();

      MB()->load_library('simple_template');
  }

  public function view()
  {
    if ($_POST) {
      $this->handlePost();
    }
    $this->loadView();

    parent::view();
  }

  protected function loadView()
  {
    $this->view->button = MB()->getClass('button'); // reset
    $this->view->button_id = 0; // always load.

    if (isset($_GET['id']) && $_GET['id'] != '') {
      //$button =
      $button_id = intval($_GET["id"]);
      $this->view->button_id = $button_id;

      if ($button_id == 0)

      {
        $error = __("Maxbuttons button id is zero. Your data is not saved correctly! Please check your database.","maxbuttons");
        MB()->add_notice('error', $error);
      }
        // returns bool
        $return = $this->view->button->set($button_id);
      if ($return === false)
      {
        $error = __("MaxButtons could not find this button in the database. It might not be possible to save this button! Please check your database or contact support! ", "maxbuttons");
        MB()->add_notice('error', $error);
      }
    }
  }

  protected function handlePost()
  {
    if (! check_admin_referer("button-edit","maxbuttons_button"))
  	{
  		exit("Request not valid");
  	}

    $button = MB()->getClass('button'); ;
    $button_id = intval($_POST["button_id"]);

  	if ($button_id > 0)
  		$button->set($button_id);
  	$return = $button->save($_POST);
  	if (is_int($return) && $button_id <= 0)
  		$button_id = $return;

   	if ($button_id === 0)
   	{
   		error_log(__("Maxbuttons Error: Button id should never be zero","maxbuttons"));
   	}

  	$button->set($button_id);
    $url = $this->getButtonLink($button_id);
  	 wp_redirect($url);
  	 exit();
  } // handlePost.

} // Class editorController
