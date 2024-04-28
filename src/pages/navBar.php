<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>nav bar in php</title>

    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <style>
        .header {
            max-width:100%;
            /* background-color: #FB948F; */
            background-color: #FEBB75;
        }

        .navBar {
            overflow: hidden;
            position: relative;
        }

        .navBar a {
            text-decoration: none;
            display: block;
            padding:10px 12px;
            box-sizing:border-box;
            text-align:center;
            font-size:23px;
            /* color: #595959; */
            color:#000000;
            float: left;
        }

        .navBar a.active {
            /* background-color: #f95b53; */
            background-color: #fe9c34;
            color:#000000;
        }

        a.icon {
            display:none;
            
        }

        @media screen and (max-width: 600px) {
            .navBar a:not(:first-child) {display: none;}
            .navBar a.icon {
                float: right;
                display: block;
            }
        }

        /* The "responsive" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */
        @media screen and (max-width: 850px) {
            .navBar a:not(:first-child) {display: none;}
            .navBar.responsive {position: relative;}
            .navBar.responsive a.icon {
                position: absolute;
                right: 0;
                top: 0;
            }
            .navBar.responsive a {
                float: none;
                display: block;
                text-align: left;
            }

            .navBar a.icon {
                float: right;
                display: block;
            }  
        }
    </style>
</head>

<body>

<?php
    echo "<div class = header>"; 
        echo "<div class = navBar id='navBar'>";
            echo "<a href='home.html' class='active'>Home</a>";
            echo "<a href='recipeSearch.html'>Recipe Search</a>";
            echo "<a href='subscribe.html'>Subscribe</a>";
            echo "<a href='about.html'>About Us</a>";
            echo "<a href='contact.html'>Contact Us</a>";
            echo "<a href='nutritionSeach.html'>Nutrition Search</a>";

            echo "<a href='javascript:void(0);' class='icon' onclick='goHam()'>";
                echo "<i class='fa fa-bars'></i></a>";
               
        echo "</div>";
    echo "</div>";

?>
    

    <script>
        function goHam() {
            var x = document.getElementById("navBar");
            if (x.className === "navBar") {
                x.className += " responsive";
            } else {
                x.className = "navBar";
            }
        }
    </script>

</body>
</html>