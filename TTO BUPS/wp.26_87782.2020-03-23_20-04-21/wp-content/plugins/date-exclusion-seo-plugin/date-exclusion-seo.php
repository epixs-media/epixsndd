<?php
/*
Plugin Name: Date Exclusion SEO
Plugin URI: http://bluecowhosting.com/blog/wordpress-plugins/date-exclusion-seo-plugin
Description: Gives your blog a feeling of freshness by turning off the display of date information after a specified number of days or immediately after posting. You also have the option of removing dates from Category and Tag Pages as well as the Front Page of your blog. You also have the option of providing alternative text for each type. You now have the option of turning off specific posts using comma delimited list of post ids. Additionally it allows you to turn on and off the date functions depending on your theme used. 
Based on date-exclusion plugin from Stephen Ward.

Author: Greg Royal
Version: 1.5
Author URI: http://www.bluecowhosting.com
*/

/*  Copyright 2007 Stephen Ward, Greg Royal

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation; either version 2 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program; if not, write to the Free Software
    Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
*/

// DEFAULT SETTINGS
// Set to 'yes' to exclude all date information by default; set to 'no' to deactivate
add_option('des_exclude_date_option', 'no');

// Set to the default number of days after which date information should no longer be displayed; set as 0 to deactivate
$date_expires_op = '0';
add_option('des_exclude_expires','0');

// remove from tag pages
add_option('des_exclude_from_tag', 'no');

// remove from category pages
add_option('des_exclude_from_cat', 'no');

//remove from front page
add_option('des_exclude_from_front_page','no');

// all the alternative text 
add_option('des_post_alt_text',''); 
add_option('des_tag_alt_text','');
add_option('des_cat_alt_text','');
add_option('des_front_alt_text','');
add_option('des_expiry_alt_text'); 
add_option('des_post_id_alt_text','');

add_option('des_list_of_post_ids',''); 

add_option('des_use_the_date', 'yes'); 
add_option('des_use_the_time', 'yes'); 
add_option('des_use_get_the_time','yes'); 

// DO NOT EDIT BELOW THIS LINE

// add the date_exclusion_seo to the loop_start action
//  Runs before the first post of the WordPress loop is processed. 
add_action('loop_start', 'date_exclusion_seo');

// admin_menu
add_action('admin_menu', 'des_plugin_menu');

function des_plugin_menu() {
  add_options_page('Date Exclusion SEO Options', 'Date Exclusion Seo', 8, __FILE__, 'des_plugin_options');
}

function des_plugin_options() {
  echo '<div class="wrap">';
  echo '<h2>Date Exclusion SEO</h2>'; 
  echo '<form method="post" action="options.php">';
  wp_nonce_field('update-options');
  
  echo '<table class="form-table">';
  echo'<tr valign="top">';
  
  echo'<th scope="row">Remove Dates From Posts</th>'; 
  $temp_option = get_option('des_exclude_date_option');
  
  if ( $temp_option == "yes") {  
    echo'<td><input type="checkbox" name="des_exclude_date_option"  checked value="yes"/>';
  } else { 
    echo'<td><input type="checkbox" name="des_exclude_date_option" value="yes"/>';
  } 
    echo('&nbsp:&nbsp: Alt Text: <input type="text" name="des_post_alt_text" value="' .get_option('des_post_alt_text') . '"></td>');  
  echo('</tr>');

  echo'<th scope="row">Remove Dates from Tag Pages</th>'; 
  $temp_option = get_option('des_exclude_from_tag');
  
  if ( $temp_option == "yes") {  
    echo'<td><input type="checkbox" name="des_exclude_from_tag"  checked value="yes"/>';
  } else { 
    echo'<td><input type="checkbox" name="des_exclude_from_tag" value="yes"/>';
  } 
  echo('&nbsp:&nbsp: Alt Text: <input type="text" name="des_tag_alt_text" value="' . get_option('des_tag_alt_text').'"></td>');  
  echo('</tr>');
    
   echo'<th scope="row">Remove Dates from Category Pages</th>'; 
  $temp_option = get_option('des_exclude_from_cat');
  
  if ( $temp_option == "yes") {  
    echo'<td><input type="checkbox" name="des_exclude_from_cat"  checked value="yes"/>';
  } else { 
    echo'<td><input type="checkbox" name="des_exclude_from_cat" value="yes"/>';
  } 
  echo('&nbsp:&nbsp: Alt Text: <input type="text" name="des_cat_alt_text" value="'.get_option('des_cat_alt_text').'"></td>');  
  echo('</tr>');
  
  echo'<th scope="row">Remove Dates from Front Page</th>'; 
  $temp_option = get_option('des_exclude_from_front_page');
  
  if ( $temp_option == "yes") {  
    echo'<td><input type="checkbox" name="des_exclude_from_front_page"  checked value="yes"/>';
  } else { 
    echo'<td><input type="checkbox" name="des_exclude_from_front_page" value="yes"/>';
  } 
  echo('&nbsp:&nbsp: Alt Text: <input type="text" name="des_front_alt_text" value="'.get_option('des_front_alt_text').'"></td>');  
  echo('</tr>');
    
  echo'<tr valign="top"><th scope="row">Number of Days to Expiry:</th>';
  echo'<td><input size="4" type="text" name="des_exclude_expires" value="';
  echo get_option('des_exclude_expires'); 
  echo '" /> Alt Text: <input type="text" name="des_expiry_alt_text" value="';
  echo get_option('des_expiry_alt_text'); 
  echo'" /></td>';
  echo'</tr>'; 
  
  echo'<tr><th scope="row">Comma Delimited list of Post IDs</th><td><input type="text"  name="des_list_of_post_ids" value="';
   echo get_option('des_list_of_post_ids');
   echo'" size="50"> Alt Text  <input type="text" name="des_post_id_alt_text" value="';
   echo get_option('des_post_id_alt_text');
   echo '"></td></tr>';

///////////////////   
   echo'<th scope="row">Use the the_date() function</th>'; 
  $temp_option = get_option('des_use_the_date');
  
  if ( $temp_option == "yes") {  
    echo'<td><input type="checkbox" name="des_use_the_date"  checked value="yes"/>';
  } else { 
    echo'<td><input type="checkbox" name="des_use_the_date" value="yes"/>';
  } 
  echo('</td>');  
  echo('</tr>');
  
///////////////////   
   echo'<th scope="row">Use the the_time() function</th>'; 
  $temp_option = get_option('des_use_the_time');
  
  if ( $temp_option == "yes") {  
    echo'<td><input type="checkbox" name="des_use_the_time"  checked value="yes"/>';
  } else { 
    echo'<td><input type="checkbox" name="des_use_the_time" value="yes"/>';
  } 
  echo('</td>');  
  echo('</tr>');
  
///////////////////   
 echo'<th scope="row">Use the get_the_time() function</th>'; 
  $temp_option = get_option('des_use_get_the_time');
  
  if ( $temp_option == "yes") {  
    echo'<td><input type="checkbox" name="des_use_get_the_time"  checked value="yes"/>';
  } else { 
    echo'<td><input type="checkbox" name="des_use_get_the_time" value="yes"/>';
  } 
  echo('</td>');  
  echo('</tr>');
/////////////////
  
  echo'</table>';
  echo'<input type="hidden" name="action" value="update" />';
  echo'<input type="hidden" name="page_options"';
  echo ' value="des_exclude_date_option,des_exclude_expires, des_exclude_from_tag,des_exclude_from_cat,des_exclude_from_front_page,des_post_alt_text,des_tag_alt_text,des_cat_alt_text,des_front_alt_text,des_post_id_alt_text,des_list_of_post_ids, des_expiry_alt_text,des_use_the_date,des_use_the_time,des_use_get_the_time" />';
  echo'<p class="submit">';
  echo'<input type="submit" class="button-primary" value="';
  _e('Save Changes');
  echo '" />';
  echo '</p>';
  echo'</form>';
  echo '<table border=\'1\'><tr><td><ul>
  <lI><i>This plugin is designed to manipulate the rendering of the date in a post. It does not alter the actual date but allows you to remove it from posts, cat and tag pages and now individual post ids. 
  <li><b>Remove Dates From Posts</b> - this will remove ALL dates from posts (overrides Numdays)</li>
<li><b>Remove Dates from Tag Pages</b> - this will remove dates from tag pages.</li>
<li><b>Remove Dates from Category Pages</b> - this will remove dates from cat pages</li>
<li><b>Remove Dates from Front Page</b> - this will remove dates from Front page</li>
<li><b>Number of Days to Expiry</b> - This will remove the date/time from your post after X days. 0 = off </li>
<li><b>Comma Delimited List of Post IDs</b> - This will allow you to remove dates from specific posts. eg: 945,234,473,358 </li>
<li><b>Alternative Text </b> - If set will replace with alternative text instead of leaving blank. This only applies to get_date and get_the_time functions, get_time will always be blank. These fields accept basic html including  span and div. </li>
<li><b>Use get_date() function</b> - turns on get_date() intercept - You need use the correct functions for your template. Turn off functions not used.</li>
<li><b>Use get_time() function</b> - turns on get_time() intercept</li>
<li><b>Use get_the_time() function</b> - turns on get_the_time() intercept</li>
</ul>
  <p>This plugin is bought to you with absolutelly no bull by <a';
  echo' href=\'http://www.bluecowhosting\' target=\'_blank\'>BlueCow';
  echo ' Hosting</a><img \'src=\'http://www.bluecowhosting.com/images/bluecow_watermark.gif\' border=\'0\'/></p></td></tr></table>';
  echo '</div>';
}


function date_exclusion_seo(){
                	    
       des_log_write('=========================='  . "\n" ); 

	    global $deactivated_functions, $wp_query;
	    
	    // Add the names of any date-related functions you use in your templates
        // this now gets a little tricky because if there is alt text, we dont want it twice
        // the_date - only the date 
        // the_time - only the time 
        // get_the_time - very tricky because you can retrieve both the date and time
        
        $deactivated_functions = array(); 
        
        if ( get_option('des_use_the_date') == 'yes'  ) { 
                    des_log_write('adding the_date to function array' . "\n"); 
                    $deactivated_functions[] = 'the_date'; 
        } 
        if ( get_option('des_use_the_time') == 'yes'  ) { 
                    des_log_write('adding the_time to function array' . "\n"); 
                    $deactivated_functions[] = 'the_time'; 
        } 
        if ( get_option('des_use_get_the_time') == 'yes'  ) { 
                    des_log_write('adding get_the_time to function array' . "\n"); 
                    $deactivated_functions[] = 'get_the_time'; 
        } 

	// Only exclude dates from single posts
	if (is_single()){
	         
         $me_post_id = $wp_query->post->ID;
         
        des_log_write('Found Single Page'  . ' with post id ' . $me_post_id . "\n" ); 
				
		$array_of_post_ids = explode( ",", get_option('des_list_of_post_ids') );

       // pull from options table to completely remove date
       $date_expires = intval(get_option('des_exclude_expires' ));
       des_log_write('date_expires: '); 
       des_log_write($date_expires . "\n" );
        
        // pull from the options table number of days to expire
        $exclude_date =   get_option('des_exclude_date_option '); 
        des_log_write('Exclude From All Posts: '); 
        des_log_write($exclude_date . "\n"  );

		/*Override default settings with custom field data if it exists
		if ($exclude_date_meta = get_post_meta($wp_query->post->ID, 'exclude_date', true))
			$exclude_date = $exclude_date_meta;
		if ($date_expires_meta = get_post_meta($wp_query->post->ID, 'date_expires', true))
			$date_expires = $date_expires_meta;
         */

		// Exclude dates completely from posts
		if (strtolower($exclude_date) == 'yes'){
		    des_log_write('Now Excluding Date From All Posts' . "\n" ); 
		    
			            foreach ($deactivated_functions as      $deactivated_function) {
			                if (  $deactivated_function == "the_time" )  { 
			                          add_filter($deactivated_function, 'des_do_nothing'); 
			               } else { 
 			 	                  add_filter($deactivated_function, 'p_post_alt_text');
			 	            } 			
				         }
				
		}  else if ($date_expires > 0){
		
		    des_log_write('Expiry Date Is Set - testing post date'. "\n" ); 
			$now = mktime();
			$expires = get_the_time('U') + ($date_expires * 86400);
			
			if ($now >= $expires){


			            foreach ($deactivated_functions as      $deactivated_function) {
			                if (  $deactivated_function == "the_time" )  { 
			                          add_filter($deactivated_function, 'des_do_nothing'); 
			               } else { 
 			 	                  add_filter($deactivated_function, 'p_expiry_alt_text');
			 	            } 			
				  }				
			}
		
		}

       des_log_write(' Check to see if ' .$me_post_id . ' is in ' . get_option( 'des_list_of_post_ids') . "\n"); 
		if  ( in_array(   $me_post_id  ,  $array_of_post_ids )   ) { 
		
			            des_log_write( 'Post ID found removing ' . "\n" ); 
			            
			            foreach ($deactivated_functions as      $deactivated_function) {
			                if (  $deactivated_function == "the_time" )  { 
			                          add_filter($deactivated_function, 'des_do_nothing'); 
			               } else { 
 			 	                  add_filter($deactivated_function, 'p_post_id_alt_text');
			 	            } 
			 	      }
	     } 

	} else { 
       // look for the front page 
             if ( is_front_page() ) { 
      
            des_log_write('found front page'. "\n" ); 
            global $deactivated_functions, $wp_query;
            
          //  See if we have to exclude from front page
          $exclude_front_page =   get_option('des_exclude_from_front_page'); 
            
        // Exclude dates completely from posts
		if (strtolower($exclude_front_page) == 'yes'){
		   des_log_write('Now going to remove date from front page'. "\n" ); 
			foreach ($deactivated_functions as $deactivated_function) { 		
			                 des_log_write('Checking function ' . $deactivated_function . "\n"); 
			                if (  $deactivated_function == 'the_time')  { 
			                          des_log_write('...the time is found.....' . "\n"); 
			                          add_filter($deactivated_function, 'des_do_nothing'); 		
		                   } else { 
		                       des_log_write('..... rewriting function...' ."\n"); 
				               add_filter($deactivated_function, 'p_front_alt_text');
				          }   
			   }
		}  // if strtolower 
		
	  }  else { 
	  
	     if ( is_tag() ) { 
      
            des_log_write('found tag page'. "\n"); 
            global $deactivated_functions, $wp_query;
            
          // se if we have to exclude dates from tag pages
         $exclude_tag =   get_option('des_exclude_from_tag'); 
            
        // Exclude dates completely from posts
		if (strtolower($exclude_tag) == 'yes'){
		   des_log_write('Now going to remove date from tag page'."\n"); 
		   
			            foreach ($deactivated_functions as      $deactivated_function) {
			                if (  $deactivated_function == "the_time" )  { 
			                          add_filter($deactivated_function, 'des_do_nothing'); 
			               } else { 
 			 	                  add_filter($deactivated_function, 'p_tag_alt_text');
			 	            } 			
				         }		   
				
		}  // if strtolower 
		
	  }  else { 
	  
	     if ( is_category() ) { 
      
            des_log_write('found cat page'. "\n"); 
            global $deactivated_functions, $wp_query;
            
          // see if we need to exclude from category pages
         $exclude_cat =   get_option('des_exclude_from_cat'); 

            
        // Exclude dates completely from category pages
		if (strtolower($exclude_cat) == 'yes'){
		   des_log_write('Now going to remove date from cat page'."\n"); 

			            foreach ($deactivated_functions as      $deactivated_function) {
			                if (  $deactivated_function == "the_time" )  { 
			                          add_filter($deactivated_function, 'des_do_nothing'); 
			               } else { 
 			 	                  add_filter($deactivated_function, 'p_cat_alt_text');
			 	            } 			
				         }	

				
		}  // if strtolower 
		
	  }  // if is_category
	  
	  
	  } 
       
      }  
       
	}  // else 
	
}  // function

//
// function do nothing 
//
function des_do_nothing(){

}

function p_post_id_alt_text() {
    echo get_option('des_post_id_alt_text');  
} 

function p_post_alt_text() { 
    echo get_option('des_post_alt_text'); 
} 

function p_expiry_alt_text () { 
    echo get_option('des_expiry_alt_text'); 
} 
function p_front_alt_text () { 
     echo get_option('des_front_alt_text'); 
} 
function p_tag_alt_text () { 
     echo get_option('des_tag_alt_text'); 
} 
function p_cat_alt_text () { 
    echo get_option('des_cat_alt_text'); 
} 

//
//  function des_log_write
//
function des_log_write($the_string )
{
    $debug_me = 'no'; 
    
    if ( $debug_me == 'yes') { 

    $logfilename = "des_logfile.txt"; 
  if( $fh = fopen( $logfilename, 'a' ) )
     {
       fwrite( $fh, $the_string); 
       return( true );
      }
      else
      {
        $fh = fopen($logfilename,'w'); 
        fwrite($fh, $the_string);
        fclose($fh); 
        return( false );
       }
       
       } 
}
?>