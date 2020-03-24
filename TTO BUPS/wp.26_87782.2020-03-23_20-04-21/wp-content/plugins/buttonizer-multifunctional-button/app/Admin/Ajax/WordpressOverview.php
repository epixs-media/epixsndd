<?php namespace Buttonizer\Admin\Ajax;

class WordpressOverview
{
    /**
     * WordpressOverview constructor.
     */
    public function __construct()
    {
        switch ($_GET['get'])
        {
            case 'categories':
                $this->getCategories();
                break;

            case 'pages':
                $this->getPages();
                break;

            case 'blogposts':
                $this->getBlogposts();
                break;

            case 'userroles':
                $this->getUserRoles();
                break;

            default:
                echo json_encode([
                    'status'    => 'error',
                    'message'   => 'No function handled'
                ]);

                break;
        }
    }

    /**
     * Get page list
     */
    private function getPages()
    {
        $pagesData = \get_pages();
        $frontPageID = get_option('page_on_front');

        $pagesOverview = [];

        foreach($pagesData as $page)
        {
            $pagesOverview[] = [
                'id'    => $page->ID,
                'name' => $page->post_title . ($page->ID == $frontPageID ? ' (frontpage, home)' : '')
            ];
        }

        echo json_encode([
            'status'    => 'ok',
            'results'     => $pagesOverview,
            'results_count'   => count($pagesOverview)
        ]);
    }

    /**
     * Get category list
     */
    private function getCategories()
    {
        $categorieData = \get_categories();

        $categorieOverview = [];

        foreach($categorieData as $data)
        {
            if(isset($_GET['search']) && $_GET['search'] != '')
            {
                $title = strtolower($data->name);
                $keyword = strtolower($_GET['search']);

                if(!is_numeric(strpos($title, $keyword))) {
                    continue;
                }
            }

            $categorieOverview[] = [
                'id'    => $data->cat_ID,
                'name' => $data->name
            ];
        }

        echo json_encode([
            'status'    => 'ok',
            'results'     => $categorieOverview,
            'results_count'   => count($categorieOverview)
        ]);
    }

    /**
     * Get blogposts
     */
    private function getBlogposts()
    {
        $blogPosts = \get_posts();

        $postOverview = [];

        foreach($blogPosts as $data)
        {
            if(isset($_GET['search']) && $_GET['search'] != '')
            {
                $title = strtolower($data->name);
                $keyword = strtolower($_GET['search']);

                if(!is_numeric(strpos($title, $keyword))) {
                    continue;
                }
            }

            $postOverview[] = [
                'id'    => $data->ID,
                'name' => $data->post_title
            ];
        }

        echo json_encode([
            'status'    => 'ok',
            'results'     => $postOverview,
            'results_count'   => count($postOverview)
        ]);
    }

    /**
     * Get all available user roles
     */
    private function getUserRoles()
    {
        $roleData = wp_roles()->get_names();

        $roleOverview = [];

        foreach($roleData as $data)
        {
            $roleOverview[] = [
                'id'    => strtolower($data),
                'name' => $data
            ];
        }

        echo json_encode([
            'status'    => 'ok',
            'results'     => $roleOverview,
            'results_count'   => count($roleOverview)
        ]);
    }
}