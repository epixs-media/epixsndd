<?php
namespace MaxButtons;

// controller for our views
abstract class MaxController
{

  protected $view; // view data
  protected $page;
  protected $messages = array(); // messages to display to user.
  protected $view_template;

  public function __construct()
  {
      $this->view = new \stdClass;
  }

  public function view()
  {
    $view = $this->view;


    if (! is_null($this->view_template))
    {
      $path = MB()->get_plugin_path() . 'includes/' . $this->view_template . '.php';
      if (file_exists($path))
        include_once($path);
      else {
        exit('Template Not Found');
      }
    }
  }

  abstract protected function handlePost();

  public function getButtonLink($button_id = 0, $args = array())
  {
     $link = admin_url() . 'admin.php?page=maxbuttons-controller&action=edit';
     if ($button_id > 0)
     {
       $link = add_query_arg('id', $button_id, $link);
     }
     $link = add_query_arg($args,$link);
     return $link;
  }

  public function getListLink($view = 'all', $args = array() )
  {
     $link = admin_url() . 'admin.php?page=maxbuttons-controller&view=' . $view;
     $link = add_query_arg($args,$link);
     return $link;

  }

  // sets name of the requested page. can be used to load a specific template.
  public function setPage($page)
  {
    $this->page = $page;
  }

}
