<?php if (!session_id()) session_start(); ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>VW Bus Camp.com <?php if ($c['title'] != NULL) { echo " - ".$c['title']; } else { ?><?php } ?></title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta http-equiv="Content-Language" content="en-us" />
<meta http-equiv="Expires" content="25" />
<meta name="description" content="VW Bus Camp"  />
<meta name="Author" content="VwDreamer" />
<link rel="shortcut icon" href="//vwbuscamp.com/favicon.ico" />
<meta name="description" content="The off-playa home of VW Bus Camp."/>
<meta name="keywords" content=""/>
<meta name="robots" content="all"/>
<meta name="copyright" content="Copyright"/>

<link rel="stylesheet" type="text/css" href="css/styles.css"/>
<?php if ($header_end) echo $header_end; ?>
</head>
<body>
<center>
<table cellpadding="0" cellspacing="0"><tr><td class="main">
    <div id="header">
        <img src='images/header.jpg' alt='VWBusCamp'/>
    </div>
    <table id="navcontainer">
        <tr>
            <td class="navbutton" style="border-left: 0px;"><a style="color: white;" href="./index.php">Home</a></td>
            <td class="navbutton"><a style="color: white;" href="./discussionlist.php">Discussion List</a></td>
            <td class="navbutton"><a style="color: white;" href="./faq.php">FAQ</a></td>
            <td class="navbutton"><a style="color: white;" href="http://playaevents.burningman.org/playa_event/search/2017/?search=vw+bus+camp" target="_blank">Calendar</a></td>
            <td class="navbutton"><a style="color: white;" href="./links.php">Links</a></td>
        </tr>
    </table>
    <div>
