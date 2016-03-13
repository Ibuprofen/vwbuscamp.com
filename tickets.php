<?php

$header_end = <<<EOT
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Bootstrap -->
  <link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha/css/bootstrap.min.css">

  <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-beta1/jquery.min.js"></script>
  <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha/js/bootstrap.min.js"></script>

  <script type="text/javascript" src="js/tickets.js"></script>

  <style type="text/css">
    body { font: normal 11px/18px verdana, arial, tahoma, sans-serif; }
    .inline-block { display: inline-block; }
    .half { width: 50%; }
    .table td.vert-align { vertical-align: middle; }
    label { margin-bottom: 0; }
    .hide { display: none; }
    #page { 
	font-family: "Helvetica Neue",Helvetica,Arial,sans-serif; 
        font-size: 1rem;
    }
    #survey-form { margin: 25px 0 25px 0; }
  </style>
EOT;

include('includes/header.php');
?>


  <div id="page">

    <div id="survey-form">


      <div class="container-fluid">
        <div class="row">

          <div class="col-md-12">
            <form>
              <table class="table table-striped">
                <tbody>
                  <tr>
                    <td class="vert-align">
                      <label for="name">Name</label>
                    </td>
                    <td>
                        <input type="text" class="form-control name" placeholder="Larry Harvey">
                    </td>
                  </tr>
                  <tr>
                    <td class="vert-align">
                      <label for="email">Email address</label>
                    </td>
                    <td>
                      <input type="email" class="form-control email" placeholder="blah@example.com">
                    </td>
                  </tr>
                  <tr>
                    <td class="vert-align">Number of tickets
                      <select class="form-control inline-block ticket-bs" style="width: 10rem;">
                        <option value="buy">I need to buy</option>
                        <option value="sell">I have for sale</option>
                      </select>
                    </td>
                    <td>
                        <input type="number" class="form-control ticket-qty" placeholder="2">
                    </td>
                  </tr>
                  <tr>
                    <td class="vert-align">
                      Number of vehicle passes
                      <select class="form-control inline-block vp-bs" style="width: 10rem;">
                        <option value="buy">I need to buy</option>
                        <option value="sell">I have for sale</option>
                      </select>
                    </td>
                    <td>
                        <input type="number" class="form-control vp-qty" placeholder="1">
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2" style="text-align: center;">
                      <button type="submit" class="btn btn-primary submit-button">Submit</button>
                    </td>
                  </tr>

                </tbody>
              </table>
            </form>
          </div>

        </div>

      </div>

    </div>

    <!-- Success Modal -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">Great Success</h4>
          </div>
          <div class="modal-body">Your infos have been submitted! If you'd like to view the spreadsheet it is located <a href="https://docs.google.com/spreadsheets/d/1UeFk4sXTy3k265kPQVtsAY4J3mwfNMyJlc2cxlFHFOI">here</a>.</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default hide" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal">Ok</button>
          </div>
        </div>
      </div>
    </div>

  </div>

<?
include('includes/footer.php');
?>

