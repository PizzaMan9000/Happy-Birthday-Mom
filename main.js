var canvas = new fabric.Canvas('myCanvas');
var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg", function(Img){
        block_image_block = Img;

        block_image_block.scaleToWidth(700);
        block_image_block.scaleToHeight(510);
        block_image_block.set({
            top:0,
            left:0
        });
        canvas.add(block_image_block);
    });
	
}

function playSound(){
	x.play();
}
