//<?php

/* To prevent PHP errors (extending class does not exist) revealing path */
if ( !\defined( '\IPS\SUITE_UNIQUE_KEY' ) )
{
	exit;
}

class hook60 extends _HOOK_CLASS_
{

/* !Hook Data - DO NOT REMOVE */
public static function hookData() {
 return array_merge_recursive( array (
  'globalTemplate' => 
  array (
    0 => 
    array (
      'selector' => 'html > body',
      'type' => 'add_inside_start',
      'content' => '{template="bgslideshow" group="plugins" location="global" app="core"}',
    ),
  ),
), parent::hookData() );
}
/* End Hook Data */


}
