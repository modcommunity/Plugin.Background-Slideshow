/**
 * Description - Background slideshow used by The Modding Community (ModdingCommunity.com!).
 * Author - Christian Deacon (@gamemann)
 * Note - A lot of this code is old and from another project I made, Browser.TF.
 * 
 * 
 * The Modding Community
 * Taking Modding To The Next Level!
 * ModdingCommunity.com 
**/

;(function($, _, undefined)
{
	"use strict";

	ips.controller.register('plugins.bgslideshow', 
    {
		initialize: function () 
        {
            /* Global variables. */
            this.g_bRotateInProgress = false;
            this.g_iLastRotateNumber = -1;
            this.g_bFirstRotateTime = true;

            /* Configurable variables. */
            this.g_iFadeOutTime = 1.2;
            this.g_iFadeInTime = 1.2;
            this.g_iTimer = 30.0;

            // Retrieve background image.
            this.bgimg = $('#bgimg');

            // Check.
            if (!this.bgimg)
            {
                return;
            }

            this.imgs = this.bgimg.attr("bg-imgs").replace(/\s+/g, "");

            this.g_sImages = this.imgs.split(",");

            self = this;

            // Rotate now.
            this.rotateBackground();

            // Setup timer.
            setInterval(this.rotateBackground, this.g_iTimer * 1000);
        },

        rotateBackground: function()
        {
            self.bgimg = $('#bgimg');

            // Check.
            if (!self.bgimg)
            {
                return;
            }

            /* A rotation is in progress, set this variable to true! */
            self.g_bRotateInProgress = true;

            /* First, fade out the background. */
            self.bgimg.fadeTo((self.g_bFirstRotateTime) ? 0 : self.g_iFadeOutTime * 1000, 0.0, function()
            {
                /* Get a random number between 0 and max range. */
                var i = Math.floor(Math.random() * self.g_sImages.length);
    
                /* Ensure the last number isn't the same as the new number. */
                var iAttempts = 0;
    
                while (self.g_iLastRotateNumber == i)
                {
                    i = Math.floor(Math.random() * self.g_sImages.length);
    
                    iAttempts++;
    
                    if (iAttempts > 5)
                    {
                        break;
                    }
                }
    
                /* Copy the global rotation number. */
                self.g_iLastRotateNumber = i;
    
                /* Set the background image. */
                self.bgimg.css('background', "url(" + self.g_sImages[i] + ")  no-repeat center center fixed");
                self.bgimg.css('background-size', "cover");
    
                /* Fade back in. */
                self.bgimg.fadeTo(self.g_iFadeInTime * 1000, 1.0, function()
                {
                    if (self.g_bFirstRotateTime)
                    {
                        self.g_bFirstRotateTime = false;
                    }
        
                    /* Rotation is no longer in progress. Set the variable back to false. */
                    self.g_bRotateInProgress = false;
                });
            });
        } 
    });
}(jQuery, _));