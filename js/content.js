var previewHolder, positionleft, positionright, width, position = 0, minPreviewImage = 0, maxPreviewImage;
    var previewArrowLeft, previewArrowRight;
    
    window.addEventListener("load", function() {
        previewHolder = document.getElementById("preview-holder-two");
        previewArrowLeft = document.getElementById("preview-arrow-left");
        previewArrowRight = document.getElementById("preview-arrow-right");

        previewArrowRight.style.color = "#808080bf";
        width = previewHolder.clientWidth + 4;
        maxPreviewImage = previewHolder.childElementCount - 1;
    });

    function moveLeft()
    {
        if(position == maxPreviewImage)
        {
            return;
        }

        position++;

       positionleft= Number((previewHolder.style.left).replace("px", ""));
       positionleft -= width;
       previewHolder.style.left = positionleft + "px";

       if(position == maxPreviewImage)
       {
        previewArrowLeft.style.color = "#808080bf";
       }
       else if(position != minPreviewImage)
       {
        previewArrowRight.style.color = "#08003a";
       }
       
    }

    function moveRight()
    {
        if(position == minPreviewImage)
        {
            return;
        }
        position--;

       positionleft= Number((previewHolder.style.left).replace("px", ""));
       positionleft += width;
       previewHolder.style.left = positionleft + "px";

       if(position == minPreviewImage)
       {
        previewArrowRight.style.color = "#808080bf";
       }
       else if(position != maxPreviewImage)
       {
        previewArrowLeft.style.color = "#08003a";
       }
       
    }