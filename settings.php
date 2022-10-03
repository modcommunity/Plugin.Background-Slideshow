//<?php

$themes_db = \IPS\Theme::themes();

$themes = Array();

foreach ($themes_db as $key => $val)
{
	$themes[$key] = $val->name;
}

$opts = Array
(
	'unlimited' => TRUE,
	'impliedUnlimited' => TRUE,
	'options' => $themes,
	'multiple' => TRUE
);

$form->add(new \IPS\Helpers\Form\Select('bgsw_themes', \IPS\Settings::i()->bgsw_themes, FALSE, $opts));

if ($values = $form->values())
{
	$form->saveAsSettings();

	return TRUE;
}

return $form;