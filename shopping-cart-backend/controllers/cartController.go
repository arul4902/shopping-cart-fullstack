package controllers

import (
	"github.com/gin-gonic/gin"
	"net/http"
	"shopping-cart/database"
	"shopping-cart/models"
	"github.com/google/uuid"
)

type AddToCartRequest struct {
	ItemID uuid.UUID `json:"item_id"`
}

func AddToCart(c *gin.Context) {
	username, _ := c.Get("username")

	var user models.User
	if err := database.DB.Where("username = ?", username).First(&user).Error; err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "User not found"})
		return
	}

	var req AddToCartRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid item_id"})
		return
	}

	cart := models.Cart{
		ID:     uuid.New(),
		UserID: user.ID,
		ItemID: req.ItemID,
	}

	database.DB.Create(&cart)
	c.JSON(http.StatusOK, gin.H{"message": "Item added to cart", "cart": cart})
}

func ViewCart(c *gin.Context) {
	username, _ := c.Get("username")

	var user models.User
	if err := database.DB.Where("username = ?", username).First(&user).Error; err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "User not found"})
		return
	}

	var cartItems []models.Cart
	database.DB.Preload("Item").Where("user_id = ?", user.ID).Find(&cartItems)


	var response []gin.H
	for _, cart := range cartItems {
		response = append(response, gin.H{
			"item_name":  cart.Item.Name,
			"item_price": cart.Item.Price,
		})
	}

	c.JSON(http.StatusOK, response)
}
