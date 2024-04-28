<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Us</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
        .header {
            text-align: center;
            margin-bottom: 4%;
        }
        .pagecontainer {
            display: inline-flex;
            align-items: center;
            justify-content: center;
        }
        .text h3 {
            font-size: 23px;
        }
        .text {
            max-width: 50%;
            margin-right: 8%;
            font-size: 20px;
            text-align: justify;
        }
        .photos {
            max-width: 40%;
            display: flex;
            flex-direction: column;            
        }
        .aimg {
            margin-top: 8%;
            border-radius: 100px;
        }

        @media screen and (max-width: 1100px) {
            .aimg {
                margin-bottom: 40%;
                border-radius: 100px;
            }
        }

        @media screen and (max-width: 850px) {
            .pagecontainer {
                display: flex;
                flex-direction: column-reverse;
                align-items: center;
                justify-content: center;
            }

            .photos {
                display: flex;
                flex-direction: row;
                max-width: 80%;
            }

            .aimg {
                width: 200px;
                height: auto;
                max-width: 80%;
                margin-right: 1px;
                padding: 0;
                margin-top: 5%;
                margin-bottom: 5%;
            }

            .text {
                max-width: 80%;
                margin-left: 9%;
            }
        }
    </style>
</head>
<body>
    <?php include 'navBar.php';?>

    <div class="header">
        <h1>About Us</h1>
    </div>
    
    
    <div class="pagecontainer">
        <div class="text">
            <h3>The nutritionists that started it all...</h3>
            <p>In a world where fast food reigns supreme, three nutritionists set out to change the narrative by creating Recipes R Us—an online sanctuary for accessible, nutritious recipes. Dr. Emily Carter, Dr. Miguel Rodriguez, and Dr. Sarah Lee combined their expertise to make healthy cooking effortless for everyone.</p>
            <p>Dr. Emily Carter, fueled by her background in public health, envisioned Recipes R Us as a platform that democratized healthy eating. With her keen insight into nutrition education, Emily designed the platform to be user-friendly, ensuring that individuals of all skill levels could easily navigate through the treasure trove of recipes.</p>
            <p>Dr. Miguel Rodriguez, a culinary virtuoso, injected Recipes R Us with a burst of flavor and creativity. His mission was to dispel the notion that healthy food was bland and uninspiring. Miguel's recipes showcased a fusion of global flavors, proving that nutritious meals could be both delicious and exciting.</p>
            <p>Dr. Sarah Lee, a holistic nutritionist, brought a mindful approach to Recipes R Us. Her emphasis on nourishing the body, mind, and spirit guided users towards a balanced lifestyle. Through simple yet nourishing recipes, Sarah encouraged users to cultivate a deeper connection with their food and overall well-being.</p>
            <p>Together, Emily, Miguel, and Sarah transformed Recipes R Us into a haven for wellness seekers. With its intuitive interface and diverse recipe collection, the platform empowered individuals to embark on a journey of culinary exploration and healthy living. Through their collective efforts, they crafted a community where nutritious eating was not only accessible but also enjoyable for all.</p>

        </div>
        <div class="photos">
            <img class="aimg" src="../../img/pic1.jpg" alt="baking">
            <img class="aimg" src="../../img/pic2.jpg" alt="baking">
            <img class="aimg" src="../../img/pic3.jpg" alt="baking">
        </div>
    </div>

</body>
</html>
